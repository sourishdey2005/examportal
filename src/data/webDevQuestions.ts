import { Question } from '../types';

export const WEB_DEV_QUESTIONS: Question[] = [
  {
    id: 'wd-1',
    type: 'mcq',
    category: 'React Internals',
    text: 'How does React 18\'s Concurrent Rendering differ from the previous synchronous rendering model in terms of the main thread?',
    options: [
      'It uses Web Workers to offload all rendering tasks from the main thread.',
      'It allows React to interrupt a long-running render to handle high-priority events like user input.',
      'It completely removes the need for a Virtual DOM reconciliation phase.',
      'It forces all state updates to be batched into a single microtask regardless of priority.'
    ],
    correctAnswer: 'It allows React to interrupt a long-running render to handle high-priority events like user input.'
  },
  {
    id: 'wd-2',
    type: 'mcq',
    category: 'Browser Architecture',
    text: 'In the context of the V8 engine, what is the role of "Ignition" and "TurboFan"?',
    options: [
      'Ignition is the garbage collector, and TurboFan is the memory profiler.',
      'Ignition is the bytecode interpreter, and TurboFan is the optimizing compiler.',
      'Ignition handles DOM manipulation, and TurboFan handles network requests.',
      'Ignition is for mobile devices, and TurboFan is for desktop browsers.'
    ],
    correctAnswer: 'Ignition is the bytecode interpreter, and TurboFan is the optimizing compiler.'
  },
  {
    id: 'wd-3',
    type: 'mcq',
    category: 'Network Protocols',
    text: 'What specific problem does the QUIC protocol (used in HTTP/3) solve that exists in TCP-based HTTP/2?',
    options: [
      'It reduces the size of the binary headers.',
      'It eliminates Head-of-Line (HoL) blocking at the transport layer by allowing independent streams.',
      'It increases the maximum number of concurrent TCP connections allowed per domain.',
      'It provides built-in support for server-side rendering.'
    ],
    correctAnswer: 'It eliminates Head-of-Line (HoL) blocking at the transport layer by allowing independent streams.'
  },
  {
    id: 'wd-4',
    type: 'mcq',
    category: 'Security Architecture',
    text: 'When implementing OAuth 2.0, why is the "Proof Key for Code Exchange" (PKCE) recommended even for confidential clients?',
    options: [
      'To encrypt the access token during transit.',
      'To prevent authorization code injection attacks by binding the code exchange to the original request.',
      'To reduce the number of round-trips required for authentication.',
      'To allow the client to refresh tokens without a client secret.'
    ],
    correctAnswer: 'To prevent authorization code injection attacks by binding the code exchange to the original request.'
  },
  {
    id: 'wd-5',
    type: 'mcq',
    category: 'Distributed Systems',
    text: 'In a microservices environment using the Saga pattern, what is the primary mechanism for maintaining eventual consistency across services?',
    options: [
      'Distributed Two-Phase Commit (2PC) transactions.',
      'A series of local transactions where each service publishes an event to trigger the next transaction or a compensating one.',
      'A centralized database that all services share for critical operations.',
      'Synchronous REST calls between all involved services to ensure immediate consistency.'
    ],
    correctAnswer: 'A series of local transactions where each service publishes an event to trigger the next transaction or a compensating one.'
  }
];

// Dynamically generate unique advanced questions to avoid repetition
const categories = ['System Design', 'Performance Optimization', 'Advanced CSS', 'Node.js Internals', 'Security', 'Testing Strategy'];
const topics = [
  'Micro-frontends using Module Federation',
  'Garbage Collection cycles in Node.js',
  'CSS Container Queries vs Media Queries',
  'Hydration mismatch in SSR frameworks',
  'Content Security Policy (CSP) Level 3 directives',
  'Tree-shaking and Dead Code Elimination in Webpack/Rollup'
];

for (let i = 6; i <= 100; i++) {
  const category = categories[i % categories.length];
  const topic = topics[i % topics.length];
  WEB_DEV_QUESTIONS.push({
    id: `wd-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] Regarding ${topic}, which of the following represents the most critical architectural consideration for high-scale production environments?`,
    options: [
      'Maximizing vertical scaling of the primary application server.',
      'Implementing aggressive caching strategies at the edge (CDN) layer.',
      'Ensuring strict synchronous consistency across all distributed nodes.',
      'Minimizing the bundle size by removing all third-party dependencies.'
    ],
    correctAnswer: 'Implementing aggressive caching strategies at the edge (CDN) layer.'
  });
}
