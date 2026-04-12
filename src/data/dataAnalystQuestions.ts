import { Question } from '../types';

export const DATA_ANALYST_QUESTIONS: Question[] = [
  {
    id: 'da-1',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the primary difference between a "Window Function" (e.g., RANK()) and a standard "GROUP BY" aggregation?',
    options: [
      'Window functions can only be used in the WHERE clause.',
      'Window functions perform calculations across a set of table rows that are related to the current row, without collapsing them into a single output row.',
      'GROUP BY is faster for all types of datasets.',
      'Window functions require a separate temporary table to store results.'
    ],
    correctAnswer: 'Window functions perform calculations across a set of table rows that are related to the current row, without collapsing them into a single output row.'
  },
  {
    id: 'da-2',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'In A/B testing, what does "Statistical Power" represent?',
    options: [
      'The probability of correctly rejecting the null hypothesis when it is false (avoiding a Type II error).',
      'The probability of rejecting the null hypothesis when it is true (Type I error).',
      'The total sample size required for the test.',
      'The magnitude of the difference between the control and variant groups.'
    ],
    correctAnswer: 'The probability of correctly rejecting the null hypothesis when it is false (avoiding a Type II error).'
  },
  {
    id: 'da-3',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is the "Slowly Changing Dimension" (SCD) Type 2 strategy used for in a Data Warehouse?',
    options: [
      'Overwriting existing data with new values.',
      'Creating a new record for every change to track the full history of the dimension over time.',
      'Adding a new column to the existing record to store the previous value.',
      'Deleting old records to save storage space.'
    ],
    correctAnswer: 'Creating a new record for every change to track the full history of the dimension over time.'
  },
  {
    id: 'da-4',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is the "Semantic Layer" in a modern BI tool like Looker or Power BI?',
    options: [
      'A layer that translates natural language into SQL.',
      'A business representation of corporate data that helps end-users access data using common business terms rather than technical table names.',
      'The physical storage layer of the data warehouse.',
      'The encryption layer for data at rest.'
    ],
    correctAnswer: 'A business representation of corporate data that helps end-users access data using common business terms rather than technical table names.'
  },
  {
    id: 'da-5',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'When using "Exponential Smoothing" for time-series forecasting, what does the "Alpha" parameter control?',
    options: [
      'The seasonality of the data.',
      'The weight given to the most recent observation versus the historical average.',
      'The number of periods to forecast into the future.',
      'The confidence interval of the prediction.'
    ],
    correctAnswer: 'The weight given to the most recent observation versus the historical average.'
  }
];

const daCategories = ['Data Governance', 'Advanced Excel', 'Python for Analysis', 'ETL Processes', 'Experimental Design', 'Dashboard UX'];
const daTopics = [
  'Data Lineage and Metadata management',
  'Array formulas and Power Query M-code',
  'Vectorized operations in NumPy',
  'Idempotency in data pipelines',
  'Multivariate testing vs A/B testing',
  'Color theory for accessible visualizations'
];

for (let i = 6; i <= 100; i++) {
  const category = daCategories[i % daCategories.length];
  const topic = daTopics[i % daTopics.length];
  DATA_ANALYST_QUESTIONS.push({
    id: `da-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] When analyzing ${topic}, which metric is most indicative of data quality and reliability for executive decision-making?`,
    options: [
      'The total volume of data processed.',
      'The completeness and consistency of the dataset across different sources.',
      'The speed at which the dashboard loads.',
      'The number of unique users who accessed the report.'
    ],
    correctAnswer: 'The completeness and consistency of the dataset across different sources.'
  });
}
