import { Question } from '../types';

export const DATA_SCIENCE_QUESTIONS: Question[] = [
  {
    id: 'ds-1',
    type: 'mcq',
    category: 'Information Theory',
    text: 'What is the "Kullback-Leibler (KL) Divergence" primarily used to measure in Data Science?',
    options: [
      'The correlation between two independent variables.',
      'The difference between two probability distributions.',
      'The distance between two clusters in a high-dimensional space.',
      'The error rate of a regression model.'
    ],
    correctAnswer: 'The difference between two probability distributions.'
  },
  {
    id: 'ds-2',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'In "Gradient Boosting Machines" (GBM), how are subsequent trees added to the ensemble?',
    options: [
      'By training each tree independently on a random subset of features.',
      'By training each new tree to predict the residual errors (gradients) of the existing ensemble.',
      'By averaging the weights of all previous trees.',
      'By using a voting mechanism where the majority class wins.'
    ],
    correctAnswer: 'By training each new tree to predict the residual errors (gradients) of the existing ensemble.'
  },
  {
    id: 'ds-3',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is the "Curse of Dimensionality" and how does it affect distance-based algorithms like K-Nearest Neighbors?',
    options: [
      'It makes the algorithm run faster due to more features.',
      'As the number of dimensions increases, the volume of the space grows so fast that the data becomes sparse, making the concept of "nearest" less meaningful.',
      'It increases the accuracy of the model by providing more context.',
      'It only affects categorical data, not numerical data.'
    ],
    correctAnswer: 'As the number of dimensions increases, the volume of the space grows so fast that the data becomes sparse, making the concept of "nearest" less meaningful.'
  },
  {
    id: 'ds-4',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What is the purpose of "Propensity Score Matching" (PSM)?',
    options: [
      'To predict the probability of an event occurring.',
      'To reduce selection bias by equating groups based on their covariates in non-experimental studies.',
      'To increase the sample size of a study.',
      'To visualize the relationship between multiple variables.'
    ],
    correctAnswer: 'To reduce selection bias by equating groups based on their covariates in non-experimental studies.'
  },
  {
    id: 'ds-5',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is the "Precision-Recall Curve" better than the "ROC Curve" for evaluating models on highly imbalanced datasets?',
    options: [
      'It is easier to calculate.',
      'The ROC curve can be misleadingly optimistic if the number of negative samples is very large, whereas the PR curve focuses on the minority (positive) class.',
      'It works better for regression problems.',
      'It doesn\'t require a threshold.'
    ],
    correctAnswer: 'The ROC curve can be misleadingly optimistic if the number of negative samples is very large, whereas the PR curve focuses on the minority (positive) class.'
  }
];

const dsCategories = ['Feature Selection', 'Hyperparameter Tuning', 'Model Interpretability', 'Big Data Ecosystem', 'Bayesian Modeling', 'Deep Learning'];
const dsTopics = [
  'Recursive Feature Elimination (RFE)',
  'Bayesian Optimization using Gaussian Processes',
  'SHAP (SHapley Additive exPlanations) values',
  'Spark Catalyst Optimizer and Tungsten engine',
  'Probabilistic Programming with PyMC3',
  'Autoencoders for anomaly detection'
];

for (let i = 6; i <= 100; i++) {
  const category = dsCategories[i % dsCategories.length];
  const topic = dsTopics[i % dsTopics.length];
  DATA_SCIENCE_QUESTIONS.push({
    id: `ds-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] Regarding ${topic}, which strategy is most effective for improving the generalizability of a model on unseen data?`,
    options: [
      'Increasing the complexity of the model by adding more layers.',
      'Implementing robust cross-validation and regularization techniques.',
      'Training the model for a significantly higher number of epochs.',
      'Using the entire dataset for both training and testing.'
    ],
    correctAnswer: 'Implementing robust cross-validation and regularization techniques.'
  });
}
