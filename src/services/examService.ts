import { ExamSubmission, Exam } from '../types';

export const submitExamResults = async (submission: ExamSubmission, exam: Exam) => {
  // Calculate score
  const score = Object.keys(submission.answers).reduce((acc, qId) => {
    const question = exam.questions.find(q => q.id === qId);
    return acc + (question?.correctAnswer === submission.answers[qId] ? 1 : 0);
  }, 0);
  const totalQuestions = exam.questions.length;

  const data = {
    name: submission.studentName,
    email: submission.studentEmail,
    examTitle: exam.title,
    score: score,
    total: totalQuestions,
    percentage: ((score / totalQuestions) * 100).toFixed(2) + '%',
    timestamp: new Date().toLocaleString(),
    status: submission.status || 'completed'
  };

  // The Google Apps Script Web App URL
  // You must set VITE_GOOGLE_SCRIPT_URL in your environment variables
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  try {
    if (SCRIPT_URL) {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } else {
      console.warn('VITE_GOOGLE_SCRIPT_URL is not defined. Submission skipped.');
    }
    
    // Also try the local mock API if it exists
    await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    }).catch(() => {}); // Ignore errors for local mock
    
    return { status: 'success', score, total: totalQuestions };
  } catch (error) {
    console.error('Error submitting exam results:', error);
    throw error;
  }
};
