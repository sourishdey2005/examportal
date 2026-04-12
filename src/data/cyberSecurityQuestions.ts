import { Question } from '../types';

export const CYBER_SECURITY_QUESTIONS: Question[] = [
  {
    id: 'cs-1',
    type: 'mcq',
    category: 'Zero Trust Architecture',
    text: 'What is the core principle of a "Zero Trust" security model?',
    options: [
      'Trust but verify all internal network traffic.',
      'Never trust, always verify: no user or device is trusted by default, even if they are inside the network perimeter.',
      'Only trust devices that have a valid antivirus installed.',
      'Trust all traffic that comes from a known VPN.'
    ],
    correctAnswer: 'Never trust, always verify: no user or device is trusted by default, even if they are inside the network perimeter.'
  },
  {
    id: 'cs-2',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Perfect Forward Secrecy" (PFS) in the context of TLS/SSL?',
    options: [
      'A method to encrypt data faster.',
      'A property that ensures a compromise of a long-term private key does not compromise the keys of past sessions.',
      'A way to ensure that the public key is never shared.',
      'A technique to prevent brute-force attacks on passwords.'
    ],
    correctAnswer: 'A property that ensures a compromise of a long-term private key does not compromise the keys of past sessions.'
  },
  {
    id: 'cs-3',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "Return-Oriented Programming" (ROP) used for by attackers?',
    options: [
      'To write cleaner code in assembly.',
      'To bypass security protections like Data Execution Prevention (DEP) by chaining together small snippets of existing code (gadgets).',
      'To automate the process of finding SQL injection vulnerabilities.',
      'To encrypt the payload of a malware.'
    ],
    correctAnswer: 'To bypass security protections like Data Execution Prevention (DEP) by chaining together small snippets of existing code (gadgets).'
  },
  {
    id: 'cs-4',
    type: 'mcq',
    category: 'Network Security',
    text: 'How does a "BGP Hijacking" attack work?',
    options: [
      'By flooding a server with UDP packets.',
      'By falsely announcing ownership of IP prefixes to redirect internet traffic through the attacker\'s network.',
      'By cracking the password of a core router.',
      'By intercepting traffic on a local Wi-Fi network.'
    ],
    correctAnswer: 'By falsely announcing ownership of IP prefixes to redirect internet traffic through the attacker\'s network.'
  },
  {
    id: 'cs-5',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Server-Side Request Forgery" (SSRF) and why is it critical in cloud environments?',
    options: [
      'It allows an attacker to steal the user\'s session cookies.',
      'It allows an attacker to make the server perform requests to internal resources, often used to steal cloud metadata or access internal APIs.',
      'It is a type of DDoS attack that targets the application layer.',
      'It is a vulnerability in the client-side JavaScript code.'
    ],
    correctAnswer: 'It allows an attacker to make the server perform requests to internal resources, often used to steal cloud metadata or access internal APIs.'
  }
];

const csCategories = ['Incident Response', 'Cloud Security', 'Malware Analysis', 'Identity & Access', 'Compliance', 'DevSecOps'];
const csTopics = [
  'Memory Forensics and Volatility framework',
  'AWS IAM Policy Evaluation Logic',
  'Dynamic Analysis using Cuckoo Sandbox',
  'OAuth 2.0 Grant Type security considerations',
  'SOC 2 Type II vs Type I audits',
  'SAST vs DAST in the CI/CD pipeline'
];

for (let i = 6; i <= 100; i++) {
  const category = csCategories[i % csCategories.length];
  const topic = csTopics[i % csTopics.length];
  CYBER_SECURITY_QUESTIONS.push({
    id: `cs-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] When evaluating ${topic}, which security control is most effective at mitigating the risk of a sophisticated persistent threat?`,
    options: [
      'Implementing a strong password policy.',
      'Deploying a multi-layered defense-in-depth strategy with continuous monitoring.',
      'Running a weekly antivirus scan on all workstations.',
      'Blocking all incoming traffic from foreign IP addresses.'
    ],
    correctAnswer: 'Deploying a multi-layered defense-in-depth strategy with continuous monitoring.'
  });
}
