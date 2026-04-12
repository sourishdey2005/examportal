import { Question } from '../types';

export const INTERNSHIP_QUESTIONS: Question[] = [
  // ==================== APTITUDE (Questions 1-10) ====================
  {
    id: 'apt-1',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A train 120 meters long is running at a speed of 60 km/hr. In what time will it pass a bridge 180 meters long?',
    options: ['12 seconds', '18 seconds', '20 seconds', '24 seconds'],
    correctAnswer: '18 seconds',
    difficulty: 'intermediate',
    explanation: 'Total distance = 120+180 = 300m. Speed = 60 km/hr = 60×(5/18) = 50/3 m/s. Time = 300/(50/3) = 18 seconds.'
  },
  {
    id: 'apt-2',
    type: 'mcq',
    category: 'Aptitude',
    text: 'If 5 workers can build a wall in 12 days, how many days will it take 10 workers to build the same wall?',
    options: ['6 days', '8 days', '10 days', '24 days'],
    correctAnswer: '6 days',
    difficulty: 'beginner',
    explanation: 'Work is constant: Workers × Days = constant. 5×12 = 10×D, so D = 60/10 = 6 days (inverse proportion).'
  },
  {
    id: 'apt-3',
    type: 'mcq',
    category: 'Aptitude',
    text: 'What is the next number in the series: 2, 6, 12, 20, 30, ...?',
    options: ['40', '42', '44', '46'],
    correctAnswer: '42',
    difficulty: 'intermediate',
    explanation: 'Pattern: n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, so next is 6×7=42.'
  },
  {
    id: 'apt-4',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A sum of money doubles itself in 10 years at simple interest. What is the rate of interest per annum?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '10%',
    difficulty: 'beginner',
    explanation: 'SI = P, T = 10 years. SI = PRT/100 → P = P×R×10/100 → R = 10%.'
  },
  {
    id: 'apt-5',
    type: 'mcq',
    category: 'Aptitude',
    text: 'The average of five numbers is 20. If one number is excluded, the average becomes 18. What is the excluded number?',
    options: ['24', '26', '28', '30'],
    correctAnswer: '28',
    difficulty: 'intermediate',
    explanation: 'Sum of 5 numbers = 5×20 = 100. Sum of 4 numbers = 4×18 = 72. Excluded number = 100-72 = 28.'
  },
  {
    id: 'apt-6',
    type: 'mcq',
    category: 'Aptitude',
    text: 'If a number is increased by 20% and then decreased by 20%, what is the net change?',
    options: ['No change', '4% decrease', '4% increase', '2% decrease'],
    correctAnswer: '4% decrease',
    difficulty: 'intermediate',
    explanation: 'Let number be 100. After +20%: 120. After -20%: 120×0.8 = 96. Net change = (96-100)/100 = -4%.'
  },
  {
    id: 'apt-7',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A can do a work in 15 days and B in 20 days. If they work together, how many days will they take?',
    options: ['8 days', '8.57 days', '10 days', '12 days'],
    correctAnswer: '8.57 days',
    difficulty: 'intermediate',
    explanation: 'A\'s 1 day work = 1/15, B\'s = 1/20. Together: 1/15+1/20 = 7/60. Days = 60/7 ≈ 8.57.'
  },
  {
    id: 'apt-8',
    type: 'mcq',
    category: 'Aptitude',
    text: 'What is the probability of getting a sum of 7 when two dice are rolled?',
    options: ['1/6', '1/12', '1/36', '5/36'],
    correctAnswer: '1/6',
    difficulty: 'intermediate',
    explanation: 'Total outcomes = 36. Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Probability = 6/36 = 1/6.'
  },
  {
    id: 'apt-9',
    type: 'mcq',
    category: 'Aptitude',
    text: 'If 3x + 4y = 20 and 4x + 3y = 22, what is the value of x + y?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    difficulty: 'intermediate',
    explanation: 'Adding equations: 7x + 7y = 42 → x + y = 42/7 = 6.'
  },
  {
    id: 'apt-10',
    type: 'mcq',
    category: 'Aptitude',
    text: 'A shopkeeper sells an item at 20% profit. If he had bought it at 20% less and sold for Rs. 5 less, he would have gained 25%. What is the cost price?',
    options: ['Rs. 100', 'Rs. 125', 'Rs. 150', 'Rs. 200'],
    correctAnswer: 'Rs. 125',
    difficulty: 'expert',
    explanation: 'Let CP = x. SP = 1.2x. New CP = 0.8x, New SP = 1.2x-5. Profit% = (1.2x-5-0.8x)/0.8x = 0.25. Solving: x = 125.'
  },

  // ==================== GENERAL KNOWLEDGE (Questions 11-20) ====================
  {
    id: 'gk-1',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Who is known as the father of the Indian Constitution?',
    options: ['Mahatma Gandhi', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Patel'],
    correctAnswer: 'Dr. B.R. Ambedkar',
    difficulty: 'beginner',
    explanation: 'Dr. B.R. Ambedkar chaired the Drafting Committee and is credited as the principal architect of the Indian Constitution.'
  },
  {
    id: 'gk-2',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
    difficulty: 'beginner',
    explanation: 'Mars appears red due to iron oxide (rust) on its surface, giving it a distinctive reddish appearance.'
  },
  {
    id: 'gk-3',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
    difficulty: 'beginner',
    explanation: 'Paris is the capital and most populous city of France, known for art, fashion, gastronomy, and culture.'
  },
  {
    id: 'gk-4',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean',
    difficulty: 'beginner',
    explanation: 'The Pacific Ocean covers about 46% of Earth\'s water surface and about one-third of its total surface area.'
  },
  {
    id: 'gk-5',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'In which year did India gain independence?',
    options: ['1942', '1945', '1947', '1950'],
    correctAnswer: '1947',
    difficulty: 'beginner',
    explanation: 'India gained independence from British rule on August 15, 1947, ending nearly 200 years of colonial rule.'
  },
  {
    id: 'gk-6',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile',
    difficulty: 'beginner',
    explanation: 'The Nile River in Africa is traditionally considered the longest river at approximately 6,650 km, though some measurements favor the Amazon.'
  },
  {
    id: 'gk-7',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Who wrote the Indian National Anthem?',
    options: ['Rabindranath Tagore', 'Bankim Chandra Chattopadhyay', 'Sarojini Naidu', 'Subhash Chandra Bose'],
    correctAnswer: 'Rabindranath Tagore',
    difficulty: 'beginner',
    explanation: 'Rabindranath Tagore wrote "Jana Gana Mana" in Bengali; it was adopted as India\'s national anthem in 1950.'
  },
  {
    id: 'gk-8',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correctAnswer: 'Yen',
    difficulty: 'beginner',
    explanation: 'The Japanese Yen (¥) has been Japan\'s official currency since 1871; its symbol is ¥ and code is JPY.'
  },
  {
    id: 'gk-9',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Which element has the chemical symbol "O"?',
    options: ['Gold', 'Oxygen', 'Osmium', 'Oganesson'],
    correctAnswer: 'Oxygen',
    difficulty: 'beginner',
    explanation: 'Oxygen (O) has atomic number 8; it\'s essential for respiration and makes up about 21% of Earth\'s atmosphere.'
  },
  {
    id: 'gk-10',
    type: 'mcq',
    category: 'General Knowledge',
    text: 'Who discovered penicillin?',
    options: ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Isaac Newton'],
    correctAnswer: 'Alexander Fleming',
    difficulty: 'beginner',
    explanation: 'Alexander Fleming discovered penicillin in 1928, revolutionizing medicine and earning the 1945 Nobel Prize in Physiology.'
  },

  // ==================== OPERATING SYSTEMS (Questions 21-30) ====================
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
    correctAnswer: 'A situation where two or more processes are waiting for each other to release resources',
    difficulty: 'intermediate',
    explanation: 'Deadlock occurs when processes hold resources while waiting for others, creating a circular wait. Four conditions: mutual exclusion, hold-and-wait, no preemption, circular wait.'
  },
  {
    id: 'os-2',
    type: 'mcq',
    category: 'OS',
    text: 'Which of the following is NOT a type of CPU scheduling algorithm?',
    options: ['First Come First Served', 'Shortest Job First', 'Round Robin', 'Last In First Out'],
    correctAnswer: 'Last In First Out',
    difficulty: 'beginner',
    explanation: 'LIFO is a data structure principle, not a CPU scheduling algorithm. Common schedulers: FCFS, SJF, Round Robin, Priority, Multilevel Queue.'
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
    correctAnswer: 'A technique that allows the execution of processes that are not completely in memory',
    difficulty: 'intermediate',
    explanation: 'Virtual memory uses disk space as an extension of RAM, allowing processes larger than physical memory to run via paging/segmentation.'
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
    correctAnswer: 'The core part of an operating system that manages system resources',
    difficulty: 'beginner',
    explanation: 'The kernel is the central component of an OS, managing CPU, memory, I/O devices, and providing system calls for applications.'
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
    correctAnswer: 'A situation where the system spends more time paging than executing processes',
    difficulty: 'intermediate',
    explanation: 'Thrashing occurs when excessive paging causes high disk I/O and low CPU utilization, often due to insufficient RAM or too many processes.'
  },
  {
    id: 'os-6',
    type: 'mcq',
    category: 'OS',
    text: 'What is the purpose of a semaphore?',
    options: [
      'To manage memory allocation',
      'To control access to shared resources in concurrent programming',
      'To schedule CPU time',
      'To handle interrupts'
    ],
    correctAnswer: 'To control access to shared resources in concurrent programming',
    difficulty: 'intermediate',
    explanation: 'Semaphores are synchronization primitives (with wait/signal operations) used to prevent race conditions in multi-process/thread environments.'
  },
  {
    id: 'os-7',
    type: 'mcq',
    category: 'OS',
    text: 'What is context switching?',
    options: [
      'Changing user accounts',
      'Saving and restoring process state so multiple processes can share the CPU',
      'Switching between applications',
      'Changing the desktop background'
    ],
    correctAnswer: 'Saving and restoring process state so multiple processes can share the CPU',
    difficulty: 'intermediate',
    explanation: 'Context switching saves the state (registers, PC, etc.) of a running process and loads another\'s state, enabling multitasking.'
  },
  {
    id: 'os-8',
    type: 'mcq',
    category: 'OS',
    text: 'Which memory management technique uses fixed-size blocks?',
    options: ['Segmentation', 'Paging', 'Swapping', 'Compaction'],
    correctAnswer: 'Paging',
    difficulty: 'intermediate',
    explanation: 'Paging divides memory into fixed-size pages/frames, eliminating external fragmentation but potentially causing internal fragmentation.'
  },
  {
    id: 'os-9',
    type: 'mcq',
    category: 'OS',
    text: 'What is a system call?',
    options: [
      'A function call within a program',
      'A request from a user program to the OS kernel for a service',
      'A call to a system administrator',
      'A hardware interrupt'
    ],
    correctAnswer: 'A request from a user program to the OS kernel for a service',
    difficulty: 'intermediate',
    explanation: 'System calls (e.g., read(), write(), fork()) provide the interface between user-space applications and kernel services.'
  },
  {
    id: 'os-10',
    type: 'mcq',
    category: 'OS',
    text: 'What is the main difference between preemptive and non-preemptive scheduling?',
    options: [
      'Preemptive uses priority; non-preemptive does not',
      'Preemptive can interrupt a running process; non-preemptive cannot',
      'Preemptive is faster; non-preemptive is slower',
      'There is no difference'
    ],
    correctAnswer: 'Preemptive can interrupt a running process; non-preemptive cannot',
    difficulty: 'intermediate',
    explanation: 'Preemptive scheduling allows the OS to forcibly suspend a running process (e.g., on timer interrupt); non-preemptive waits for voluntary yield.'
  },

  // ==================== DBMS (Questions 31-40) ====================
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
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
    difficulty: 'beginner',
    explanation: 'ACID properties ensure reliable transactions: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent safety), Durability (permanent after commit).'
  },
  {
    id: 'dbms-2',
    type: 'mcq',
    category: 'DBMS',
    text: 'Which SQL command is used to remove all records from a table without deleting the table structure?',
    options: ['DELETE', 'DROP', 'TRUNCATE', 'REMOVE'],
    correctAnswer: 'TRUNCATE',
    difficulty: 'intermediate',
    explanation: 'TRUNCATE removes all rows quickly by deallocating pages; it\'s faster than DELETE and cannot be rolled back in some DBMS. DROP removes the entire table.'
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
    correctAnswer: 'A unique identifier for a record in a table',
    difficulty: 'beginner',
    explanation: 'A primary key uniquely identifies each row, cannot contain NULL values, and a table can have only one primary key (which can be composite).'
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
    correctAnswer: 'Organizing data to minimize redundancy',
    difficulty: 'intermediate',
    explanation: 'Normalization decomposes tables to eliminate redundancy and anomalies. Normal forms: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies).'
  },
  {
    id: 'dbms-5',
    type: 'mcq',
    category: 'DBMS',
    text: 'Which join returns all records when there is a match in either left or right table?',
    options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
    correctAnswer: 'FULL OUTER JOIN',
    difficulty: 'intermediate',
    explanation: 'FULL OUTER JOIN returns all records from both tables, with NULLs where no match exists. INNER JOIN returns only matching records.'
  },
  {
    id: 'dbms-6',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is a foreign key?',
    options: [
      'A key from another database',
      'A field that references the primary key of another table',
      'A key used for encryption',
      'A temporary key'
    ],
    correctAnswer: 'A field that references the primary key of another table',
    difficulty: 'beginner',
    explanation: 'A foreign key establishes a link between two tables, enforcing referential integrity by ensuring values exist in the referenced table.'
  },
  {
    id: 'dbms-7',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is an index in a database?',
    options: [
      'A list of all tables',
      'A data structure that improves the speed of data retrieval operations',
      'A backup of the database',
      'A log of all queries'
    ],
    correctAnswer: 'A data structure that improves the speed of data retrieval operations',
    difficulty: 'intermediate',
    explanation: 'Indexes (e.g., B-tree, Hash) allow faster lookups by creating a sorted reference to data, at the cost of extra storage and slower writes.'
  },
  {
    id: 'dbms-8',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is the difference between WHERE and HAVING clauses?',
    options: [
      'WHERE filters rows before grouping; HAVING filters groups after aggregation',
      'WHERE is for SELECT; HAVING is for UPDATE',
      'They are identical',
      'HAVING is faster than WHERE'
    ],
    correctAnswer: 'WHERE filters rows before grouping; HAVING filters groups after aggregation',
    difficulty: 'intermediate',
    explanation: 'WHERE operates on individual rows before GROUP BY; HAVING operates on aggregated groups. HAVING can use aggregate functions; WHERE cannot.'
  },
  {
    id: 'dbms-9',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is a transaction in DBMS?',
    options: [
      'A single SQL query',
      'A logical unit of work that must be atomic, consistent, isolated, and durable',
      'A database backup',
      'A user login session'
    ],
    correctAnswer: 'A logical unit of work that must be atomic, consistent, isolated, and durable',
    difficulty: 'intermediate',
    explanation: 'A transaction is a sequence of operations treated as a single unit; it either fully succeeds (commit) or fully fails (rollback) to maintain data integrity.'
  },
  {
    id: 'dbms-10',
    type: 'mcq',
    category: 'DBMS',
    text: 'What is the purpose of a VIEW in SQL?',
    options: [
      'To store physical data',
      'To create a virtual table based on a query result',
      'To delete data permanently',
      'To backup the database'
    ],
    correctAnswer: 'To create a virtual table based on a query result',
    difficulty: 'intermediate',
    explanation: 'A VIEW is a saved query that presents data from one or more tables; it simplifies complex queries, enhances security, and provides logical data independence.'
  },

  // ==================== DESIGN & ANALYSIS OF ALGORITHMS (Questions 41-50) ====================
  {
    id: 'daa-1',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the time complexity of Binary Search?',
    options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
    correctAnswer: 'O(log n)',
    difficulty: 'beginner',
    explanation: 'Binary search halves the search space each iteration; for n elements, it takes at most log₂(n) comparisons, hence O(log n) time complexity.'
  },
  {
    id: 'daa-2',
    type: 'mcq',
    category: 'DAA',
    text: 'Which algorithm design technique is used in Merge Sort?',
    options: ['Greedy', 'Dynamic Programming', 'Divide and Conquer', 'Backtracking'],
    correctAnswer: 'Divide and Conquer',
    difficulty: 'beginner',
    explanation: 'Merge Sort divides the array into halves, recursively sorts each half, then merges them. Time complexity: O(n log n) in all cases.'
  },
  {
    id: 'daa-3',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the worst-case time complexity of Quick Sort?',
    options: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
    correctAnswer: 'O(n^2)',
    difficulty: 'intermediate',
    explanation: 'Quick Sort\'s worst case (already sorted array with poor pivot choice) is O(n²); average case is O(n log n). Randomized pivot selection mitigates worst case.'
  },
  {
    id: 'daa-4',
    type: 'mcq',
    category: 'DAA',
    text: 'Which of the following is a Greedy algorithm?',
    options: ['Matrix Chain Multiplication', 'Longest Common Subsequence', 'Dijkstra\'s Algorithm', 'Floyd-Warshall Algorithm'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    difficulty: 'intermediate',
    explanation: 'Dijkstra\'s algorithm greedily selects the closest unvisited node to find shortest paths. LCS and Matrix Chain use DP; Floyd-Warshall uses DP for all-pairs shortest paths.'
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
    correctAnswer: 'It avoids recomputing subproblems by storing results',
    difficulty: 'intermediate',
    explanation: 'DP stores solutions to overlapping subproblems (memoization/tabulation), reducing exponential time to polynomial for problems like Fibonacci, LCS, and knapsack.'
  },
  {
    id: 'daa-6',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the time complexity of inserting an element into a Binary Heap?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(log n)',
    difficulty: 'intermediate',
    explanation: 'Heap insertion adds element at end then "bubbles up" to maintain heap property; height of heap is log n, so worst-case time is O(log n).'
  },
  {
    id: 'daa-7',
    type: 'mcq',
    category: 'DAA',
    text: 'Which problem is NOT typically solved using Dynamic Programming?',
    options: ['Fibonacci Sequence', '0/1 Knapsack', 'Traveling Salesman Problem', 'Finding maximum element in array'],
    correctAnswer: 'Finding maximum element in array',
    difficulty: 'intermediate',
    explanation: 'Finding max element is O(n) with simple iteration; no overlapping subproblems. Fibonacci, Knapsack, and TSP exhibit optimal substructure and overlapping subproblems.'
  },
  {
    id: 'daa-8',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the space complexity of Merge Sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    correctAnswer: 'O(n)',
    difficulty: 'intermediate',
    explanation: 'Merge Sort requires O(n) auxiliary space for the temporary array during merging; recursive call stack adds O(log n), but dominant term is O(n).'
  },
  {
    id: 'daa-9',
    type: 'mcq',
    category: 'DAA',
    text: 'Which algorithm is used to find the Minimum Spanning Tree?',
    options: ['Dijkstra\'s', 'Kruskal\'s', 'Bellman-Ford', 'Floyd-Warshall'],
    correctAnswer: 'Kruskal\'s',
    difficulty: 'intermediate',
    explanation: 'Kruskal\'s and Prim\'s algorithms find MST. Kruskal\'s sorts edges and adds them if no cycle forms (using Union-Find); Prim\'s grows tree from a starting vertex.'
  },
  {
    id: 'daa-10',
    type: 'mcq',
    category: 'DAA',
    text: 'What is the time complexity of Matrix Chain Multiplication using DP?',
    options: ['O(n)', 'O(n^2)', 'O(n^3)', 'O(2^n)'],
    correctAnswer: 'O(n^3)',
    difficulty: 'expert',
    explanation: 'Matrix Chain Multiplication DP fills an n×n table; each cell requires O(n) work to find optimal split, resulting in O(n³) total time complexity.'
  },

  // ==================== DATA STRUCTURES & ALGORITHMS (Questions 51-60) ====================
  {
    id: 'dsa-1',
    type: 'mcq',
    category: 'DSA',
    text: 'Which data structure follows the LIFO principle?',
    options: ['Queue', 'Stack', 'Linked List', 'Tree'],
    correctAnswer: 'Stack',
    difficulty: 'beginner',
    explanation: 'Stack follows Last-In-First-Out: the last element pushed is the first popped. Operations: push (add), pop (remove), peek (view top).'
  },
  {
    id: 'dsa-2',
    type: 'mcq',
    category: 'DSA',
    text: 'What is the time complexity to insert an element at the beginning of a singly linked list?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
    correctAnswer: 'O(1)',
    difficulty: 'beginner',
    explanation: 'Inserting at head of singly linked list only requires updating the head pointer and new node\'s next pointer, which is constant time O(1).'
  },
  {
    id: 'dsa-3',
    type: 'mcq',
    category: 'DSA',
    text: 'Which data structure is used for BFS (Breadth First Search)?',
    options: ['Stack', 'Queue', 'Priority Queue', 'Tree'],
    correctAnswer: 'Queue',
    difficulty: 'intermediate',
    explanation: 'BFS explores nodes level by level; a queue ensures nodes are processed in the order they are discovered (FIFO), enabling level-order traversal.'
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
    correctAnswer: 'A tree where the height of left and right subtrees differ by at most 1',
    difficulty: 'intermediate',
    explanation: 'Balanced trees (AVL, Red-Black) maintain O(log n) height by ensuring subtree heights differ by at most 1, guaranteeing efficient search/insert/delete.'
  },
  {
    id: 'dsa-5',
    type: 'mcq',
    category: 'DSA',
    text: 'Which sorting algorithm is considered stable?',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correctAnswer: 'Merge Sort',
    difficulty: 'intermediate',
    explanation: 'A stable sort preserves the relative order of equal elements. Merge Sort is stable; Quick Sort and Heap Sort are not by default (can be made stable with modifications).'
  },
  {
    id: 'dsa-6',
    type: 'mcq',
    category: 'DSA',
    text: 'What is the worst-case time complexity of searching in a Binary Search Tree?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(n)',
    difficulty: 'intermediate',
    explanation: 'In worst case (skewed tree), BST degenerates to a linked list, making search O(n). Balanced BSTs (AVL, Red-Black) guarantee O(log n) worst case.'
  },
  {
    id: 'dsa-7',
    type: 'mcq',
    category: 'DSA',
    text: 'Which data structure is best for implementing a priority queue?',
    options: ['Array', 'Linked List', 'Heap', 'Stack'],
    correctAnswer: 'Heap',
    difficulty: 'intermediate',
    explanation: 'Binary Heap provides O(log n) insert and extract-min/max, O(1) peek, making it ideal for priority queues. Arrays/lists have O(n) for extract operations.'
  },
  {
    id: 'dsa-8',
    type: 'mcq',
    category: 'DSA',
    text: 'What is the time complexity of deleting a node from a Hash Table with chaining?',
    options: ['O(1) average', 'O(n) average', 'O(log n) average', 'O(n^2) average'],
    correctAnswer: 'O(1) average',
    difficulty: 'intermediate',
    explanation: 'With good hash function and load factor, chaining gives O(1) average case for insert/search/delete. Worst case (all keys collide) is O(n).'
  },
  {
    id: 'dsa-9',
    type: 'mcq',
    category: 'DSA',
    text: 'Which traversal of a BST gives elements in sorted order?',
    options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
    correctAnswer: 'In-order',
    difficulty: 'beginner',
    explanation: 'In-order traversal (left-root-right) of a BST visits nodes in ascending order due to BST property: left < root < right.'
  },
  {
    id: 'dsa-10',
    type: 'mcq',
    category: 'DSA',
    text: 'What is the space complexity of recursive DFS on a binary tree?',
    options: ['O(1)', 'O(log n) average, O(n) worst', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(log n) average, O(n) worst',
    difficulty: 'intermediate',
    explanation: 'Recursive DFS uses call stack space equal to tree height: O(log n) for balanced trees, O(n) for skewed trees. Iterative DFS uses explicit stack with same complexity.'
  },

  // ==================== COMPUTER NETWORKS (Questions 61-70) ====================
  {
    id: 'cn-1',
    type: 'mcq',
    category: 'CN',
    text: 'What is the full form of OSI in networking?',
    options: ['Open System Interconnection', 'Operating System Interface', 'Optical Signal Interface', 'Open Source Integration'],
    correctAnswer: 'Open System Interconnection',
    difficulty: 'beginner',
    explanation: 'OSI (Open Systems Interconnection) is a 7-layer reference model (Physical, Data Link, Network, Transport, Session, Presentation, Application) for network communication.'
  },
  {
    id: 'cn-2',
    type: 'mcq',
    category: 'CN',
    text: 'Which layer of the OSI model is responsible for routing?',
    options: ['Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer'],
    correctAnswer: 'Network Layer',
    difficulty: 'beginner',
    explanation: 'Network Layer (Layer 3) handles logical addressing (IP), routing, and path determination. Routers operate at this layer to forward packets between networks.'
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
    correctAnswer: 'To translate domain names to IP addresses',
    difficulty: 'beginner',
    explanation: 'DNS (Domain Name System) resolves human-readable domain names (e.g., google.com) to IP addresses (e.g., 142.250.190.78) for network communication.'
  },
  {
    id: 'cn-4',
    type: 'mcq',
    category: 'CN',
    text: 'Which protocol is used for sending emails?',
    options: ['HTTP', 'FTP', 'SMTP', 'SNMP'],
    correctAnswer: 'SMTP',
    difficulty: 'beginner',
    explanation: 'SMTP (Simple Mail Transfer Protocol) is used for sending emails between servers. POP3/IMAP are used for retrieving emails from servers.'
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
    correctAnswer: 'A logical address assigned to each device on a network',
    difficulty: 'beginner',
    explanation: 'IP address (IPv4: 32-bit, IPv6: 128-bit) uniquely identifies devices on a network for routing. MAC address is the physical hardware address.'
  },
  {
    id: 'cn-6',
    type: 'mcq',
    category: 'CN',
    text: 'What is the main function of the Transport Layer?',
    options: [
      'Physical transmission of bits',
      'End-to-end communication and error recovery',
      'Routing between networks',
      'Session management'
    ],
    correctAnswer: 'End-to-end communication and error recovery',
    difficulty: 'intermediate',
    explanation: 'Transport Layer (Layer 4) provides end-to-end communication, flow control, and error recovery via TCP (reliable) or UDP (fast, unreliable).'
  },
  {
    id: 'cn-7',
    type: 'mcq',
    category: 'CN',
    text: 'What is the difference between TCP and UDP?',
    options: [
      'TCP is connectionless; UDP is connection-oriented',
      'TCP is reliable with acknowledgments; UDP is faster but unreliable',
      'TCP is for web; UDP is for email',
      'They are identical'
    ],
    correctAnswer: 'TCP is reliable with acknowledgments; UDP is faster but unreliable',
    difficulty: 'intermediate',
    explanation: 'TCP provides reliable, ordered, error-checked delivery with handshakes; UDP is connectionless, faster, but no guarantees—used for streaming, DNS, VoIP.'
  },
  {
    id: 'cn-8',
    type: 'mcq',
    category: 'CN',
    text: 'What is a subnet mask used for?',
    options: [
      'To hide IP addresses',
      'To divide an IP network into subnetworks',
      'To encrypt network traffic',
      'To assign MAC addresses'
    ],
    correctAnswer: 'To divide an IP network into subnetworks',
    difficulty: 'intermediate',
    explanation: 'Subnet mask (e.g., 255.255.255.0) separates network and host portions of an IP address, enabling efficient routing and network segmentation.'
  },
  {
    id: 'cn-9',
    type: 'mcq',
    category: 'CN',
    text: 'What is the purpose of ARP (Address Resolution Protocol)?',
    options: [
      'To resolve domain names to IP addresses',
      'To map IP addresses to MAC addresses on a local network',
      'To assign IP addresses dynamically',
      'To encrypt network packets'
    ],
    correctAnswer: 'To map IP addresses to MAC addresses on a local network',
    difficulty: 'intermediate',
    explanation: 'ARP resolves IP addresses to physical MAC addresses within a LAN, enabling Ethernet frames to be correctly addressed for delivery.'
  },
  {
    id: 'cn-10',
    type: 'mcq',
    category: 'CN',
    text: 'What is HTTP status code 404?',
    options: ['OK', 'Forbidden', 'Not Found', 'Server Error'],
    correctAnswer: 'Not Found',
    difficulty: 'beginner',
    explanation: 'HTTP 404 means the requested resource could not be found on the server. Common causes: broken links, deleted pages, or typos in URL.'
  },

  // ==================== JAVA PROGRAMMING (Questions 71-80) ====================
  {
    id: 'java-1',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which of the following is NOT a feature of Java?',
    options: ['Platform Independent', 'Object Oriented', 'Pointers', 'Robust'],
    correctAnswer: 'Pointers',
    difficulty: 'beginner',
    explanation: 'Java deliberately excludes explicit pointers for safety and simplicity; it uses references instead. Key features: platform independence (JVM), OOP, automatic memory management.'
  },
  {
    id: 'java-2',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the default value of a boolean variable in Java?',
    options: ['true', 'false', '0', 'null'],
    correctAnswer: 'false',
    difficulty: 'beginner',
    explanation: 'In Java, instance and static boolean variables default to false; local variables must be explicitly initialized or cause compilation error.'
  },
  {
    id: 'java-3',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which keyword is used to inherit a class in Java?',
    options: ['implements', 'extends', 'inherits', 'using'],
    correctAnswer: 'extends',
    difficulty: 'beginner',
    explanation: 'Java uses "extends" for class inheritance (single inheritance) and "implements" for interfaces (multiple interface implementation allowed).'
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
    correctAnswer: 'All of the above',
    difficulty: 'intermediate',
    explanation: '"final" applied to: variable (constant value), method (cannot override), class (cannot extend). For objects, final reference cannot be reassigned but object state can change.'
  },
  {
    id: 'java-5',
    type: 'mcq',
    category: 'JAVA',
    text: 'Which package contains the Scanner class?',
    options: ['java.lang', 'java.io', 'java.util', 'java.net'],
    correctAnswer: 'java.util',
    difficulty: 'beginner',
    explanation: 'Scanner class (java.util) parses primitive types and strings from input sources like System.in, files, or strings using delimiters.'
  },
  {
    id: 'java-6',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the difference between == and .equals() in Java?',
    options: [
      'No difference',
      '== compares references; .equals() compares content (if overridden)',
      '== compares content; .equals() compares references',
      '== is for primitives only'
    ],
    correctAnswer: '== compares references; .equals() compares content (if overridden)',
    difficulty: 'intermediate',
    explanation: '== compares object references (memory addresses); .equals() (when overridden, e.g., in String) compares logical content. For primitives, == compares values.'
  },
  {
    id: 'java-7',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is method overloading in Java?',
    options: [
      'Defining multiple methods with same name but different parameters',
      'Defining methods in parent and child classes with same signature',
      'Calling a method multiple times',
      'Overriding a method with different return type'
    ],
    correctAnswer: 'Defining multiple methods with same name but different parameters',
    difficulty: 'intermediate',
    explanation: 'Method overloading allows multiple methods with same name but different parameter lists (type/count/order) in same class; resolved at compile-time.'
  },
  {
    id: 'java-8',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the purpose of the "static" keyword?',
    options: [
      'To make variables/methods belong to the class rather than instances',
      'To prevent inheritance',
      'To make methods final',
      'To declare constants only'
    ],
    correctAnswer: 'To make variables/methods belong to the class rather than instances',
    difficulty: 'intermediate',
    explanation: 'Static members belong to the class, not instances; accessed via ClassName.member. Static methods cannot access non-static members directly.'
  },
  {
    id: 'java-9',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is an abstract class in Java?',
    options: [
      'A class that cannot be instantiated and may contain abstract methods',
      'A class with only static methods',
      'A final class',
      'A class with private constructors'
    ],
    correctAnswer: 'A class that cannot be instantiated and may contain abstract methods',
    difficulty: 'intermediate',
    explanation: 'Abstract classes cannot be instantiated; may contain abstract methods (no implementation) that subclasses must override. Used for partial implementation and common base behavior.'
  },
  {
    id: 'java-10',
    type: 'mcq',
    category: 'JAVA',
    text: 'What is the Collections Framework in Java?',
    options: [
      'A set of classes and interfaces for storing and manipulating groups of objects',
      'A framework for collecting user input',
      'A library for graphics rendering',
      'A database connection API'
    ],
    correctAnswer: 'A set of classes and interfaces for storing and manipulating groups of objects',
    difficulty: 'intermediate',
    explanation: 'Java Collections Framework provides interfaces (List, Set, Map) and implementations (ArrayList, HashSet, HashMap) with algorithms for sorting, searching, and manipulation.'
  },

  // ==================== ARTIFICIAL INTELLIGENCE (Questions 81-90) ====================
  {
    id: 'ai-1',
    type: 'mcq',
    category: 'AI',
    text: 'Who is considered the father of Artificial Intelligence?',
    options: ['Alan Turing', 'John McCarthy', 'Marvin Minsky', 'Herbert Simon'],
    correctAnswer: 'John McCarthy',
    difficulty: 'beginner',
    explanation: 'John McCarthy coined the term "Artificial Intelligence" in 1956 at the Dartmouth Conference and developed the Lisp programming language for AI research.'
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
    correctAnswer: 'To determine if a machine can exhibit intelligent behavior equivalent to a human',
    difficulty: 'beginner',
    explanation: 'Proposed by Alan Turing (1950), the test evaluates if a human evaluator cannot reliably distinguish machine responses from human responses in conversation.'
  },
  {
    id: 'ai-3',
    type: 'mcq',
    category: 'AI',
    text: 'Which of the following is a search algorithm used in AI?',
    options: ['A* Search', 'Linear Search', 'Binary Search', 'Bubble Sort'],
    correctAnswer: 'A* Search',
    difficulty: 'beginner',
    explanation: 'A* is an informed search algorithm using heuristics to find optimal paths; widely used in pathfinding, game AI, and robotics. Linear/Binary search are general algorithms.'
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
    correctAnswer: 'A function that estimates the cost to reach the goal',
    difficulty: 'intermediate',
    explanation: 'Heuristics (e.g., Manhattan distance in puzzles) guide search algorithms by estimating remaining cost; admissible heuristics never overestimate, ensuring optimality in A*.'
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
    correctAnswer: 'Interaction between computers and human languages',
    difficulty: 'beginner',
    explanation: 'NLP enables computers to understand, interpret, and generate human language; applications include chatbots, translation, sentiment analysis, and speech recognition.'
  },
  {
    id: 'ai-6',
    type: 'mcq',
    category: 'AI',
    text: 'What is the difference between AI, ML, and Deep Learning?',
    options: [
      'They are the same',
      'AI is the broad field; ML is a subset using data to learn; DL is a subset of ML using neural networks',
      'DL is broader than AI',
      'ML does not use data'
    ],
    correctAnswer: 'AI is the broad field; ML is a subset using data to learn; DL is a subset of ML using neural networks',
    difficulty: 'intermediate',
    explanation: 'AI: machines performing intelligent tasks. ML: algorithms learning from data. DL: ML using multi-layer neural networks for complex patterns (images, speech, text).'
  },
  {
    id: 'ai-7',
    type: 'mcq',
    category: 'AI',
    text: 'What is an expert system?',
    options: [
      'A system that replaces human experts entirely',
      'An AI system that uses knowledge base and inference engine to solve complex problems in a specific domain',
      'A database management system',
      'A programming language for experts'
    ],
    correctAnswer: 'An AI system that uses knowledge base and inference engine to solve complex problems in a specific domain',
    difficulty: 'intermediate',
    explanation: 'Expert systems encode human expertise as rules/facts; use inference engines to reason and provide recommendations (e.g., medical diagnosis, financial advising).'
  },
  {
    id: 'ai-8',
    type: 'mcq',
    category: 'AI',
    text: 'What is reinforcement learning?',
    options: [
      'Learning from labeled data',
      'Learning through trial and error with rewards/punishments from an environment',
      'Learning from unlabeled data',
      'Learning from expert demonstrations only'
    ],
    correctAnswer: 'Learning through trial and error with rewards/punishments from an environment',
    difficulty: 'intermediate',
    explanation: 'RL agents learn optimal policies by interacting with an environment, receiving rewards/penalties; used in robotics, game playing (AlphaGo), and autonomous systems.'
  },
  {
    id: 'ai-9',
    type: 'mcq',
    category: 'AI',
    text: 'What is a neural network?',
    options: [
      'A physical network of computers',
      'A computational model inspired by biological neurons, consisting of layers of interconnected nodes',
      'A type of database',
      'A network protocol'
    ],
    correctAnswer: 'A computational model inspired by biological neurons, consisting of layers of interconnected nodes',
    difficulty: 'beginner',
    explanation: 'Neural networks process inputs through weighted connections and activation functions; trained via backpropagation to minimize error; foundation of deep learning.'
  },
  {
    id: 'ai-10',
    type: 'mcq',
    category: 'AI',
    text: 'What is the vanishing gradient problem?',
    options: [
      'Gradients becoming too large during training',
      'Gradients becoming extremely small in deep networks, hindering learning in early layers',
      'Loss function becoming zero',
      'Network weights becoming zero'
    ],
    correctAnswer: 'Gradients becoming extremely small in deep networks, hindering learning in early layers',
    difficulty: 'expert',
    explanation: 'In deep networks, gradients can shrink exponentially during backpropagation (especially with sigmoid/tanh), preventing early layers from learning; mitigated by ReLU, batch norm, residual connections.'
  },

  // ==================== MACHINE LEARNING (Questions 91-100) ====================
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
    correctAnswer: 'Learning from labeled data',
    difficulty: 'beginner',
    explanation: 'Supervised learning uses input-output pairs (labeled data) to train models for prediction/classification; examples: linear regression, decision trees, neural networks.'
  },
  {
    id: 'ml-2',
    type: 'mcq',
    category: 'ML',
    text: 'Which of the following is a classification algorithm?',
    options: ['Linear Regression', 'K-Means Clustering', 'Logistic Regression', 'Principal Component Analysis'],
    correctAnswer: 'Logistic Regression',
    difficulty: 'beginner',
    explanation: 'Logistic Regression predicts categorical outcomes (binary/multiclass). Linear Regression is for continuous targets; K-Means is unsupervised clustering; PCA is dimensionality reduction.'
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
    correctAnswer: 'When a model performs well on training data but poorly on unseen data',
    difficulty: 'intermediate',
    explanation: 'Overfitting occurs when a model learns noise/patterns specific to training data; mitigated by regularization, cross-validation, more data, or simpler models.'
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
    correctAnswer: 'To tune hyperparameters and prevent overfitting',
    difficulty: 'intermediate',
    explanation: 'Validation set evaluates model during training to tune hyperparameters (e.g., learning rate, tree depth) without touching the test set, preventing data leakage.'
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
    correctAnswer: 'A computational model inspired by the human brain',
    difficulty: 'beginner',
    explanation: 'Neural networks consist of layers of neurons that apply weighted sums and activation functions; trained via backpropagation to learn complex patterns from data.'
  },
  {
    id: 'ml-6',
    type: 'mcq',
    category: 'ML',
    text: 'What is the bias-variance tradeoff?',
    options: [
      'High bias means overfitting; high variance means underfitting',
      'High bias means underfitting; high variance means overfitting',
      'Bias and variance are unrelated',
      'Both should always be minimized to zero'
    ],
    correctAnswer: 'High bias means underfitting; high variance means overfitting',
    difficulty: 'intermediate',
    explanation: 'Bias: error from overly simplistic assumptions (underfitting). Variance: error from sensitivity to training data fluctuations (overfitting). Optimal model balances both.'
  },
  {
    id: 'ml-7',
    type: 'mcq',
    category: 'ML',
    text: 'What is cross-validation?',
    options: [
      'Validating code syntax',
      'Partitioning data into multiple folds to assess model performance more reliably',
      'Checking if a model is cross-platform',
      'Validating data types'
    ],
    correctAnswer: 'Partitioning data into multiple folds to assess model performance more reliably',
    difficulty: 'intermediate',
    explanation: 'K-fold cross-validation trains on k-1 folds and tests on the remaining fold, repeated k times; provides robust estimate of generalization performance.'
  },
  {
    id: 'ml-8',
    type: 'mcq',
    category: 'ML',
    text: 'What is the purpose of feature scaling?',
    options: [
      'To reduce the number of features',
      'To bring all features to a similar scale for algorithms sensitive to magnitude',
      'To increase model complexity',
      'To remove outliers'
    ],
    correctAnswer: 'To bring all features to a similar scale for algorithms sensitive to magnitude',
    difficulty: 'intermediate',
    explanation: 'Feature scaling (normalization, standardization) ensures features contribute equally; critical for distance-based algorithms (KNN, SVM) and gradient descent optimization.'
  },
  {
    id: 'ml-9',
    type: 'mcq',
    category: 'ML',
    text: 'What is ensemble learning?',
    options: [
      'Learning from a single model',
      'Combining multiple models to improve predictive performance',
      'Learning from ensemble casts in movies',
      'A type of neural network'
    ],
    correctAnswer: 'Combining multiple models to improve predictive performance',
    difficulty: 'intermediate',
    explanation: 'Ensemble methods (Bagging, Boosting, Stacking) combine weak learners to reduce variance/bias; examples: Random Forests (bagging), XGBoost (boosting).'
  },
  {
    id: 'ml-10',
    type: 'mcq',
    category: 'ML',
    text: 'What is the difference between precision and recall?',
    options: [
      'Precision = TP/(TP+FP); Recall = TP/(TP+FN)',
      'Precision = TP/(TP+FN); Recall = TP/(TP+FP)',
      'They are the same metric',
      'Precision is for regression; recall is for classification'
    ],
    correctAnswer: 'Precision = TP/(TP+FP); Recall = TP/(TP+FN)',
    difficulty: 'intermediate',
    explanation: 'Precision: of predicted positives, how many are correct? Recall: of actual positives, how many were found? Tradeoff exists; F1-score balances both.'
  }
];

// Verify we have exactly 100 unique questions
console.assert(INTERNSHIP_QUESTIONS.length === 100, 
  `Expected 100 questions, got ${INTERNSHIP_QUESTIONS.length}`);

// Verify no duplicate IDs
const ids = INTERNSHIP_QUESTIONS.map(q => q.id);
const uniqueIds = new Set(ids);
console.assert(ids.length === uniqueIds.size, 'Duplicate question IDs detected!');

// Verify no duplicate question texts
const texts = INTERNSHIP_QUESTIONS.map(q => q.text);
const uniqueTexts = new Set(texts);
console.assert(texts.length === uniqueTexts.size, 'Duplicate question texts detected!');

// Optional: Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'expert'): Question[] => {
  return INTERNSHIP_QUESTIONS.filter(q => q.difficulty === difficulty);
};

// Optional: Helper to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return INTERNSHIP_QUESTIONS.filter(q => q.category === category);
};

// Optional: Get random subset for exams with deterministic seeding
export const getRandomQuestions = (count: number, seed?: number): Question[] => {
  const shuffled = [...INTERNSHIP_QUESTIONS];
  
  // Seeded shuffle using linear congruential generator
  if (seed !== undefined) {
    let randomSeed = seed;
    for (let i = shuffled.length - 1; i > 0; i--) {
      randomSeed = (randomSeed * 9301 + 49297) % 233280;
      const j = Math.floor((randomSeed / 233280) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } else {
    // Standard Fisher-Yates shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }
  return shuffled.slice(0, count);
};

export default INTERNSHIP_QUESTIONS;