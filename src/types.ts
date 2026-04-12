export interface Question {
  id: string;
  type: 'mcq' | 'short-answer';
  text: string;
  options?: string[];
  correctAnswer?: string;
  category?: string;
  difficulty?: 'advanced' | 'expert' | 'beginner' | 'intermediate';
  explanation?: string;
}

export interface Domain {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  keySkills: string[];
  highlights: string[];
  careerPaths: string[];
  demand: string;
  future: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  questions: Question[];
}

export interface ExamSubmission {
  examId: string;
  domainId?: string;
  studentName: string;
  studentEmail: string;
  answers: Record<string, string>;
  logs: { type: string; timestamp: number; details?: string }[];
  snapshots: string[];
  violations: number;
  startTime: number;
  endTime: number;
  status?: 'completed' | 'disqualified';
}
