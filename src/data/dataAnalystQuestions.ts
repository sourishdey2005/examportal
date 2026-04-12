import { Question } from '../types';

export const DATA_ANALYST_QUESTIONS: Question[] = [
  {
    id: 'da-1',
    type: 'mcq',
    category: 'Statistics',
    text: 'What is the "P-value" in statistical hypothesis testing?',
    options: [
      'The probability that the null hypothesis is true',
      'The probability of observing results at least as extreme as those measured, assuming the null hypothesis is true',
      'The power of the test',
      'The effect size'
    ],
    correctAnswer: 'The probability of observing results at least as extreme as those measured, assuming the null hypothesis is true'
  },
  {
    id: 'da-2',
    type: 'mcq',
    category: 'SQL',
    text: 'What is the difference between "WHERE" and "HAVING" clauses in SQL?',
    options: [
      'They are identical',
      'WHERE filters rows before grouping, HAVING filters groups after aggregation',
      'HAVING filters rows, WHERE filters groups',
      'WHERE is only for SELECT, HAVING is only for UPDATE'
    ],
    correctAnswer: 'WHERE filters rows before grouping, HAVING filters groups after aggregation'
  },
  {
    id: 'da-3',
    type: 'mcq',
    category: 'Visualization',
    text: 'When is a "Box Plot" most useful?',
    options: [
      'To show trends over time',
      'To visualize the distribution, median, and outliers of a dataset',
      'To show the relationship between two continuous variables',
      'To compare parts of a whole'
    ],
    correctAnswer: 'To visualize the distribution, median, and outliers of a dataset'
  },
  {
    id: 'da-4',
    type: 'mcq',
    category: 'Data Cleaning',
    text: 'What is "Imputation" in data analysis?',
    options: [
      'Deleting all rows with missing values',
      'Replacing missing data with substituted values',
      'Normalizing the data',
      'Encoding categorical variables'
    ],
    correctAnswer: 'Replacing missing data with substituted values'
  },
  {
    id: 'da-5',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is a "KPI" (Key Performance Indicator)?',
    options: [
      'A type of database',
      'A measurable value that demonstrates how effectively a company is achieving key business objectives',
      'A programming language',
      'A data visualization tool'
    ],
    correctAnswer: 'A measurable value that demonstrates how effectively a company is achieving key business objectives'
  },
  {
    id: 'da-6',
    type: 'mcq',
    category: 'Statistics',
    text: 'What is "Simpson\'s Paradox"?',
    options: [
      'A paradox where a trend appears in different groups of data but disappears or reverses when these groups are combined',
      'A paradox about infinite loops',
      'A paradox in probability theory',
      'A paradox in linear regression'
    ],
    correctAnswer: 'A paradox where a trend appears in different groups of data but disappears or reverses when these groups are combined'
  },
  {
    id: 'da-7',
    type: 'mcq',
    category: 'Excel/Sheets',
    text: 'What does a "VLOOKUP" function do?',
    options: [
      'Calculates the average',
      'Looks for a value in the leftmost column of a table and returns a value in the same row from a specified column',
      'Sums a range of cells',
      'Creates a pivot table'
    ],
    correctAnswer: 'Looks for a value in the leftmost column of a table and returns a value in the same row from a specified column'
  },
  {
    id: 'da-8',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is a "Star Schema"?',
    options: [
      'A type of neural network',
      'A database schema where a central fact table is surrounded by dimension tables',
      'A hierarchical data model',
      'A network topology'
    ],
    correctAnswer: 'A database schema where a central fact table is surrounded by dimension tables'
  },
  {
    id: 'da-9',
    type: 'mcq',
    category: 'Python',
    text: 'In Pandas, what does the "groupby()" function do?',
    options: [
      'Sorts the data',
      'Splits the data into groups based on some criteria',
      'Deletes duplicate rows',
      'Joins two dataframes'
    ],
    correctAnswer: 'Splits the data into groups based on some criteria'
  },
  {
    id: 'da-10',
    type: 'mcq',
    category: 'Analysis',
    text: 'What is "Cohort Analysis"?',
    options: [
      'Analyzing the entire population at once',
      'Analyzing the behavior of a specific group of users who share a common characteristic over a period of time',
      'Predicting future sales',
      'Testing a hypothesis'
    ],
    correctAnswer: 'Analyzing the behavior of a specific group of users who share a common characteristic over a period of time'
  }
];

for (let i = 11; i <= 100; i++) {
  DATA_ANALYST_QUESTIONS.push({
    id: `da-${i}`,
    type: 'mcq',
    category: 'Advanced Data Analysis',
    text: `Advanced Data Analysis Question ${i}: Which statistical test is used to determine if there is a significant difference between the means of three or more independent groups?`,
    options: ['T-test', 'Chi-square test', 'ANOVA', 'Z-test'],
    correctAnswer: 'ANOVA'
  });
}
