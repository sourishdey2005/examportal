import { ExamSubmission } from '../types';

export const submitExamResults = async (submission: ExamSubmission) => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit exam results');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting exam results:', error);
    throw error;
  }
};
