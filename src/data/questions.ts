import { Question } from '../types';

export const INTERNSHIP_QUESTIONS: Question[] = [
  // Aptitude (5)
  {
    id: 'apt-1',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A train 120 meters long is running at a speed of 60 km/hr. In what time will it pass a bridge 180 meters long?',
    options: ['12 seconds', '18 seconds', '20 seconds', '24 seconds'],
    correctAnswer: '18 seconds'
  },
  {
    id: 'apt-2',
    type: 'mcq',
    category: 'Aptitude',
    text: 'If 5 workers can build a wall in 12 days, how many days will it take 10 workers to build the same wall?',
    options: ['6 days', '8 days', '10 days', '24 days'],
    correctAnswer: '6 days'
  },
  {
    id: 'apt-3',
    type: 'mcq',
    category: 'Aptitude',
    text: 'What is the next number in the series: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '46'],
    correctAnswer: '42'
  },
  {
    id: 'apt-4',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A sum of money doubles itself in 10 years at simple interest. What is the rate of interest per annum?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '10%'
  },
  {
    id: 'apt-5',
    type: 'mcq',
    category: 'Aptitude',
    text: 'The average of five numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?',
    options: ['24', '26', '28', '30'],
    correctAnswer: '28'
  },

  // General Knowledge (5)
  {
    id: 'gk-1',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Who is known as the father of the Indian Constitution?',
    options: ['Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel'],
    correctAnswer: 'Dr. B.R. Ambedkar'
  },
  {
    id: 'gk-2',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    id: 'gk-3',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    id: 'gk-4',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean'
  },
  {
    id: 'gk-5',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'In which year did India gain independence?',
    options: ['1942', '1945', '1947', '1950'],
    correctAnswer: '1947'
  },

  // OS (5)
  {
    id: 'os-1',
    type: 'mcq',
    category: 'OS',
    text: 'What is a deadlock in an operating system?',
    options: [
      'A process that finished execution',
      'A situation where two or more processes are waiting for each other to release resources',
      'A process that is currently running',
      'A process that is in the ready queue'
    ],
    correctAnswer: 'A situation where two or more processes are waiting for each other to release resources'
  },
  {
    id: 'os-2',
    type: 'mcq',
    category: 'OS',
    text: 'Which of the following is NOT a type of CPU scheduling algorithm?',
    options: ['First Come First Served', 'Shortest Job First', 'Round Robin', 'Last In First Out'],
    correctAnswer: 'Last In First Out'
  },
  {
    id: 'os-3',
    type: 'mcq',
    category: 'OS',
    text: 'What is virtual memory?',
    options: [
      'Physical RAM',
      'A technique that allows the execution of processes that are not completely in memory',
      'Cache memory',
      'ROM'
    ],
    correctAnswer: 'A technique that allows the execution of processes that are not completely in memory'
  },
  {
    id: 'os-4',
    type: 'mcq',
    category: 'OS',
    text: 'What is a kernel?',
    options: [
      'A user interface',
      'The core part of an operating system that manages system resources',
      'An application software',
      'A hardware component'
    ],
    correctAnswer: 'The core part of an operating system that manages system resources'
  },
  {
    id: 'os-5',
    type: 'mcq',
    category: 'OS',
    text: 'What is thrashing in OS?',
    options: [
      'High CPU utilization',
      'A situation where the system spends more time paging than executing processes',
      'Low memory usage',
      'Fast process execution'
    ],
    correctAnswer: 'A situation where the system spends more time paging than executing processes'
  },

  // DBMS (5)
  {
    id: 'dbms-1',
    type: 'mcq',
    category: 'DBMS',
    text: 'What does ACID stand for in DBMS?',
    options: [
      'Atomicity, Consistency, Isolation, Durability',
      'Accuracy, Consistency, Integrity, Durability',
      'Atomicity, Completeness, Isolation, Data',
      'Access, Control, Integrity, Durability'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability'
  },
  {
    id: 'dbms-2',
    type: 'mcq',
    category: 'DBMS',
    text: 'Which SQL command is used to remove all records from a table without deleting the table structure?',
    options: ['DELETE', 'DROP', 'TRUNCATE', 'REMOVE'],
    correctAnswer: 'TRUNCATE'
  },
  {
    id: 'dbms-3',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is a primary key?',
    options: [
      'A key that can have null values',
      'A unique identifier for a record in a table',
      'A key that refers to another table',
      'A non-unique key'
    ],
    correctAnswer: 'A unique identifier for a record in a table'
  },
  {
    id: 'dbms-4',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is normalization in DBMS?',
    options: [
      'Increasing data redundancy',
      'Organizing data to minimize redundancy',
      'Deleting all data',
      'Merging all tables'
    ],
    correctAnswer: 'Organizing data to minimize redundancy'
  },
  {
    id: 'dbms-5',
    type: 'mcq',
    category: 'DBMS',
    text: 'Which join returns all records when there is a match in either left or right table?',
    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
    correctAnswer: 'FULL OUTER JOIN'
  },

  // DAA (5)
  {
    id: 'daa-1',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the time complexity of Binary Search?',
    options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
    correctAnswer: 'O(log n)'
  },
  {
    id: 'daa-2',
    type: 'mcq',
    category: 'DAA',
    text: 'Which algorithm design technique is used in Merge Sort?',
    options: ['Greedy', 'Dynamic Programming', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 'Divide and Conquer'
  },
  {
    id: 'daa-3',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the worst-case time complexity of Quick Sort?',
    options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
    correctAnswer: 'O(n^2)'
  },
  {
    id: 'daa-4',
    type: 'mcq',
    category: 'DAA',
    text: 'Which of the following is a Greedy algorithm?',
    options: ['Matrix Chain Multiplication', 'Longest Common Subsequence', 'Dijkstra\'s Algorithm', 'Floyd-Warshall Algorithm'],
    correctAnswer: 'Dijkstra\'s Algorithm'
  },
  {
    id: 'daa-5',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the main advantage of Dynamic Programming?',
    options: [
      'It is always faster than Greedy',
      'It avoids recomputing subproblems by storing results',
      'It uses less memory',
      'It is easier to implement'
    ],
    correctAnswer: 'It avoids recomputing subproblems by storing results'
  },

  // DSA (5)
  {
    id: 'dsa-1',
    type: 'mcq',
    category: 'DSA',
    text: 'Which data structure follows the LIFO principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctAnswer: 'Stack'
  },
  {
    id: 'dsa-2',
    type: 'mcq',
    category: 'DSA',
    text: 'What is the time complexity to insert an element at the beginning of a singly linked list?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    correctAnswer: 'O(1)'
  },
  {
    id: 'dsa-3',
    type: 'mcq',
    category: 'DSA',
    text: 'Which data structure is used for BFS (Breadth First Search)?',
    options: ['Stack', 'Queue', 'Priority Queue', 'Tree'],
    correctAnswer: 'Queue'
  },
  {
    id: 'dsa-4',
    type: 'mcq',
    category: 'DSA',
    text: 'What is a balanced binary tree?',
    options: [
      'A tree where all nodes have two children',
      'A tree where the height of left and right subtrees differ by at most 1',
      'A tree with only one leaf',
      'A tree with no nodes'
    ],
    correctAnswer: 'A tree where the height of left and right subtrees differ by at most 1'
  },
  {
    id: 'dsa-5',
    type: 'mcq',
    category: 'DSA',
    text: 'Which sorting algorithm is considered stable?',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 'Merge Sort'
  },

  // CN (5)
  {
    id: 'cn-1',
    type: 'mcq',
    category: 'CN',
    text: 'What is the full form of OSI in networking?',
    options: ['Open System Interconnection', 'Operating System Interface', 'Optical Signal Interface', 'Open Source Integration'],
    correctAnswer: 'Open System Interconnection'
  },
  {
    id: 'cn-2',
    type: 'mcq',
    category: 'CN',
    text: 'Which layer of the OSI model is responsible for routing?',
    options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
    correctAnswer: 'Network Layer'
  },
  {
    id: 'cn-3',
    type: 'mcq',
    category: 'CN',
    text: 'What is the purpose of DNS?',
    options: [
      'To encrypt data',
      'To translate domain names to IP addresses',
      'To manage network traffic',
      'To provide security'
    ],
    correctAnswer: 'To translate domain names to IP addresses'
  },
  {
    id: 'cn-4',
    type: 'mcq',
    category: 'CN',
    text: 'Which protocol is used for sending emails?',
    options: ['HTTP', 'FTP', 'SMTP', 'SNMP'],
    correctAnswer: 'SMTP'
  },
  {
    id: 'cn-5',
    type: 'mcq',
    category: 'CN',
    text: 'What is an IP address?',
    options: [
      'A physical address of a computer',
      'A logical address assigned to each device on a network',
      'A name of a website',
      'A type of cable'
    ],
    correctAnswer: 'A logical address assigned to each device on a network'
  },

  // JAVA (5)
  {
    id: 'java-1',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which of the following is NOT a feature of Java?',
    options: ['Platform Independent', 'Object Oriented', 'Pointers', 'Robust'],
    correctAnswer: 'Pointers'
  },
  {
    id: 'java-2',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the default value of a boolean variable in Java?',
    options: ['true', 'false', '0', 'null'],
    correctAnswer: 'false'
  },
  {
    id: 'java-3',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which keyword is used to inherit a class in Java?',
    options: ['implements', 'extends', 'inherits', 'using'],
    correctAnswer: 'extends'
  },
  {
    id: 'java-4',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the purpose of the "final" keyword in Java?',
    options: [
      'To make a variable constant',
      'To prevent method overriding',
      'To prevent class inheritance',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    id: 'java-5',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which package contains the Scanner class?',
    options: ['java.lang', 'java.io', 'java.util', 'java.net'],
    correctAnswer: 'java.util'
  },

  // AI (5)
  {
    id: 'ai-1',
    type: 'mcq',
    category: 'AI',
    text: 'Who is considered the father of Artificial Intelligence?',
    options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Herbert Simon'],
    correctAnswer: 'John McCarthy'
  },
  {
    id: 'ai-2',
    type: 'mcq',
    category: 'AI',
    text: 'What is the Turing Test used for?',
    options: [
      'To measure CPU speed',
      'To determine if a machine can exhibit intelligent behavior equivalent to a human',
      'To test network security',
      'To debug code'
    ],
    correctAnswer: 'To determine if a machine can exhibit intelligent behavior equivalent to a human'
  },
  {
    id: 'ai-3',
    type: 'mcq',
    category: 'AI',
    text: 'Which of the following is a search algorithm used in AI?',
    options: ['A* Search', 'Linear Search', 'Binary Search', 'Bubble Sort'],
    correctAnswer: 'A* Search'
  },
  {
    id: 'ai-4',
    type: 'mcq',
    category: 'AI',
    text: 'What is a heuristic function?',
    options: [
      'A function that always finds the optimal solution',
      'A function that estimates the cost to reach the goal',
      'A random function',
      'A function that deletes data'
    ],
    correctAnswer: 'A function that estimates the cost to reach the goal'
  },
  {
    id: 'ai-5',
    type: 'mcq',
    category: 'AI',
    text: 'What is Natural Language Processing (NLP)?',
    options: [
      'Processing of programming languages',
      'Interaction between computers and human languages',
      'Hardware design',
      'Database management'
    ],
    correctAnswer: 'Interaction between computers and human languages'
  },

  // ML (5)
  {
    id: 'ml-1',
    type: 'mcq',
    category: 'ML',
    text: 'What is Supervised Learning?',
    options: [
      'Learning from unlabeled data',
      'Learning from labeled data',
      'Learning through trial and error',
      'No learning involved'
    ],
    correctAnswer: 'Learning from labeled data'
  },
  {
    id: 'ml-2',
    type: 'mcq',
    category: 'ML',
    text: 'Which of the following is a classification algorithm?',
    options: ['Linear Regression', 'K-Means Clustering', 'Logistic Regression', 'Principal Component Analysis'],
    correctAnswer: 'Logistic Regression'
  },
  {
    id: 'ml-3',
    type: 'mcq',
    category: 'ML',
    text: 'What is overfitting in Machine Learning?',
    options: [
      'When a model performs well on training data but poorly on unseen data',
      'When a model performs poorly on both training and testing data',
      'When a model is too simple',
      'When a model is perfectly accurate'
    ],
    correctAnswer: 'When a model performs well on training data but poorly on unseen data'
  },
  {
    id: 'ml-4',
    type: 'mcq',
    category: 'ML',
    text: 'What is the purpose of a validation set?',
    options: [
      'To train the model',
      'To tune hyperparameters and prevent overfitting',
      'To test the final model',
      'To store raw data'
    ],
    correctAnswer: 'To tune hyperparameters and prevent overfitting'
  },
  {
    id: 'ml-5',
    type: 'mcq',
    category: 'ML',
    text: 'What is a Neural Network?',
    options: [
      'A type of hardware',
      'A computational model inspired by the human brain',
      'A database system',
      'A network protocol'
    ],
    correctAnswer: 'A computational model inspired by the human brain'
  },

  // Cloud (5)
  {
    id: 'cloud-1',
    type: 'mcq',
    category: 'Cloud',
    text: 'What does SaaS stand for?',
    options: ['Software as a Service', 'System as a Service', 'Storage as a Service', 'Security as a Service'],
    correctAnswer: 'Software as a Service'
  },
  {
    id: 'cloud-2',
    type: 'mcq',
    category: 'Cloud',
    text: 'Which of the following is a public cloud provider?',
    options: ['AWS', 'Azure', 'Google Cloud', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 'cloud-3',
    type: 'mcq',
    category: 'Cloud',
    text: 'What is Serverless Computing?',
    options: [
      'Computing without any servers',
      'A model where the cloud provider manages the server infrastructure',
      'Running code on a local machine',
      'A type of hardware'
    ],
    correctAnswer: 'A model where the cloud provider manages the server infrastructure'
  },
  {
    id: 'cloud-4',
    type: 'mcq',
    category: 'Cloud',
    text: 'What is the main benefit of Cloud Computing?',
    options: ['High cost', 'Scalability and Flexibility', 'Limited access', 'Low security'],
    correctAnswer: 'Scalability and Flexibility'
  },
  {
    id: 'cloud-5',
    type: 'mcq',
    category: 'Cloud',
    text: 'What is IaaS?',
    options: [
      'Infrastructure as a Service',
      'Information as a Service',
      'Integration as a Service',
      'Interface as a Service'
    ],
    correctAnswer: 'Infrastructure as a Service'
  },

  // GIT (3)
  {
    id: 'git-1',
    type: 'mcq',
    category: 'GIT',
    text: 'What is the command to initialize a new Git repository?',
    options: ['git start', 'git create', 'git init', 'git new'],
    correctAnswer: 'git init'
  },
  {
    id: 'git-2',
    type: 'mcq',
    category: 'GIT',
    text: 'How do you stage all changes for a commit?',
    options: ['git add .', 'git commit -a', 'git push', 'git stage all'],
    correctAnswer: 'git add .'
  },
  {
    id: 'git-3',
    type: 'mcq',
    category: 'GIT',
    text: 'What is a "branch" in Git?',
    options: [
      'A copy of the repository',
      'A parallel version of a repository',
      'A type of commit',
      'A remote server'
    ],
    correctAnswer: 'A parallel version of a repository'
  },

  // AFL (2)
  {
    id: 'afl-1',
    type: 'mcq',
    category: 'AFL',
    text: 'What is a Finite Automaton?',
    options: [
      'A machine with infinite states',
      'A mathematical model of computation with a finite number of states',
      'A type of compiler',
      'A programming language'
    ],
    correctAnswer: 'A mathematical model of computation with a finite number of states'
  },
  {
    id: 'afl-2',
    type: 'mcq',
    category: 'AFL',
    text: 'Which of the following is used to represent a Regular Language?',
    options: ['Context Free Grammar', 'Pushdown Automata', 'Regular Expression', 'Turing Machine'],
    correctAnswer: 'Regular Expression'
  },

  // COA (5)
  {
    id: 'coa-1',
    type: 'mcq',
    category: 'COA',
    text: 'What is the purpose of the Program Counter (PC)?',
    options: [
      'To store data',
      'To hold the address of the next instruction to be executed',
      'To perform arithmetic operations',
      'To manage memory'
    ],
    correctAnswer: 'To hold the address of the next instruction to be executed'
  },
  {
    id: 'coa-2',
    type: 'mcq',
    category: 'COA',
    text: 'What is Cache Memory?',
    options: [
      'Large, slow memory',
      'Small, fast memory used to store frequently accessed data',
      'Secondary storage',
      'Virtual memory'
    ],
    correctAnswer: 'Small, fast memory used to store frequently accessed data'
  },
  {
    id: 'coa-3',
    type: 'mcq',
    category: 'COA',
    text: 'What does ALU stand for?',
    options: [
      'Arithmetic Logic Unit',
      'Advanced Logic Unit',
      'Array Logic Unit',
      'Application Logic Unit'
    ],
    correctAnswer: 'Arithmetic Logic Unit'
  },
  {
    id: 'coa-4',
    type: 'mcq',
    category: 'COA',
    text: 'What is pipelining in computer architecture?',
    options: [
      'A technique to execute multiple instructions simultaneously in different stages',
      'A way to connect hardware',
      'A type of memory',
      'A software debugging tool'
    ],
    correctAnswer: 'A technique to execute multiple instructions simultaneously in different stages'
  },
  {
    id: 'coa-5',
    type: 'mcq',
    category: 'COA',
    text: 'What is the difference between RISC and CISC?',
    options: [
      'RISC has complex instructions, CISC has simple ones',
      'RISC has simple instructions, CISC has complex ones',
      'They are the same',
      'RISC is only for mobile, CISC is only for PC'
    ],
    correctAnswer: 'RISC has simple instructions, CISC has complex ones'
  }
];
