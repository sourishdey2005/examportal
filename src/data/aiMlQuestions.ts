import { Question } from '../types';

export const AI_ML_QUESTIONS: Question[] = [
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
    id: 'ai-3',
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
    id: 'ai-4',
    type: 'mcq',
    category: 'Reinforcement Learning',
    text: 'What is the "Deadly Triad" in Reinforcement Learning, which can lead to instability or divergence in value function estimation?',
    options: [
      'High variance, low bias, and large state spaces.',
      'Function approximation, Bootstrapping, and Off-policy learning.',
      'Exploration, Exploitation, and Reward shaping.',
      'Discount factors, Eligibility traces, and Policy gradients.'
    ],
    correctAnswer: 'Function approximation, Bootstrapping, and Off-policy learning.'
  },
  {
    id: 'ai-5',
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
  }
];

const aiCategories = ['Large Language Models', 'Computer Vision', 'AI Ethics', 'MLOps', 'Bayesian Inference', 'Graph Neural Networks'];
const aiTopics = [
  'Chain-of-Thought prompting mechanisms',
  'Vision Transformer (ViT) patch embeddings',
  'Differential Privacy in model training',
  'Model Quantization (INT8 vs FP16)',
  'Markov Chain Monte Carlo (MCMC) sampling',
  'Message Passing in GNNs'
];

for (let i = 6; i <= 100; i++) {
  const category = aiCategories[i % aiCategories.length];
  const topic = aiTopics[i % aiTopics.length];
  AI_ML_QUESTIONS.push({
    id: `ai-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] When considering ${topic}, which factor is most critical for ensuring the robustness of the model in a production environment?`,
    options: [
      'The total number of parameters in the model.',
      'The quality and diversity of the fine-tuning dataset.',
      'The clock speed of the GPUs used for inference.',
      'The choice of activation function in the final layer.'
    ],
    correctAnswer: 'The quality and diversity of the fine-tuning dataset.'
  });
}
