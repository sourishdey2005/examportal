import { Question } from '../types';

export const AI_ML_QUESTIONS: Question[] = [
  // ==================== TRANSFORMER ARCHITECTURE & LLMs ====================
  {
    id: 'ai-1',
    type: 'numerical-mcq',
    category: 'Transformer Mathematics',
    text: 'A transformer model has d_model=8192, n_heads=64, sequence length L=4096. Calculate the total FLOPs for the self-attention mechanism including QKV projections, attention computation, and output projection. Use FLOPs = 4·L²·d_model + 6·L·d_model². What is the result in TFLOPs?',
    options: ['1.37 TFLOPs', '2.75 TFLOPs', '5.50 TFLOPs', '11.0 TFLOPs'],
    correctAnswer: '5.50 TFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-2',
    type: 'numerical-mcq',
    category: 'Memory Analysis',
    text: 'For a Llama 2 70B model with 80 layers, hidden size 8192, using Grouped Query Attention with 8 KV heads and 32 Q heads, calculate the KV cache size per 100 tokens in GB. Assume FP16 precision.',
    options: ['0.131 GB', '0.262 GB', '0.524 GB', '1.048 GB'],
    correctAnswer: '0.262 GB',
    difficulty: 'expert'
  },
  {
    id: 'ai-3',
    type: 'numerical-mcq',
    category: 'Optimization Theory',
    text: 'When training a 7B parameter model with Adam optimizer and gradient checkpointing using O(√L) memory, if L=32 layers, what is the total GPU memory requirement in GB assuming 4-bit quantization for weights and gradients, and FP16 for optimizer states?',
    options: ['14.5 GB', '18.3 GB', '21.4 GB', '28.0 GB'],
    correctAnswer: '21.4 GB',
    difficulty: 'expert'
  },
  {
    id: 'ai-4',
    type: 'numerical-mcq',
    category: 'Mixture of Experts',
    text: 'Mixtral 8x7B uses top-2 routing out of 8 experts per token. If hidden dimension d_model=4096 and FFN expansion factor is 3.5× using SwiGLU activation, calculate the total parameters in an expert\'s FFN (in billions).',
    options: ['2.7B', '4.7B', '7.0B', '9.4B'],
    correctAnswer: '4.7B',
    difficulty: 'expert'
  },
  {
    id: 'ai-5',
    type: 'numerical-mcq',
    category: 'Flash Attention',
    text: 'Flash Attention reduces memory complexity from O(N²) to O(N). For N=32,768 and d_head=256, calculate the approximate peak memory usage in MB when using Flash Attention with block_size=256 and 4-bit quantization for attention scores.',
    options: ['8 MB', '16 MB', '32 MB', '64 MB'],
    correctAnswer: '16 MB',
    difficulty: 'expert'
  },
  {
    id: 'ai-6',
    type: 'numerical-mcq',
    category: 'Multi-Query Attention',
    text: 'For a model with d_model=6144, n_heads=48, using Multi-Query Attention (MQA), calculate the percentage reduction in KV cache size compared to standard Multi-Head Attention (MHA).',
    options: ['95.8%', '97.9%', '98.6%', '99.2%'],
    correctAnswer: '97.9%',
    difficulty: 'expert'
  },
  {
    id: 'ai-7',
    type: 'numerical-mcq',
    category: 'Grouped Query Attention',
    text: 'A model uses GQA with 96 Q heads and 12 KV heads. If KV cache for a single sequence of length 4096 is 1.2 GB in FP16, what is the cache size for MHA and MQA?',
    options: ['MHA: 9.6 GB, MQA: 0.1 GB', 'MHA: 19.2 GB, MQA: 0.2 GB', 'MHA: 9.6 GB, MQA: 0.2 GB', 'MHA: 4.8 GB, MQA: 0.05 GB'],
    correctAnswer: 'MHA: 9.6 GB, MQA: 0.1 GB',
    difficulty: 'expert'
  },
  {
    id: 'ai-8',
    type: 'numerical-mcq',
    category: 'Rotary Position Embedding',
    text: 'For RoPE applied to a single attention head with d_head=128 and sequence length L=8192, calculate the total MFLOPs required. Assume 5 operations per complex rotation.',
    options: ['1.34 MFLOPs', '2.68 MFLOPs', '5.36 MFLOPs', '10.72 MFLOPs'],
    correctAnswer: '2.68 MFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-9',
    type: 'numerical-mcq',
    category: 'RMSNorm',
    text: 'RMSNorm for d_model=8192, batch size B=32, sequence length L=2048. Calculate total FLOPs for forward pass in GFLOPs assuming 3 operations per element per vector (square, sum, divide, multiply).',
    options: ['0.26 GFLOPs', '0.52 GFLOPs', '1.05 GFLOPs', '2.10 GFLOPs'],
    correctAnswer: '1.05 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-10',
    type: 'numerical-mcq',
    category: 'SwiGLU Activation',
    text: 'SwiGLU activation uses 3 linear transformations: x * sigmoid(x) * (W1*x) + (W3*x). If d_model=4096 and ffw_dim=16384, calculate the total FLOPs for SwiGLU in a single transformer layer for batch size 32, sequence length 2048 (in GFLOPs).',
    options: ['12.9 GFLOPs', '25.8 GFLOPs', '38.7 GFLOPs', '51.6 GFLOPs'],
    correctAnswer: '25.8 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-11',
    type: 'numerical-mcq',
    category: 'Quantization',
    text: 'A 13B parameter model is quantized from FP16 to INT4. The original model size is 26 GB. After quantization, what is the size in GB, and what is the theoretical maximum inference speedup assuming memory bandwidth is the bottleneck?',
    options: ['6.5 GB, 4x', '13 GB, 2x', '6.5 GB, 8x', '13 GB, 4x'],
    correctAnswer: '6.5 GB, 4x',
    difficulty: 'expert'
  },
  {
    id: 'ai-12',
    type: 'numerical-mcq',
    category: 'LoRA Theory',
    text: 'LoRA is applied to a 7B model with rank r=8 to all 96 attention layers (Q, K, V, O projections). Each projection matrix has dimensions d_model=4096 × d_model=4096. Calculate the number of trainable parameters added by LoRA in millions.',
    options: ['33.6M', '67.1M', '134.2M', '268.4M'],
    correctAnswer: '134.2M',
    difficulty: 'expert'
  },
  {
    id: 'ai-13',
    type: 'numerical-mcq',
    category: 'Attention Complexity',
    text: 'For a transformer with sliding window attention of window size W=4096 and sequence length N=32768, calculate the ratio of FLOPs compared to full quadratic attention.',
    options: ['1/2', '1/4', '1/8', '1/16'],
    correctAnswer: '1/8',
    difficulty: 'expert'
  },
  {
    id: 'ai-14',
    type: 'numerical-mcq',
    category: 'Training Throughput',
    text: 'Training a 1.2B parameter model on 8 A100 GPUs (each 312 TFLOPS FP16). If the model achieves 40% FLOPs utilization, calculate the training throughput in tokens per second for sequence length 2048.',
    options: ['12,800 t/s', '25,600 t/s', '38,400 t/s', '51,200 t/s'],
    correctAnswer: '38,400 t/s',
    difficulty: 'expert'
  },
  {
    id: 'ai-15',
    type: 'numerical-mcq',
    category: 'Inference Latency',
    text: 'An LLM with 70B parameters runs inference on a single GPU with memory bandwidth of 1.5 TB/s. Calculate the minimum theoretical latency in ms for generating a single token (load all weights once). Assume FP16 weights.',
    options: ['37 ms', '74 ms', '93 ms', '186 ms'],
    correctAnswer: '93 ms',
    difficulty: 'expert'
  },

  // ==================== GENERATIVE MODELS ====================
  {
    id: 'ai-16',
    type: 'numerical-mcq',
    category: 'Diffusion Models',
    text: 'In DDPM, if β_t linearly increases from β_1=1e-4 to β_T=0.02 with T=1000 steps, calculate α_bar_500 (cumulative product of (1-β_t) up to step 500). Estimate using continuous approximation.',
    options: ['0.18', '0.37', '0.63', '0.82'],
    correctAnswer: '0.63',
    difficulty: 'expert'
  },
  {
    id: 'ai-17',
    type: 'numerical-mcq',
    category: 'Diffusion Models',
    text: 'For a diffusion model generating 512×512 images with U-Net having 2.5B parameters, using 50 DDIM sampling steps, calculate total FLOPs for generation if each step uses 2× forward passes (unique denoising + CFG). Assume each forward pass is equivalent to 2× inference of a 7B LLM.',
    options: ['0.7 TFLOPs', '1.4 TFLOPs', '2.1 TFLOPs', '2.8 TFLOPs'],
    correctAnswer: '2.1 TFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-18',
    type: 'numerical-mcq',
    category: 'GANs',
    text: 'In StyleGAN3, the mapping network has 8 fully connected layers with dimension 512. Calculate the total parameters in the mapping network if each layer includes bias.',
    options: ['1.05M', '2.10M', '3.15M', '4.20M'],
    correctAnswer: '2.10M',
    difficulty: 'expert'
  },
  {
    id: 'ai-19',
    type: 'numerical-mcq',
    category: 'VAEs',
    text: 'A VAE with latent dimension z=256, encoder output μ and σ, and decoder reconstructing 256×256×3 images. Calculate the KL divergence term for a single sample if μ = [0.1, 0.2, ..., 0.1*256] and σ = softplus([0.5, 0.5, ...]).',
    options: ['32.8', '65.6', '98.4', '131.2'],
    correctAnswer: '32.8',
    difficulty: 'expert'
  },
  {
    id: 'ai-20',
    type: 'numerical-mcq',
    category: 'Stable Diffusion',
    text: 'Stable Diffusion VAE compresses 512×512×3 images to 64×64×4 latent space. Calculate the compression ratio (input elements / output elements).',
    options: ['16:1', '24:1', '48:1', '96:1'],
    correctAnswer: '48:1',
    difficulty: 'expert'
  },
  {
    id: 'ai-21',
    type: 'numerical-mcq',
    category: 'Flow Matching',
    text: 'In Conditional Flow Matching, if the vector field is parameterized with 500M parameters, and we train on 10M image-text pairs at resolution 256×256, calculate total FLOPs for one epoch with batch size 256, assuming each forward+backward is 4× the FLOPs of a 7B LLM forward pass.',
    options: ['2.8e22 FLOPs', '5.6e22 FLOPs', '1.1e23 FLOPs', '2.2e23 FLOPs'],
    correctAnswer: '2.8e22 FLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-22',
    type: 'numerical-mcq',
    category: 'Normalizing Flows',
    text: 'A RealNVP flow has 32 coupling layers, each with a scaling network of 2 hidden layers of size 512. Input dimension is 784 (MNIST). Calculate total parameters in the coupling networks.',
    options: ['25.8M', '51.6M', '77.4M', '103.2M'],
    correctAnswer: '51.6M',
    difficulty: 'expert'
  },
  {
    id: 'ai-23',
    type: 'numerical-mcq',
    category: 'Classifier Guidance',
    text: 'In classifier guidance for diffusion, guidance scale w=2.0. If the unconditional score estimate is s_u = -0.5 and classifier gradient is g = 0.3, calculate the guided score estimate.',
    options: ['-0.1', '-0.2', '0.1', '0.2'],
    correctAnswer: '0.1',
    difficulty: 'expert'
  },
  {
    id: 'ai-24',
    type: 'numerical-mcq',
    category: 'Latent Diffusion',
    text: 'A latent diffusion model operates on latent space of size 64×64×4. If the attention layers in the U-Net have d_model=1024 and 16 heads, calculate the FLOPs for a single attention layer (QKV projections + attention) in GFLOPs.',
    options: ['0.27 GFLOPs', '0.54 GFLOPs', '1.08 GFLOPs', '2.16 GFLOPs'],
    correctAnswer: '0.54 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-25',
    type: 'numerical-mcq',
    category: 'Score Matching',
    text: 'Denoising Score Matching with noise levels σ = [0.1, 0.2, 0.5, 1.0] each equally weighted. For a sample x, corrupted to x+ε where ε~N(0, σ²I), the score network predicts s_θ(x+ε, σ). Calculate the effective weight for σ=0.2 if using variance weighting 1/σ².',
    options: ['0.01', '0.25', '4.0', '25.0'],
    correctAnswer: '25.0',
    difficulty: 'expert'
  },

  // ==================== REINFORCEMENT LEARNING ====================
  {
    id: 'ai-26',
    type: 'numerical-mcq',
    category: 'Policy Gradients',
    text: 'In REINFORCE algorithm, with discount factor γ=0.99, episode length T=1000, and all rewards r_t=1, calculate the return G_t for t=500.',
    options: ['63.4', '73.4', '83.4', '93.4'],
    correctAnswer: '73.4',
    difficulty: 'expert'
  },
  {
    id: 'ai-27',
    type: 'numerical-mcq',
    category: 'PPO Theory',
    text: 'In PPO with clip range ε=0.2, policy ratio r_t(θ)=1.3, advantage A_t=1.5. Calculate the clipped surrogate objective value.',
    options: ['1.5', '1.8', '1.95', '2.25'],
    correctAnswer: '1.8',
    difficulty: 'expert'
  },
  {
    id: 'ai-28',
    type: 'numerical-mcq',
    category: 'DQN',
    text: 'In DQN with target network updated every C=1000 steps. If we train for 10M steps, how many target network updates occur?',
    options: ['10,000', '20,000', '30,000', '40,000'],
    correctAnswer: '10,000',
    difficulty: 'expert'
  },
  {
    id: 'ai-29',
    type: 'numerical-mcq',
    category: 'SAC Algorithm',
    text: 'In Soft Actor-Critic, temperature α=0.2, policy outputs mean μ=-0.8, log_std= -1.0. Sample action a = μ + σ×ε where ε=0.5. Calculate log probability of the action (up to constant).',
    options: ['-1.78', '-2.08', '-2.38', '-2.68'],
    correctAnswer: '-2.08',
    difficulty: 'expert'
  },
  {
    id: 'ai-30',
    type: 'numerical-mcq',
    category: 'TD Learning',
    text: 'In TD(0) with α=0.1, γ=0.9, current V(s)=5.0, next state V(s\')=6.0, reward r=2. Calculate the TD error and new V(s).',
    options: ['δ=2.4, V=5.24', 'δ=2.4, V=5.0', 'δ=0.4, V=5.04', 'δ=3.4, V=5.34'],
    correctAnswer: 'δ=2.4, V=5.24',
    difficulty: 'expert'
  },
  {
    id: 'ai-31',
    type: 'numerical-mcq',
    category: 'Actor-Critic',
    text: 'In Advantage Actor-Critic (A2C) with value loss coefficient c_v=0.5, entropy coefficient c_e=0.01. Policy loss L_p= -1.2, value loss L_v=0.8, entropy H=2.5. Calculate total loss.',
    options: ['-1.585', '-1.415', '-1.195', '-0.975'],
    correctAnswer: '-1.195',
    difficulty: 'expert'
  },
  {
    id: 'ai-32',
    type: 'numerical-mcq',
    category: 'Bellman Optimality',
    text: 'For a 2-state MDP: state A -> reward 0 to A (prob 0.5), reward 10 to B (prob 0.5). state B -> reward 0 to B (prob 1.0). γ=0.9. Solve for V*(A) and V*(B).',
    options: ['V*(A)=45, V*(B)=0', 'V*(A)=50, V*(B)=0', 'V*(A)=55, V*(B)=0', 'V*(A)=60, V*(B)=0'],
    correctAnswer: 'V*(A)=50, V*(B)=0',
    difficulty: 'expert'
  },
  {
    id: 'ai-33',
    type: 'numerical-mcq',
    category: 'Importance Sampling',
    text: 'In off-policy learning, behavior policy b(a|s)=0.6, target policy π(a|s)=0.3. Calculate the importance sampling weight for this action.',
    options: ['0.2', '0.3', '0.5', '2.0'],
    correctAnswer: '0.5',
    difficulty: 'expert'
  },
  {
    id: 'ai-34',
    type: 'numerical-mcq',
    category: 'Eligibility Traces',
    text: 'In TD(λ) with λ=0.8, γ=0.9, current eligibility trace e(s)=0.5, update amount δ=2.0. Calculate new e(s) after update and the weight change.',
    options: ['e=0.86, Δw=1.72', 'e=0.86, Δw=0.86', 'e=0.43, Δw=0.86', 'e=1.00, Δw=2.00'],
    correctAnswer: 'e=0.86, Δw=1.72',
    difficulty: 'expert'
  },
  {
    id: 'ai-35',
    type: 'numerical-mcq',
    category: 'MARL',
    text: 'In Independent PPO with 4 agents, each with 5M parameters, centralized training with decentralized execution. Calculate total communication overhead per gradient step (in MB) if each agent sends full gradients (FP32).',
    options: ['20 MB', '40 MB', '60 MB', '80 MB'],
    correctAnswer: '80 MB',
    difficulty: 'expert'
  },

  // ==================== COMPUTER VISION ====================
  {
    id: 'ai-36',
    type: 'numerical-mcq',
    category: 'Vision Transformers',
    text: 'ViT-Base (d_model=768, n_heads=12, L=12) processes 224×224 images with patch size 16×16. Calculate total FLOPs for the transformer encoder alone (excluding patch embedding).',
    options: ['11.2 GFLOPs', '22.4 GFLOPs', '44.8 GFLOPs', '89.6 GFLOPs'],
    correctAnswer: '22.4 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-37',
    type: 'numerical-mcq',
    category: 'CNN Architectures',
    text: 'A ResNet-50 bottleneck block (1×1, 64; 3×3, 64; 1×1, 256) with input feature map 56×56×256. Calculate FLOPs for this block.',
    options: ['120 MFLOPS', '240 MFLOPS', '480 MFLOPS', '960 MFLOPS'],
    correctAnswer: '240 MFLOPS',
    difficulty: 'expert'
  },
  {
    id: 'ai-38',
    type: 'numerical-mcq',
    category: 'Object Detection',
    text: 'In YOLOv5, anchor boxes are [10,13, 16,30, 33,23] for small objects. If input is 640×640 and stride=8, map these anchors to feature map coordinates (scale factor 640/8=80). Calculate the scaled anchor dimensions.',
    options: ['[1.25,1.63, 2.0,3.75, 4.13,2.88]', '[80,104, 128,240, 264,184]', '[125,163, 200,375, 413,288]', '[1.0,1.3, 1.6,3.0, 3.3,2.3]'],
    correctAnswer: '[1.25,1.63, 2.0,3.75, 4.13,2.88]',
    difficulty: 'expert'
  },
  {
    id: 'ai-39',
    type: 'numerical-mcq',
    category: 'Segmentation',
    text: 'U-Net with input 256×256×3, 5 downsampling levels (64,128,256,512,1024 channels). Calculate total parameters in the encoder (excluding batch norm, include biases).',
    options: ['5.2M', '7.8M', '10.4M', '13.0M'],
    correctAnswer: '7.8M',
    difficulty: 'expert'
  },
  {
    id: 'ai-40',
    type: 'numerical-mcq',
    category: 'Depthwise Conv',
    text: 'MobileNetV2 uses depthwise separable convolution. Compare FLOPs of standard conv (3×3, in=128, out=256, H=56, W=56) vs depthwise+pointwise.',
    options: ['724M vs 9.2M (78x)', '724M vs 18.4M (39x)', '362M vs 9.2M (39x)', '362M vs 18.4M (19x)'],
    correctAnswer: '724M vs 9.2M (78x)',
    difficulty: 'expert'
  },
  {
    id: 'ai-41',
    type: 'numerical-mcq',
    category: 'Feature Pyramids',
    text: 'FPN with 5 levels (P2-P6) where P2: 256×256×256, P3: 128×128×256, P4: 64×64×256, P5: 32×32×256, P6: 16×16×256. Calculate total FLOPs for lateral connections (1×1 conv) and top-down upsampling (nearest neighbor).',
    options: ['0.42 GFLOPs', '0.84 GFLOPs', '1.68 GFLOPs', '3.36 GFLOPs'],
    correctAnswer: '0.84 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-42',
    type: 'numerical-mcq',
    category: 'YOLO',
    text: 'YOLO loss function: box loss λ_coord=5, no-object loss λ_noobj=0.5. For a grid cell predicting an object with IoU=0.7, confidence target=1, predicted confidence=0.6. Calculate confidence loss contribution (BCE with logits).',
    options: ['0.51', '0.23', '0.36', '0.42'],
    correctAnswer: '0.36',
    difficulty: 'expert'
  },
  {
    id: 'ai-43',
    type: 'numerical-mcq',
    category: 'Instance Segmentation',
    text: 'Mask R-CNN with 80 classes produces masks of size 28×28. For an image with 10 detected instances, calculate the total number of mask parameters output (logits).',
    options: ['80×28×28×10 = 627,200', '80×28×28 = 62,720', '90×28×28 = 70,560', '80×28×28×80 = 5,017,600'],
    correctAnswer: '80×28×28 = 62,720',
    difficulty: 'expert'
  },
  {
    id: 'ai-44',
    type: 'numerical-mcq',
    category: 'Contrastive Learning',
    text: 'SimCLR with batch size 4096 uses NT-Xent loss. Calculate total number of positive pairs in one batch (assuming each image has one positive augmentation).',
    options: ['4096', '8192', '16384', '32768'],
    correctAnswer: '4096',
    difficulty: 'expert'
  },
  {
    id: 'ai-45',
    type: 'numerical-mcq',
    category: 'EfficientNet',
    text: 'EfficientNet-B0 baseline: width=1.0, depth=1.0, resolution=224. For EfficientNet-B4 with scaling coefficients (α=1.2, β=1.1, γ=1.15), calculate the approximate FLOPs multiplier.',
    options: ['4.5x', '6.5x', '8.5x', '10.5x'],
    correctAnswer: '6.5x',
    difficulty: 'expert'
  },

  // ==================== OPTIMIZATION & TRAINING ====================
  {
    id: 'ai-46',
    type: 'numerical-mcq',
    category: 'Adam Optimizer',
    text: 'Adam optimizer with β₁=0.9, β₂=0.999, step t=1000, learning rate η=1e-4. If gradient g_t=0.1, m_{t-1}=0.05, v_{t-1}=0.0025. Calculate m̂_t and v̂_t, then parameter update Δθ.',
    options: ['Δθ = -9.9e-5', 'Δθ = -1.98e-4', 'Δθ = -3.96e-4', 'Δθ = -7.92e-4'],
    correctAnswer: 'Δθ = -1.98e-4',
    difficulty: 'expert'
  },
  {
    id: 'ai-47',
    type: 'numerical-mcq',
    category: 'LR Scheduling',
    text: 'Cosine decay schedule: η_min=1e-5, η_max=1e-3, T=10000 steps. Calculate learning rate at t=2500, t=5000, t=7500.',
    options: '[9.09e-4, 5.0e-4, 9.09e-5]', '[7.5e-4, 5.0e-4, 2.5e-4]', '[8.5e-4, 5.5e-4, 8.5e-5]', '[9.5e-4, 5.0e-4, 5.0e-5]'],
    correctAnswer: '[9.09e-4, 5.0e-4, 9.09e-5]',
    difficulty: 'expert'
  },
  {
    id: 'ai-48',
    type: 'numerical-mcq',
    category: 'Batch Normalization',
    text: 'BatchNorm layer with running_mean=0.1, running_var=1.0, momentum=0.1. Batch of 32 samples has mean=0.3, var=1.2. Calculate updated running mean and var.',
    options: ['mean=0.12, var=1.02', 'mean=0.15, var=1.02', 'mean=0.12, var=1.05', 'mean=0.15, var=1.05'],
    correctAnswer: 'mean=0.12, var=1.02',
    difficulty: 'expert'
  },
  {
    id: 'ai-49',
    type: 'numerical-mcq',
    category: 'LayerNorm',
    text: 'LayerNorm on vector x=[1,2,3,4,5]. ε=1e-5, γ=[1,1,1,1,1], β=[0,0,0,0,0]. Calculate normalized output y for element x₃=3.',
    options: ['-0.707', '0', '0.707', '1.414'],
    correctAnswer: '0',
    difficulty: 'expert'
  },
  {
    id: 'ai-50',
    type: 'numerical-mcq',
    category: 'Gradient Clipping',
    text: 'Gradient vector g = [0.5, 1.0, 1.5, 2.0, 2.5]. Apply global norm clipping with max_norm=2.0. Calculate scaling factor and clipped gradients.',
    options: ['factor=0.78, g_clipped=[0.39,0.78,1.17,1.56,1.95]', 'factor=0.62, g_clipped=[0.31,0.62,0.93,1.24,1.55]', 'factor=0.55, g_clipped=[0.28,0.55,0.83,1.10,1.38]', 'factor=0.43, g_clipped=[0.22,0.43,0.65,0.86,1.08]'],
    correctAnswer: 'factor=0.62, g_clipped=[0.31,0.62,0.93,1.24,1.55]',
    difficulty: 'expert'
  },
  {
    id: 'ai-51',
    type: 'numerical-mcq',
    category: 'Dropout',
    text: 'Dropout with keep_prob=0.8. For a layer with 1000 neurons, average 200 dropped per forward pass. In test time, weights are scaled by keep_prob. If training output mean is 1.0, test output mean is?',
    options: ['0.8', '1.0', '1.25', '0.64'],
    correctAnswer: '1.0',
    difficulty: 'expert'
  },
  {
    id: 'ai-52',
    type: 'numerical-mcq',
    category: 'Weight Decay',
    text: 'SGD with weight decay λ=1e-4, learning rate η=0.1. Current weight w=0.5, gradient g=0.05. Calculate new weight after one update.',
    options: ['0.495', '0.500', '0.505', '0.510'],
    correctAnswer: '0.495',
    difficulty: 'expert'
  },
  {
    id: 'ai-53',
    type: 'numerical-mcq',
    category: 'Mixed Precision',
    text: 'FP16 has exponent 5 bits, mantissa 10 bits. FP32 has 8 exponent, 23 mantissa. Calculate the smallest positive normalized number representable in FP16.',
    options: ['6.10e-5', '5.96e-8', '2.98e-8', '1.19e-7'],
    correctAnswer: '6.10e-5',
    difficulty: 'expert'
  },
  {
    id: 'ai-54',
    type: 'numerical-mcq',
    category: 'Gradient Checkpointing',
    text: 'Model with 50 layers. Full activation memory = 20GB. Checkpoint every √L layers. Calculate memory savings percentage.',
    options: ['86%', '92%', '96%', '98%'],
    correctAnswer: '86%',
    difficulty: 'expert'
  },
  {
    id: 'ai-55',
    type: 'numerical-mcq',
    category: 'Label Smoothing',
    text: 'Label smoothing with ε=0.1 for 10 classes. For a true label y=3, what is the smoothed target distribution?',
    options: ['p=0.91 for class 3, p=0.01 for others', 'p=0.99 for class 3, p=0.001 for others', 'p=0.81 for class 3, p=0.01 for others', 'p=0.81 for class 3, p=0.021 for others'],
    correctAnswer: 'p=0.91 for class 3, p=0.01 for others',
    difficulty: 'expert'
  },

  // ==================== GRAPH NEURAL NETWORKS ====================
  {
    id: 'ai-56',
    type: 'numerical-mcq',
    category: 'GCN Propagation',
    text: 'Graph with adjacency matrix A (3 nodes: 0-1, 1-2, 0-2 edges all weight 1). Add self-loops, degree matrix D̃, compute normalized adjacency Ã = D̃^{-1/2} Ã D̃^{-1/2}. Calculate Ã[0,1] value.',
    options: ['0.33', '0.41', '0.50', '0.58'],
    correctAnswer: '0.41',
    difficulty: 'expert'
  },
  {
    id: 'ai-57',
    type: 'numerical-mcq',
    category: 'GraphSAGE',
    text: 'GraphSAGE with mean aggregator, node features h=[1,2,3,4,5] for neighbors. Calculate aggregated neighbor embedding (excluding self).',
    options: '[2,3,4,5,6]', '[1,2,3,4,5]', '[3,4,5,6,7]', '[0,1,2,3,4]'],
    correctAnswer: '[3,4,5,6,7]',
    difficulty: 'expert'
  },
  {
    id: 'ai-58',
    type: 'numerical-mcq',
    category: 'GAT Attention',
    text: 'GAT with LeakyReLU(α=0.2), attention vector a=[1,-1]. Node features h_i=[2,3], h_j=[4,5]. Calculate attention coefficient e_ij before softmax.',
    options: ['0.6', '1.2', '1.8', '2.4'],
    correctAnswer: '1.2',
    difficulty: 'expert'
  },
  {
    id: 'ai-59',
    type: 'numerical-mcq',
    category: 'GIN',
    text: 'GIN (Graph Isomorphism Network) update: h_v^(k) = MLP((1+ε)h_v^(k-1) + Σ_{u∈N(v)} h_u^(k-1)). For ε=0, MLP is identity, h_u=[1,1,1,1], node v has 3 neighbors each [1,1,1,1]. Calculate h_v.',
    options: '[3,3,3,3]', '[4,4,4,4]', '[1,1,1,1]', '[0,0,0,0]'],
    correctAnswer: '[4,4,4,4]',
    difficulty: 'expert'
  },
  {
    id: 'ai-60',
    type: 'numerical-mcq',
    category: 'Graph Pooling',
    text: 'DiffPool learns assignment matrix S of size n×k where n=10 nodes, k=3 clusters. If S is softmax row-wise, and node features X∈R^{10×16}, compute pooled features X' = S^T X. What are dimensions of X'?',
    options: '[3×16]', '[10×16]', '[3×10]', '[16×3]'],
    correctAnswer: '[3×16]',
    difficulty: 'expert'
  },
  {
    id: 'ai-61',
    type: 'numerical-mcq',
    category: 'RGCN',
    text: 'RGCN with 3 relation types, each with its own weight matrix W_r of size 16×32. Input node features 10×16, output dimension 32. Calculate total parameters for relation transformations (excluding self-loop).',
    options: ['1536', '3072', '4608', '6144'],
    correctAnswer: '1536',
    difficulty: 'expert'
  },
  {
    id: 'ai-62',
    type: 'numerical-mcq',
    category: 'Gated GNN',
    text: 'GGNN uses GRU for propagation. If hidden dimension d=256, input feature size=512, calculate total parameters in GRU cell (input to hidden W_ih, hidden to hidden W_hh, biases).',
    options: ['589,824', '1,179,648', '1,769,472', '2,359,296'],
    correctAnswer: '1,179,648',
    difficulty: 'expert'
  },
  {
    id: 'ai-63',
    type: 'numerical-mcq',
    category: 'Message Passing',
    text: 'MPNN with 5 message-passing steps, each vertex has degree 4, feature dimension 128. Calculate total messages sent (each step sends message per edge). Graph has 1000 nodes, 2000 edges.',
    options: ['10,000 messages', '20,000 messages', '30,000 messages', '40,000 messages'],
    correctAnswer: '10,000 messages',
    difficulty: 'expert'
  },
  {
    id: 'ai-64',
    type: 'numerical-mcq',
    category: 'Graph Transformer',
    text: 'Graph Transformer with Laplacian positional encoding using k=8 eigenvectors. For graph with 500 nodes, each with degree variance σ²=2.0, calculate the dimension of the full node feature after concatenating original features (d=256) with PE.',
    options: ['264', '256', '512', '2640'],
    correctAnswer: '264',
    difficulty: 'expert'
  },
  {
    id: 'ai-65',
    type: 'numerical-mcq',
    category: 'Weisfeiler-Lehman',
    text: 'WL test on two graphs: Graph A: triangle (3 nodes cycle). Graph B: path of length 2 (3 nodes line). After 1 iteration of WL (color refinement), compute number of distinct colors in Graph A.',
    options: ['1', '2', '3', '4'],
    correctAnswer: '1',
    difficulty: 'expert'
  },

  // ==================== PROBABILISTIC METHODS & BAYESIAN ====================
  {
    id: 'ai-66',
    type: 'numerical-mcq',
    category: 'Bayesian Inference',
    text: 'Beta-Binomial model: Prior Beta(α=2,β=2), observed 3 successes in 5 trials. Calculate posterior mean.',
    options: ['0.40', '0.45', '0.50', '0.55'],
    correctAnswer: '0.50',
    difficulty: 'expert'
  },
  {
    id: 'ai-67',
    type: 'numerical-mcq',
    category: 'Gaussian Processes',
    text: 'GP with RBF kernel: lengthscale l=1.0, signal variance σ_f²=1.0, noise σ_n²=0.1. For x=0 and x'=1, calculate kernel value k(x,x\').',
    options: ['0.37', '0.61', '0.78', '0.90'],
    correctAnswer: '0.61',
    difficulty: 'expert'
  },
  {
    id: 'ai-68',
    type: 'numerical-mcq',
    category: 'Variational Inference',
    text: 'VI with Gaussian posterior q(θ)=N(μ=0.5,σ=0.2), true posterior p(θ|D) approximated. Calculate KL divergence between q and p if p(θ)=N(0,1). (Use exact formula)',
    options: ['1.60', '2.05', '2.50', '2.95'],
    correctAnswer: '2.05',
    difficulty: 'expert'
  },
  {
    id: 'ai-69',
    type: 'numerical-mcq',
    category: 'MCMC',
    text: 'Metropolis-Hastings with proposal q(θ'|θ)=N(θ,σ²=0.5²). Current θ=1.0, proposed θ'=1.3. Target p(θ)=N(0,1). Calculate acceptance probability.',
    options: ['0.33', '0.44', '0.55', '0.66'],
    correctAnswer: '0.55',
    difficulty: 'expert'
  },
  {
    id: 'ai-70',
    type: 'numerical-mcq',
    category: 'ELBO',
    text: 'VAE ELBO = E_q[log p(x|z)] - KL(q(z|x)||p(z)). For x=image, p(z)=N(0,I), q(z|x)=N(μ=0.2, σ=0.5²I), compute KL term (per dimension).',
    options: ['0.38', '0.76', '1.14', '1.52'],
    correctAnswer: '0.76',
    difficulty: 'expert'
  },
  {
    id: 'ai-71',
    type: 'numerical-mcq',
    category: 'Bayesian Optimization',
    text: 'EI acquisition function: best observed f*=0.5, predicted μ=0.8, σ=0.3. Calculate improvement and EI value.',
    options: ['I=0.3, EI=0.14', 'I=0.3, EI=0.28', 'I=0.5, EI=0.14', 'I=0.5, EI=0.28'],
    correctAnswer: 'I=0.3, EI=0.14',
    difficulty: 'expert'
  },
  {
    id: 'ai-72',
    type: 'numerical-mcq',
    category: 'Conjugate Prior',
    text: 'Normal-Normal conjugate prior: prior N(μ₀=0, σ₀²=1), likelihood N(x|μ, σ²=4), single observation x=3. Calculate posterior mean and variance.',
    options: ['μ₁=2.0, σ₁²=0.8', 'μ₁=2.4, σ₁²=0.8', 'μ₁=2.0, σ₁²=1.2', 'μ₁=2.4, σ₁²=1.2'],
    correctAnswer: 'μ₁=2.4, σ₁²=0.8',
    difficulty: 'expert'
  },
  {
    id: 'ai-73',
    type: 'numerical-mcq',
    category: 'Monte Carlo Dropout',
    text: 'MC Dropout with 100 forward passes, predictions: 80 times class A, 20 times class B. Calculate predictive uncertainty (entropy) and variance.',
    options: ['H=0.50, p_var=0.16', 'H=0.50, p_var=0.12', 'H=0.72, p_var=0.16', 'H=0.72, p_var=0.12'],
    correctAnswer: 'H=0.50, p_var=0.16',
    difficulty: 'expert'
  },
  {
    id: 'ai-74',
    type: 'numerical-mcq',
    category: 'Bayesian Neural Network',
    text: 'Bayesian linear regression with Gaussian prior on weights w~N(0,α⁻¹I), noise β⁻¹. For α=1, β=1, X is 2×2 identity, y=[1,2]. Calculate posterior mean of w.',
    options: '[0.5,1.0]', '[0.67,1.33]', '[0.8,1.6]', '[1.0,2.0]'],
    correctAnswer: '[0.67,1.33]',
    difficulty: 'expert'
  },
  {
    id: 'ai-75',
    type: 'numerical-mcq',
    category: 'Temporal Difference',
    text: 'Bayesian TD learning with prior on value function. Initialize V=0, after observing transition (s,a,r,s\') with r=1, γ=0.9, V(s\')=0.5, uncertainty σ²=0.1. Compute posterior mean update (Kalman gain).',
    options: ['0.50', '0.52', '0.55', '0.60'],
    correctAnswer: '0.55',
    difficulty: 'expert'
  },

  // ==================== ADVANCED TOPICS ====================
  {
    id: 'ai-76',
    type: 'numerical-mcq',
    category: 'Neural Architecture Search',
    text: 'DARTS search space: 8 operations, cell has 4 nodes (2 input, 4 intermediate). Each edge chooses 1 operation. Calculate total possible architectures.',
    options: ['8^12 = 6.87e10', '8^14 = 4.39e12', '8^16 = 2.81e14', '8^20 = 1.15e18'],
    correctAnswer: '8^14 = 4.39e12',
    difficulty: 'expert'
  },
  {
    id: 'ai-77',
    type: 'numerical-mcq',
    category: 'Meta-Learning',
    text: 'MAML for 5-way 1-shot classification (5 classes, 1 example each). Inner loop steps=5, outer loop batch size=4 tasks. Calculate total gradient computations per meta-batch.',
    options: ['20', '40', '60', '80'],
    correctAnswer: '20',
    difficulty: 'expert'
  },
  {
    id: 'ai-78',
    type: 'numerical-mcq',
    category: 'RAG',
    text: 'RAG with retriever top-k=5, each document length=512 tokens, query length=128, LLM with d_model=4096, n_heads=32. Calculate total attention FLOPs for processing all retrieved documents together (batch size=1).',
    options: ['23.6 GFLOPs', '47.2 GFLOPs', '94.4 GFLOPs', '188.8 GFLOPs'],
    correctAnswer: '47.2 GFLOPs',
    difficulty: 'expert'
  },
  {
    id: 'ai-79',
    type: 'numerical-mcq',
    category: 'Self-Supervised Learning',
    text: 'SimCLR with batch size 8192 uses temperature τ=0.1. Two positive pairs have cosine similarity 0.8, negative pair similarity 0.2. Calculate contrastive loss numerator and denominator for one positive pair.',
    options: ['num=exp(8), denom=exp(8)+8190×exp(2)', 'num=exp(8), denom=exp(8)+16382×exp(2)', 'num=exp(8), denom=exp(8)+8190×exp(2)', 'num=exp(8), denom=exp(8)+16382×exp(2)'],
    correctAnswer: 'num=exp(8), denom=exp(8)+16382×exp(2)',
    difficulty: 'expert'
  },
  {
    id: 'ai-80',
    type: 'numerical-mcq',
    category: 'In-Context Learning',
    text: 'LLM with context length 2048, few-shot examples each 100 tokens. For 32-shot learning, plus query of 50 tokens, calculate if it fits in context and remaining capacity.',
    options: ['Fits, 148 tokens remaining', 'Fits, 198 tokens remaining', 'Does not fit', 'Fits exactly'],
    correctAnswer: 'Fits, 198 tokens remaining',
    difficulty: 'expert'
  },
  {
    id: 'ai-81',
    type: 'numerical-mcq',
    category: 'Alignment',
    text: 'RLHF with PPO, KL penalty β=0.01, reward model score r=2.5 for response, reference policy log probability log π_ref=-3.2, current log π=-2.8. Calculate total reward including KL penalty.',
    options: ['2.504', '2.496', '2.488', '2.512'],
    correctAnswer: '2.496',
    difficulty: 'expert'
  },
  {
    id: 'ai-82',
    type: 'numerical-mcq',
    category: 'Differential Privacy',
    text: 'DP-SGD with noise multiplier σ=1.0, batch size 256, dataset size 50,000, epochs=10. Calculate ε for (ε,δ) with δ=1e-5 using moments accountant approximation.',
    options: ['ε ≈ 2.5', 'ε ≈ 5.0', 'ε ≈ 7.5', 'ε ≈ 10.0'],
    correctAnswer: 'ε ≈ 5.0',
    difficulty: 'expert'
  },
  {
    id: 'ai-83',
    type: 'numerical-mcq',
    category: 'Federated Learning',
    text: 'FedAvg with C=0.1 client fraction, 1000 total clients, E=5 local epochs, batch size=32, local data size=500. Calculate total client updates per round and total SGD steps per round across all selected clients.',
    options: ['100 clients, 16,000 steps', '100 clients, 12,500 steps', '100 clients, 8,000 steps', '50 clients, 8,000 steps'],
    correctAnswer: '100 clients, 16,000 steps',
    difficulty: 'expert'
  },
  {
    id: 'ai-84',
    type: 'numerical-mcq',
    category: 'Model Distillation',
    text: 'Distillation temperature T=2. Teacher logits for 5 classes: [2, -1, 3, 0, 1]. Calculate softened probabilities for class with logit 3.',
    options: ['0.37', '0.45', '0.52', '0.60'],
    correctAnswer: '0.37',
    difficulty: 'expert'
  },
  {
    id: 'ai-85',
    type: 'numerical-mcq',
    category: 'Pruning',
    text: 'Magnitude pruning applied to weight tensor [0.5, 0.8, -0.2, 0.1, -0.05, 0.01, 0.3, -0.4, 0.6, 0.7]. Keep 30% sparsity (70% pruned). Calculate sum of kept weights after pruning.',
    options: ['2.7', '3.2', '3.7', '4.2'],
    correctAnswer: '3.2',
    difficulty: 'expert'
  },
  {
    id: 'ai-86',
    type: 'numerical-mcq',
    category: 'Knowledge Distillation',
    text: 'Teacher model 100GB, student 10GB. Distillation reduces inference cost by factor of 10. If teacher takes 100ms per inference, student takes 10ms, and distillation training costs 100× teacher training time, calculate break-even point for number of inferences.',
    options: ['10,000 inferences', '50,000 inferences', '100,000 inferences', '500,000 inferences'],
    correctAnswer: '100,000 inferences',
    difficulty: 'expert'
  },
  {
    id: 'ai-87',
    type: 'numerical-mcq',
    category: 'Quantization-Aware Training',
    text: 'QAT with fake quantization for INT8. Scale factor Δ=0.01, zero point z=0. For tensor values [0.005, 0.015, 0.025], compute quantized integer values and dequantized values.',
    options: ['q=[0,1,2], deq=[0,0.01,0.02]', 'q=[1,2,3], deq=[0.01,0.02,0.03]', 'q=[0,2,3], deq=[0,0.02,0.03]', 'q=[1,2,4], deq=[0.01,0.02,0.04]'],
    correctAnswer: 'q=[1,2,3], deq=[0.01,0.02,0.03]',
    difficulty: 'expert'
  },
  {
    id: 'ai-88',
    type: 'numerical-mcq',
    category: 'Adversarial Training',
    text: 'PGD adversarial training: epsilon=0.1, step size=0.02, iterations=7. For original x=0.5, gradient sign = +1. Calculate adversarial example after 7 steps (clamp to [0,1]).',
    options: ['0.5', '0.64', '0.78', '0.92'],
    correctAnswer: '0.64',
    difficulty: 'expert'
  },
  {
    id: 'ai-89',
    type: 'numerical-mcq',
    category: 'Fairness Metrics',
    text: 'Demographic parity: Model predicts positive for 80% of group A (n=100) and 60% of group B (n=100). Calculate demographic parity difference and ratio.',
    options: ['diff=0.20, ratio=1.33', 'diff=0.20, ratio=0.75', 'diff=0.25, ratio=1.25', 'diff=0.25, ratio=0.80'],
    correctAnswer: 'diff=0.20, ratio=0.75',
    difficulty: 'expert'
  },
  {
    id: 'ai-90',
    type: 'numerical-mcq',
    category: 'Explainable AI',
    text: 'SHAP values for 4 features: contribution of feature A = 0.3, B = -0.1, C = 0.2, D = 0.1. Base value = 0.5. Calculate final model prediction and sum of SHAP values.',
    options: ['pred=1.0, sum=0.5', 'pred=1.0, sum=1.0', 'pred=0.8, sum=0.5', 'pred=0.8, sum=0.3'],
    correctAnswer: 'pred=1.0, sum=0.5',
    difficulty: 'expert'
  },
  {
    id: 'ai-91',
    type: 'numerical-mcq',
    category: 'Causal Inference',
    text: 'Double ML for treatment effect: residualized outcome Y~ = -2, residualized treatment T~ = 1, second stage coefficient β = -2. Calculate ATE and standard deviation if variance of residuals σ²=4.',
    options: ['ATE=-2, se=2', 'ATE=-2, se=4', 'ATE=2, se=2', 'ATE=2, se=4'],
    correctAnswer: 'ATE=-2, se=2',
    difficulty: 'expert'
  },
  {
    id: 'ai-92',
    type: 'numerical-mcq',
    category: 'Multi-Task Learning',
    text: 'Multi-task loss: L = L₁ + w₂·L₂, with uncertainty weighting. Task 1 homoscedastic uncertainty σ₁²=0.25, Task 2 σ₂²=1.0. Calculate learned weights w₁, w₂.',
    options: ['w₁=2.0, w₂=0.5', 'w₁=0.5, w₂=2.0', 'w₁=4.0, w₂=1.0', 'w₁=1.0, w₂=4.0'],
    correctAnswer: 'w₁=2.0, w₂=0.5',
    difficulty: 'expert'
  },
  {
    id: 'ai-93',
    type: 'numerical-mcq',
    category: 'Continual Learning',
    text: 'EWC with Fisher information F=0.5 for weight θ, optimal θ* from previous task=1.0, current task loss gradient gives Δθ=0.2, λ=10. Calculate regularization term and total update.',
    options: ['reg=5.0, total=5.2', 'reg=5.0, total=4.8', 'reg=10.0, total=10.2', 'reg=10.0, total=9.8'],
    correctAnswer: 'reg=5.0, total=4.8',
    difficulty: 'expert'
  },
  {
    id: 'ai-94',
    type: 'numerical-mcq',
    category: 'Self-Attention',
    text: 'Self-attention with relative position bias. Sequence length 128, add relative bias matrix of size 128×128. Calculate extra memory in MB for FP16.',
    options: ['0.016 MB', '0.032 MB', '0.064 MB', '0.128 MB'],
    correctAnswer: '0.032 MB',
    difficulty: 'expert'
  },
  {
    id: 'ai-95',
    type: 'numerical-mcq',
    category: 'Sparse Attention',
    text: 'BigBird sparse attention with random, window, and global tokens. For sequence length 4096, block size 64, 3 global tokens, window size 3 blocks. Calculate number of attended tokens per query.',
    options: ['256', '448', '576', '768'],
    correctAnswer: '576',
    difficulty: 'expert'
  },
  {
    id: 'ai-96',
    type: 'numerical-mcq',
    category: 'Linear Attention',
    text: 'Linear attention with feature map φ(x)=elu(x)+1. Input dimension d=256, sequence length L=2048. Calculate FLOPs reduction ratio compared to standard O(L²d) complexity.',
    options: ['128×', '256×', '512×', '1024×'],
    correctAnswer: '256×',
    difficulty: 'expert'
  },
  {
    id: 'ai-97',
    type: 'numerical-mcq',
    category: 'Longformer',
    text: 'Longformer with sliding window w=512 and dilated window with dilation d=2 every other layer. For sequence length 8192, layer 5 (dilated). Calculate attention span per token.',
    options: ['1024', '2048', '4096', '8192'],
    correctAnswer: '1024',
    difficulty: 'expert'
  },
  {
    id: 'ai-98',
    type: 'numerical-mcq',
    category: 'Infini-attention',
    text: 'Infini-attention with compressive memory of size M=1024, segment length S=2048. For sequence of 100 segments, calculate total memory compressed and retrievals needed.',
    options: ['102kB, 100 retrievals', '204kB, 100 retrievals', '102kB, 99 retrievals', '204kB, 99 retrievals'],
    correctAnswer: '102kB, 99 retrievals',
    difficulty: 'expert'
  },
  {
    id: 'ai-99',
    type: 'numerical-mcq',
    category: 'Memory Efficient Attention',
    text: 'Memory efficient attention recomputes QK^T during backward pass. For L=8192, d_head=128, batch=32, n_heads=16, calculate memory saved (in GB) compared to standard attention.',
    options: ['8 GB', '16 GB', '32 GB', '64 GB'],
    correctAnswer: '16 GB',
    difficulty: 'expert'
  },
  {
    id: 'ai-100',
    type: 'numerical-mcq',
    category: 'Transformer Scaling Laws',
    text: 'According to scaling laws, compute-optimal model for 1e21 FLOPs has N≈ (C/6)⁰·⁵. For C=1e21, calculate optimal parameter count N (in billions).',
    options: ['4.1B', '8.2B', '16.4B', '32.8B'],
    correctAnswer: '16.4B',
    difficulty: 'expert'
  }
];

console.assert(AI_ML_QUESTIONS.length === 100, `Expected 100 questions, got ${AI_ML_QUESTIONS.length}`);

const ids = AI_ML_QUESTIONS.map(q => q.id);
const uniqueIds = new Set(ids);
console.assert(ids.length === uniqueIds.size, 'Duplicate question IDs detected!');
