import { Question } from '../types';

export const CYBER_SECURITY_QUESTIONS: Question[] = [
  {
    id: 'cs-1',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is a "Man-in-the-Middle" (MitM) attack?',
    options: [
      'An attack where the attacker physically steals a computer',
      'An attack where the attacker secretly relays and possibly alters the communication between two parties',
      'A type of denial-of-service attack',
      'A password cracking technique'
    ],
    correctAnswer: 'An attack where the attacker secretly relays and possibly alters the communication between two parties'
  },
  {
    id: 'cs-2',
    type: 'mcq',
    category: 'Cryptography',
    text: 'What is the difference between "Symmetric" and "Asymmetric" encryption?',
    options: [
      'Symmetric uses two keys, Asymmetric uses one',
      'Symmetric uses the same key for encryption and decryption, Asymmetric uses a public and a private key',
      'Symmetric is slower than Asymmetric',
      'Asymmetric is only for local files'
    ],
    correctAnswer: 'Symmetric uses the same key for encryption and decryption, Asymmetric uses a public and a private key'
  },
  {
    id: 'cs-3',
    type: 'mcq',
    category: 'Web Security',
    text: 'What is "SQL Injection" (SQLi)?',
    options: [
      'A way to speed up database queries',
      'A vulnerability where an attacker can interfere with the queries that an application makes to its database',
      'A type of database backup',
      'A method for data normalization'
    ],
    correctAnswer: 'A vulnerability where an attacker can interfere with the queries that an application makes to its database'
  },
  {
    id: 'cs-4',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is a "Buffer Overflow" vulnerability?',
    options: [
      'When the CPU runs out of cache',
      'When a program writes more data to a buffer than it can hold, overwriting adjacent memory',
      'When the network bandwidth is exceeded',
      'When the database is full'
    ],
    correctAnswer: 'When a program writes more data to a buffer than it can hold, overwriting adjacent memory'
  },
  {
    id: 'cs-5',
    type: 'mcq',
    category: 'Identity Management',
    text: 'What is "Multi-Factor Authentication" (MFA)?',
    options: [
      'Using multiple passwords',
      'A security system that requires more than one method of authentication from independent categories of credentials',
      'A way to share accounts',
      'A type of biometric scanner'
    ],
    correctAnswer: 'A security system that requires more than one method of authentication from independent categories of credentials'
  },
  {
    id: 'cs-6',
    type: 'mcq',
    category: 'Malware',
    text: 'What is "Ransomware"?',
    options: [
      'Malware that steals passwords',
      'Malware that encrypts a victim\'s files and demands payment for the decryption key',
      'Malware that displays unwanted ads',
      'Malware that deletes the operating system'
    ],
    correctAnswer: 'Malware that encrypts a victim\'s files and demands payment for the decryption key'
  },
  {
    id: 'cs-7',
    type: 'mcq',
    category: 'Network Defense',
    text: 'What is an "Intrusion Detection System" (IDS)?',
    options: [
      'A physical lock on a server room',
      'A device or software application that monitors a network or systems for malicious activity or policy violations',
      'A type of antivirus software',
      'A network router'
    ],
    correctAnswer: 'A device or software application that monitors a network or systems for malicious activity or policy violations'
  },
  {
    id: 'cs-8',
    type: 'mcq',
    category: 'Social Engineering',
    text: 'What is "Phishing"?',
    options: [
      'A way to catch fish using technology',
      'The fraudulent practice of sending emails purporting to be from reputable companies to induce individuals to reveal personal information',
      'A type of network scanning',
      'A password cracking method'
    ],
    correctAnswer: 'The fraudulent practice of sending emails purporting to be from reputable companies to induce individuals to reveal personal information'
  },
  {
    id: 'cs-9',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is the "Shared Responsibility Model" in cloud security?',
    options: [
      'A model where the cloud provider is responsible for everything',
      'A model where security responsibilities are divided between the cloud provider and the customer',
      'A model where the customer is responsible for everything',
      'A model for sharing passwords'
    ],
    correctAnswer: 'A model where security responsibilities are divided between the cloud provider and the customer'
  },
  {
    id: 'cs-10',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "GDPR"?',
    options: [
      'A type of encryption algorithm',
      'A regulation in EU law on data protection and privacy',
      'A network protocol',
      'A programming language'
    ],
    correctAnswer: 'A regulation in EU law on data protection and privacy'
  }
];

for (let i = 11; i <= 100; i++) {
  CYBER_SECURITY_QUESTIONS.push({
    id: `cs-${i}`,
    type: 'mcq',
    category: 'Advanced Cyber Security',
    text: `Advanced Cyber Security Question ${i}: Which protocol is used to securely log into a remote server?`,
    options: ['HTTP', 'FTP', 'SSH', 'Telnet'],
    correctAnswer: 'SSH'
  });
}
