import { useState, useEffect, useCallback } from 'react';

interface ProctoringState {
  violations: number;
  tabSwitches: number;
  fullscreenExits: number;
  isFullScreen: boolean;
  isTabActive: boolean;
}

export const useProctoring = (onAutoSubmit?: () => void, maxViolations: number = 1) => {
  const [state, setState] = useState<ProctoringState>({
    violations: 0,
    tabSwitches: 0,
    fullscreenExits: 0,
    isFullScreen: false,
    isTabActive: true,
  });

  const [logs, setLogs] = useState<{ type: string; timestamp: number; details?: string }[]>([]);

  const addLog = useCallback((type: string, details?: string) => {
    setLogs((prev) => [...prev, { type, timestamp: Date.now(), details }]);
  }, []);

  const incrementViolations = useCallback(() => {
    setState((prev) => {
      const newViolations = prev.violations + 1;
      if (onAutoSubmit && newViolations >= maxViolations) {
        onAutoSubmit();
      }
      return { ...prev, violations: newViolations };
    });
  }, [maxViolations, onAutoSubmit]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setState((prev) => ({ ...prev, tabSwitches: prev.tabSwitches + 1, isTabActive: false }));
        incrementViolations();
        addLog('TAB_SWITCH', 'User switched tab or minimized window');
      } else {
        setState((prev) => ({ ...prev, isTabActive: true }));
      }
    };

    const handleFullScreenChange = () => {
      const isFull = !!document.fullscreenElement;
      setState((prev) => {
        if (prev.isFullScreen && !isFull) {
          addLog('FULLSCREEN_EXIT', 'User exited fullscreen mode');
          incrementViolations();
          return { ...prev, isFullScreen: isFull, fullscreenExits: prev.fullscreenExits + 1 };
        }
        return { ...prev, isFullScreen: isFull };
      });
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      addLog('RIGHT_CLICK_ATTEMPT', 'User tried to right-click');
    };

    const handleCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      addLog('COPY_PASTE_ATTEMPT', `User tried to ${e.type}`);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block common shortcuts
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 't' || e.key === 'n' || e.key === 'w')) ||
        (e.altKey && e.key === 'Tab') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        addLog('SHORTCUT_ATTEMPT', `User tried to use shortcut: ${e.key}`);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [incrementViolations, addLog]);

  const enterFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.error('Error attempting to enable full-screen mode:', err);
    }
  };

  const resetProctoring = useCallback(() => {
    setState({
      violations: 0,
      tabSwitches: 0,
      fullscreenExits: 0,
      isFullScreen: false,
      isTabActive: true,
    });
    setLogs([]);
  }, []);

  return { ...state, logs, enterFullScreen, resetProctoring };
};
