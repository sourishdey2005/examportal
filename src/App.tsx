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
  Zap
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

type AppState = 'landing' | 'domains' | 'exam' | 'submitted' | 'disqualified';

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [currentExam, setCurrentExam] = useState<Exam>(ENTRANCE_EXAM);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [startTime, setStartTime] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState(ENTRANCE_EXAM.durationMinutes * 60);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const logout = useCallback(() => {
    setStudentEmail('');
    setAnswers({});
    setSelectedDomain(null);
    setAppState('landing');
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const submitExam = useCallback(async (isDisqualified = false) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const submission: ExamSubmission = {
        examId: currentExam.id,
        domainId: selectedDomain?.id || 'all',
        studentEmail,
        answers,
        logs,
        snapshots,
        violations: isDisqualified ? 1 : violations,
        startTime,
        endTime: Date.now(),
        status: isDisqualified ? 'disqualified' : 'completed'
      };
      
      await submitExamResults(submission);
      stopCamera();
      
      if (isDisqualified) {
        setAppState('disqualified');
        // Auto logout after 5 seconds of showing the disqualified screen
        setTimeout(() => {
          logout();
        }, 5000);
      } else {
        setAppState('submitted');
      }
    } catch (error) {
      console.error('Failed to submit exam:', error);
      setAppState(isDisqualified ? 'disqualified' : 'submitted');
    } finally {
      setIsSubmitting(false);
    }
  }, [studentEmail, answers, isSubmitting, selectedDomain, currentExam, logout]);

  const { 
    violations, 
    tabSwitches, 
    fullscreenExits, 
    isFullScreen, 
    isTabActive, 
    logs, 
    enterFullScreen 
  } = useProctoring(() => submitExam(true));

  const { 
    stream, 
    videoRef, 
    canvasRef, 
    startCamera, 
    stopCamera, 
    snapshots 
  } = useCamera();

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
    if (!studentEmail) return;
    setIsDialogOpen(false);
    
    const exam = selectedDomain ? DOMAIN_EXAMS[selectedDomain.id] : ENTRANCE_EXAM;
    setCurrentExam(exam);
    setTimeLeft(exam.durationMinutes * 60);
    
    await startCamera();
    await enterFullScreen();
    setStartTime(Date.now());
    setAppState('exam');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
    setSelectedDomain(domain);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <canvas ref={canvasRef} className="hidden" />
      
      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col"
          >
            <header className="p-6 border-b bg-white sticky top-0 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  <span className="text-2xl font-bold tracking-tight">ExamPortal</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" onClick={() => setAppState('domains')}>Internships</Button>
                  <Button variant="outline" className="hidden md:flex">About Us</Button>
                </div>
              </div>
            </header>

            <main className="flex-1 flex flex-col">
              {/* Hero Section */}
              <section className="py-20 px-4 bg-gradient-to-b from-white to-neutral-50 border-b">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
                      <Zap className="w-4 h-4" /> Now Accepting Applications for 2026
                    </div>
                    <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
                      Elevate Your Future with Our <span className="text-primary">Specialized Internships</span>
                    </h1>
                    <p className="text-xl text-neutral-500 leading-relaxed max-w-xl">
                      Gain real-world experience across cutting-edge domains. Our proctored entrance assessment ensures a fair and merit-based selection process.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="h-16 px-10 text-lg gap-2 shadow-lg shadow-primary/20" onClick={() => setAppState('domains')}>
                        Explore Domains <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="h-16 px-10 text-lg" onClick={() => {
                        setSelectedDomain(null);
                        setIsDialogOpen(true);
                      }}>
                        Express Interest in All
                      </Button>
                    </div>
                  </div>
                  <div className="relative hidden lg:block">
                    <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl"></div>
                    <Card className="relative border-neutral-200 shadow-2xl overflow-hidden transform hover:-rotate-1 transition-transform duration-500">
                      <CardHeader className="bg-primary text-white p-10">
                        <CardTitle className="text-3xl">Entrance Assessment</CardTitle>
                        <CardDescription className="text-primary-foreground/80 text-lg">
                          A comprehensive evaluation of your technical and analytical skills.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-10 space-y-8">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-center space-y-2">
                            <Clock className="w-8 h-8 text-primary mx-auto" />
                            <p className="font-bold text-xl">90 Mins</p>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Duration</p>
                          </div>
                          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 text-center space-y-2">
                            <FileText className="w-8 h-8 text-primary mx-auto" />
                            <p className="font-bold text-xl">60 MCQs</p>
                            <p className="text-xs text-neutral-500 uppercase tracking-widest">Questions</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Assessment Topics</p>
                          <div className="flex flex-wrap gap-2">
                            {['Aptitude', 'GK', 'OS', 'DBMS', 'DAA', 'DSA', 'CN', 'JAVA', 'AI', 'ML', 'Cloud', 'GIT'].map(topic => (
                              <Badge key={topic} variant="secondary" className="px-3 py-1">{topic}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section className="py-16 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { label: 'Domains', value: '6+' },
                    { label: 'Interns Placed', value: '500+' },
                    { label: 'Partner Firms', value: '50+' },
                    { label: 'Success Rate', value: '94%' }
                  ].map(stat => (
                    <div key={stat.label} className="text-center space-y-1">
                      <p className="text-4xl font-black text-primary">{stat.value}</p>
                      <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </section>
            </main>

            <footer className="bg-neutral-900 text-white py-12 px-4">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xl font-bold">ExamPortal</span>
                </div>
                <p className="text-neutral-500 text-sm">© 2026 ExamPortal. All rights reserved.</p>
                <div className="flex gap-6 text-neutral-400">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                </div>
              </div>
            </footer>
          </motion.div>
        )}

        {appState === 'domains' && (
          <motion.div 
            key="domains"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col"
          >
            <header className="p-6 border-b bg-white sticky top-0 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Button variant="ghost" onClick={() => setAppState('landing')} className="gap-2">
                  <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
                </Button>
                <h2 className="text-xl font-bold">Internship Domains</h2>
                <Button variant="default" onClick={() => {
                  setSelectedDomain(null);
                  setIsDialogOpen(true);
                }}>Express Interest in All</Button>
              </div>
            </header>

            <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">Specialized Programs</h2>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                  Choose the path that aligns with your passion and career goals. Each program is designed to provide deep industry insights.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DOMAINS.map((domain) => (
                  <Card key={domain.id} className="group hover:shadow-2xl transition-all border-neutral-200 overflow-hidden flex flex-col transform hover:-translate-y-1 duration-300">
                    <CardHeader className="space-y-4 p-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                        {getDomainIcon(domain.id)}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{domain.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="bg-primary/5 text-primary border-none">{domain.duration}</Badge>
                          <Badge variant="outline" className="text-neutral-500">{domain.level}</Badge>
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-6 p-8 pt-0">
                      <p className="text-neutral-600 leading-relaxed">{domain.description}</p>
                      <div className="space-y-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Key Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {domain.keySkills.map(skill => (
                            <Badge key={skill} variant="secondary" className="bg-neutral-100 text-neutral-600 border-none px-3 py-1">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-neutral-50/50 border-t border-neutral-100 p-8">
                      <Button className="w-full h-12 gap-2 text-lg font-semibold" onClick={() => openDomainDetails(domain)}>
                        Apply for {domain.title} <ChevronRight className="w-5 h-5" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </main>
          </motion.div>
        )}

        {appState === 'exam' && (
          <motion.div 
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen bg-neutral-50"
          >
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200 p-4 shadow-sm">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-bold hidden md:inline">ExamPortal</span>
                  </div>
                  <Badge variant="outline" className="px-4 py-1.5 flex items-center gap-2 text-sm font-bold bg-white shadow-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    {formatTime(timeLeft)}
                  </Badge>
                  <Badge variant="destructive" className="px-4 py-1.5 flex items-center gap-2 text-sm font-bold shadow-sm">
                    <AlertCircle className="w-4 h-4" />
                    Violations: {violations}/1
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Applying for</span>
                    <span className="text-sm font-bold text-primary">{selectedDomain?.title || 'All Domains'}</span>
                  </div>
                  <Button variant="destructive" size="sm" className="font-bold px-6" onClick={submitExam} disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Finish Exam'}
                  </Button>
                </div>
              </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 space-y-12 pb-32">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-black tracking-tight text-neutral-900">{currentExam.title}</h1>
                <p className="text-lg text-neutral-500 max-w-2xl mx-auto">{currentExam.description}</p>
                <div className="flex justify-center gap-4">
                  <Badge variant="secondary" className="px-4 py-1">{currentExam.questions.length} Questions</Badge>
                  <Badge variant="secondary" className="px-4 py-1">{currentExam.durationMinutes} Minutes</Badge>
                </div>
              </div>

              <div className="space-y-8">
                {currentExam.questions.map((q, index) => (
                  <Card key={q.id} className="border border-neutral-200 shadow-sm overflow-hidden hover:border-primary/20 transition-colors">
                    <CardHeader className="bg-white border-b border-neutral-50 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white text-lg font-black shadow-lg shadow-primary/20">
                            {index + 1}
                          </span>
                          <Badge variant="outline" className="px-3 py-1 font-bold text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px]">
                            {q.category}
                          </Badge>
                        </div>
                        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Question {index + 1} of 60</span>
                      </div>
                      <CardTitle className="text-xl leading-relaxed text-neutral-800 font-bold">{q.text}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 bg-neutral-50/30">
                      <RadioGroup 
                        onValueChange={(val) => setAnswers(prev => ({ ...prev, [q.id]: val }))}
                        className="grid gap-4"
                      >
                        {q.options?.map((option) => (
                          <div key={option} className="flex items-center space-x-3 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group shadow-sm">
                            <RadioGroupItem value={option} id={`${q.id}-${option}`} className="w-5 h-5" />
                            <Label htmlFor={`${q.id}-${option}`} className="flex-1 cursor-pointer font-bold text-neutral-700 group-hover:text-primary transition-colors">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
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
                    className="w-full h-full object-cover rounded-2xl"
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
              <div className="h-3 bg-destructive w-full" />
              <CardHeader className="text-center pt-16 pb-10">
                <div className="mx-auto bg-destructive/10 w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <AlertTriangle className="w-12 h-12 text-destructive" />
                </div>
                <CardTitle className="text-4xl font-black text-destructive uppercase tracking-tighter">Exam Terminated</CardTitle>
                <CardDescription className="text-lg text-neutral-500 pt-2">
                  You have been <strong>disqualified</strong> due to a proctoring violation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-12 text-center">
                <p className="text-neutral-600 leading-relaxed">
                  The system detected a tab switch or fullscreen exit. Per our zero-tolerance policy, your assessment has been cancelled and your session has been voided.
                </p>
                <div className="p-6 bg-neutral-50 rounded-3xl border border-neutral-100">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Logged Violation</p>
                  <p className="text-sm font-black text-destructive">UNAUTHORIZED_ACTION_DETECTED</p>
                </div>
              </CardContent>
              <CardFooter className="bg-neutral-50 p-10 flex flex-col gap-6">
                <p className="text-xs text-center text-neutral-400 font-medium">
                  You are being automatically logged out for security reasons.
                </p>
                <Button variant="destructive" className="w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-destructive/20" onClick={logout}>
                  Return to Home
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
                  Your assessment for <strong>{selectedDomain?.title || 'All Domains'}</strong> has been successfully recorded.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 px-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-1 text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Score</span>
                    <span className="text-2xl font-black text-primary">
                      {Object.keys(answers).reduce((acc, qId) => {
                        const question = currentExam.questions.find(q => q.id === qId);
                        return acc + (question?.correctAnswer === answers[qId] ? 1 : 0);
                      }, 0)} / {currentExam.questions.length}
                    </span>
                  </div>
                  <div className="p-4 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-1 text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Violations</span>
                    <span className={`text-2xl font-black ${violations > 0 ? 'text-destructive' : 'text-green-600'}`}>{violations}</span>
                  </div>
                  <div className="p-4 rounded-3xl bg-neutral-50 border border-neutral-100 flex flex-col gap-1 text-center">
                    <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Time</span>
                    <span className="text-2xl font-black text-neutral-900">
                      {Math.floor((Date.now() - startTime) / 60000)}m
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
                      <span className="text-sm font-black text-neutral-800">{studentEmail}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-neutral-500">Domain</span>
                      <span className="text-sm font-black text-primary">{selectedDomain?.title || 'General Interest'}</span>
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
                  Our recruitment team will analyze your proctoring logs and assessment performance. Shortlisted candidates will be contacted at <strong>{studentEmail}</strong> within 7 business days.
                </p>
                <Button variant="outline" className="w-full h-14 rounded-2xl font-bold text-lg border-neutral-200 hover:bg-white transition-all" onClick={() => window.location.reload()}>
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
                    <Badge variant="outline" className="border-amber-200 text-amber-700 font-bold">60 Questions</Badge>
                    <Badge variant="outline" className="border-amber-200 text-amber-700 font-bold">90 Minutes</Badge>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Not sure which domain to pick? Apply for our general internship track. We will evaluate your performance across all categories and match you with the best-fitting team.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {DOMAINS.map(d => (
                    <div key={d.id} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
                      <div className="text-primary">{getDomainIcon(d.id)}</div>
                      <span className="text-sm font-bold text-neutral-700">{d.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                <Label htmlFor="email-apply" className="text-sm font-black uppercase tracking-widest text-neutral-400">Your Professional Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <Input 
                    id="email-apply" 
                    type="email" 
                    placeholder="name@university.edu" 
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="h-16 pl-12 rounded-2xl border-neutral-200 text-lg font-bold focus:ring-primary/20"
                  />
                </div>
              </div>
              <Button 
                className="w-full h-16 rounded-2xl text-xl font-black shadow-xl shadow-primary/20 gap-3" 
                disabled={!studentEmail}
                onClick={startExam}
              >
                Start Proctored Assessment <ArrowRight className="w-6 h-6" />
              </Button>
              <p className="text-[10px] text-center text-neutral-400 font-bold uppercase tracking-tighter">
                By clicking start, you agree to our proctoring terms and camera monitoring.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
