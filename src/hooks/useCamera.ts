import { useState, useEffect, useRef, useCallback } from 'react';

export const useCamera = (captureIntervalMs: number = 10000) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [snapshots, setSnapshots] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    try {
      let mediaStream: MediaStream;
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 1280, height: 720 }, 
          audio: true 
        });
      } catch (audioErr) {
        console.warn('Microphone access failed, falling back to video only:', audioErr);
        mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 1280, height: 720 }
        });
      }
      setStream(mediaStream);
    } catch (err) {
      setError('Camera access denied or not available');
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  }, [stream]);

  const takeSnapshot = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.5);
        setSnapshots((prev) => [...prev, dataUrl]);
        return dataUrl;
      }
    }
    return null;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (stream) {
      interval = setInterval(() => {
        takeSnapshot();
      }, captureIntervalMs);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [stream, captureIntervalMs, takeSnapshot]);

  const resetCamera = useCallback(() => {
    setSnapshots([]);
    setError(null);
  }, []);

  return {
    stream,
    error,
    snapshots,
    videoRef,
    canvasRef,
    startCamera,
    stopCamera,
    takeSnapshot,
    resetCamera,
  };
};
