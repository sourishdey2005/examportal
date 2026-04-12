import { Question } from '../types';

export const PATENT_RESEARCH_QUESTIONS: Question[] = [
  {
    id: 'pr-1',
    type: 'mcq',
    category: 'Intellectual Property',
    text: 'What are the three main criteria for an invention to be patentable?',
    options: [
      'Useful, New, and Non-obvious',
      'Cheap, Fast, and Reliable',
      'Small, Light, and Durable',
      'Digital, Scalable, and Secure'
    ],
    correctAnswer: 'Useful, New, and Non-obvious'
  },
  {
    id: 'pr-2',
    type: 'mcq',
    category: 'Patent Search',
    text: 'What is "Prior Art"?',
    options: [
      'Art created before the 20th century',
      'Any evidence that your invention is already known (e.g., existing patents, publications, public use)',
      'The first draft of a patent application',
      'A type of legal document'
    ],
    correctAnswer: 'Any evidence that your invention is already known (e.g., existing patents, publications, public use)'
  },
  {
    id: 'pr-3',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is the purpose of the "Claims" section in a patent?',
    options: [
      'To describe the history of the invention',
      'To define the legal boundaries of the protection sought',
      'To list the inventors',
      'To provide background information'
    ],
    correctAnswer: 'To define the legal boundaries of the protection sought'
  },
  {
    id: 'pr-4',
    type: 'mcq',
    category: 'Research Methodology',
    text: 'What is a "Systematic Literature Review"?',
    options: [
      'Reading a few books on a topic',
      'A structured, transparent, and reproducible method to identify, evaluate, and synthesize all relevant research on a specific question',
      'Writing a summary of a single paper',
      'A type of bibliography'
    ],
    correctAnswer: 'A structured, transparent, and reproducible method to identify, evaluate, and synthesize all relevant research on a specific question'
  },
  {
    id: 'pr-5',
    type: 'mcq',
    category: 'IP Strategy',
    text: 'What is a "Freedom to Operate" (FTO) analysis?',
    options: [
      'A test for software performance',
      'An assessment of whether a product or process can be commercialized without infringing existing third-party patents',
      'A type of business license',
      'A marketing strategy'
    ],
    correctAnswer: 'An assessment of whether a product or process can be commercialized without infringing existing third-party patents'
  },
  {
    id: 'pr-6',
    type: 'mcq',
    category: 'Patent Classification',
    text: 'What is the "International Patent Classification" (IPC)?',
    options: [
      'A list of all inventors in the world',
      'A hierarchical system for classifying patents according to the different areas of technology to which they pertain',
      'A type of global tax',
      'A network protocol'
    ],
    correctAnswer: 'A hierarchical system for classifying patents according to the different areas of technology to which they pertain'
  },
  {
    id: 'pr-7',
    type: 'mcq',
    category: 'Scientific Writing',
    text: 'What is the "IMRaD" structure in research papers?',
    options: [
      'Index, Map, Record, and Data',
      'Introduction, Methods, Results, and Discussion',
      'Images, Models, Research, and Design',
      'Input, Management, Review, and Delivery'
    ],
    correctAnswer: 'Introduction, Methods, Results, and Discussion'
  },
  {
    id: 'pr-8',
    type: 'mcq',
    category: 'Ethics',
    text: 'What is "Plagiarism" in research?',
    options: [
      'Using too many citations',
      'The practice of taking someone else\'s work or ideas and passing them off as one\'s own',
      'Writing in a different language',
      'Publishing in an open-access journal'
    ],
    correctAnswer: 'The practice of taking someone else\'s work or ideas and passing them off as one\'s own'
  },
  {
    id: 'pr-9',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is the typical term of a utility patent from the filing date?',
    options: ['5 years', '10 years', '20 years', '50 years'],
    correctAnswer: '20 years'
  },
  {
    id: 'pr-10',
    type: 'mcq',
    category: 'Innovation',
    text: 'What is "Disruptive Innovation"?',
    options: [
      'An innovation that improves an existing product',
      'An innovation that creates a new market and value network and eventually disrupts an existing market',
      'A very expensive innovation',
      'A failed innovation'
    ],
    correctAnswer: 'An innovation that creates a new market and value network and eventually disrupts an existing market'
  }
];

for (let i = 11; i <= 100; i++) {
  PATENT_RESEARCH_QUESTIONS.push({
    id: `pr-${i}`,
    type: 'mcq',
    category: 'Advanced Patent & Research',
    text: `Advanced Patent/Research Question ${i}: Which document is filed to protect an invention temporarily while the full application is being prepared?`,
    options: ['Non-provisional Patent', 'Provisional Patent Application', 'Trademark', 'Copyright'],
    correctAnswer: 'Provisional Patent Application'
  });
}
