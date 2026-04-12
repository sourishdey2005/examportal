// types.ts
export interface Question {
  id: string;
  type: 'mcq';
  category: string;
  text: string;
  options: string[];
  correctAnswer: string;
  difficulty?: 'advanced' | 'expert';
  explanation?: string;
}

// data-science-advanced-questions.ts
import { Question } from '../types';

export const DATA_SCIENCE_QUESTIONS: Question[] = [
  // ============== QUESTIONS 1-5 (Original) ==============
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
    correctAnswer: 'The difference between two probability distributions.',
    difficulty: 'advanced',
    explanation: 'KL divergence quantifies how one probability distribution diverges from a reference distribution.'
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
    correctAnswer: 'By training each new tree to predict the residual errors (gradients) of the existing ensemble.',
    difficulty: 'advanced',
    explanation: 'Each new tree models the negative gradient of the loss function with respect to predictions.'
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
    correctAnswer: 'As the number of dimensions increases, the volume of the space grows so fast that the data becomes sparse, making the concept of "nearest" less meaningful.',
    difficulty: 'advanced',
    explanation: 'High-dimensional spaces cause distance metrics to lose contrast between near and far points.'
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
    correctAnswer: 'To reduce selection bias by equating groups based on their covariates in non-experimental studies.',
    difficulty: 'advanced',
    explanation: 'PSM creates balanced treatment and control groups by matching on estimated treatment probability.'
  },
  {
    id: 'ds-5',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'Why is the "Precision-Recall Curve" often preferred over the "ROC Curve" for highly imbalanced datasets?',
    options: [
      'It is easier to calculate.',
      'The ROC curve can be misleadingly optimistic when negative samples dominate, whereas the PR curve focuses on the minority class.',
      'It works better for regression problems.',
      'It doesn\'t require a threshold.'
    ],
    correctAnswer: 'The ROC curve can be misleadingly optimistic when negative samples dominate, whereas the PR curve focuses on the minority class.',
    difficulty: 'advanced',
    explanation: 'PR curves show precision vs recall, which are more informative when positives are rare.'
  },

  // ============== QUESTIONS 6-100 (96 Unique Advanced Questions) ==============

  // Deep Learning (6-15)
  {
    id: 'ds-6',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What problem does "Batch Normalization" primarily solve in deep neural networks?',
    options: [
      'Internal covariate shift and gradient vanishing/exploding issues.',
      'Overfitting due to too many parameters.',
      'Slow convergence of SGD optimizers.',
      'Lack of non-linearity in activation functions.'
    ],
    correctAnswer: 'Internal covariate shift and gradient vanishing/exploding issues.',
    difficulty: 'advanced',
    explanation: 'BN normalizes layer inputs to reduce internal covariate shift and enables higher learning rates.'
  },
  {
    id: 'ds-7',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'In a Transformer architecture, what is the purpose of "multi-head attention"?',
    options: [
      'To reduce computational complexity by sharing weights across heads.',
      'To allow the model to jointly attend to information from different representation subspaces.',
      'To replace position encoding with learned embeddings.',
      'To compress the input sequence into a single latent vector.'
    ],
    correctAnswer: 'To allow the model to jointly attend to information from different representation subspaces.',
    difficulty: 'expert',
    explanation: 'Multiple heads learn different types of relationships (e.g., syntactic, semantic) in parallel.'
  },
  {
    id: 'ds-8',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What is the "dying ReLU" problem and how can it be mitigated?',
    options: [
      'Neurons output zero for all inputs due to negative bias; use Leaky ReLU or ELU.',
      'Gradients become infinite; use gradient clipping.',
      'Weights become too large; use L2 regularization.',
      'Activations saturate at one; use dropout.'
    ],
    correctAnswer: 'Neurons output zero for all inputs due to negative bias; use Leaky ReLU or ELU.',
    difficulty: 'advanced',
    explanation: 'When ReLU units always output zero, they never update. Leaky ReLU allows small negative gradients.'
  },
  {
    id: 'ds-9',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What distinguishes "Dropout" from other regularization techniques?',
    options: [
      'It adds noise to input data.',
      'It randomly drops neurons during training, creating an implicit ensemble.',
      'It penalizes large weights in the loss function.',
      'It reduces the number of layers in the network.'
    ],
    correctAnswer: 'It randomly drops neurons during training, creating an implicit ensemble.',
    difficulty: 'advanced',
    explanation: 'Dropout trains a random subnetwork each iteration, approximating model averaging at test time.'
  },
  {
    id: 'ds-10',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'In a CNN, what is the effect of increasing the "stride" parameter?',
    options: [
      'Increases the receptive field size while reducing spatial dimensions.',
      'Adds padding to preserve input dimensions.',
      'Increases the number of learnable parameters.',
      'Converts convolutional layers to fully connected layers.'
    ],
    correctAnswer: 'Increases the receptive field size while reducing spatial dimensions.',
    difficulty: 'advanced',
    explanation: 'Larger stride skips more positions, reducing output size and increasing each output\'s effective receptive field.'
  },
  {
    id: 'ds-11',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What is the "attention mechanism" originally designed to address in sequence-to-sequence models?',
    options: [
      'The vanishing gradient problem in RNNs.',
      'The fixed-length context vector bottleneck that loses information from long sequences.',
      'The computational inefficiency of recurrent layers.',
      'The lack of interpretability in neural networks.'
    ],
    correctAnswer: 'The fixed-length context vector bottleneck that loses information from long sequences.',
    difficulty: 'advanced',
    explanation: 'Attention allows the decoder to access all encoder hidden states directly, weighted by relevance.'
  },
  {
    id: 'ds-12',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What does "Gradient Clipping" prevent in training deep neural networks?',
    options: [
      'Vanishing gradients that stop learning entirely.',
      'Exploding gradients that cause numerical instability and NaN losses.',
      'Overfitting to training data noise.',
      'Dead neurons in ReLU activations.'
    ],
    correctAnswer: 'Exploding gradients that cause numerical instability and NaN losses.',
    difficulty: 'advanced',
    explanation: 'Gradient clipping caps the norm of gradients, preventing large updates that destabilize training.'
  },
  {
    id: 'ds-13',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What is the key innovation of "ResNet" (Residual Networks)?',
    options: [
      'Using 1x1 convolutions for dimensionality reduction.',
      'Skip connections that allow gradients to flow directly through the network.',
      'Global average pooling instead of fully connected layers.',
      'Batch normalization before each activation.'
    ],
    correctAnswer: 'Skip connections that allow gradients to flow directly through the network.',
    difficulty: 'advanced',
    explanation: 'Residual connections learn F(x) + x, enabling very deep networks (100+ layers) without degradation.'
  },
  {
    id: 'ds-14',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'In Generative Adversarial Networks (GANs), what causes "mode collapse"?',
    options: [
      'The discriminator becomes too weak to guide the generator.',
      'The generator produces limited varieties of outputs, failing to cover the full data distribution.',
      'The learning rate is set too low for convergence.',
      'The batch size exceeds available GPU memory.'
    ],
    correctAnswer: 'The generator produces limited varieties of outputs, failing to cover the full data distribution.',
    difficulty: 'expert',
    explanation: 'Mode collapse occurs when the generator finds a few convincing outputs and repeatedly produces them.'
  },
  {
    id: 'ds-15',
    type: 'mcq',
    category: 'Deep Learning',
    text: 'What does "Weight Decay" regularize in neural network training?',
    options: [
      'The magnitude of weights by adding an L2 penalty to the loss.',
      'The learning rate schedule over training epochs.',
      'The dropout probability for each layer.',
      'The number of neurons in hidden layers.'
    ],
    correctAnswer: 'The magnitude of weights by adding an L2 penalty to the loss.',
    difficulty: 'advanced',
    explanation: 'Weight decay encourages smaller weights, reducing overfitting by limiting model complexity.'
  },

  // Bayesian Methods (16-22)
  {
    id: 'ds-16',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What is the "No-U-Turn Sampler" (NUTS) and why is it important?',
    options: [
      'A variational inference method for faster posterior approximation.',
      'An adaptive Hamiltonian Monte Carlo method that automatically stops when trajectories begin to loop back.',
      'A Gibbs sampling technique for conjugate priors only.',
      'A rejection sampling algorithm for unimodal distributions.'
    ],
    correctAnswer: 'An adaptive Hamiltonian Monte Carlo method that automatically stops when trajectories begin to loop back.',
    difficulty: 'expert',
    explanation: 'NUTS eliminates the need to manually set the number of HMC steps, improving convergence.'
  },
  {
    id: 'ds-17',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'How does "Variational Inference" differ from MCMC methods?',
    options: [
      'VI approximates the posterior with a simpler distribution via optimization; MCMC samples exactly asymptotically.',
      'VI is always more accurate than MCMC.',
      'VI requires conjugate priors while MCMC does not.',
      'VI only works for discrete latent variables.'
    ],
    correctAnswer: 'VI approximates the posterior with a simpler distribution via optimization; MCMC samples exactly asymptotically.',
    difficulty: 'advanced',
    explanation: 'VI scales better to large datasets but provides an approximation, while MCMC is exact but slower.'
  },
  {
    id: 'ds-18',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What is the "Gaussian Process" prior assumption about the latent function?',
    options: [
      'Any finite set of function values follows a multivariate Gaussian distribution.',
      'The function is linear in its parameters.',
      'The function must be periodic and stationary.',
      'The function has independent increments.'
    ],
    correctAnswer: 'Any finite set of function values follows a multivariate Gaussian distribution.',
    difficulty: 'expert',
    explanation: 'GPs define distributions over functions where any finite subset is jointly Gaussian.'
  },
  {
    id: 'ds-19',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What does the "kernel" or "covariance function" control in a Gaussian Process?',
    options: [
      'The likelihood of observed data points.',
      'The smoothness, length-scale, and periodicity of the sampled functions.',
      'The noise variance in the observation model.',
      'The dimensionality of the input space.'
    ],
    correctAnswer: 'The smoothness, length-scale, and periodicity of the sampled functions.',
    difficulty: 'expert',
    explanation: 'Kernels encode prior beliefs about function properties like smoothness and periodicity.'
  },
  {
    id: 'ds-20',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What is the "Beta-Binomial" conjugate prior relationship used for?',
    options: [
      'Modeling the mean of a normal distribution.',
      'Binary outcome modeling where the Beta prior on probability p is conjugate to Binomial likelihood.',
      'Time series forecasting with ARIMA models.',
      'Clustering high-dimensional data points.'
    ],
    correctAnswer: 'Binary outcome modeling where the Beta prior on probability p is conjugate to Binomial likelihood.',
    difficulty: 'advanced',
    explanation: 'Conjugacy means the posterior is also Beta, allowing exact Bayesian updates for Bernoulli/Binomial data.'
  },
  {
    id: 'ds-21',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What is "Empirical Bayes" and when might it be problematic?',
    options: [
      'Using data to estimate prior hyperparameters; can underestimate uncertainty by double-counting.',
      'A fully non-parametric approach with no prior assumptions.',
      'A frequentist method disguised as Bayesian.',
      'Sampling from the posterior without MCMC.'
    ],
    correctAnswer: 'Using data to estimate prior hyperparameters; can underestimate uncertainty by double-counting.',
    difficulty: 'expert',
    explanation: 'Empirical Bayes estimates priors from data, which can lead to overconfident posterior inferences.'
  },
  {
    id: 'ds-22',
    type: 'mcq',
    category: 'Bayesian Methods',
    text: 'What does the "posterior predictive distribution" represent?',
    options: [
      'The prior distribution updated with observed data.',
      'The distribution of new unobserved data given observed data and model uncertainty.',
      'The likelihood function marginalized over parameters.',
      'The maximum a posteriori parameter estimate.'
    ],
    correctAnswer: 'The distribution of new unobserved data given observed data and model uncertainty.',
    difficulty: 'advanced',
    explanation: 'Posterior predictive integrates over parameter uncertainty to predict new observations.'
  },

  // Causal Inference (23-28)
  {
    id: 'ds-23',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What is a "Directed Acyclic Graph" (DAG) used for in causal inference?',
    options: [
      'Visualizing correlation matrices between variables.',
      'Encoding causal assumptions about data-generating processes with directional edges.',
      'Clustering similar data points hierarchically.',
      'Optimizing hyperparameters for ML models.'
    ],
    correctAnswer: 'Encoding causal assumptions about data-generating processes with directional edges.',
    difficulty: 'advanced',
    explanation: 'DAGs represent qualitative causal assumptions, enabling identification of causal effects.'
  },
  {
    id: 'ds-24',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What defines a "confounder" in causal analysis?',
    options: [
      'A variable affected by both treatment and outcome.',
      'A variable that causes both treatment assignment and the outcome, creating spurious association.',
      'A mediator on the causal path from treatment to outcome.',
      'A collider that biases effect estimates when conditioned upon.'
    ],
    correctAnswer: 'A variable that causes both treatment assignment and the outcome, creating spurious association.',
    difficulty: 'advanced',
    explanation: 'Confounders create backdoor paths; conditioning on them removes bias.'
  },
  {
    id: 'ds-25',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What is the "Average Treatment Effect" (ATE) formally defined as?',
    options: [
      'E[Y|T=1] - E[Y|T=0] in observational data.',
      'E[Y(1) - Y(0)], the expected difference in potential outcomes.',
      'The median outcome difference between treated and control groups.',
      'The odds ratio from logistic regression.'
    ],
    correctAnswer: 'E[Y(1) - Y(0)], the expected difference in potential outcomes.',
    difficulty: 'advanced',
    explanation: 'ATE compares potential outcomes under treatment versus control at the individual level.'
  },
  {
    id: 'ds-26',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What is the "Ignorability" (unconfoundedness) assumption?',
    options: [
      'Treatment assignment is independent of potential outcomes given covariates.',
      'There is no measurement error in the outcome variable.',
      'The sample size is large enough for asymptotic normality.',
      'Missing data is completely at random.'
    ],
    correctAnswer: 'Treatment assignment is independent of potential outcomes given covariates.',
    difficulty: 'advanced',
    explanation: 'Ignorability means no unmeasured confounders; treatment is as good as randomized given covariates.'
  },
  {
    id: 'ds-27',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'What does "Difference-in-Differences" (DiD) estimate?',
    options: [
      'Cross-sectional differences between groups.',
      'The causal effect by comparing changes over time between treatment and control groups.',
      'The instrumental variable estimate using two-stage least squares.',
      'The regression discontinuity effect at a cutoff point.'
    ],
    correctAnswer: 'The causal effect by comparing changes over time between treatment and control groups.',
    difficulty: 'advanced',
    explanation: 'DiD removes time-invariant confounding by comparing pre-post differences across groups.'
  },
  {
    id: 'ds-28',
    type: 'mcq',
    category: 'Causal Inference',
    text: 'In Instrumental Variables (IV), what property must the instrument Z satisfy?',
    options: [
      'Z must be correlated with the outcome directly.',
      'Z affects treatment but not outcome except through treatment (exclusion restriction).',
      'Z must be a confounder of the treatment-outcome relationship.',
      'Z must be affected by both treatment and outcome.'
    ],
    correctAnswer: 'Z affects treatment but not outcome except through treatment (exclusion restriction).',
    difficulty: 'expert',
    explanation: 'Valid instruments are relevant (affect treatment) and exclusive (affect outcome only via treatment).'
  },

  // Ensemble Methods (29-35)
  {
    id: 'ds-29',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What distinguishes "Bagging" from "Boosting" in ensemble learning?',
    options: [
      'Bagging trains models in parallel on bootstrap samples; Boosting trains sequentially weighted by errors.',
      'Bagging always outperforms Boosting on large datasets.',
      'Boosting uses random subsets of features; Bagging uses all features.',
      'They are identical in practice with different names.'
    ],
    correctAnswer: 'Bagging trains models in parallel on bootstrap samples; Boosting trains sequentially weighted by errors.',
    difficulty: 'advanced',
    explanation: 'Bagging reduces variance; Boosting reduces bias by focusing on hard examples.'
  },
  {
    id: 'ds-30',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'In Random Forests, why does random feature selection at each split help?',
    options: [
      'It speeds up training by considering fewer features.',
      'It decorrelates individual trees, reducing overall ensemble variance.',
      'It increases the depth of each decision tree.',
      'It eliminates the need for cross-validation.'
    ],
    correctAnswer: 'It decorrelates individual trees, reducing overall ensemble variance.',
    difficulty: 'advanced',
    explanation: 'Random feature selection ensures trees are less correlated, improving generalization.'
  },
  {
    id: 'ds-31',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What is the "learning rate" parameter in Gradient Boosting?',
    options: [
      'The step size for updating tree predictions, controlling contribution of each new tree.',
      'The rate at which tree depth increases during training.',
      'The proportion of features considered at each split.',
      'The threshold for pruning leaf nodes.'
    ],
    correctAnswer: 'The step size for updating tree predictions, controlling contribution of each new tree.',
    difficulty: 'advanced',
    explanation: 'Learning rate (shrinkage) scales each tree\'s contribution, requiring more trees but improving generalization.'
  },
  {
    id: 'ds-32',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What is "XGBoost\'s" main algorithmic improvement over standard Gradient Boosting?',
    options: [
      'Only uses linear base learners instead of trees.',
      'Adds regularization (L1/L2) to the objective and uses second-order gradients (Newton boosting).',
      'Removes the need for cross-validation entirely.',
      'Uses only bootstrap sampling without weighting.'
    ],
    correctAnswer: 'Adds regularization (L1/L2) to the objective and uses second-order gradients (Newton boosting).',
    difficulty: 'advanced',
    explanation: 'XGBoost includes L1/L2 regularization and uses Hessian information for better split finding.'
  },
  {
    id: 'ds-33',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What does "Stacking" (stacked generalization) do?',
    options: [
      'Trains a meta-model to combine predictions from multiple base models.',
      'Averages all model predictions with equal weights.',
      'Trains models sequentially on residual errors.',
      'Uses bootstrapped datasets for each model.'
    ],
    correctAnswer: 'Trains a meta-model to combine predictions from multiple base models.',
    difficulty: 'advanced',
    explanation: 'Stacking learns optimal weights for combining diverse base models using a higher-level model.'
  },
  {
    id: 'ds-34',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What problem does "CatBoost" specifically address regarding categorical features?',
    options: [
      'Converting categorical variables to numeric using target encoding with ordering to prevent target leakage.',
      'Removing all categorical features automatically.',
      'Using one-hot encoding for all categories regardless of cardinality.',
      'Treating categories as ordinal without transformation.'
    ],
    correctAnswer: 'Converting categorical variables to numeric using target encoding with ordering to prevent target leakage.',
    difficulty: 'expert',
    explanation: 'CatBoost uses ordered target encoding based on random permutations to avoid target leakage.'
  },
  {
    id: 'ds-35',
    type: 'mcq',
    category: 'Ensemble Methods',
    text: 'What is the "bias-variance tradeoff" in the context of ensemble methods?',
    options: [
      'Bagging primarily reduces variance; Boosting primarily reduces bias.',
      'Both methods always increase variance.',
      'Ensembles always increase bias to reduce variance.',
      'Bagging reduces bias; Boosting reduces variance.'
    ],
    correctAnswer: 'Bagging primarily reduces variance; Boosting primarily reduces bias.',
    difficulty: 'advanced',
    explanation: 'Bagging averages many high-variance models; Boosting sequentially corrects errors, reducing bias.'
  },

  // Information Theory (36-40)
  {
    id: 'ds-36',
    type: 'mcq',
    category: 'Information Theory',
    text: 'What does "Mutual Information" measure between two random variables?',
    options: [
      'The linear correlation coefficient between variables.',
      'The reduction in uncertainty about one variable given knowledge of the other.',
      'The causal effect from one variable to another.',
      'The Euclidean distance between their distributions.'
    ],
    correctAnswer: 'The reduction in uncertainty about one variable given knowledge of the other.',
    difficulty: 'advanced',
    explanation: 'Mutual information I(X;Y) = H(X) - H(X|Y) captures any dependency, not just linear.'
  },
  {
    id: 'ds-37',
    type: 'mcq',
    category: 'Information Theory',
    text: 'How is "Cross-Entropy" used as a loss function in classification?',
    options: [
      'It measures the distance between predicted probabilities and one-hot encoded true labels.',
      'It penalizes large weight values in the network.',
      'It encourages sparse activations in hidden layers.',
      'It measures the KL divergence between training and test distributions.'
    ],
    correctAnswer: 'It measures the distance between predicted probabilities and one-hot encoded true labels.',
    difficulty: 'advanced',
    explanation: 'Cross-entropy loss = -Σ y_true log(y_pred), minimized when predictions match true distributions.'
  },
  {
    id: 'ds-38',
    type: 'mcq',
    category: 'Information Theory',
    text: 'What is "Entropy" in information theory?',
    options: [
      'The average amount of surprise or information content in a random variable.',
      'The maximum possible compression rate of data.',
      'The correlation between two random variables.',
      'The variance of a probability distribution.'
    ],
    correctAnswer: 'The average amount of surprise or information content in a random variable.',
    difficulty: 'advanced',
    explanation: 'H(X) = -Σ p(x) log p(x) measures uncertainty or average information content.'
  },
  {
    id: 'ds-39',
    type: 'mcq',
    category: 'Information Theory',
    text: 'The "Information Bottleneck" principle optimizes what tradeoff?',
    options: [
      'Between model complexity and training time.',
      'Between compression of input X and preservation of information about output Y.',
      'Between precision and recall in classification.',
      'Between bias and variance in regression.'
    ],
    correctAnswer: 'Between compression of input X and preservation of information about output Y.',
    difficulty: 'expert',
    explanation: 'IB minimizes I(X;T) - β I(T;Y), finding maximally compressed representations predictive of Y.'
  },
  {
    id: 'ds-40',
    type: 'mcq',
    category: 'Information Theory',
    text: 'What does "Jensen-Shannon Divergence" improve over KL Divergence?',
    options: [
      'It is symmetric and always finite, even for non-overlapping distributions.',
      'It works only for Gaussian distributions.',
      'It measures correlation instead of divergence.',
      'It is easier to compute numerically.'
    ],
    correctAnswer: 'It is symmetric and always finite, even for non-overlapping distributions.',
    difficulty: 'advanced',
    explanation: 'JSD = ½ KL(P||M) + ½ KL(Q||M) where M = (P+Q)/2, yielding a symmetric distance metric.'
  },

  // Model Interpretability (41-48)
  {
    id: 'ds-41',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'How do "SHAP" values explain individual predictions?',
    options: [
      'By computing feature importance from tree splits only.',
      'By distributing the prediction as additive feature contributions based on Shapley values from cooperative game theory.',
      'By training a simple linear model locally around the prediction.',
      'By removing features and measuring performance drop.'
    ],
    correctAnswer: 'By distributing the prediction as additive feature contributions based on Shapley values from cooperative game theory.',
    difficulty: 'advanced',
    explanation: 'SHAP values satisfy consistency and local accuracy, providing game-theoretically optimal explanations.'
  },
  {
    id: 'ds-42',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What is the main limitation of "LIME" (Local Interpretable Model-agnostic Explanations)?',
    options: [
      'It only works for tree-based models.',
      'Explanations can be unstable due to random sampling and perturbation sensitivity.',
      'It cannot explain classification predictions, only regression.',
      'It requires retraining the model from scratch.'
    ],
    correctAnswer: 'Explanations can be unstable due to random sampling and perturbation sensitivity.',
    difficulty: 'advanced',
    explanation: 'Different random seeds or perturbations can yield different LIME explanations for the same prediction.'
  },
  {
    id: 'ds-43',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What do "Partial Dependence Plots" (PDP) visualize?',
    options: [
      'The marginal effect of one or two features on the predicted outcome.',
      'The distribution of feature values in the dataset.',
      'The correlation between model errors and feature values.',
      'The feature importance ranking.'
    ],
    correctAnswer: 'The marginal effect of one or two features on the predicted outcome.',
    difficulty: 'advanced',
    explanation: 'PDP averages predictions over all other features, showing how predictions change with a feature.'
  },
  {
    id: 'ds-44',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What problem with PDP does "Individual Conditional Expectation" (ICE) plots address?',
    options: [
      'PDP can hide heterogeneous effects; ICE shows per-instance prediction curves.',
      'PDP is too computationally expensive; ICE is faster.',
      'PDP only works for classification; ICE works for regression.',
      'PDP requires categorical features; ICE works for continuous features.'
    ],
    correctAnswer: 'PDP can hide heterogeneous effects; ICE shows per-instance prediction curves.',
    difficulty: 'advanced',
    explanation: 'ICE plots show one line per observation, revealing whether effects vary across individuals.'
  },
  {
    id: 'ds-45',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What is "Integrated Gradients" attribution method?',
    options: [
      'Gradients averaged along the path from a baseline to the input, satisfying sensitivity and implementation invariance.',
      'Gradients at the input point only, ignoring feature interactions.',
      'Random perturbations of input features to measure importance.',
      'Removing features and measuring accuracy drop.'
    ],
    correctAnswer: 'Gradients averaged along the path from a baseline to the input, satisfying sensitivity and implementation invariance.',
    difficulty: 'expert',
    explanation: 'Integrated Gradients addresses gradient saturation by accumulating gradients along the input path.'
  },
  {
    id: 'ds-46',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What does "Permutation Feature Importance" measure?',
    options: [
      'The increase in model error when a feature\'s values are randomly shuffled.',
      'The correlation between feature and target variable.',
      'The feature\'s variance in the dataset.',
      'The coefficient magnitude in linear models.'
    ],
    correctAnswer: 'The increase in model error when a feature\'s values are randomly shuffled.',
    difficulty: 'advanced',
    explanation: 'Large error increase after permutation indicates feature importance.'
  },
  {
    id: 'ds-47',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What are "Anchors" in interpretable ML?',
    options: [
      'Rules that sufficiently constrain predictions such that changes to other features don\'t matter (precision guarantees).',
      'The most important features in a random forest.',
      'Clusters of similar predictions in latent space.',
      'The initial weights of a neural network.'
    ],
    correctAnswer: 'Rules that sufficiently constrain predictions such that changes to other features don\'t matter (precision guarantees).',
    difficulty: 'expert',
    explanation: 'Anchors provide model-agnostic if-then rules with high precision for local explanations.'
  },
  {
    id: 'ds-48',
    type: 'mcq',
    category: 'Model Interpretability',
    text: 'What is "TCAV" (Testing with Concept Activation Vectors)?',
    options: [
      'A method to test if a model uses user-defined high-level concepts (e.g., "stripes" for zebra classification).',
      'A cross-validation technique for neural networks.',
      'An activation function for deep networks.',
      'A dimensionality reduction method for interpretability.'
    ],
    correctAnswer: 'A method to test if a model uses user-defined high-level concepts (e.g., "stripes" for zebra classification).',
    difficulty: 'expert',
    explanation: 'TCAV quantifies model sensitivity to concepts defined by directional vectors in activation space.'
  },

  // Feature Engineering & Selection (49-55)
  {
    id: 'ds-49',
    type: 'mcq',
    category: 'Feature Selection',
    text: 'What is "Recursive Feature Elimination" (RFE) with cross-validation?',
    options: [
      'Randomly removing features until performance drops.',
      'Recursively removing the least important features based on model coefficients, using CV to find optimal count.',
      'Adding features one by one based on correlation.',
      'Transforming features using PCA before selection.'
    ],
    correctAnswer: 'Recursively removing the least important features based on model coefficients, using CV to find optimal count.',
    difficulty: 'advanced',
    explanation: 'RFE-CV uses model feature importance (e.g., coefficients) to iteratively eliminate features.'
  },
  {
    id: 'ds-50',
    type: 'mcq',
    category: 'Feature Selection',
    text: 'What distinguishes "Boruta" feature selection from other methods?',
    options: [
      'It compares feature importance against randomized shadow features to identify truly relevant features.',
      'It uses only univariate statistical tests.',
      'It requires all features to be normally distributed.',
      'It removes features with missing values automatically.'
    ],
    correctAnswer: 'It compares feature importance against randomized shadow features to identify truly relevant features.',
    difficulty: 'expert',
    explanation: 'Boruta creates shuffled copies of features and selects those more important than their shadows.'
  },
  {
    id: 'ds-51',
    type: 'mcq',
    category: 'Feature Selection',
    text: 'What does "LASSO" regression do for feature selection?',
    options: [
      'Uses L1 regularization that can shrink some coefficients exactly to zero, performing automatic selection.',
      'Uses L2 regularization that keeps all features but shrinks coefficients.',
      'Performs forward stepwise selection based on p-values.',
      'Removes features with low variance.'
    ],
    correctAnswer: 'Uses L1 regularization that can shrink some coefficients exactly to zero, performing automatic selection.',
    difficulty: 'advanced',
    explanation: 'L1 penalty (Σ|β|) creates sparse solutions suitable for feature selection.'
  },
  {
    id: 'ds-52',
    type: 'mcq',
    category: 'Feature Engineering',
    text: 'What is "Target Encoding" and what risk does it carry?',
    options: [
      'Encoding categorical variables with mean target value per category; risk of target leakage and overfitting.',
      'One-hot encoding high-cardinality features; risk of dimensionality explosion.',
      'Ordinal encoding based on frequency; risk of losing information.',
      'Binary encoding for large categories; risk of high memory usage.'
    ],
    correctAnswer: 'Encoding categorical variables with mean target value per category; risk of target leakage and overfitting.',
    difficulty: 'advanced',
    explanation: 'Target encoding uses smoothing (e.g., adding prior) and cross-validation to prevent leakage.'
  },
  {
    id: 'ds-53',
    type: 'mcq',
    category: 'Feature Engineering',
    text: 'What does "Polynomial Features" expansion do to feature space?',
    options: [
      'Creates interaction and power terms, exponentially increasing dimensionality.',
      'Reduces dimensionality by combining correlated features.',
      'Scales all features to unit variance.',
      'Replaces missing values with polynomial interpolations.'
    ],
    correctAnswer: 'Creates interaction and power terms, exponentially increasing dimensionality.',
    difficulty: 'advanced',
    explanation: 'Polynomial features (e.g., x1², x1*x2) capture non-linear relationships but risk overfitting.'
  },
  {
    id: 'ds-54',
    type: 'mcq',
    category: 'Feature Engineering',
    text: 'What is "Feature Crossing" in machine learning?',
    options: [
      'Combining two or more features into a synthetic feature capturing interactions.',
      'Removing features with high correlation.',
      'Normalizing features to the same scale.',
      'Selecting features based on mutual information.'
    ],
    correctAnswer: 'Combining two or more features into a synthetic feature capturing interactions.',
    difficulty: 'advanced',
    explanation: 'Feature crossing (e.g., [day_of_week, hour] → "Monday_9am") allows linear models to learn interactions.'
  },
  {
    id: 'ds-55',
    type: 'mcq',
    category: 'Feature Selection',
    text: 'What is the "Minimum Redundancy Maximum Relevance" (mRMR) criterion?',
    options: [
      'Select features with high relevance to target but low redundancy among themselves.',
      'Remove features with minimum variance.',
      'Select features based on L1 regularization only.',
      'Use PCA components as features.'
    ],
    correctAnswer: 'Select features with high relevance to target but low redundancy among themselves.',
    difficulty: 'expert',
    explanation: 'mRMR balances relevance (mutual info with target) and redundancy (mutual info between features).'
  },

  // Optimization & Hyperparameter Tuning (56-63)
  {
    id: 'ds-56',
    type: 'mcq',
    category: 'Hyperparameter Tuning',
    text: 'Why is "Bayesian Optimization" often better than Grid Search for hyperparameter tuning?',
    options: [
      'It evaluates all combinations in parallel.',
      'It uses a probabilistic surrogate model to focus on promising regions, requiring fewer evaluations.',
      'It guarantees finding the global optimum.',
      'It works only for neural networks.'
    ],
    correctAnswer: 'It uses a probabilistic surrogate model to focus on promising regions, requiring fewer evaluations.',
    difficulty: 'advanced',
    explanation: 'Bayesian Optimization (GP-based) balances exploration vs exploitation, efficient for expensive evaluations.'
  },
  {
    id: 'ds-57',
    type: 'mcq',
    category: 'Hyperparameter Tuning',
    text: 'What is "Random Search" hyperparameter optimization and when is it effective?',
    options: [
      'Searches random combinations; often outperforms grid search when only few parameters matter.',
      'Searches a predefined grid; always finds the optimum.',
      'Uses gradient descent to tune parameters.',
      'Only works for tree-based models.'
    ],
    correctAnswer: 'Searches random combinations; often outperforms grid search when only few parameters matter.',
    difficulty: 'advanced',
    explanation: 'Random search samples from distributions, discovering important parameters with fewer trials.'
  },
  {
    id: 'ds-58',
    type: 'mcq',
    category: 'Hyperparameter Tuning',
    text: 'What is the "learning rate schedule" in neural network training?',
    options: [
      'A fixed learning rate throughout training.',
      'A strategy to decrease learning rate over time (e.g., step decay, cosine annealing).',
      'The rate at which dropout is applied.',
      'The momentum parameter for SGD.'
    ],
    correctAnswer: 'A strategy to decrease learning rate over time (e.g., step decay, cosine annealing).',
    difficulty: 'advanced',
    explanation: 'Learning rate schedules help converge by taking smaller steps as training progresses.'
  },
  {
    id: 'ds-59',
    type: 'mcq',
    category: 'Optimization',
    text: 'What does the "Adam" optimizer adaptively adjust during training?',
    options: [
      'Per-parameter learning rates using first and second moments of gradients.',
      'The batch size based on gradient noise.',
      'The number of layers in the network.',
      'The dropout probability over epochs.'
    ],
    correctAnswer: 'Per-parameter learning rates using first and second moments of gradients.',
    difficulty: 'advanced',
    explanation: 'Adam combines momentum (first moment) and RMSprop (second moment) with bias correction.'
  },
  {
    id: 'ds-60',
    type: 'mcq',
    category: 'Optimization',
    text: 'What problem does "Warm Restarts" (Cosine Annealing) address?',
    options: [
      'Escaping local minima by periodically resetting learning rate, potentially finding better optima.',
      'Reducing memory usage during training.',
      'Increasing training speed by skipping epochs.',
      'Preventing gradient explosion in deep networks.'
    ],
    correctAnswer: 'Escaping local minima by periodically resetting learning rate, potentially finding better optima.',
    difficulty: 'expert',
    explanation: 'SGDR restarts learning rate to help escape sharp minima and find flatter regions.'
  },
  {
    id: 'ds-61',
    type: 'mcq',
    category: 'Optimization',
    text: 'What is "Sharpness-Aware Minimization" (SAM)?',
    options: [
      'An optimizer that seeks flat minima by minimizing maximum loss within a neighborhood.',
      'A method to detect sharp features in images.',
      'A learning rate scheduler that increases sharpness.',
      'A regularization technique that adds noise to gradients.'
    ],
    correctAnswer: 'An optimizer that seeks flat minima by minimizing maximum loss within a neighborhood.',
    difficulty: 'expert',
    explanation: 'SAM improves generalization by finding parameters with uniformly low loss in a region.'
  },
  {
    id: 'ds-62',
    type: 'mcq',
    category: 'Hyperparameter Tuning',
    text: 'What is "nested cross-validation" used for?',
    options: [
      'Unbiased evaluation of model performance while tuning hyperparameters.',
      'Training faster by using fewer folds.',
      'Only for time series data.',
      'Replacing the need for a test set.'
    ],
    correctAnswer: 'Unbiased evaluation of model performance while tuning hyperparameters.',
    difficulty: 'advanced',
    explanation: 'Inner loop selects hyperparameters; outer loop estimates generalization error without overfitting.'
  },
  {
    id: 'ds-63',
    type: 'mcq',
    category: 'Optimization',
    text: 'What does "Gradient Descent with Momentum" accelerate?',
    options: [
      'Convergence in ravines and prevents oscillations by accumulating past gradients.',
      'The forward pass computation.',
      'The dropout rate adaptation.',
      'The batch normalization statistics.'
    ],
    correctAnswer: 'Convergence in ravines and prevents oscillations by accumulating past gradients.',
    difficulty: 'advanced',
    explanation: 'Momentum adds a fraction of previous update to current gradient, smoothing optimization.'
  },

  // Model Evaluation & Validation (64-72)
  {
    id: 'ds-64',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is the "F1 Score" and when is it preferred over accuracy?',
    options: [
      'Harmonic mean of precision and recall; preferred for imbalanced classes.',
      'Arithmetic mean of precision and recall; used for balanced classes.',
      'Product of precision and recall; used for regression.',
      'Sum of precision and recall; used for multi-class.'
    ],
    correctAnswer: 'Harmonic mean of precision and recall; preferred for imbalanced classes.',
    difficulty: 'advanced',
    explanation: 'F1 = 2*(precision*recall)/(precision+recall) balances false positives and false negatives.'
  },
  {
    id: 'ds-65',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is "Matthews Correlation Coefficient" (MCC)?',
    options: [
      'A balanced measure of binary classification quality using all four confusion matrix categories.',
      'The correlation between two models\' predictions.',
      'The area under the precision-recall curve.',
      'The coefficient of determination for regression.'
    ],
    correctAnswer: 'A balanced measure of binary classification quality using all four confusion matrix categories.',
    difficulty: 'advanced',
    explanation: 'MCC ranges from -1 to +1, with +1 perfect prediction, 0 random, -1 total disagreement.'
  },
  {
    id: 'ds-66',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is "Brier Score" used for evaluating?',
    options: [
      'Probabilistic predictions (e.g., probability of rain) - mean squared error of predicted probabilities.',
      'Binary classification accuracy.',
      'Regression model R-squared.',
      'Clustering silhouette score.'
    ],
    correctAnswer: 'Probabilistic predictions (e.g., probability of rain) - mean squared error of predicted probabilities.',
    difficulty: 'advanced',
    explanation: 'Brier = 1/n Σ (p_i - o_i)², where o_i is actual outcome (0 or 1). Lower is better.'
  },
  {
    id: 'ds-67',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What does "Calibration" mean for probabilistic classifiers?',
    options: [
      'Predicted probabilities reflect true underlying probabilities (e.g., 70% confidence means 70% accuracy).',
      'Features are scaled to unit variance.',
      'The model is trained on balanced data.',
      'Hyperparameters are optimized.'
    ],
    correctAnswer: 'Predicted probabilities reflect true underlying probabilities (e.g., 70% confidence means 70% accuracy).',
    difficulty: 'advanced',
    explanation: 'Calibration curves (reliability diagrams) and Platt scaling adjust overconfident models.'
  },
  {
    id: 'ds-68',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is "Stratified K-Fold Cross-Validation"?',
    options: [
      'Preserves class distribution in each fold, crucial for imbalanced datasets.',
      'Randomly shuffles data without regard to classes.',
      'Uses time-based splits for temporal data.',
      'Removes outliers before splitting.'
    ],
    correctAnswer: 'Preserves class distribution in each fold, crucial for imbalanced datasets.',
    difficulty: 'advanced',
    explanation: 'Stratified ensures each fold has same class proportions as full dataset.'
  },
  {
    id: 'ds-69',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What problem does "Leave-One-Out Cross-Validation" (LOOCV) have?',
    options: [
      'Very high computational cost for large datasets (n models to train).',
      'High bias in performance estimates.',
      'Cannot be used for classification.',
      'Requires normally distributed data.'
    ],
    correctAnswer: 'Very high computational cost for large datasets (n models to train).',
    difficulty: 'advanced',
    explanation: 'LOOCV trains n models (one per sample), but is nearly unbiased for n small.'
  },
  {
    id: 'ds-70',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is "ROC AUC" measuring?',
    options: [
      'The area under the True Positive Rate vs False Positive Rate curve; probability that a random positive scores higher than a random negative.',
      'The area under precision-recall curve.',
      'The accuracy of the model at a single threshold.',
      'The F1 score averaged over thresholds.'
    ],
    correctAnswer: 'The area under the True Positive Rate vs False Positive Rate curve; probability that a random positive scores higher than a random negative.',
    difficulty: 'advanced',
    explanation: 'AUC = 0.5 is random, 1.0 perfect; threshold-invariant measure of ranking quality.'
  },
  {
    id: 'ds-71',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What is "Log Loss" (Cross-Entropy Loss) sensitive to?',
    options: [
      'Confidence of incorrect predictions; heavily penalizes confident wrong predictions.',
      'Only the ordering of predictions, not magnitudes.',
      'The class imbalance in the dataset.',
      'The number of features used.'
    ],
    correctAnswer: 'Confidence of incorrect predictions; heavily penalizes confident wrong predictions.',
    difficulty: 'advanced',
    explanation: 'Log loss = -[y log(p) + (1-y) log(1-p)]; being confident and wrong is very costly.'
  },
  {
    id: 'ds-72',
    type: 'mcq',
    category: 'Model Evaluation',
    text: 'What does "Cohen\'s Kappa" measure beyond accuracy?',
    options: [
      'Agreement between predicted and actual labels, accounting for chance agreement.',
      'The correlation between two models.',
      'The variance of predictions.',
      'The bias of the model.'
    ],
    correctAnswer: 'Agreement between predicted and actual labels, accounting for chance agreement.',
    difficulty: 'advanced',
    explanation: 'Kappa = (observed accuracy - expected accuracy)/(1 - expected accuracy).'
  },

  // Big Data & Distributed Computing (73-78)
  {
    id: 'ds-73',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is the "Spark Catalyst Optimizer"?',
    options: [
      'A query optimizer using rule-based and cost-based optimization for DataFrame/Dataset operations.',
      'A memory management system for RDDs.',
      'A shuffle service for reducing network traffic.',
      'A checkpointing mechanism for fault tolerance.'
    ],
    correctAnswer: 'A query optimizer using rule-based and cost-based optimization for DataFrame/Dataset operations.',
    difficulty: 'advanced',
    explanation: 'Catalyst optimizes logical and physical query plans using tree transformations.'
  },
  {
    id: 'ds-74',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is "Spark Tungsten"?',
    options: [
      'An engine that uses off-heap memory management, cache-aware computation, and code generation.',
      'A storage format for columnar data.',
      'A scheduling algorithm for cluster resources.',
      'A data source API for streaming.'
    ],
    correctAnswer: 'An engine that uses off-heap memory management, cache-aware computation, and code generation.',
    difficulty: 'expert',
    explanation: 'Tungsten optimizes memory and CPU efficiency for Spark operations.'
  },
  {
    id: 'ds-75',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is the difference between "RDD", "DataFrame", and "Dataset" in Spark?',
    options: [
      'RDD is low-level with no schema; DataFrame has schema and optimizations; Dataset adds type safety.',
      'All are identical with different names.',
      'RDD is fastest; DataFrame is slowest.',
      'Dataset is deprecated; DataFrame is recommended for all cases.'
    ],
    correctAnswer: 'RDD is low-level with no schema; DataFrame has schema and optimizations; Dataset adds type safety.',
    difficulty: 'advanced',
    explanation: 'DataFrames use Catalyst optimizer; Datasets provide compile-time type checking.'
  },
  {
    id: 'ds-76',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is "Parquet" file format optimized for?',
    options: [
      'Columnar storage with compression and predicate pushdown for analytical queries.',
      'Row-based storage for fast inserts and updates.',
      'JSON document storage for nested data.',
      'Key-value storage for low-latency lookups.'
    ],
    correctAnswer: 'Columnar storage with compression and predicate pushdown for analytical queries.',
    difficulty: 'advanced',
    explanation: 'Parquet stores columns separately, enabling efficient scanning of subset of columns.'
  },
  {
    id: 'ds-77',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is "Dask" and how does it differ from Spark?',
    options: [
      'Dask integrates tightly with Python ecosystem (NumPy, Pandas) and scales on single machine or cluster with familiar APIs.',
      'Dask is a database, Spark is a processing engine.',
      'Dask only runs on Hadoop, Spark is cloud-native.',
      'Dask has no task scheduling; Spark does.'
    ],
    correctAnswer: 'Dask integrates tightly with Python ecosystem (NumPy, Pandas) and scales on single machine or cluster with familiar APIs.',
    difficulty: 'advanced',
    explanation: 'Dask uses dynamic task graphs and lazy evaluation, emphasizing Python compatibility.'
  },
  {
    id: 'ds-78',
    type: 'mcq',
    category: 'Big Data Ecosystem',
    text: 'What is "Ray" primarily designed for?',
    options: [
      'Distributed reinforcement learning and AI workloads, with actor model and task parallelism.',
      'Batch processing of SQL queries.',
      'Real-time stream processing only.',
      'Graph database storage.'
    ],
    correctAnswer: 'Distributed reinforcement learning and AI workloads, with actor model and task parallelism.',
    difficulty: 'advanced',
    explanation: 'Ray provides distributed scheduling for RL, hyperparameter tuning, and model serving.'
  },

  // Clustering & Unsupervised Learning (79-85)
  {
    id: 'ds-79',
    type: 'mcq',
    category: 'Clustering',
    text: 'What is the "Elbow Method" used for in K-Means clustering?',
    options: [
      'Selecting the optimal number of clusters by finding where inertia decrease rate slows.',
      'Visualizing cluster boundaries.',
      'Initializing cluster centroids.',
      'Measuring cluster silhouette score.'
    ],
    correctAnswer: 'Selecting the optimal number of clusters by finding where inertia decrease rate slows.',
    difficulty: 'advanced',
    explanation: 'Elbow point balances within-cluster sum of squares vs number of clusters.'
  },
  {
    id: 'ds-80',
    type: 'mcq',
    category: 'Clustering',
    text: 'What problem does "DBSCAN" solve compared to K-Means?',
    options: [
      'Finds arbitrarily shaped clusters and handles noise/outliers without specifying number of clusters.',
      'Works faster on large datasets.',
      'Always finds spherical clusters.',
      'Requires less memory.'
    ],
    correctAnswer: 'Finds arbitrarily shaped clusters and handles noise/outliers without specifying number of clusters.',
    difficulty: 'advanced',
    explanation: 'DBSCAN clusters dense regions separated by sparse areas using ε-neighborhoods.'
  },
  {
    id: 'ds-81',
    type: 'mcq',
    category: 'Clustering',
    text: 'What is the "Silhouette Score" measuring?',
    options: [
      'How similar a point is to its own cluster compared to other clusters (cohesion vs separation).',
      'The distance between cluster centers.',
      'The number of points in each cluster.',
      'The variance within clusters.'
    ],
    correctAnswer: 'How similar a point is to its own cluster compared to other clusters (cohesion vs separation).',
    difficulty: 'advanced',
    explanation: 'Silhouette = (b - a)/max(a,b), ranges -1 to +1 (higher is better).'
  },
  {
    id: 'ds-82',
    type: 'mcq',
    category: 'Clustering',
    text: 'What is "HDBSCAN" improving over DBSCAN?',
    options: [
      'Hierarchical clustering across densities, produces clusters of varying density without global ε parameter.',
      'Adds support for categorical data.',
      'Runs on GPUs for faster computation.',
      'Guarantees convex cluster shapes.'
    ],
    correctAnswer: 'Hierarchical clustering across densities, produces clusters of varying density without global ε parameter.',
    difficulty: 'expert',
    explanation: 'HDBSCAN builds a hierarchy of DBSCAN results and extracts stable clusters.'
  },
  {
    id: 'ds-83',
    type: 'mcq',
    category: 'Clustering',
    text: 'What is "Gaussian Mixture Models" (GMM) assumption about clusters?',
    options: [
      'Data points come from mixture of Gaussian distributions, each with own mean and covariance.',
      'Clusters are spherical and equally sized.',
      'Clusters are separated by linear boundaries.',
      'Each point belongs to exactly one cluster.'
    ],
    correctAnswer: 'Data points come from mixture of Gaussian distributions, each with own mean and covariance.',
    difficulty: 'advanced',
    explanation: 'GMM uses expectation-maximization (EM) for soft clustering with probabilistic assignments.'
  },
  {
    id: 'ds-84',
    type: 'mcq',
    category: 'Clustering',
    text: 'What is the "AIC" (Akaike Information Criterion) used for in clustering?',
    options: [
      'Model selection balancing goodness-of-fit and complexity (penalizing number of parameters).',
      'Measuring cluster separation.',
      'Initializing cluster centers.',
      'Validating cluster stability.'
    ],
    correctAnswer: 'Model selection balancing goodness-of-fit and complexity (penalizing number of parameters).',
    difficulty: 'advanced',
    explanation: 'AIC = -2 log(L) + 2k; lower AIC indicates better model trade-off.'
  },
  {
    id: 'ds-85',
    type: 'mcq',
    category: 'Clustering',
    text: 'What does "t-SNE" primarily preserve in its low-dimensional embeddings?',
    options: [
      'Local neighborhood structure (similar points stay close), but not global distances.',
      'Global pairwise distances between all points.',
      'The variance of the original data.',
      'The cluster centroids locations.'
    ],
    correctAnswer: 'Local neighborhood structure (similar points stay close), but not global distances.',
    difficulty: 'advanced',
    explanation: 't-SNE uses heavy-tailed distributions to focus on local similarity, excellent for visualization.'
  },

  // Dimensionality Reduction (86-92)
  {
    id: 'ds-86',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is "Principal Component Analysis" (PCA) maximizing?',
    options: [
      'Variance of projected data (or minimizing reconstruction error).',
      'The mutual information between components.',
      'The kurtosis of components.',
      'The sparsity of component loadings.'
    ],
    correctAnswer: 'Variance of projected data (or minimizing reconstruction error).',
    difficulty: 'advanced',
    explanation: 'PCA finds orthogonal directions of maximum variance via eigendecomposition of covariance matrix.'
  },
  {
    id: 'ds-87',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is the key difference between PCA and t-SNE?',
    options: [
      'PCA is linear and preserves global structure; t-SNE is non-linear and preserves local neighborhoods.',
      'PCA works for categorical data; t-SNE only for continuous.',
      'PCA is stochastic; t-SNE is deterministic.',
      'PCA preserves distances exactly; t-SNE does not.'
    ],
    correctAnswer: 'PCA is linear and preserves global structure; t-SNE is non-linear and preserves local neighborhoods.',
    difficulty: 'advanced',
    explanation: 'PCA captures global variance; t-SNE reveals local clusters and manifolds.'
  },
  {
    id: 'ds-88',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is "UMAP" improving over t-SNE?',
    options: [
      'Preserves more global structure, faster runtime, and better scaling to large datasets.',
      'Only works for classification.',
      'Requires labeled data.',
      'Produces 1D embeddings only.'
    ],
    correctAnswer: 'Preserves more global structure, faster runtime, and better scaling to large datasets.',
    difficulty: 'expert',
    explanation: 'UMAP uses manifold learning and Riemannian geometry with faster nearest-neighbor search.'
  },
  {
    id: 'ds-89',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What does "Autoencoder" learn for dimensionality reduction?',
    options: [
      'Non-linear encoding via neural network, trained to reconstruct input from bottleneck layer.',
      'Linear projections like PCA.',
      'Random projections for fast reduction.',
      'Sparse coding with dictionary learning.'
    ],
    correctAnswer: 'Non-linear encoding via neural network, trained to reconstruct input from bottleneck layer.',
    difficulty: 'advanced',
    explanation: 'Autoencoders learn latent representations by compressing and reconstructing data.'
  },
  {
    id: 'ds-90',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is "Sparse PCA" useful for?',
    options: [
      'Creating principal components with few non-zero loadings, improving interpretability.',
      'Faster computation of PCA on GPUs.',
      'Handling missing data in PCA.',
      'Non-linear dimensionality reduction.'
    ],
    correctAnswer: 'Creating principal components with few non-zero loadings, improving interpretability.',
    difficulty: 'expert',
    explanation: 'Sparse PCA adds L1 penalty to loading vectors, yielding interpretable components.'
  },
  {
    id: 'ds-91',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What does "Isomap" preserve?',
    options: [
      'Geodesic distances along the manifold, not Euclidean distances.',
      'Local neighborhood only, like t-SNE.',
      'Global variance, like PCA.',
      'The clustering structure only.'
    ],
    correctAnswer: 'Geodesic distances along the manifold, not Euclidean distances.',
    difficulty: 'expert',
    explanation: 'Isomap computes shortest paths through nearest-neighbor graph to approximate manifold distances.'
  },
  {
    id: 'ds-92',
    type: 'mcq',
    category: 'Dimensionality Reduction',
    text: 'What is the "explained variance ratio" in PCA?',
    options: [
      'Proportion of total dataset variance captured by each principal component.',
      'The variance of the reconstruction error.',
      'The correlation between components.',
      'The eigenvalue of the covariance matrix.'
    ],
    correctAnswer: 'Proportion of total dataset variance captured by each principal component.',
    difficulty: 'advanced',
    explanation: 'Sum of explained variance ratios indicates how much information is retained after reduction.'
  },

  // Time Series (93-98)
  {
    id: 'ds-93',
    type: 'mcq',
    category: 'Time Series',
    text: 'What does "ARIMA" model stand for and what components does it have?',
    options: [
      'AutoRegressive Integrated Moving Average: AR(p), I(d), MA(q) for non-stationary time series.',
      'AutoRegressive Infinite Moving Average: AR(∞), MA(∞).',
      'Adaptive Recurrent Integrated Model Average: for deep learning.',
      'AutoRegressive Independent Moving Average: for multivariate series.'
    ],
    correctAnswer: 'AutoRegressive Integrated Moving Average: AR(p), I(d), MA(q) for non-stationary time series.',
    difficulty: 'advanced',
    explanation: 'AR models past values, MA models past errors, I differencing makes series stationary.'
  },
  {
    id: 'ds-94',
    type: 'mcq',
    category: 'Time Series',
    text: 'What does the "Augmented Dickey-Fuller" (ADF) test check?',
    options: [
      'Whether a time series is stationary (has unit root) - null hypothesis is non-stationarity.',
      'Whether there is seasonality in the series.',
      'The autocorrelation at lag 1.',
      'The normality of residuals.'
    ],
    correctAnswer: 'Whether a time series is stationary (has unit root) - null hypothesis is non-stationarity.',
    difficulty: 'advanced',
    explanation: 'Rejecting ADF null (p < 0.05) suggests stationarity.'
  },
  {
    id: 'ds-95',
    type: 'mcq',
    category: 'Time Series',
    text: 'What is "Prophet" forecasting model designed for?',
    options: [
      'Business time series with strong seasonality, holidays, and missing data, with intuitive parameters.',
      'High-frequency financial data only.',
      'Stationary series with no seasonality.',
      'Multivariate time series with many features.'
    ],
    correctAnswer: 'Business time series with strong seasonality, holidays, and missing data, with intuitive parameters.',
    difficulty: 'advanced',
    explanation: 'Prophet decomposes into trend, seasonality, holidays, and error components.'
  },
  {
    id: 'ds-96',
    type: 'mcq',
    category: 'Time Series',
    text: 'What is "LSTM" designed to address in sequence modeling?',
    options: [
      'The vanishing gradient problem in RNNs, enabling learning of long-term dependencies.',
      'The computational cost of attention mechanisms.',
      'The need for stationary data.',
      'The lack of interpretability in RNNs.'
    ],
    correctAnswer: 'The vanishing gradient problem in RNNs, enabling learning of long-term dependencies.',
    difficulty: 'advanced',
    explanation: 'LSTM uses gating mechanisms (input, forget, output) to control information flow.'
  },
  {
    id: 'ds-97',
    type: 'mcq',
    category: 'Time Series',
    text: 'What does "PACF" (Partial Autocorrelation Function) help identify?',
    options: [
      'The order p of AR model by showing correlation after removing intermediate lags.',
      'The order q of MA model.',
      'The seasonality period.',
      'The stationarity of the series.'
    ],
    correctAnswer: 'The order p of AR model by showing correlation after removing intermediate lags.',
    difficulty: 'advanced',
    explanation: 'PACF cuts off after lag p for AR(p) processes.'
  },
  {
    id: 'ds-98',
    type: 'mcq',
    category: 'Time Series',
    text: 'What is "Dynamic Time Warping" (DTW) used for?',
    options: [
      'Measuring similarity between sequences that may vary in speed or timing.',
      'Warping images to align features.',
      'Compressing time series data.',
      'Predicting future values in a series.'
    ],
    correctAnswer: 'Measuring similarity between sequences that may vary in speed or timing.',
    difficulty: 'advanced',
    explanation: 'DTW finds optimal non-linear alignment minimizing distance between sequences.'
  },

  // MLOps & Production (99-100)
  {
    id: 'ds-99',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Model Drift" in production ML systems?',
    options: [
      'Degradation in model performance due to changes in data distribution over time.',
      'The model\'s weights changing during training.',
      'Hardware failures causing inference errors.',
      'The model being retrained too frequently.'
    ],
    correctAnswer: 'Degradation in model performance due to changes in data distribution over time.',
    difficulty: 'advanced',
    explanation: 'Data drift (input distribution) and concept drift (target relationship) require monitoring.'
  },
  {
    id: 'ds-100',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Feature Store" in ML production architecture?',
    options: [
      'Centralized repository for feature definitions, transformations, and serving, ensuring consistency between training and inference.',
      'A database for storing model checkpoints.',
      'A pipeline for data ingestion only.',
      'A visualization tool for feature importance.'
    ],
    correctAnswer: 'Centralized repository for feature definitions, transformations, and serving, ensuring consistency between training and inference.',
    difficulty: 'advanced',
    explanation: 'Feature stores prevent training-serving skew and enable feature reuse across models.'
  }
];

// Verify we have exactly 100 questions
console.assert(DATA_SCIENCE_QUESTIONS.length === 100, 
  `Expected 100 questions, got ${DATA_SCIENCE_QUESTIONS.length}`);

// Optional: Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'advanced' | 'expert'): Question[] => {
  return DATA_SCIENCE_QUESTIONS.filter(q => q.difficulty === difficulty);
};

// Optional: Helper to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return DATA_SCIENCE_QUESTIONS.filter(q => q.category === category);
};

// Optional: Get random subset for exams
export const getRandomQuestions = (count: number, seed?: number): Question[] => {
  const shuffled = [...DATA_SCIENCE_QUESTIONS];
  if (seed !== undefined) {
    let randomSeed = seed;
    for (let i = shuffled.length - 1; i > 0; i--) {
      randomSeed = (randomSeed * 9301 + 49297) % 233280;
      const j = Math.floor((randomSeed / 233280) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } else {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  return shuffled.slice(0, count);
};

export default DATA_SCIENCE_QUESTIONS;