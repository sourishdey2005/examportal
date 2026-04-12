import { Question } from '../types';

export const AI_ML_QUESTIONS: Question[] = [
  // ==================== TRANSFORMER ARCHITECTURE & LLMs (Questions 1-15) ====================
  {
    id: 'ai-1',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'In the "Attention is All You Need" paper, why is "Scaled Dot-Product Attention" preferred over simple dot-product attention for large dimensions?',
    options: [
      'To reduce the computational complexity from O(n^2) to O(n).',
      'To prevent the dot products from growing large in magnitude, which would push the softmax function into regions with extremely small gradients.',
      'To allow for parallel processing of the sequence tokens.',
      'To ensure that the attention weights always sum to exactly one.'
    ],
    correctAnswer: 'To prevent the dot products from growing large in magnitude, which would push the softmax function into regions with extremely small gradients.'
  },
  {
    id: 'ai-2',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is the primary purpose of Rotary Position Embeddings (RoPE) in modern LLMs like Llama and PaLM?',
    options: [
      'To reduce the vocabulary size by 50%.',
      'To encode relative positional information through rotation matrices, allowing better extrapolation to longer sequences.',
      'To eliminate the need for attention mechanisms entirely.',
      'To compress the model weights for faster inference.'
    ],
    correctAnswer: 'To encode relative positional information through rotation matrices, allowing better extrapolation to longer sequences.'
  },
  {
    id: 'ai-3',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'In the context of the "Deadly Triad" in Reinforcement Learning, which combination is known to cause instability?',
    options: [
      'High learning rate, batch normalization, and dropout.',
      'Function approximation, bootstrapping, and off-policy learning.',
      'Gradient clipping, weight decay, and momentum.',
      'Experience replay, target networks, and epsilon-greedy exploration.'
    ],
    correctAnswer: 'Function approximation, bootstrapping, and off-policy learning.'
  },
  {
    id: 'ai-4',
    type: 'mcq',
    category: 'Neural Architecture',
    text: 'What is the primary benefit of "Grouped Query Attention" (GQA) as used in models like Llama 3?',
    options: [
      'It increases the model\'s reasoning capabilities by 2x.',
      'It provides a balance between Multi-Head Attention (MHA) and Multi-Query Attention (MQA), reducing KV cache size while maintaining performance.',
      'It allows the model to process infinite-length sequences.',
      'It eliminates the need for positional embeddings.'
    ],
    correctAnswer: 'It provides a balance between Multi-Head Attention (MHA) and Multi-Query Attention (MQA), reducing KV cache size while maintaining performance.'
  },
  {
    id: 'ai-5',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is the "Sharpness-Aware Minimization" (SAM) technique primarily designed to improve in deep learning models?',
    options: [
      'The speed of convergence during the first few epochs.',
      'Generalization by seeking parameters that lie in neighborhoods of uniformly low loss rather than just a single sharp minimum.',
      'The memory efficiency of the backpropagation algorithm.',
      'The ability of the model to handle missing data in the input features.'
    ],
    correctAnswer: 'Generalization by seeking parameters that lie in neighborhoods of uniformly low loss rather than just a single sharp minimum.'
  },
  {
    id: 'ai-6',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is the key innovation of the LoRA (Low-Rank Adaptation) method for fine-tuning large language models?',
    options: [
      'It freezes all model parameters and only trains small low-rank decomposition matrices injected into each layer.',
      'It increases the model size by adding extra attention heads.',
      'It replaces the transformer architecture with RNNs during fine-tuning.',
      'It requires retraining the entire model from scratch with lower precision.'
    ],
    correctAnswer: 'It freezes all model parameters and only trains small low-rank decomposition matrices injected into each layer.'
  },
  {
    id: 'ai-7',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'In the context of BERT\'s pretraining, what is the purpose of the "Next Sentence Prediction" (NSP) task?',
    options: [
      'To predict the sentiment of the next sentence.',
      'To understand sentence-level relationships and discourse coherence.',
      'To generate the next sentence in the sequence.',
      'To compress the model size by removing unnecessary sentences.'
    ],
    correctAnswer: 'To understand sentence-level relationships and discourse coherence.'
  },
  {
    id: 'ai-8',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is the primary advantage of using "Mixture of Experts" (MoE) architectures in models like GPT-4 and Mixtral?',
    options: [
      'They reduce the total number of parameters in the model.',
      'They allow conditional computation where only a subset of parameters is activated per token, enabling larger models without proportional inference cost.',
      'They eliminate the need for attention mechanisms.',
      'They guarantee deterministic outputs for the same input.'
    ],
    correctAnswer: 'They allow conditional computation where only a subset of parameters is activated per token, enabling larger models without proportional inference cost.'
  },
  {
    id: 'ai-9',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'What problem does "Layer Normalization" primarily solve in deep neural networks?',
    options: [
      'It prevents overfitting by randomly dropping neurons.',
      'It stabilizes the distribution of layer inputs, addressing internal covariate shift.',
      'It increases the model\'s ability to memorize training data.',
      'It reduces the vocabulary size of the tokenizer.'
    ],
    correctAnswer: 'It stabilizes the distribution of layer inputs, addressing internal covariate shift.'
  },
  {
    id: 'ai-10',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is the purpose of "Temperature Scaling" when sampling from a language model?',
    options: [
      'To reduce the model\'s memory footprint during inference.',
      'To control the randomness of the output; higher temperature produces more diverse but potentially less coherent text.',
      'To increase the training speed by cooling down the GPU.',
      'To normalize the embedding vectors to unit length.'
    ],
    correctAnswer: 'To control the randomness of the output; higher temperature produces more diverse but potentially less coherent text.'
  },
  {
    id: 'ai-11',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'In the "Attention is All You Need" paper, what is the computational complexity of self-attention with respect to sequence length n?',
    options: [
      'O(n) - linear complexity.',
      'O(n log n) - linearithmic complexity.',
      'O(n^2) - quadratic complexity with respect to sequence length.',
      'O(1) - constant complexity.'
    ],
    correctAnswer: 'O(n^2) - quadratic complexity with respect to sequence length.'
  },
  {
    id: 'ai-12',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is "Prompt Engineering" primarily concerned with?',
    options: [
      'Designing the physical hardware for running LLMs.',
      'Crafting input prompts to guide the model toward desired outputs without changing model weights.',
      'Engineering the tokenizer algorithm for better compression.',
      'Building prompts for user interface design.'
    ],
    correctAnswer: 'Crafting input prompts to guide the model toward desired outputs without changing model weights.'
  },
  {
    id: 'ai-13',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'What is the main purpose of "Residual Connections" (skip connections) in deep networks like ResNet and Transformers?',
    options: [
      'To increase the number of parameters in the model.',
      'To allow gradients to flow directly through the network, mitigating the vanishing gradient problem.',
      'To reduce the dimensionality of the input data.',
      'To add noise to the activations for regularization.'
    ],
    correctAnswer: 'To allow gradients to flow directly through the network, mitigating the vanishing gradient problem.'
  },
  {
    id: 'ai-14',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What does "Chain-of-Thought" prompting aim to achieve?',
    options: [
      'To reduce the latency of model responses.',
      'To improve reasoning capabilities by prompting the model to show intermediate reasoning steps.',
      'To chain multiple models together in a pipeline.',
      'To encrypt the communication between user and model.'
    ],
    correctAnswer: 'To improve reasoning capabilities by prompting the model to show intermediate reasoning steps.'
  },
  {
    id: 'ai-15',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'What is "Multi-Head Attention" in the Transformer architecture?',
    options: [
      'Running the attention mechanism multiple times in parallel with different learned projections.',
      'Using multiple GPUs to process attention in parallel.',
      'Applying attention to multiple input sentences simultaneously.',
      'A technique to reduce the number of attention layers.'
    ],
    correctAnswer: 'Running the attention mechanism multiple times in parallel with different learned projections.'
  },

  // ==================== GENERATIVE MODELS (Questions 16-25) ====================
  {
    id: 'ai-16',
    type: 'mcq',
    category: 'Generative Models',
    text: 'In Diffusion Models, what is the fundamental difference between the "Forward Process" and the "Reverse Process"?',
    options: [
      'The Forward process generates data, while the Reverse process compresses it.',
      'The Forward process adds Gaussian noise to data until it becomes pure noise, while the Reverse process learns to denoise it.',
      'The Forward process is learned, while the Reverse process is a fixed mathematical transformation.',
      'The Forward process uses a GAN architecture, while the Reverse process uses a VAE.'
    ],
    correctAnswer: 'The Forward process adds Gaussian noise to data until it becomes pure noise, while the Reverse process learns to denoise it.'
  },
  {
    id: 'ai-17',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is the primary objective of the Generator in a Generative Adversarial Network (GAN)?',
    options: [
      'To classify real vs fake images accurately.',
      'To generate synthetic data that is indistinguishable from real data, fooling the discriminator.',
      'To compress the input data into a lower-dimensional representation.',
      'To cluster similar data points together.'
    ],
    correctAnswer: 'To generate synthetic data that is indistinguishable from real data, fooling the discriminator.'
  },
  {
    id: 'ai-18',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What problem does the "Mode Collapse" phenomenon describe in GAN training?',
    options: [
      'The generator produces limited diversity, outputting similar samples regardless of input noise.',
      'The discriminator becomes too powerful and always rejects generated samples.',
      'The model overfits to the training data and cannot generalize.',
      'The training process requires too much computational memory.'
    ],
    correctAnswer: 'The generator produces limited diversity, outputting similar samples regardless of input noise.'
  },
  {
    id: 'ai-19',
    type: 'mcq',
    category: 'Generative Models',
    text: 'In Variational Autoencoders (VAEs), what is the purpose of the KL divergence term in the loss function?',
    options: [
      'To maximize the reconstruction quality of the input.',
      'To regularize the learned latent distribution to be close to a prior (typically standard normal).',
      'To increase the dimensionality of the latent space.',
      'To speed up the training process by reducing computations.'
    ],
    correctAnswer: 'To regularize the learned latent distribution to be close to a prior (typically standard normal).'
  },
  {
    id: 'ai-20',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is "Classifier-Free Guidance" (CFG) used for in diffusion models?',
    options: [
      'To train the model without any classifier.',
      'To trade off between sample quality and diversity by adjusting the influence of conditional information.',
      'To remove the need for a U-Net architecture.',
      'To classify generated images during training.'
    ],
    correctAnswer: 'To trade off between sample quality and diversity by adjusting the influence of conditional information.'
  },
  {
    id: 'ai-21',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is the key difference between Autoregressive models (like GPT) and Diffusion models?',
    options: [
      'Autoregressive models generate data sequentially token-by-token, while diffusion models generate all dimensions in parallel through iterative denoising.',
      'Diffusion models can only generate text, while autoregressive models can only generate images.',
      'Autoregressive models use only CNNs, while diffusion models use only RNNs.',
      'There is no difference; they are identical approaches.'
    ],
    correctAnswer: 'Autoregressive models generate data sequentially token-by-token, while diffusion models generate all dimensions in parallel through iterative denoising.'
  },
  {
    id: 'ai-22',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is the "Reparameterization Trick" used for in VAEs?',
    options: [
      'To allow backpropagation through random sampling by separating the stochastic component from the parameters.',
      'To reduce the number of layers in the neural network.',
      'To increase the learning rate during training.',
      'To compress the model weights for deployment.'
    ],
    correctAnswer: 'To allow backpropagation through random sampling by separating the stochastic component from the parameters.'
  },
  {
    id: 'ai-23',
    type: 'mcq',
    category: 'Generative Models',
    text: 'In Stable Diffusion, what does the "Latent Diffusion Model" approach achieve?',
    options: [
      'It performs diffusion in a lower-dimensional latent space rather than pixel space, significantly reducing computational cost.',
      'It increases the resolution of generated images by 4x.',
      'It eliminates the need for text conditioning.',
      'It uses only convolutional layers without attention.'
    ],
    correctAnswer: 'It performs diffusion in a lower-dimensional latent space rather than pixel space, significantly reducing computational cost.'
  },
  {
    id: 'ai-24',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is the primary challenge addressed by "Spectral Normalization" in GANs?',
    options: [
      'It prevents the discriminator from becoming too powerful by constraining its Lipschitz constant.',
      'It speeds up the training by 10x.',
      'It reduces the memory usage of the generator.',
      'It eliminates the need for the discriminator entirely.'
    ],
    correctAnswer: 'It prevents the discriminator from becoming too powerful by constraining its Lipschitz constant.'
  },
  {
    id: 'ai-25',
    type: 'mcq',
    category: 'Generative Models',
    text: 'What is "Flow-Based Generative Models\'" key characteristic?',
    options: [
      'They use invertible neural networks with tractable likelihood computation.',
      'They rely on adversarial training between two networks.',
      'They can only generate discrete data like text.',
      'They require Markov Chain Monte Carlo sampling for generation.'
    ],
    correctAnswer: 'They use invertible neural networks with tractable likelihood computation.'
  },

  // ==================== COMPUTER VISION (Questions 26-35) ====================
  {
    id: 'ai-26',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is the key innovation of Vision Transformers (ViT) compared to Convolutional Neural Networks?',
    options: [
      'ViTs process images as sequences of patches using self-attention, eliminating the need for convolutional operations.',
      'ViTs use only pooling layers without any learnable parameters.',
      'ViTs require 100x less data to train effectively.',
      'ViTs can only process grayscale images.'
    ],
    correctAnswer: 'ViTs process images as sequences of patches using self-attention, eliminating the need for convolutional operations.'
  },
  {
    id: 'ai-27',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is the purpose of "Anchor Boxes" in object detection algorithms like Faster R-CNN and SSD?',
    options: [
      'To predefine bounding boxes of various scales and aspect ratios that the network refines and classifies.',
      'To anchor the image to a specific coordinate system.',
      'To compress the image file size.',
      'To eliminate background regions from the image.'
    ],
    correctAnswer: 'To predefine bounding boxes of various scales and aspect ratios that the network refines and classifies.'
  },
  {
    id: 'ai-28',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'In semantic segmentation, what is the purpose of "Skip Connections" in U-Net architecture?',
    options: [
      'To combine high-level semantic information from the decoder with fine-grained spatial details from the encoder.',
      'To skip training certain layers to save time.',
      'To connect the input directly to the output without processing.',
      'To reduce the number of parameters in the model.'
    ],
    correctAnswer: 'To combine high-level semantic information from the decoder with fine-grained spatial details from the encoder.'
  },
  {
    id: 'ai-29',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What does "Intersection over Union" (IoU) measure in object detection?',
    options: [
      'The ratio of the intersection area to the union area of two bounding boxes, measuring overlap.',
      'The speed of the detection algorithm.',
      'The memory usage of the model.',
      'The number of objects detected per second.'
    ],
    correctAnswer: 'The ratio of the intersection area to the union area of two bounding boxes, measuring overlap.'
  },
  {
    id: 'ai-30',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is "Transfer Learning" in the context of computer vision?',
    options: [
      'Transferring data from one hard drive to another.',
      'Using a pre-trained model on a large dataset and fine-tuning it for a specific downstream task.',
      'Training multiple models simultaneously and averaging their weights.',
      'Converting color images to grayscale during training.'
    ],
    correctAnswer: 'Using a pre-trained model on a large dataset and fine-tuning it for a specific downstream task.'
  },
  {
    id: 'ai-31',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is the primary advantage of "Depthwise Separable Convolutions" used in MobileNet?',
    options: [
      'They reduce computational cost and model size by factorizing standard convolution into depthwise and pointwise operations.',
      'They increase the depth of the network by 10x.',
      'They eliminate the need for activation functions.',
      'They automatically adjust the learning rate during training.'
    ],
    correctAnswer: 'They reduce computational cost and model size by factorizing standard convolution into depthwise and pointwise operations.'
  },
  {
    id: 'ai-32',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is "Data Augmentation" primarily used for in training computer vision models?',
    options: [
      'To increase the effective size and diversity of the training set by applying random transformations.',
      To compress the dataset for faster loading.',
      'To remove noisy images from the dataset.',
      'To convert all images to the same file format.'
    ],
    correctAnswer: 'To increase the effective size and diversity of the training set by applying random transformations.'
  },
  {
    id: 'ai-33',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is the purpose of "Batch Normalization" in CNNs?',
    options: [
      'To normalize the input batch to have zero mean and unit variance, stabilizing and accelerating training.',
      'To increase the batch size during inference.',
      'To shuffle the order of images in each batch.',
      'To reduce the number of channels in the feature maps.'
    ],
    correctAnswer: 'To normalize the input batch to have zero mean and unit variance, stabilizing and accelerating training.'
  },
  {
    id: 'ai-34',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'In "Region Proposal Networks" (RPN), what is the purpose of the objectness score?',
    options: [
      'To classify the exact category of the object.',
      'To distinguish between regions that contain objects vs. background, regardless of specific class.',
      'To measure the confidence of the bounding box coordinates.',
      'To determine the color of the object.'
    ],
    correctAnswer: 'To distinguish between regions that contain objects vs. background, regardless of specific class.'
  },
  {
    id: 'ai-35',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is "Feature Pyramid Networks" (FPN) designed to address in object detection?',
    options: [
      'The challenge of detecting objects at different scales by combining multi-level features.',
      'The problem of overfitting in small datasets.',
      'The need for faster image loading from disk.',
      'The issue of color distortion in images.'
    ],
    correctAnswer: 'The challenge of detecting objects at different scales by combining multi-level features.'
  },

  // ==================== REINFORCEMENT LEARNING (Questions 36-45) ====================
  {
    id: 'ai-36',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the "Bellman Equation" fundamental to?',
    options: [
      'It recursively defines the value of a state as the immediate reward plus the discounted value of the next state.',
      'It calculates the learning rate for neural networks.',
      'It measures the entropy of a probability distribution.',
      'It defines the backpropagation algorithm.'
    ],
    correctAnswer: 'It recursively defines the value of a state as the immediate reward plus the discounted value of the next state.'
  },
  {
    id: 'ai-37',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the key difference between "Policy Gradient" methods and "Q-Learning"?',
    options: [
      'Policy gradient methods directly optimize the policy parameters, while Q-learning learns a value function to derive the policy.',
      'Policy gradient is only for discrete action spaces, while Q-learning is only for continuous spaces.',
      'Q-learning requires a teacher to provide correct actions, while policy gradient does not.',
      'Policy gradient uses supervised learning, while Q-learning uses unsupervised learning.'
    ],
    correctAnswer: 'Policy gradient methods directly optimize the policy parameters, while Q-learning learns a value function to derive the policy.'
  },
  {
    id: 'ai-38',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is "Experience Replay" in Deep Q-Networks (DQN)?',
    options: [
      'Storing and randomly sampling past transitions to break correlation and improve sample efficiency.',
      'Replaying the same episode multiple times to memorize it.',
      'Recording the training process for video documentation.',
      'Replaying random noise to the network for regularization.'
    ],
    correctAnswer: 'Storing and randomly sampling past transitions to break correlation and improve sample efficiency.'
  },
  {
    id: 'ai-39',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the purpose of the "Advantage Function" in Actor-Critic methods?',
    options: [
      'It measures how much better an action is compared to the average action at a given state, reducing variance in policy gradients.',
      'It calculates the computational advantage of using GPUs over CPUs.',
      'It measures the advantage of deep learning over traditional ML.',
      'It determines the learning rate advantage for different layers.'
    ],
    correctAnswer: 'It measures how much better an action is compared to the average action at a given state, reducing variance in policy gradients.'
  },
  {
    id: 'ai-40',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is "Proximal Policy Optimization" (PPO) designed to prevent?',
    options: [
      'It prevents overly large policy updates that could destabilize training using a clipped surrogate objective.',
      'It prevents the model from using too much memory.',
      'It prevents overfitting to the training environment.',
      'It prevents the use of neural networks in RL.'
    ],
    correctAnswer: 'It prevents overly large policy updates that could destabilize training using a clipped surrogate objective.'
  },
  {
    id: 'ai-41',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the "Exploration-Exploitation Dilemma" in RL?',
    options: [
      'The trade-off between taking random actions to discover rewards vs. taking known good actions to maximize reward.',
      'The dilemma of whether to use CPUs or GPUs for training.',
      'The choice between batch and online learning.',
      'The decision of which optimizer to use.'
    ],
    correctAnswer: 'The trade-off between taking random actions to discover rewards vs. taking known good actions to maximize reward.'
  },
  {
    id: 'ai-42',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is "Temporal Difference" (TD) Learning?',
    options: [
      'A method that updates value estimates based on the difference between consecutive predictions without waiting for the final outcome.',
      'A technique to speed up training by using multiple time zones.',
      'A method to difference images temporally for video analysis.',
      'A scheduling technique for distributed training.'
    ],
    correctAnswer: 'A method that updates value estimates based on the difference between consecutive predictions without waiting for the final outcome.'
  },
  {
    id: 'ai-43',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is "Model-Based Reinforcement Learning"?',
    options: [
      'RL where the agent learns or uses a model of the environment to plan and make decisions.',
      'RL that uses only pre-trained models without any environment interaction.',
      'RL that models the reward function only.',
      'RL that uses supervised learning for all decisions.'
    ],
    correctAnswer: 'RL where the agent learns or uses a model of the environment to plan and make decisions.'
  },
  {
    id: 'ai-44',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the purpose of "Entropy Regularization" in policy gradient methods?',
    options: [
      'To encourage exploration by preventing the policy from becoming too deterministic too quickly.',
      'To reduce the computational entropy of the system.',
      'To compress the policy network size.',
      'To increase the temperature of the training process.'
    ],
    correctAnswer: 'To encourage exploration by preventing the policy from becoming too deterministic too quickly.'
  },
  {
    id: 'ai-45',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is "Multi-Agent Reinforcement Learning" (MARL)?',
    options: [
      'RL scenarios where multiple agents interact in a shared environment, potentially cooperating or competing.',
      'Training a single agent on multiple GPUs simultaneously.',
      'Using multiple reward functions for a single agent.',
      'Training an agent on multiple environments sequentially.'
    ],
    correctAnswer: 'RL scenarios where multiple agents interact in a shared environment, potentially cooperating or competing.'
  },

  // ==================== OPTIMIZATION & TRAINING (Questions 46-55) ====================
  {
    id: 'ai-46',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is the primary advantage of "Adam" optimizer over standard SGD?',
    options: [
      'It uses adaptive learning rates for each parameter by maintaining first and second moment estimates.',
      'It guarantees convergence to the global minimum in all cases.',
      'It requires no hyperparameter tuning.',
      'It works only with convolutional networks.'
    ],
    correctAnswer: 'It uses adaptive learning rates for each parameter by maintaining first and second moment estimates.'
  },
  {
    id: 'ai-47',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Learning Rate Scheduling" used for?',
    options: [
      'To adjust the learning rate during training, typically decreasing it to help convergence.',
      'To schedule when to save model checkpoints.',
      'To schedule GPU usage across multiple users.',
      'To determine the batch size dynamically.'
    ],
    correctAnswer: 'To adjust the learning rate during training, typically decreasing it to help convergence.'
  },
  {
    id: 'ai-48',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Gradient Clipping" used to prevent?',
    options: [
      'Exploding gradients by capping the maximum norm of gradients during backpropagation.',
      'Underfitting by clipping small gradients.',
      'Overfitting by removing gradients entirely.',
      'Memory leaks by clipping tensor sizes.'
    ],
    correctAnswer: 'Exploding gradients by capping the maximum norm of gradients during backpropagation.'
  },
  {
    id: 'ai-49',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Weight Decay" (L2 regularization) mathematically equivalent to?',
    options: [
      'Adding a penalty term proportional to the squared magnitude of weights to the loss function.',
      'Randomly dropping weights during training.',
      'Decaying the learning rate exponentially.',
      'Removing weights that are close to zero.'
    ],
    correctAnswer: 'Adding a penalty term proportional to the squared magnitude of weights to the loss function.'
  },
  {
    id: 'ai-50',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is the "Vanishing Gradient Problem" in deep networks?',
    options: [
      'Gradients becoming exponentially small in early layers during backpropagation, preventing effective learning.',
      'The loss function disappearing during training.',
      'The model forgetting previously learned information.',
      'The training data vanishing from memory.'
    ],
    correctAnswer: 'Gradients becoming exponentially small in early layers during backpropagation, preventing effective learning.'
  },
  {
    id: 'ai-51',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Dropout" regularization?',
    options: [
      'Randomly setting a fraction of neurons to zero during training to prevent co-adaptation and overfitting.',
      'Dropping out of training when loss increases.',
      'Removing the last layer of the network.',
      'Decreasing the batch size during training.'
    ],
    correctAnswer: 'Randomly setting a fraction of neurons to zero during training to prevent co-adaptation and overfitting.'
  },
  {
    id: 'ai-52',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Early Stopping" as a regularization technique?',
    options: [
      'Halting training when validation performance stops improving to prevent overfitting.',
      'Stopping the training process early to save electricity.',
      'Ending training before processing all batches in an epoch.',
      'Stopping gradient computation early in backpropagation.'
    ],
    correctAnswer: 'Halting training when validation performance stops improving to prevent overfitting.'
  },
  {
    id: 'ai-53',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Batch Size" impact on training dynamics?',
    options: [
      'Larger batches provide more stable gradient estimates but may generalize worse; smaller batches add noise but can escape sharp minima.',
      'Batch size has no impact on training.',
      'Larger batches always lead to better generalization.',
      'Smaller batches always converge faster.'
    ],
    correctAnswer: 'Larger batches provide more stable gradient estimates but may generalize worse; smaller batches add noise but can escape sharp minima.'
  },
  {
    id: 'ai-54',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Mixed Precision Training"?',
    options: [
      'Using both 16-bit and 32-bit floating point numbers to reduce memory and speed up training while maintaining stability.',
      'Training on datasets with mixed data types.',
      'Using multiple precision metrics for evaluation.',
      'Mixing different optimization algorithms.'
    ],
    correctAnswer: 'Using both 16-bit and 32-bit floating point numbers to reduce memory and speed up training while maintaining stability.'
  },
  {
    id: 'ai-55',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Gradient Accumulation" used for?',
    options: [
      'Simulating larger batch sizes by accumulating gradients over multiple forward/backward passes before updating weights.',
      'Accumulating gradients from multiple models.',
      'Storing all gradients for visualization.',
      'Accumulating gradients over multiple epochs.'
    ],
    correctAnswer: 'Simulating larger batch sizes by accumulating gradients over multiple forward/backward passes before updating weights.'
  },

  // ==================== MLOps & SYSTEMS (Questions 56-65) ====================
  {
    id: 'ai-56',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Model Quantization" primarily used for?',
    options: [
      'Reducing model precision (e.g., FP32 to INT8) to decrease size and increase inference speed.',
      'Increasing the number of model parameters.',
      'Quantifying the uncertainty of model predictions.',
      'Dividing the model into smaller sub-models.'
    ],
    correctAnswer: 'Reducing model precision (e.g., FP32 to INT8) to decrease size and increase inference speed.'
  },
  {
    id: 'ai-57',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is the purpose of "Knowledge Distillation"?',
    options: [
      'Transferring knowledge from a large teacher model to a smaller student model.',
      'Distilling training data into a smaller dataset.',
      'Removing knowledge from the model to protect privacy.',
      'Converting model weights to a different format.'
    ],
    correctAnswer: 'Transferring knowledge from a large teacher model to a smaller student model.'
  },
  {
    id: 'ai-58',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Model Drift" or "Concept Drift" in production ML systems?',
    options: [
      'The phenomenon where model performance degrades over time due to changes in the underlying data distribution.',
      'The physical drifting of servers in a data center.',
      'The model weights changing during inference.',
      'The training process taking too long.'
    ],
    correctAnswer: 'The phenomenon where model performance degrades over time due to changes in the underlying data distribution.'
  },
  {
    id: 'ai-59',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "A/B Testing" in the context of ML model deployment?',
    options: [
      'Comparing two or more model versions by serving them to different user segments and measuring performance.',
      'Testing models on datasets A and B separately.',
      'A testing framework for unit tests.',
      'Testing the model on two different GPUs.'
    ],
    correctAnswer: 'Comparing two or more model versions by serving them to different user segments and measuring performance.'
  },
  {
    id: 'ai-60',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Feature Store" in MLOps?',
    options: [
      'A centralized storage system for managing, sharing, and serving ML features across training and inference.',
      'A store where you can buy pre-trained features.',
      'A database for storing raw images.',
      'A cache for model predictions.'
    ],
    correctAnswer: 'A centralized storage system for managing, sharing, and serving ML features across training and inference.'
  },
  {
    id: 'ai-61',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Model Versioning" important for?',
    options: [
      'Tracking different iterations of models, enabling reproducibility, rollback, and comparison.',
      'Changing the model architecture randomly.',
      'Versioning the training data only.',
      'Creating different versions of the same prediction.'
    ],
    correctAnswer: 'Tracking different iterations of models, enabling reproducibility, rollback, and comparison.'
  },
  {
    id: 'ai-62',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Data Validation" in ML pipelines?',
    options: [
      'Checking that input data conforms to expected schemas, distributions, and quality standards before training or inference.',
      'Validating that the model has enough data.',
      'Checking if the data is encrypted.',
      'Validating user permissions to access data.'
    ],
    correctAnswer: 'Checking that input data conforms to expected schemas, distributions, and quality standards before training or inference.'
  },
  {
    id: 'ai-63',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Shadow Deployment" (Dark Launch) of ML models?',
    options: [
      'Running a new model version alongside the production model without affecting live traffic, to validate performance.',
      'Deploying models only at night.',
      'Hiding the model architecture from users.',
      'Deploying models without testing.'
    ],
    correctAnswer: 'Running a new model version alongside the production model without affecting live traffic, to validate performance.'
  },
  {
    id: 'ai-64',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Model Explainability" (XAI) critical for in production?',
    options: [
      'Understanding why models make specific predictions for debugging, compliance, and building user trust.',
      'Making the model architecture more complex.',
      'Explaining the code to other developers.',
      'Making predictions faster.'
    ],
    correctAnswer: 'Understanding why models make specific predictions for debugging, compliance, and building user trust.'
  },
  {
    id: 'ai-65',
    type: 'mcq',
    category: 'MLOps',
    text: 'What is "Online Learning" in ML systems?',
    options: [
      'Updating the model continuously as new data arrives, rather than batch retraining.',
      'Learning through online courses.',
      'Training models only on internet data.',
      'Running models on online servers only.'
    ],
    correctAnswer: 'Updating the model continuously as new data arrives, rather than batch retraining.'
  },

  // ==================== AI ETHICS & SAFETY (Questions 66-75) ====================
  {
    id: 'ai-66',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Algorithmic Bias" in machine learning?',
    options: [
      'Systematic and unfair discrimination against certain groups due to biased training data or model design.',
      'The bias term in a neural network layer.',
      'A preference for certain algorithms over others.',
      'The tendency of algorithms to prefer faster computation.'
    ],
    correctAnswer: 'Systematic and unfair discrimination against certain groups due to biased training data or model design.'
  },
  {
    id: 'ai-67',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Differential Privacy" designed to protect?',
    options: [
      'Individual privacy by ensuring that the inclusion or exclusion of a single data point does not significantly affect model output.',
      'The privacy of the model weights.',
      'The difference between training and test accuracy.',
      'The privacy of the internet connection.'
    ],
    correctAnswer: 'Individual privacy by ensuring that the inclusion or exclusion of a single data point does not significantly affect model output.'
  },
  {
    id: 'ai-68',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Adversarial Examples" in the context of AI safety?',
    options: [
      'Inputs specifically crafted to cause models to make incorrect predictions with high confidence.',
      'Examples from adversarial training scenarios.',
      'Training examples that are difficult to learn.',
      'Examples used in competitive AI competitions.'
    ],
    correctAnswer: 'Inputs specifically crafted to cause models to make incorrect predictions with high confidence.'
  },
  {
    id: 'ai-69',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Fairness Through Unawareness" (Fairness Blind)?',
    options: [
      'The approach of removing protected attributes from features, which may fail due to correlated proxy variables.',
      'Being unaware of fairness issues entirely.',
      'Training models without looking at the data.',
      'Removing all sensitive information from the internet.'
    ],
    correctAnswer: 'The approach of removing protected attributes from features, which may fail due to correlated proxy variables.'
  },
  {
    id: 'ai-70',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Model Inversion" attack?',
    options: [
      'Reconstructing sensitive training data from model outputs and parameters.',
      'Inverting the predictions of a model.',
      'Flipping the model architecture upside down.',
      'Reversing the training process.'
    ],
    correctAnswer: 'Reconstructing sensitive training data from model outputs and parameters.'
  },
  {
    id: 'ai-71',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Membership Inference Attack"?',
    options: [
      'Determining whether a specific data point was part of the model\'s training set.',
      'Inferring the membership of a user in a social network.',
      'Attacking the model membership system.',
      'Inferring which club the model belongs to.'
    ],
    correctAnswer: 'Determining whether a specific data point was part of the model\'s training set.'
  },
  {
    id: 'ai-72',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Federated Learning" primarily motivated by?',
    options: [
      'Training models across decentralized devices without centralizing raw data, preserving privacy.',
      'Federating multiple cloud providers.',
      'Learning about federal governments.',
      'Training models only on government data.'
    ],
    correctAnswer: 'Training models across decentralized devices without centralizing raw data, preserving privacy.'
  },
  {
    id: 'ai-73',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Explainable AI" (XAI) contrasted with?',
    options: [
      'Black-box models where decision-making processes are opaque and difficult to interpret.',
      'Slow AI systems.',
      'Expensive AI systems.',
      'Old AI systems.'
    ],
    correctAnswer: 'Black-box models where decision-making processes are opaque and difficult to interpret.'
  },
  {
    id: 'ai-74',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Red Teaming" in AI safety?',
    options: [
      'Systematically attempting to find failures, biases, and vulnerabilities in AI systems before deployment.',
      'Painting AI systems red.',
      'Competing against other AI teams.',
      'Training models on red-colored images.'
    ],
    correctAnswer: 'Systematically attempting to find failures, biases, and vulnerabilities in AI systems before deployment.'
  },
  {
    id: 'ai-75',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Constitutional AI" approach to alignment?',
    options: [
      'Training AI systems to follow a set of principles or constitution through self-critique and revision.',
      'AI systems that follow a country\'s constitution literally.',
      'Building AI for government use only.',
      'Constitutional law for AI rights.'
    ],
    correctAnswer: 'Training AI systems to follow a set of principles or constitution through self-critique and revision.'
  },

  // ==================== PROBABILISTIC METHODS & BAYESIAN (Questions 76-85) ====================
  {
    id: 'ai-76',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Markov Chain Monte Carlo" (MCMC) used for?',
    options: [
      'Sampling from complex probability distributions when direct sampling is difficult.',
      'Training Markov models for text generation.',
      'Optimizing neural network weights deterministically.',
      'Creating Monte Carlo simulations for games.'
    ],
    correctAnswer: 'Sampling from complex probability distributions when direct sampling is difficult.'
  },
  {
    id: 'ai-77',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is the key difference between Bayesian and Frequentist approaches?',
    options: [
      'Bayesian methods treat parameters as random variables with distributions, while Frequentist methods treat them as fixed unknowns.',
      'Bayesian methods are always faster.',
      'Frequentist methods require more data.',
      'Bayesian methods cannot use neural networks.'
    ],
    correctAnswer: 'Bayesian methods treat parameters as random variables with distributions, while Frequentist methods treat them as fixed unknowns.'
  },
  {
    id: 'ai-78',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Posterior Distribution" in Bayesian inference?',
    options: [
      'The updated probability distribution of parameters after observing data, combining prior and likelihood.',
      'The distribution of data before seeing the parameters.',
      'The distribution of predictions after training.',
      'The posterior probability of model architecture.'
    ],
    correctAnswer: 'The updated probability distribution of parameters after observing data, combining prior and likelihood.'
  },
  {
    id: 'ai-79',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Variational Inference" an alternative to?',
    options: [
      'MCMC methods, providing faster approximate inference by optimizing over a family of distributions.',
      'Gradient descent optimization.',
      'Cross-validation.',
      'Data augmentation.'
    ],
    correctAnswer: 'MCMC methods, providing faster approximate inference by optimizing over a family of distributions.'
  },
  {
    id: 'ai-80',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Gaussian Process"?',
    options: [
      'A non-parametric probabilistic model that defines a distribution over functions, commonly used for regression.',
      'A process for generating Gaussian noise.',
      'A type of neural network layer.',
      'A data normalization technique.'
    ],
    correctAnswer: 'A non-parametric probabilistic model that defines a distribution over functions, commonly used for regression.'
  },
  {
    id: 'ai-81',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Bayesian Neural Networks\'" key characteristic?',
    options: [
      'They place probability distributions over network weights rather than point estimates, capturing uncertainty.',
      'They use Bayes\' theorem for backpropagation.',
      'They are trained only on Bayesian statistics datasets.',
      'They cannot use activation functions.'
    ],
    correctAnswer: 'They place probability distributions over network weights rather than point estimates, capturing uncertainty.'
  },
  {
    id: 'ai-82',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Prior Distribution" in Bayesian methods?',
    options: [
      'The initial belief about parameters before observing any data.',
      'The priority given to certain features.',
      'The previous model version.',
      'The prerequisite data required.'
    ],
    correctAnswer: 'The initial belief about parameters before observing any data.'
  },
  {
    id: 'ai-83',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Monte Carlo Dropout" used for?',
    options: [
      'Approximating Bayesian inference in neural networks by using dropout at test time to estimate uncertainty.',
      'Dropping out Monte Carlo simulations.',
      'A dropout variant for CNNs only.',
      'Randomly dropping training data points.'
    ],
    correctAnswer: 'Approximating Bayesian inference in neural networks by using dropout at test time to estimate uncertainty.'
  },
  {
    id: 'ai-84',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Evidence Lower Bound" (ELBO) in Variational Inference?',
    options: [
      'A lower bound on the log-likelihood of the data that is optimized to approximate the posterior.',
      'The lower bound on model evidence in court.',
      'A bound on the training error.',
      'The minimum evidence required for training.'
    ],
    correctAnswer: 'A lower bound on the log-likelihood of the data that is optimized to approximate the posterior.'
  },
  {
    id: 'ai-85',
    type: 'mcq',
    category: 'Bayesian Inference',
    text: 'What is "Conjugate Prior"?',
    options: [
      'A prior distribution that, when combined with the likelihood, yields a posterior of the same family.',
      'A prior that agrees with all other priors.',
      'The previous conjugate model.',
      'A paired prior distribution.'
    ],
    correctAnswer: 'A prior distribution that, when combined with the likelihood, yields a posterior of the same family.'
  },

  // ==================== GRAPH NEURAL NETWORKS (Questions 86-93) ====================
  {
    id: 'ai-86',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Message Passing" in Graph Neural Networks?',
    options: [
      'The process where nodes exchange information with neighbors to update their representations iteratively.',
      'Sending messages between different GPUs.',
      'Passing error messages during debugging.',
      'Transmitting training data between servers.'
    ],
    correctAnswer: 'The process where nodes exchange information with neighbors to update their representations iteratively.'
  },
  {
    id: 'ai-87',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is the primary challenge of "Graph Convolutional Networks" (GCNs) that "Graph Attention Networks" (GATs) address?',
    options: [
      'GCNs use uniform aggregation weights, while GATs learn attention weights for neighbor importance.',
      'GCNs are too fast and need to be slowed down.',
      'GCNs use too much attention already.',
      'GCNs cannot handle weighted graphs.'
    ],
    correctAnswer: 'GCNs use uniform aggregation weights, while GATs learn attention weights for neighbor importance.'
  },
  {
    id: 'ai-88',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Over-smoothing" in deep GNNs?',
    options: [
      'The phenomenon where node representations become indistinguishable as the number of layers increases.',
      'Making graphs too smooth for visualization.',
      'Overfitting to smooth data distributions.',
      'Using too much smoothing in image preprocessing.'
    ],
    correctAnswer: 'The phenomenon where node representations become indistinguishable as the number of layers increases.'
  },
  {
    id: 'ai-89',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Inductive Learning" capability in GNNs?',
    options: [
      'The ability to generalize to unseen graphs or nodes not present during training.',
      'Learning through inductive reasoning logic.',
      'Training on induced subgraphs only.',
      'Using inductive biases from physics.'
    ],
    correctAnswer: 'The ability to generalize to unseen graphs or nodes not present during training.'
  },
  {
    id: 'ai-90',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Graph Pooling" used for?',
    options: [
      'Reducing graph size by coarsening nodes to create hierarchical representations.',
      'Pooling GPU resources for graph training.',
      'Storing graphs in memory pools.',
      'Pooling multiple graphs into one.'
    ],
    correctAnswer: 'Reducing graph size by coarsening nodes to create hierarchical representations.'
  },
  {
    id: 'ai-91',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Link Prediction" in graph learning?',
    options: [
      'Predicting the existence of edges between nodes that are not yet connected.',
      'Predicting website links.',
      'Linking different neural network layers.',
      'Predicting the strength of hyperlinks.'
    ],
    correctAnswer: 'Predicting the existence of edges between nodes that are not yet connected.'
  },
  {
    id: 'ai-92',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Graph Isomorphism" and why does it matter for GNNs?',
    options: [
      'Two graphs are isomorphic if they have the same structure; GNNs must be invariant to node ordering.',
      'Creating isomorphic copies of graphs for data augmentation.',
      'Making graphs look identical.',
      'Isolating graphs during training.'
    ],
    correctAnswer: 'Two graphs are isomorphic if they have the same structure; GNNs must be invariant to node ordering.'
  },
  {
    id: 'ai-93',
    type: 'mcq',
    category: 'Graph Neural Networks',
    text: 'What is "Weisfeiler-Lehman Test" relevance to GNNs?',
    options: [
      'It provides a theoretical framework for testing the expressiveness of GNNs in distinguishing graph structures.',
      'Testing if graphs are well-feeler (sensitive).',
      'A test for graph compression.',
      'A performance benchmark for GNN speed.'
    ],
    correctAnswer: 'It provides a theoretical framework for testing the expressiveness of GNNs in distinguishing graph structures.'
  },

  // ==================== ADVANCED TOPICS (Questions 94-100) ====================
  {
    id: 'ai-94',
    type: 'mcq',
    category: 'Neural Architecture',
    text: 'What is "Neural Architecture Search" (NAS)?',
    options: [
      'Automating the design of neural network architectures using optimization algorithms.',
      'Searching through neural network weights.',
      'Searching for neurons in the brain.',
      'Manual architecture design by experts.'
    ],
    correctAnswer: 'Automating the design of neural network architectures using optimization algorithms.'
  },
  {
    id: 'ai-95',
    type: 'mcq',
    category: 'Optimization Theory',
    text: 'What is "Meta-Learning" (Learning to Learn)?',
    options: [
      'Training models that can quickly adapt to new tasks with few examples by leveraging prior learning experience.',
      'Learning about metadata management.',
      'Training models to learn faster by using better hardware.',
      'Learning the meta-physics of AI.'
    ],
    correctAnswer: 'Training models that can quickly adapt to new tasks with few examples by leveraging prior learning experience.'
  },
  {
    id: 'ai-96',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is "Retrieval-Augmented Generation" (RAG)?',
    options: [
      'Combining parametric knowledge from LLMs with non-parametric knowledge from external retrieval systems.',
      'Augmenting training data by retrieving more from the internet.',
      'Generating text about retrieval systems.',
      'Retrieving the best generation seeds.'
    ],
    correctAnswer: 'Combining parametric knowledge from LLMs with non-parametric knowledge from external retrieval systems.'
  },
  {
    id: 'ai-97',
    type: 'mcq',
    category: 'Computer Vision',
    text: 'What is "Self-Supervised Learning" in computer vision?',
    options: [
      'Creating supervisory signals from the data itself without human labels, such as predicting image rotations.',
      'Training models to supervise themselves without any data.',
      'Supervised learning with automated supervisors.',
      'Learning without any loss function.'
    ],
    correctAnswer: 'Creating supervisory signals from the data itself without human labels, such as predicting image rotations.'
  },
  {
    id: 'ai-98',
    type: 'mcq',
    category: 'Transformer Architecture',
    text: 'What is "Flash Attention" optimization?',
    options: [
      'An IO-aware algorithm that reduces memory reads/writes for attention computation, speeding up training.',
      'Making attention mechanisms run faster by using flash memory.',
      'A technique to flash (display) attention weights.',
      'Attention that lasts for a very short time.'
    ],
    correctAnswer: 'An IO-aware algorithm that reduces memory reads/writes for attention computation, speeding up training.'
  },
  {
    id: 'ai-99',
    type: 'mcq',
    category: 'Large Language Models',
    text: 'What is "In-Context Learning" capability of LLMs?',
    options: [
      'Learning to perform tasks from examples provided in the prompt without gradient updates.',
      'Learning about the context of conversations.',
      'Training models within a specific context window.',
      'Context-aware pretraining objectives.'
    ],
    correctAnswer: 'Learning to perform tasks from examples provided in the prompt without gradient updates.'
  },
  {
    id: 'ai-100',
    type: 'mcq',
    category: 'AI Ethics',
    text: 'What is "Alignment" in the context of advanced AI systems?',
    options: [
      'Ensuring AI systems pursue intended goals and behave in accordance with human values and intentions.',
      'Aligning text in the training data.',
      'Memory alignment for efficient GPU usage.',
      'Aligning model layers in parallel.'
    ],
    correctAnswer: 'Ensuring AI systems pursue intended goals and behave in accordance with human values and intentions.'
  }
];