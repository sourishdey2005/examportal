import { Question } from '../types';

export const DATA_SCIENCE_QUESTIONS: Question[] = [
  {
    id: 'ds-1',
    type: 'mcq',
    category: 'Big Data',
    text: 'What is the "MapReduce" paradigm?',
    options: [
      'A way to compress data',
      'A programming model for processing large datasets with a parallel, distributed algorithm on a cluster',
      'A database indexing technique',
      'A data visualization framework'
    ],
    correctAnswer: 'A programming model for processing large datasets with a parallel, distributed algorithm on a cluster'
  },
  {
    id: 'ds-2',
    type: 'mcq',
    category: 'Algorithms',
    text: 'How does "Random Forest" reduce variance compared to a single Decision Tree?',
    options: [
      'By increasing the depth of the trees',
      'By averaging the predictions of multiple trees trained on different subsets of the data (Bagging)',
      'By using a better loss function',
      'By pruning the trees'
    ],
    correctAnswer: 'By averaging the predictions of multiple trees trained on different subsets of the data (Bagging)'
  },
  {
    id: 'ds-3',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is the primary goal of "Principal Component Analysis" (PCA)?',
    options: [
      'To increase the number of features',
      'To find the directions (principal components) that maximize the variance in the data',
      'To cluster the data into groups',
      'To predict a continuous target variable'
    ],
    correctAnswer: 'To find the directions (principal components) that maximize the variance in the data'
  },
  {
    id: 'ds-4',
    type: 'mcq',
    category: 'Evaluation',
    text: 'What is the "ROC-AUC" score used for?',
    options: [
      'To measure the accuracy of a regression model',
      'To evaluate the performance of a binary classification model at various threshold settings',
      'To calculate the distance between clusters',
      'To measure the speed of an algorithm'
    ],
    correctAnswer: 'To evaluate the performance of a binary classification model at various threshold settings'
  },
  {
    id: 'ds-5',
    type: 'mcq',
    category: 'Feature Engineering',
    text: 'What is "One-Hot Encoding"?',
    options: [
      'Normalizing numerical features',
      'Converting categorical variables into a binary vector representation',
      'Scaling features to have a mean of 0',
      'Reducing the number of features'
    ],
    correctAnswer: 'Converting categorical variables into a binary vector representation'
  },
  {
    id: 'ds-6',
    type: 'mcq',
    category: 'Time Series',
    text: 'What is "Stationarity" in time series analysis?',
    options: [
      'When the data is constant over time',
      'When the statistical properties of the series (mean, variance) do not change over time',
      'When the series has a clear trend',
      'When the series has no seasonality'
    ],
    correctAnswer: 'When the statistical properties of the series (mean, variance) do not change over time'
  },
  {
    id: 'ds-7',
    type: 'mcq',
    category: 'Optimization',
    text: 'What is "Stochastic Gradient Descent" (SGD)?',
    options: [
      'An optimization algorithm that uses the entire dataset to calculate the gradient',
      'An optimization algorithm that uses a single random sample to calculate the gradient at each step',
      'A way to initialize weights',
      'A type of activation function'
    ],
    correctAnswer: 'An optimization algorithm that uses a single random sample to calculate the gradient at each step'
  },
  {
    id: 'ds-8',
    type: 'mcq',
    category: 'Clustering',
    text: 'How does the "K-Means" algorithm work?',
    options: [
      'By building a hierarchy of clusters',
      'By iteratively assigning points to the nearest cluster center and updating the centers',
      'By finding dense regions of points',
      'By using a neural network'
    ],
    correctAnswer: 'By iteratively assigning points to the nearest cluster center and updating the centers'
  },
  {
    id: 'ds-9',
    type: 'mcq',
    category: 'Natural Language Processing',
    text: 'What is "TF-IDF"?',
    options: [
      'A deep learning model for text',
      'A numerical statistic that reflects how important a word is to a document in a collection or corpus',
      'A way to tokenize text',
      'A type of recurrent neural network'
    ],
    correctAnswer: 'A numerical statistic that reflects how important a word is to a document in a collection or corpus'
  },
  {
    id: 'ds-10',
    type: 'mcq',
    category: 'Ensemble Learning',
    text: 'What is "Boosting" in machine learning?',
    options: [
      'Training models in parallel',
      'A technique that combines multiple weak learners sequentially to create a strong learner',
      'Reducing the size of the model',
      'Increasing the learning rate'
    ],
    correctAnswer: 'A technique that combines multiple weak learners sequentially to create a strong learner'
  }
];

for (let i = 11; i <= 100; i++) {
  DATA_SCIENCE_QUESTIONS.push({
    id: `ds-${i}`,
    type: 'mcq',
    category: 'Advanced Data Science',
    text: `Advanced Data Science Question ${i}: Which metric is commonly used to measure the "purity" of a node in a Decision Tree?`,
    options: ['Gini Impurity', 'Mean Squared Error', 'R-squared', 'Accuracy'],
    correctAnswer: 'Gini Impurity'
  });
}
