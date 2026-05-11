/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Camera, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  User, 
  LogOut,
  Maximize,
  AlertCircle,
  Lock,
  Mail,
  ArrowRight,
  Briefcase,
  Code,
  Brain,
  Database,
  LineChart,
  Lock as SecurityIcon,
  FileText,
  ChevronRight,
  Info,
  Globe,
  Zap,
  MessageSquare,
  Star,
  HelpCircle,
  Quote,
  Plus
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useProctoring } from './hooks/useProctoring';
import { useCamera } from './hooks/useCamera';
import { DOMAINS, ENTRANCE_EXAM, DOMAIN_EXAMS } from './constants';
import { ExamSubmission, Domain, Exam } from './types';
import { submitExamResults } from './services/examService';

import ReactMarkdown from 'react-markdown';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './constants/policies';

type AppState = 'landing' | 'domains' | 'exam' | 'submitted' | 'disqualified';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [currentExam, setCurrentExam] = useState<Exam>(ENTRANCE_EXAM);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [dialogStep, setDialogStep] = useState<'info' | 'instructions'>('info');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [viewedQuestions, setViewedQuestions] = useState<Record<number, boolean>>({ 0: true });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(ENTRANCE_EXAM.durationMinutes * 60);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [showInactivityPrompt, setShowInactivityPrompt] = useState(false);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDomains, setSubmittedDomains] = useState<string[]>([]);
  const [submissionSummary, setSubmissionSummary] = useState<{
    score: number;
    total: number;
    domainTitle: string;
    email: string;
    time: number;
  } | null>(null);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const submitted = localStorage.getItem('submitted_domains');
    if (submitted) {
      setSubmittedDomains(JSON.parse(submitted));
    }
  }, []);

  const { 
    violations, 
    tabSwitches, 
    fullscreenExits, 
    isFullScreen, 
    isTabActive, 
    logs, 
    enterFullScreen,
    resetProctoring
  } = useProctoring(undefined, 1, appState === 'exam');

  const { 
    stream, 
    videoRef, 
    canvasRef, 
    startCamera, 
    stopCamera, 
    snapshots,
    resetCamera
  } = useCamera();

  const resetSession = useCallback(() => {
    setAnswers({});
    setSelectedDomain(null);
    setDialogStep('info');
    setStartTime(0);
    setCurrentQuestionIndex(0);
    resetProctoring();
    resetCamera();
    setAppState('landing');
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, [resetProctoring, resetCamera]);

  const logout = useCallback(() => {
    setStudentEmail('');
    setStudentName('');
    resetSession();
  }, [resetSession]);

  const submitExam = useCallback(async (isDisqualified = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const submission: ExamSubmission = {
        examId: currentExam.id,
        domainId: selectedDomain?.id || 'all',
        studentName,
        studentEmail,
        answers,
        logs,
        snapshots,
        violations: isDisqualified ? 1 : violations,
        startTime,
        endTime: Date.now(),
        status: isDisqualified ? 'disqualified' : 'completed'
      };
      
      await submitExamResults(submission, currentExam);
      stopCamera();
      
      const score = Object.keys(answers).reduce((acc, qId) => {
        const question = currentExam.questions.find(q => q.id === qId);
        return acc + (question?.correctAnswer === answers[qId] ? 1 : 0);
      }, 0);

      const summary = {
        score,
        total: currentExam.questions.length,
        domainTitle: selectedDomain?.title || 'General Interest',
        email: studentEmail,
        time: Math.floor((Date.now() - startTime) / 60000)
      };

      const newSubmittedDomains = [...submittedDomains, selectedDomain?.id || 'all'];
      localStorage.setItem('submitted_domains', JSON.stringify(newSubmittedDomains));
      setSubmittedDomains(newSubmittedDomains);
      setSubmissionSummary(summary);
      
      if (isDisqualified) {
        setAppState('disqualified');
      } else {
        setAppState('submitted');
      }
    } catch (error) {
      console.error('Failed to submit exam:', error);
      setAppState(isDisqualified ? 'disqualified' : 'submitted');
    } finally {
      setIsSubmitting(false);
    }
  }, [studentEmail, studentName, answers, isSubmitting, selectedDomain, currentExam, violations, logs, snapshots, startTime, submittedDomains, stopCamera]);

  useEffect(() => {
    if (violations >= 1 && appState === 'exam') {
      console.log('Auto-submitting due to violations:', violations);
      submitExam(true);
    }
  }, [violations, appState, submitExam]);

  useEffect(() => {
    if (appState === 'exam' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            submitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [appState, timeLeft, submitExam]);

  useEffect(() => {
    if (!isTabActive && appState === 'exam') {
      setShowWarning(true);
      setWarningMessage('Tab switch detected! This violation has been logged.');
    }
  }, [isTabActive, appState]);

  useEffect(() => {
    if (!isFullScreen && appState === 'exam') {
      setShowWarning(true);
      setWarningMessage('You have exited fullscreen mode. Please return to fullscreen to continue.');
    }
  }, [isFullScreen, appState]);

  const startExam = async () => {
    if (!studentEmail || !studentName) return;
    setIsDialogOpen(false);
    
    const exam = selectedDomain ? DOMAIN_EXAMS[selectedDomain.id] : ENTRANCE_EXAM;
    setCurrentExam(exam);
    setTimeLeft(exam.durationMinutes * 60);
    
    await startCamera();
    await enterFullScreen();
    resetProctoring();
    setAnswers({});
    setMarkedForReview({});
    setViewedQuestions({ 0: true });
    setCurrentQuestionIndex(0);
    setStartTime(Date.now());
    setLastActivity(Date.now());
    setShowInactivityPrompt(false);
    setAppState('exam');
  };

  useEffect(() => {
    if (appState === 'exam') {
      setViewedQuestions(prev => ({ ...prev, [currentQuestionIndex]: true }));
    }
  }, [currentQuestionIndex, appState]);

  const toggleMarkForReview = (questionId: string) => {
    setMarkedForReview(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const getTimerStatus = () => {
    const total = currentExam.durationMinutes * 60;
    const ratio = timeLeft / total;
    if (ratio <= 0.1) return 'critical';
    if (ratio <= 0.25) return 'warning';
    return 'normal';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Activity Tracking
  useEffect(() => {
    if (appState !== 'exam') return;

    const handleActivity = () => {
      setLastActivity(Date.now());
      if (showInactivityPrompt) {
        setShowInactivityPrompt(false);
      }
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [appState, showInactivityPrompt]);

  // Inactivity Check Timer
  useEffect(() => {
    if (appState !== 'exam') return;

    const interval = setInterval(() => {
      const inactiveMs = Date.now() - lastActivity;
      const inactiveSecs = Math.floor(inactiveMs / 1000);

      if (inactiveSecs >= 300) { // 5 minutes
        console.log('Auto-submitting due to inactivity');
        submitExam();
      } else if (inactiveSecs >= 180) { // 3 minutes
        if (!showInactivityPrompt) {
          setShowInactivityPrompt(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [appState, lastActivity, showInactivityPrompt, submitExam]);

  const getDomainIcon = (id: string) => {
    switch (id) {
      case 'web-dev': return <Code className="w-6 h-6" />;
      case 'ai-ml': return <Brain className="w-6 h-6" />;
      case 'data-analyst': return <LineChart className="w-6 h-6" />;
      case 'data-science': return <Database className="w-6 h-6" />;
      case 'cyber-security': return <SecurityIcon className="w-6 h-6" />;
      case 'patent-research': return <FileText className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  const openDomainDetails = (domain: Domain) => {
    if (submittedDomains.includes(domain.id)) return;
    setSelectedDomain(domain);
    setDialogStep('info');
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/5 blur-[100px] animate-float" />
      </div>

      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col"
          >
            <nav className="p-6 sticky top-0 z-50 glass">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                  onClick={() => setAppState('landing')}
                >
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black tracking-tighter">ExamPortal</span>
                </motion.div>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setAppState('domains')}
                    className="text-sm font-bold hover:text-primary transition-colors hidden md:block"
                  >
                    All Internships
                  </button>
                  <Button 
                    variant="default" 
                    className="rounded-full px-6 font-bold"
                    onClick={() => {
                      setSelectedDomain(null);
                      setIsDialogOpen(true);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </nav>

            <main className="flex-1 relative">
              {/* Background Blobs for Vibrancy */}
              <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px] animate-blob mix-blend-multiply opacity-30 pointer-events-none" />
              <div className="absolute top-[20%] right-[10%] w-[35rem] h-[35rem] bg-blue-400/10 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply opacity-30 pointer-events-none" />
              <div className="absolute bottom-[30%] left-[20%] w-[45rem] h-[45rem] bg-indigo-400/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply opacity-30 pointer-events-none" />

              {/* Hero Section */}
              <section className="relative pt-20 pb-32 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10 relative z-10"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-primary font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      Admission Open: Summer 2026 Batch
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-balance">
                      Your Career <br />
                      <span className="text-gradient italic">Starts Here.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                      India's most trusted proctored examination portal. Bridge the gap between skill and professional placements with our industry-verified assessments.
                    </p>
                    <div className="flex flex-wrap gap-6 pt-4">
                      <Button 
                        size="lg" 
                        className="h-20 px-12 text-2xl font-black gap-4 shadow-[0_20px_50px_rgba(79,70,229,0.3)] rounded-3xl hover:scale-105 active:scale-95 transition-all group" 
                        onClick={() => {
                          setSelectedDomain(null);
                          setIsDialogOpen(true);
                        }}
                      >
                        Launch Exam <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="h-20 px-12 text-xl font-black rounded-3xl border-2 border-border hover:bg-white hover:border-primary/20 transition-all" 
                        onClick={() => setAppState('domains')}
                      >
                        Explore Domains
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="relative"
                  >
                    <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl animate-float"></div>
                    <Card className="relative glass border-none shadow-2xl overflow-hidden rounded-[3rem]">
                      <div className="p-1.5 bg-gradient-to-br from-primary via-blue-500 to-indigo-600">
                        <div className="bg-white rounded-[2.8rem] p-10 space-y-10">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-primary/10 text-primary border-none px-4 py-1 font-black">ENTRANCE EXAM</Badge>
                            <div className="flex gap-1">
                              <div className="w-3 h-3 rounded-full bg-red-400" />
                              <div className="w-3 h-3 rounded-full bg-amber-400" />
                              <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100 italic">
                              <Shield className="w-6 h-6 text-primary shrink-0" />
                              <p className="text-sm font-medium text-neutral-600">
                                "The proctoring was seamless. It felt like a professional certification environment."
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-6 rounded-[2rem] bg-indigo-50 border border-indigo-100/50">
                                <Clock className="w-6 h-6 text-indigo-600 mb-2" />
                                <p className="text-2xl font-black text-indigo-900 leading-none">{ENTRANCE_EXAM.durationMinutes}m</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mt-1">Duration</p>
                              </div>
                              <div className="p-6 rounded-[2rem] bg-emerald-50 border border-emerald-100/50">
                                <Zap className="w-6 h-6 text-emerald-600 mb-2" />
                                <p className="text-2xl font-black text-emerald-900 leading-none">{ENTRANCE_EXAM.questions.length}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mt-1">Assessment Items</p>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-emerald-600 font-bold text-xs bg-emerald-50 p-2 rounded-lg">
                              <span>Questions depend on Domain</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                              <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Curriculum Coverage</span>
                              <span className="text-xs font-bold text-primary">12 Subjects</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {['OS', 'DBMS', 'DSA', 'AI/ML', 'Cloud', 'Java'].map(t => (
                                <Badge key={t} variant="secondary" className="rounded-lg bg-neutral-100 text-neutral-600 border-none font-bold uppercase text-[10px]">{t}</Badge>
                              ))}
                              <Badge key="more" variant="secondary" className="rounded-lg bg-primary/5 text-primary border-none font-bold text-[10px]">+6 more</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    {/* Floating mini-cards */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -left-12 bottom-20 glass p-4 rounded-2xl shadow-xl hidden xl:block"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs font-black">Integrity Verified</p>
                          <p className="text-[10px] text-muted-foreground leading-none">AI Monitoring Active</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </section>

              {/* Brands/Partners Scroll */}
              <section className="py-10 border-y bg-white/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                  <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-8">Empowering students from top institutions</p>
                  <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
                    {['IIT Portfolio', 'NIT Network', 'BITS Fellows', 'VIT Innovators', 'SRM Tech', 'DU Scholars'].map(brand => (
                      <span key={brand} className="text-xl font-black tracking-tighter">{brand}</span>
                    ))}
                  </div>
                </div>
              </section>

              {/* How it Works Section */}
              <section className="py-32 px-4 relative">
                <div className="max-w-7xl mx-auto space-y-20">
                  <div className="text-center space-y-4">
                    <h2 className="text-5xl font-black tracking-tighter">Your Journey to Success</h2>
                    <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto">A transparent, merit-driven process from registration to offer letter.</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 hidden md:block" />
                    {[
                      { icon: <User className="w-10 h-10" />, title: 'Register', desc: 'Create your profile and choose your career domain.' },
                      { icon: <SecurityIcon className="w-10 h-10" />, title: 'Proctored Assessment', desc: 'Complete our AI-monitored specialized entrance exam.' },
                      { icon: <Briefcase className="w-10 h-10" />, title: 'Get Hired', desc: 'Secure direct internship placements with partner firms.' }
                    ].map((step, i) => (
                      <motion.div 
                        key={step.title}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="relative z-10 space-y-6 text-center group"
                      >
                        <div className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-primary/5 border border-neutral-100 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform">
                          <div className="text-primary">{step.icon}</div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                          <p className="text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm absolute -top-4 left-1/2 -translate-x-1/2 shadow-lg">
                          0{i+1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Stats Bar */}
              <section className="py-20 bg-primary overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                  {[
                    { label: 'Active Domains', value: '08', icon: <Globe className="w-5 h-5 mb-2 opacity-50" /> },
                    { label: 'Monthly Apps', value: '10k+', icon: <User className="w-5 h-5 mb-2 opacity-50" /> },
                    { label: 'Company Partners', value: '45+', icon: <Shield className="w-5 h-5 mb-2 opacity-50" /> },
                    { label: 'Placement Rate', value: '92%', icon: <Zap className="w-5 h-5 mb-2 opacity-50" /> }
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="inline-flex flex-col items-center">
                        {stat.icon}
                        <p className="text-5xl font-black text-white leading-none">{stat.value}</p>
                        <p className="text-xs font-bold text-primary-foreground/60 uppercase tracking-[0.2em] mt-3">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Features/Benefits Section */}
              <section className="py-32 px-4 bg-white/40">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      <h2 className="text-5xl font-black tracking-tighter">Why Top Students Choose ExamPortal?</h2>
                      <p className="text-xl text-muted-foreground font-medium">We don't just host exams; we build careers through integrity and access.</p>
                    </div>

                    <div className="space-y-8">
                      {[
                        { title: 'Advanced AI Proctoring', desc: 'Secure browser-locking and live monitoring ensures absolute fairness.', icon: <Camera className="w-6 h-6" /> },
                        { title: 'Industry-Standard Curriculum', icon: <Code className="w-6 h-6" />, desc: 'Assessment questions curated by senior engineers from FAANG companies.' },
                        { icon: <Zap className="w-6 h-6" />, title: 'Direct Interviews', desc: 'High scorers get direct interview skips for exclusive internship roles.' }
                      ].map((feat, i) => (
                        <motion.div 
                          key={feat.title}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex gap-6 items-start group"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            {feat.icon}
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xl font-black tracking-tight">{feat.title}</h4>
                            <p className="text-muted-foreground font-medium leading-relaxed">{feat.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-3xl animate-pulse"></div>
                    <Card className="relative border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white/80 backdrop-blur-xl">
                      <div className="p-10 space-y-8">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                          <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                            <Shield className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-emerald-900">Security Certificate</p>
                            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Enterprise Verified</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h3 className="text-2xl font-black">Examination Integrity Report</h3>
                          <div className="space-y-4">
                            {[
                              { label: 'Eye Tracking Accuracy', val: 98 },
                              { label: 'Environment Analysis', val: 95 },
                              { label: 'Tab Switch Protection', val: 100 }
                            ].map(metric => (
                              <div key={metric.label} className="space-y-2">
                                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-neutral-400">
                                  <span>{metric.label}</span>
                                  <span className="text-primary">{metric.val}%</span>
                                </div>
                                <Progress value={metric.val} className="h-2" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200" />
                            ))}
                          </div>
                          <p className="text-[10px] font-black text-neutral-400 uppercase">Trusted by 10,000+ Students</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Success Stories Section */}
              <section className="py-32 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40" />
                <div className="max-w-7xl mx-auto space-y-20 relative">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4 max-w-2xl mx-auto md:mx-0">
                      <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 font-black uppercase tracking-[0.2em] rounded-full">Testimonials</Badge>
                      <h2 className="text-5xl font-black tracking-tighter">Student Success Stories</h2>
                      <p className="text-xl text-muted-foreground font-medium">Hear from students who launched their careers through ExamPortal.</p>
                    </div>
                    <Button variant="outline" className="h-14 px-8 rounded-2xl font-black gap-3 border-2 hover:bg-neutral-50 mx-auto md:mx-0">
                      View All Stories <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Aditya Sharma",
                        role: "Web Dev Intern @ Google",
                        quote: "The proctored exam was seamless. Passing it gave me the confidence and the direct interview path I needed.",
                        domain: "Web Development"
                      },
                      {
                        name: "Priya V.",
                        role: "AI Research Fellow @ Microsoft",
                        quote: "A truly professional platform. The specialized AI exam covered topics that actually matter in the industry.",
                        domain: "AI & ML"
                      },
                      {
                        name: "Rahul K.",
                        role: "Cyber Analyst @ Cisco",
                        quote: "I appreciated the transparency of the process. The immediate feedback after the proctored session is unmatched.",
                        domain: "Cyber Security"
                      }
                    ].map((story, i) => (
                      <motion.div
                        key={story.name}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white group overflow-hidden">
                          <div className="p-8 space-y-6 relative h-full flex flex-col">
                            <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-8 rotate-180" />
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                            </div>
                            <p className="text-lg font-bold text-neutral-700 italic leading-relaxed flex-1">
                              "{story.quote}"
                            </p>
                            <div className="pt-6 border-t border-neutral-100 flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center font-black text-primary">
                                {story.name[0]}
                              </div>
                              <div>
                                <h4 className="font-black text-neutral-900">{story.name}</h4>
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary">{story.role}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-32 px-4 bg-slate-900 text-white rounded-[4rem] mx-4 lg:mx-12 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Badge className="bg-primary/20 text-blue-400 border-none px-4 py-1.5 font-black uppercase tracking-[0.2em] rounded-full">Support</Badge>
                      <h2 className="text-6xl font-black tracking-tighter leading-none">Curious about <br /><span className="text-primary italic">ExamPortal?</span></h2>
                      <p className="text-xl text-neutral-400 font-medium max-w-md">Everything you need to know about our proctoring system and placement process.</p>
                    </div>

                    <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
                      <h4 className="text-xl font-black">Still have questions?</h4>
                      <p className="text-neutral-400 font-medium">Can't find the answer you're looking for? Reach out to our 24/7 student support team.</p>
                      <Button className="w-full h-14 rounded-2xl bg-white text-slate-900 font-black hover:bg-neutral-200">
                        Contact Support Team
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { q: "Is the camera mandatory?", a: "Yes, our AI proctoring uses camera access to verify identity and maintain exam integrity." },
                      { q: "What happens if my internet fails?", a: "The exam state is saved locally. You can resume within 10 minutes from where you left off." },
                      { q: "How long until I get my results?", a: "Score reports are generated instantly. Placement contact follows within 3-5 business days." },
                      { q: "Can I take multiple domain exams?", a: "You can apply for up to two domains per application cycle to ensure focused effort." }
                    ].map((faq, i) => (
                      <motion.div 
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-8 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="text-xl font-bold flex-1">{faq.q}</h4>
                          <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <Plus className="w-5 h-5" />
                          </div>
                        </div>
                        <p className="mt-4 text-neutral-400 font-medium text-sm leading-relaxed hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Call to Action Section */}
              <section className="py-48 px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-12">
                  <div className="relative inline-block">
                    <div className="absolute -inset-4 bg-primary blur-3xl opacity-20 animate-pulse"></div>
                    <h2 className="text-7xl font-black tracking-tighter relative">Ready to <span className="text-primary italic">Level Up?</span></h2>
                  </div>
                  <p className="text-2xl text-muted-foreground font-medium">Join 50,000+ students already building their future with us.</p>
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Button 
                      size="lg" 
                      className="h-20 px-12 rounded-3xl text-2xl font-black shadow-2xl shadow-primary/20 gap-4 group"
                      onClick={() => setAppState('domains')}
                    >
                      Start Assessment <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </Button>
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-neutral-200" />
                        ))}
                      </div>
                      <p className="text-sm font-black text-neutral-400 uppercase tracking-widest text-left leading-none">
                        5k+ Students<br /><span className="text-primary">Online Now</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

            </main>

            <footer className="bg-neutral-950 text-white py-20 px-4">
              <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-black tracking-tighter">ExamPortal</span>
                  </div>
                  <p className="text-neutral-500 font-medium leading-relaxed max-w-sm">
                    A secure, proctored environment for merit-based internship placements. Empowering the next generation of industry leaders.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Legal</h4>
                  <div className="flex flex-col gap-4 text-neutral-500 font-bold text-sm">
                    <button onClick={() => setPolicyType('privacy')} className="hover:text-primary transition-colors text-left">Privacy Policy</button>
                    <button onClick={() => setPolicyType('terms')} className="hover:text-primary transition-colors text-left">Terms of Service</button>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400">Connect</h4>
                  <div className="flex flex-col gap-4 text-neutral-500 font-bold text-sm">
                    <a href="mailto:support@examportal.com" className="hover:text-primary transition-colors">support@examportal.com</a>
                    <p className="text-xs font-medium">Available 24/7 for technical support</p>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-600 text-xs font-medium">© 2026 ExamPortal. Built for excellence.</p>
                <div className="flex gap-6">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"><Globe className="w-4 h-4 text-neutral-500" /></div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}

        {appState === 'domains' && (
          <motion.div 
            key="domains"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-screen flex flex-col"
          >
            <nav className="p-6 sticky top-0 z-50 glass">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Button variant="ghost" onClick={() => setAppState('landing')} className="gap-2 font-bold rounded-full group">
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Home
                </Button>
                <div className="flex items-center justify-center p-2 px-6 rounded-full bg-primary/5 border border-primary/10">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">Specialized Domains</p>
                </div>
                <Button 
                  variant="default" 
                  className="rounded-full px-6 font-bold"
                  onClick={() => {
                    setSelectedDomain(null);
                    setIsDialogOpen(true);
                  }}
                >
                  General Track
                </Button>
              </div>
            </nav>

            <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto space-y-16">
              <div className="text-center space-y-6">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="inline-block p-4 rounded-3xl bg-primary/10 text-primary mb-2"
                >
                  <Briefcase className="w-8 h-8" />
                </motion.div>
                <h2 className="text-6xl font-black tracking-tighter">Choose Your Path.</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                  We offer specialized deep-dives into various industry verticals. Select a domain to view the specific entrance curriculum.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {DOMAINS.map((domain, i) => {
                  const isCompleted = submittedDomains.includes(domain.id);
                  return (
                    <motion.div
                      key={domain.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Card className={`group relative h-full flex flex-col border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden ${isCompleted ? 'opacity-80 grayscale-[0.3]' : ''}`}>
                        {/* Domain Card Header Image/Gradient */}
                        <div className="h-24 bg-gradient-to-br from-primary/20 via-blue-500/10 to-indigo-500/20 group-hover:h-28 transition-all duration-500" />
                        
                        <div className="px-8 pb-8 flex-1 flex flex-col -mt-12 relative z-10">
                          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${isCompleted ? 'bg-green-500 text-white' : 'bg-white text-primary'}`}>
                            {isCompleted ? <CheckCircle2 className="w-10 h-10" /> : getDomainIcon(domain.id)}
                          </div>
                          
                          <div className="space-y-4 flex-1">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-3xl font-black tracking-tight">{domain.title}</CardTitle>
                              {isCompleted && (
                                <Badge className="bg-emerald-500 text-white border-none py-1">APPLIED</Badge>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary" className="bg-neutral-100 text-neutral-500 border-none px-3 font-bold uppercase text-[10px]">{domain.duration}</Badge>
                              <Badge variant="outline" className="border-neutral-200 text-neutral-400 px-3 font-bold uppercase text-[10px]">{domain.level}</Badge>
                            </div>
                            
                            <p className="text-muted-foreground font-medium leading-relaxed">
                              {domain.description}
                            </p>

                            <div className="pt-4 space-y-3">
                              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Essential Focus</p>
                              <div className="flex flex-wrap gap-2">
                                {domain.keySkills.slice(0, 3).map(skill => (
                                  <span key={skill} className="px-3 py-1.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-bold text-neutral-600 italic">#{skill}</span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="pt-8">
                            <Button 
                              className="w-full h-14 rounded-2xl gap-2 font-black text-lg transition-all active:scale-95" 
                              onClick={() => openDomainDetails(domain)}
                              disabled={isCompleted}
                              variant={isCompleted ? "secondary" : "default"}
                            >
                              {isCompleted ? 'Submission Received' : `Apply for Position`} 
                              {!isCompleted && <ArrowRight className="w-5 h-5" />}
                            </Button>
                          </div>
                        </div>
                        
                        {/* Decorative background number */}
                        <span className="absolute bottom-[-1rem] right-[-1rem] text-9xl font-black text-neutral-900/[0.03] pointer-events-none select-none italic">
                          0{i+1}
                        </span>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </main>
          </motion.div>
        )}
        {appState === 'exam' && (
          <motion.div 
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen bg-slate-50"
          >
            {/* Minimal Proctored Header */}
            <header className="sticky top-0 z-50 glass-dark py-3 px-6 shadow-2xl relative overflow-hidden">
              {/* Time Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <motion.div 
                  className={`h-full ${getTimerStatus() === 'critical' ? 'bg-destructive' : getTimerStatus() === 'warning' ? 'bg-amber-500' : 'bg-primary'}`}
                  initial={{ width: "100%" }}
                  animate={{ width: `${(timeLeft / (currentExam.durationMinutes * 60)) * 100}%` }}
                  transition={{ duration: 1, ease: "linear" }}
                />
              </div>

              <div className="max-w-7xl mx-auto flex items-center justify-between mt-1">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-pulse">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-black text-white tracking-tighter hidden md:inline uppercase text-sm">Proctored Session</span>
                  </div>
                  <div className="flex gap-2 h-8">
                    <div className={`glass px-4 flex items-center gap-2 rounded-xl transition-all duration-500 ${
                      getTimerStatus() === 'critical' ? 'bg-destructive/20 border-destructive text-destructive animate-pulse' : 
                      getTimerStatus() === 'warning' ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 
                      'text-white'
                    }`}>
                      <Clock className={`w-4 h-4 ${getTimerStatus() === 'normal' ? 'text-primary' : 'text-current'}`} />
                      <span className="font-mono font-bold whitespace-nowrap">{formatTime(timeLeft)}</span>
                    </div>
                    <div className="bg-destructive/10 border border-destructive/20 px-4 flex items-center gap-2 rounded-xl text-destructive font-black text-xs uppercase">
                      <AlertCircle className="w-4 h-4" />
                      Violations: {violations}/1
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {getTimerStatus() === 'critical' && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[10px] font-black text-destructive uppercase tracking-widest hidden sm:block"
                    >
                      Time is running out!
                    </motion.p>
                  )}
                  <Button 
                    variant={getTimerStatus() === 'critical' ? 'default' : 'destructive'} 
                    size="sm" 
                    className={`font-black px-8 rounded-full border-2 border-transparent hover:border-white/20 h-10 shadow-lg transition-all ${
                      getTimerStatus() === 'critical' ? 'bg-destructive hover:bg-destructive/90 shadow-destructive/40 scale-110' : 'shadow-destructive/20'
                    }`} 
                    onClick={() => submitExam()} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Finalizing...' : 'Final Submission'}
                  </Button>
                </div>
              </div>
            </header>

            <main className="flex-1 max-w-[1400px] mx-auto w-full p-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:items-start pb-48">
              {/* Left Panel: Progress & Context */}
              <aside className="w-full lg:w-80 shrink-0 space-y-8 lg:sticky lg:top-32 h-fit order-2 lg:order-1">
                <div className="space-y-4 hidden lg:block">
                  <Badge className="bg-primary/10 text-primary border-none px-6 py-1.5 font-black uppercase tracking-[0.3em] rounded-full">Section 01: Core Assessment</Badge>
                  <h1 className="text-4xl font-black tracking-tighter text-neutral-900 leading-tight">{currentExam.title}</h1>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-neutral-400 font-bold text-xs uppercase tracking-tighter">
                      <FileText className="w-4 h-4" /> {currentExam.questions.length} Items
                    </div>
                  </div>
                </div>

                <div className="glass-white p-8 rounded-[2.5rem] border border-neutral-100/50 shadow-2xl space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Total Completion</h3>
                    <div className="flex items-end justify-between">
                      <span className="text-4xl font-black text-primary">{Math.round((Object.keys(answers).length / currentExam.questions.length) * 100)}<span className="text-lg text-neutral-400">%</span></span>
                      <span className="text-xs font-bold text-neutral-500 mb-1">{Object.keys(answers).length}/{currentExam.questions.length} Solved</span>
                    </div>
                    <Progress value={(Object.keys(answers).length / currentExam.questions.length) * 100} className="h-3 rounded-full bg-neutral-100" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 pb-2 border-b border-neutral-100">Quick Navigation</h3>
                    <div className="grid grid-cols-5 gap-2.5">
                      {currentExam.questions.map((_, idx) => {
                        const qId = currentExam.questions[idx].id;
                        const isAnswered = !!answers[qId];
                        const isMarked = markedForReview[qId];
                        const isViewed = viewedQuestions[idx];
                        const isActive = currentQuestionIndex === idx;

                        let bgColor = 'bg-white border-neutral-100 text-neutral-400';
                        if (isActive) {
                          bgColor = 'bg-primary text-white shadow-lg shadow-primary/20 scale-110 z-10';
                        } else if (isMarked) {
                          bgColor = 'bg-purple-500 text-white border-purple-500';
                        } else if (isAnswered) {
                          bgColor = 'bg-emerald-500 text-white border-emerald-500';
                        } else if (isViewed) {
                          bgColor = 'bg-red-500 text-white border-red-500';
                        } else {
                          bgColor = 'bg-amber-400 text-white border-amber-400'; // Not read
                        }

                        return (
                          <button 
                            key={idx}
                            onClick={() => setCurrentQuestionIndex(idx)}
                            className={`w-full aspect-square rounded-xl flex items-center justify-center font-black text-xs transition-all relative group ${bgColor} ${!isActive && 'hover:scale-105 active:scale-95'}`}
                          >
                            {idx + 1}
                            {isActive && (
                              <motion.div 
                                layoutId="active-indicator"
                                className="absolute -bottom-1 w-1/2 h-1 bg-white rounded-full"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    <h3 className="text-[9px] font-black uppercase tracking-widest text-neutral-400">Legend</h3>
                    <div className="grid grid-cols-2 gap-2">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-emerald-500" /> <span className="text-[10px] font-bold text-neutral-500 uppercase">Attempted</span></div>
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-red-500" /> <span className="text-[10px] font-bold text-neutral-500 uppercase">Unattempted</span></div>
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-purple-500" /> <span className="text-[10px] font-bold text-neutral-500 uppercase">Review</span></div>
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-amber-400" /> <span className="text-[10px] font-bold text-neutral-500 uppercase">Not Read</span></div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400">Total Duration</p>
                        <p className="text-sm font-black text-indigo-900">{currentExam.durationMinutes} Minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-[2rem] bg-amber-50 border border-amber-100/50 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-amber-600 shadow-sm shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <p className="text-[10px] font-bold text-amber-800 leading-tight">Need help? Request a supervisor review if you face technical issues.</p>
                </div>
              </aside>

              {/* Right Panel: Content */}
              <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-8">
                <div className="space-y-4 lg:hidden">
                  <Badge className="bg-primary/10 text-primary border-none px-6 py-1.5 font-black uppercase tracking-[0.3em] rounded-full">Assessment In Progress</Badge>
                  <h1 className="text-4xl font-black tracking-tighter text-neutral-900 leading-tight">{currentExam.title}</h1>
                </div>

                <AnimatePresence mode="wait">
                  {(() => {
                    const q = currentExam.questions[currentQuestionIndex];
                    if (!q) return null;
                    return (
                      <motion.div
                        key={currentQuestionIndex}
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.02, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Card className="border-none shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden bg-white">
                          <div className="p-8 lg:p-14 space-y-10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 text-white text-2xl font-black shadow-2xl">
                                  {currentQuestionIndex + 1}
                                </span>
                                <div className="space-y-1">
                                  <Badge variant="outline" className="px-4 py-1.5 font-black text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] rounded-full">
                                    {q.category}
                                  </Badge>
                                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-1">Selected Domain Context</p>
                                </div>
                              </div>

                              <Button
                                variant="outline"
                                className={`h-12 px-6 rounded-2xl font-black gap-2 transition-all ${
                                  markedForReview[q.id] 
                                    ? 'bg-purple-50 border-purple-200 text-purple-600' 
                                    : 'border-neutral-100 text-neutral-400 hover:text-purple-600 hover:border-purple-200'
                                }`}
                                onClick={() => toggleMarkForReview(q.id)}
                              >
                                <Star className={`w-4 h-4 ${markedForReview[q.id] ? 'fill-purple-600 shadow-xl' : ''}`} />
                                {markedForReview[q.id] ? 'Marked for Review' : 'Mark for Review'}
                              </Button>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] text-neutral-900">{q.text}</h3>

                            <RadioGroup 
                              value={answers[q.id] || ''}
                              onValueChange={(val) => setAnswers(prev => ({ ...prev, [q.id]: val }))}
                              className="grid gap-5"
                            >
                              {q.options?.map((option, idx) => (
                                <Label 
                                  key={option} 
                                  htmlFor={`${q.id}-${option}`}
                                  className="group flex items-center space-x-6 p-7 rounded-[2rem] border-2 border-neutral-100 bg-neutral-50/30 hover:border-primary/40 hover:bg-white hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden active:scale-[0.99]"
                                >
                                  <div className="relative flex items-center justify-center">
                                    <RadioGroupItem value={option} id={`${q.id}-${option}`} className="w-8 h-8 border-2 transition-all group-hover:scale-110" />
                                    <span className="absolute text-[10px] font-black text-neutral-300 pointer-events-none group-hover:text-primary/30">{String.fromCharCode(65 + idx)}</span>
                                  </div>
                                  <span className="flex-1 font-bold text-neutral-700 text-xl group-hover:text-primary transition-colors">
                                    {option}
                                  </span>
                                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                                </Label>
                              ))}
                            </RadioGroup>
                          </div>
                        </Card>

                        {/* Navigation Controls */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-6">
                          <Button 
                            variant="outline" 
                            size="lg"
                            className="w-full sm:w-auto h-20 px-12 rounded-3xl font-black text-xl gap-4 border-2 border-neutral-100 hover:bg-white hover:border-primary/20 hover:text-primary transition-all active:scale-95 shadow-xl shadow-neutral-100/50"
                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestionIndex === 0}
                          >
                            <ArrowRight className="w-6 h-6 rotate-180" /> Back
                          </Button>
                          
                          {currentQuestionIndex === currentExam.questions.length - 1 ? (
                            <Button 
                              variant="default"
                              size="lg"
                              className="w-full sm:w-auto h-20 px-12 rounded-3xl font-black text-xl gap-4 shadow-2xl shadow-primary/30 bg-primary hover:bg-primary/90 transition-all active:scale-95"
                              onClick={() => submitExam()}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Finalizing Submission...' : 'Finish Assessment'} <ArrowRight className="w-6 h-6" />
                            </Button>
                          ) : (
                            <Button 
                              variant="default"
                              size="lg"
                              className="w-full sm:w-auto h-20 px-12 rounded-3xl font-black text-xl gap-4 shadow-2xl shadow-primary/30 bg-primary hover:bg-primary/90 transition-all active:scale-95 group"
                              onClick={() => setCurrentQuestionIndex(prev => Math.min(currentExam.questions.length - 1, prev + 1))}
                            >
                              Next Item <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </main>



            {/* Camera Overlay */}
            <div className="fixed bottom-8 right-8 z-50">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-1.5 rounded-3xl shadow-2xl overflow-hidden w-56 aspect-video border border-neutral-200">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover rounded-2xl scale-x-[-1]"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Monitoring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Dialog */}
            <Dialog open={showWarning} onOpenChange={setShowWarning}>
              <DialogContent className="sm:max-w-md border-none shadow-2xl">
                <DialogHeader>
                  <div className="mx-auto bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <DialogTitle className="text-center text-2xl font-black">Proctoring Violation</DialogTitle>
                  <DialogDescription className="text-center text-lg text-neutral-600 pt-2">
                    {warningMessage}
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-4 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-neutral-500 uppercase tracking-widest">Violation Status</span>
                    <span className="font-black text-xl text-destructive">{violations} / 1</span>
                  </div>
                  <Progress value={(violations / 1) * 100} className="h-3 bg-neutral-200" />
                  <p className="text-[10px] text-center text-neutral-400 font-bold uppercase tracking-tighter">
                    Warning: Any violation will result in immediate disqualification and logout.
                  </p>
                </div>
                <DialogFooter>
                  <Button className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" onClick={() => {
                    setShowWarning(false);
                    enterFullScreen();
                  }}>
                    I Understand, Resume Exam
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Inactivity Dialog */}
            <Dialog open={showInactivityPrompt} onOpenChange={setShowInactivityPrompt}>
              <DialogContent className="sm:max-w-md border-none shadow-2xl">
                <DialogHeader>
                  <div className="mx-auto bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-amber-600" />
                  </div>
                  <DialogTitle className="text-center text-2xl font-black">Are you still there?</DialogTitle>
                  <DialogDescription className="text-center text-lg text-neutral-600 pt-2">
                    We've noticed you've been inactive for a while. To ensure exam integrity, your session will auto-submit in 2 minutes of further inactivity.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-6">
                  <Button className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" onClick={() => {
                    setLastActivity(Date.now());
                    setShowInactivityPrompt(false);
                  }}>
                    Yes, I'm Here
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>
        )}

        {appState === 'disqualified' && (
          <motion.div 
            key="disqualified"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center min-h-screen p-4 bg-neutral-100"
          >
            <Card className="w-full max-w-xl shadow-2xl border-none overflow-hidden rounded-[2rem]">
              <div className="h-3 bg-primary w-full" />
              <CardHeader className="text-center pt-16 pb-10">
                <div className="mx-auto bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <CardTitle className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Test Submitted</CardTitle>
                <CardDescription className="text-lg text-neutral-500 pt-2">
                  Successfully submitted the test. <strong>Thanks for appearing!</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-12 text-center">
                <p className="text-neutral-600 leading-relaxed">
                  Your assessment has been recorded and sent for evaluation. Our team will review your performance and contact you via email if you are shortlisted.
                </p>
                <div className="p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 space-y-4">
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <Shield className="w-6 h-6" />
                    <p className="text-lg font-black">Submission Confirmed</p>
                  </div>
                  <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                    Your session data and responses have been securely uploaded to our servers.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="bg-neutral-50 p-10 flex flex-col gap-6">
                <p className="text-xs text-center text-neutral-400 font-medium leading-relaxed px-4">
                  You can now close this window. Further instructions will be sent to <strong>{studentEmail}</strong>.
                </p>
                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold text-lg border-neutral-200 hover:bg-white transition-all" onClick={resetSession}>
                  Return to Portal Home
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

        {appState === 'submitted' && (
          <motion.div 
            key="submitted"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center min-h-screen p-4 bg-neutral-100"
          >
            <Card className="w-full max-w-xl shadow-2xl border-none overflow-hidden rounded-[2rem]">
              <div className="h-3 bg-primary w-full" />
              <CardHeader className="text-center pt-16 pb-10">
                <div className="mx-auto bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <CardTitle className="text-4xl font-black text-neutral-900">Thanks for submission</CardTitle>
                <CardDescription className="text-lg text-neutral-500 pt-2">
                  Your assessment for <strong>{submissionSummary?.domainTitle || selectedDomain?.title || 'All Domains'}</strong> has been successfully recorded.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-12">
                <div className="flex justify-center">
                  <div className="p-6 px-10 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-1 text-center min-w-[200px]">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Integrity Status</span>
                    <span className={`text-2xl font-black ${violations > 0 ? 'text-destructive' : 'text-green-600'}`}>
                      {violations === 0 ? 'Verified' : `${violations} Flag${violations > 1 ? 's' : ''}`}
                    </span>
                  </div>
                </div>

                {violations > 0 && (
                  <div className="p-4 bg-destructive/5 border border-destructive/10 rounded-2xl">
                    <div className="flex items-center gap-2 text-destructive mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">Proctoring Alerts</span>
                    </div>
                    <ul className="text-xs text-neutral-600 space-y-1 list-disc list-inside">
                      {logs.filter(l => l.type === 'TAB_SWITCH' || l.type === 'FULLSCREEN_EXIT').map((log, i) => (
                        <li key={i}>{log.details}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 text-center">Submission Metadata</h3>
                  <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-500">Email</span>
                      <span className="text-sm font-black text-neutral-800">{submissionSummary?.email || studentEmail}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-500">Domain</span>
                      <span className="text-sm font-black text-primary">{submissionSummary?.domainTitle || selectedDomain?.title || 'General Interest'}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-500">Reference ID</span>
                      <span className="font-mono text-[10px] bg-white px-2 py-1 rounded border border-neutral-100">PRC_{Date.now().toString(36).toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-neutral-50 p-10 flex flex-col gap-6">
                <p className="text-xs text-center text-neutral-400 font-medium leading-relaxed px-4">
                  Our recruitment team will analyze your proctoring logs and assessment performance. Shortlisted candidates will be contacted at <strong>{submissionSummary?.email || studentEmail}</strong> within 7 business days.
                </p>
                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold text-lg border-neutral-200 hover:bg-white transition-all" onClick={resetSession}>
                  Return to Portal Home
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Domain Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto border-none shadow-2xl rounded-[2rem] p-0">
          <div className="h-2 bg-primary w-full" />
          <div className="p-10 space-y-8">
            <AnimatePresence mode="wait">
              {dialogStep === 'info' ? (
                <motion.div 
                  key="info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                        {selectedDomain ? getDomainIcon(selectedDomain.id) : <Globe className="w-8 h-8" />}
                      </div>
                      <div>
                        <DialogTitle className="text-3xl font-black">{selectedDomain ? selectedDomain.title : 'General Internship Application'}</DialogTitle>
                        <DialogDescription className="text-lg font-medium text-neutral-500">
                          {selectedDomain ? `${selectedDomain.duration} • ${selectedDomain.level}` : 'Express interest across all technology sectors.'}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6 bg-neutral-50 p-8 rounded-[2rem] border border-neutral-100">
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">Candidate Registration</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name-apply" className="text-sm font-black uppercase tracking-widest text-neutral-400">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input 
                            id="name-apply" 
                            type="text" 
                            placeholder="John Doe" 
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="h-14 pl-12 rounded-2xl border-neutral-200 text-base font-bold focus:ring-primary/20 bg-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="email-apply" className="text-sm font-black uppercase tracking-widest text-neutral-400">Professional Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                          <Input 
                            id="email-apply" 
                            type="email" 
                            placeholder="name@university.edu" 
                            value={studentEmail}
                            onChange={(e) => setStudentEmail(e.target.value)}
                            className="h-14 pl-12 rounded-2xl border-neutral-200 text-base font-bold focus:ring-primary/20 bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedDomain ? (
                    <div className="space-y-8">
                      <p className="text-lg text-neutral-600 leading-relaxed">{selectedDomain.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <section className="space-y-4">
                          <h4 className="font-black text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Curriculum Highlights
                          </h4>
                          <ul className="space-y-3">
                            {selectedDomain.highlights.map(h => (
                              <li key={h} className="text-sm font-bold text-neutral-700 flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </section>
                        <section className="space-y-4">
                          <h4 className="font-black text-xs uppercase tracking-widest text-primary flex items-center gap-2">
                            <Briefcase className="w-4 h-4" /> Career Paths
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedDomain.careerPaths.map(p => (
                              <Badge key={p} variant="secondary" className="px-4 py-1.5 rounded-xl font-bold bg-neutral-100 text-neutral-600 border-none">
                                {p}
                              </Badge>
                            ))}
                          </div>
                        </section>
                      </div>

                      <div className="p-8 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
                        <div className="flex items-center gap-3 text-amber-800">
                          <AlertTriangle className="w-6 h-6" />
                          <p className="text-lg font-black">Entrance Assessment Required</p>
                        </div>
                        <p className="text-sm font-medium text-amber-700 leading-relaxed">
                          To maintain high standards, all applicants must pass our secure, proctored entrance test. The test covers core CS fundamentals and domain-specific logic.
                        </p>
                        <div className="flex gap-4 pt-2">
                          <Badge variant="outline" className="border-amber-200 text-amber-700 font-bold">{selectedDomain ? DOMAIN_EXAMS[selectedDomain.id].questions.length : ENTRANCE_EXAM.questions.length} Questions</Badge>
                          <Badge variant="outline" className="border-amber-200 text-amber-700 font-bold">{selectedDomain ? DOMAIN_EXAMS[selectedDomain.id].durationMinutes : ENTRANCE_EXAM.durationMinutes} Minutes</Badge>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-sm font-black uppercase tracking-widest text-primary">Select Your Domain</h3>
                        <p className="text-sm text-neutral-500">
                          Choose a specialized path or leave unselected for the general track.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {DOMAINS.map(d => (
                          <button 
                            key={d.id} 
                            onClick={() => setSelectedDomain(d)}
                            className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-primary hover:bg-primary/5 transition-all text-left group"
                          >
                            <div className="text-primary group-hover:scale-110 transition-transform">{getDomainIcon(d.id)}</div>
                            <span className="text-sm font-bold text-neutral-700">{d.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button 
                      className="w-full h-16 rounded-2xl text-xl font-black shadow-xl shadow-primary/20 gap-3" 
                      disabled={!studentEmail || !studentName}
                      onClick={() => setDialogStep('instructions')}
                    >
                      Review Exam Instructions <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="instructions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                        <Shield className="w-8 h-8" />
                      </div>
                      <div>
                        <DialogTitle className="text-3xl font-black">Proctoring Rules</DialogTitle>
                        <DialogDescription className="text-lg font-medium text-neutral-500">
                          Please review the technical requirements and ethical guidelines.
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="grid gap-4">
                    {[
                      { 
                        icon: <Camera className="w-5 h-5" />, 
                        title: "Camera Access", 
                        desc: "Live monitoring will be active. Face must be clearly visible and centered in the frame." 
                      },
                      { 
                        icon: <Maximize className="w-5 h-5" />, 
                        title: "Fullscreen Only", 
                        desc: "Exiting fullscreen mode or switching tabs will trigger a violation warning." 
                      },
                      { 
                        icon: <AlertCircle className="w-5 h-5" />, 
                        title: "Integrity Policy", 
                        desc: "Any use of external resources, AI assistance, or second screens is strictly prohibited." 
                      },
                      { 
                        icon: <Lock className="w-5 h-5" />, 
                        title: "Single Attempt", 
                        desc: "You have one attempt per domain. Finalize your answers before the timer runs out." 
                      }
                    ].map((rule, idx) => (
                      <div key={idx} className="flex gap-5 p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                          {rule.icon}
                        </div>
                        <div className="space-y-1">
                          <p className="font-black text-sm text-neutral-900">{rule.title}</p>
                          <p className="text-xs font-medium text-neutral-500 leading-relaxed">{rule.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-blue-50 rounded-[2rem] border border-blue-100 space-y-4 text-left">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
                      Technical Check
                    </h4>
                    <ul className="grid gap-3">
                      <li className="flex items-center gap-3 text-sm font-bold text-blue-900">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        Stable internet connection (500kbps+)
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-blue-900">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        Webcam & Microphone permissions enabled
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-blue-900">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        Latest Chrome or Edge browser
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button 
                      className="w-full h-16 rounded-2xl text-xl font-black shadow-xl shadow-primary/20 gap-3" 
                      onClick={startExam}
                    >
                      Start Assessment Now <ArrowRight className="w-6 h-6" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full h-12 rounded-xl font-bold text-neutral-500" 
                      onClick={() => setDialogStep('info')}
                    >
                      Back to My Information
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
              <p className="text-[10px] text-center text-neutral-400 font-bold uppercase tracking-tighter">
                By clicking start, you agree to our proctoring terms and camera monitoring.
              </p>
            </div>
          </DialogContent>
      </Dialog>

      {/* Policy Dialog */}
      <Dialog open={!!policyType} onOpenChange={(open) => !open && setPolicyType(null)}>
        <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto rounded-[2rem] p-0 border-none shadow-2xl">
          <div className="h-2 bg-primary w-full" />
          <div className="p-10">
            <DialogHeader className="mb-8">
              <DialogTitle className="text-4xl font-black">
                {policyType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 text-neutral-600 leading-relaxed font-medium">
              <ReactMarkdown 
                components={{
                  h1: ({node, ...props}) => <h1 className="hidden" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-black text-neutral-900 mt-8 mb-4 flex items-center gap-2" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />,
                  li: ({node, ...props}) => <li {...props} />,
                }}
              >
                {policyType === 'privacy' ? PRIVACY_POLICY : TERMS_OF_SERVICE}
              </ReactMarkdown>
            </div>
            <DialogFooter className="mt-12">
              <Button onClick={() => setPolicyType(null)} className="rounded-2xl px-10 h-14 text-lg font-black">
                I Understand
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
