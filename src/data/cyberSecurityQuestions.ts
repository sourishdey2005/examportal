import { Question } from '../types';

export const CYBER_SECURITY_QUESTIONS: Question[] = [
  // ==================== NETWORK SECURITY & PROTOCOLS (Questions 1-12) ====================
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
    id: 'cs-4',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is the primary security concern with the Border Gateway Protocol (BGP)?',
    options: [
      'It uses weak encryption by default.',
      'It relies on trust-based route announcements without built-in authentication of routing updates.',
      'It cannot handle IPv6 traffic.',
      'It requires manual configuration of every router.'
    ],
    correctAnswer: 'It relies on trust-based route announcements without built-in authentication of routing updates.'
  },
  {
    id: 'cs-5',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "DNS Cache Poisoning" (DNS Spoofing)?',
    options: [
      'Encrypting DNS queries to prevent eavesdropping.',
      'Injecting false DNS records into a resolver\'s cache to redirect traffic to malicious sites.',
      'Overloading DNS servers with queries to cause downtime.',
      'Scanning for open DNS resolvers on the internet.'
    ],
    correctAnswer: 'Injecting false DNS records into a resolver\'s cache to redirect traffic to malicious sites.'
  },
  {
    id: 'cs-6',
    type: 'mcq',
    category: 'Network Security',
    text: 'What does "TLS 1.3" improve over previous versions primarily?',
    options: [
      'It increases the key length to 8192 bits only.',
      'It reduces handshake latency and removes support for legacy, insecure cryptographic algorithms.',
      'It allows unlimited certificate chain length.',
      'It removes the need for certificate authorities.'
    ],
    correctAnswer: 'It reduces handshake latency and removes support for legacy, insecure cryptographic algorithms.'
  },
  {
    id: 'cs-7',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "Certificate Transparency" (CT) designed to prevent?',
    options: [
      'Slow SSL handshake speeds.',
      'Misissued or maliciously acquired certificates by requiring public logging of all certificates.',
      'Expired certificates from being used.',
      'Self-signed certificates in development environments.'
    ],
    correctAnswer: 'Misissued or maliciously acquired certificates by requiring public logging of all certificates.'
  },
  {
    id: 'cs-8',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is the purpose of "DNSSEC" (Domain Name System Security Extensions)?',
    options: [
      'To encrypt all DNS queries end-to-end.',
      'To provide authentication and integrity protection for DNS responses using digital signatures.',
      'To speed up DNS resolution times.',
      'To block access to malicious domains automatically.'
    ],
    correctAnswer: 'To provide authentication and integrity protection for DNS responses using digital signatures.'
  },
  {
    id: 'cs-9',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "ARP Spoofing" (ARP Poisoning) used to accomplish?',
    options: [
      'Encrypt ARP traffic between switches.',
      'Associate the attacker\'s MAC address with another host\'s IP address to intercept traffic on a local network.',
      'Speed up ARP resolution on large networks.',
      'Prevent ARP requests from broadcasting.'
    ],
    correctAnswer: 'Associate the attacker\'s MAC address with another host\'s IP address to intercept traffic on a local network.'
  },
  {
    id: 'cs-10',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "SYN Flood" attack a type of?',
    options: [
      'SQL injection attack.',
      'Denial of Service (DoS) attack that exploits the TCP three-way handshake.',
      'Cross-site scripting attack.',
      'Man-in-the-middle attack.'
    ],
    correctAnswer: 'Denial of Service (DoS) attack that exploits the TCP three-way handshake.'
  },
  {
    id: 'cs-11',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "IPsec" primarily used for?',
    options: [
      'Securing email communications only.',
      'Providing encrypted, authenticated communications at the IP layer for VPNs and secure connections.',
      'Scanning IP addresses for vulnerabilities.',
      'Managing IP address allocation.'
    ],
    correctAnswer: 'Providing encrypted, authenticated communications at the IP layer for VPNs and secure connections.'
  },
  {
    id: 'cs-12',
    type: 'mcq',
    category: 'Network Security',
    text: 'What is "MTU (Maximum Transmission Unit) Discovery" related to in security?',
    options: [
      'Discovering the maximum malware transmission rate.',
      'Determining the largest packet size to prevent fragmentation-based attacks and improve performance.',
      'Finding the maximum number of users that can transmit data.',
      'Discovering transmission units in the network topology.'
    ],
    correctAnswer: 'Determining the largest packet size to prevent fragmentation-based attacks and improve performance.'
  },

  // ==================== APPLICATION SECURITY (Questions 13-24) ====================
  {
    id: 'cs-13',
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
  },
  {
    id: 'cs-14',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "SQL Injection" (SQLi) vulnerability?',
    options: [
      'Injecting malicious SQL statements into entry fields to manipulate database queries.',
      'Injecting SQL database files into the application.',
      'Overloading SQL servers with too many queries.',
      'Encrypting SQL traffic between client and server.'
    ],
    correctAnswer: 'Injecting malicious SQL statements into entry fields to manipulate database queries.'
  },
  {
    id: 'cs-15',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Cross-Site Scripting" (XSS)?',
    options: [
      'A vulnerability that allows attackers to inject client-side scripts into web pages viewed by other users.',
      'A technique to secure cross-site communications.',
      'A method for scripting across different operating systems.',
      'A way to share scripts between websites securely.'
    ],
    correctAnswer: 'A vulnerability that allows attackers to inject client-side scripts into web pages viewed by other users.'
  },
  {
    id: 'cs-16',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is the difference between "Stored XSS" and "Reflected XSS"?',
    options: [
      'Stored XSS persists in the database and affects all users viewing the data; Reflected XSS requires the victim to click a malicious link.',
      'Stored XSS is faster than Reflected XSS.',
      'Reflected XSS is more dangerous than Stored XSS.',
      'There is no difference; they are the same attack.'
    ],
    correctAnswer: 'Stored XSS persists in the database and affects all users viewing the data; Reflected XSS requires the victim to click a malicious link.'
  },
  {
    id: 'cs-17',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "CSRF" (Cross-Site Request Forgery)?',
    options: [
      'A request to cross-site scripting filters.',
      'An attack that tricks authenticated users into submitting unwanted requests to a web application.',
      'A method to forge SSL certificates across sites.',
      'A technique to request data from multiple sites simultaneously.'
    ],
    correctAnswer: 'An attack that tricks authenticated users into submitting unwanted requests to a web application.'
  },
  {
    id: 'cs-18',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Deserialization of Untrusted Data" vulnerability?',
    options: [
      'Converting data too quickly between formats.',
      'When an application deserializes hostile or tampered objects, potentially leading to remote code execution.',
      'Trusting data that has been serialized by unknown sources.',
      'A method to compress data during transmission.'
    ],
    correctAnswer: 'When an application deserializes hostile or tampered objects, potentially leading to remote code execution.'
  },
  {
    id: 'cs-19',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Path Traversal" (Directory Traversal) vulnerability?',
    options: [
      'A technique to optimize file system paths.',
      'An attack that allows access to files and directories outside the intended directory by manipulating file paths.',
      'A method to traverse network paths securely.',
      'A way to track the path of data through an application.'
    ],
    correctAnswer: 'An attack that allows access to files and directories outside the intended directory by manipulating file paths.'
  },
  {
    id: 'cs-20',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Insecure Direct Object Reference" (IDOR)?',
    options: [
      'A secure way to reference objects in memory.',
      'A vulnerability where an attacker can access resources directly by modifying parameter values, bypassing authorization.',
      'A method to encrypt object references.',
      'A technique to optimize database object retrieval.'
    ],
    correctAnswer: 'A vulnerability where an attacker can access resources directly by modifying parameter values, bypassing authorization.'
  },
  {
    id: 'cs-21',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Content Security Policy" (CSP) designed to mitigate?',
    options: [
      'Slow content delivery.',
      'Cross-site scripting (XSS) and data injection attacks by specifying approved sources of content.',
      'Content piracy and copyright infringement.',
      'Insecure password policies.'
    ],
    correctAnswer: 'Cross-site scripting (XSS) and data injection attacks by specifying approved sources of content.'
  },
  {
    id: 'cs-22',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "HTTP Strict Transport Security" (HSTS)?',
    options: [
      'A policy mechanism that helps protect websites against man-in-the-middle attacks by enforcing HTTPS.',
      'A method to speed up HTTP connections.',
      'A technique to compress HTTP traffic.',
      'A way to allow mixed HTTP and HTTPS content.'
    ],
    correctAnswer: 'A policy mechanism that helps protect websites against man-in-the-middle attacks by enforcing HTTPS.'
  },
  {
    id: 'cs-23',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "Race Condition" in application security?',
    options: [
      'A competition between two applications.',
      'A vulnerability where the behavior depends on the sequence or timing of events, potentially allowing privilege escalation.',
      'A condition where the server races to respond to requests.',
      'A method to speed up application processing.'
    ],
    correctAnswer: 'A vulnerability where the behavior depends on the sequence or timing of events, potentially allowing privilege escalation.'
  },
  {
    id: 'cs-24',
    type: 'mcq',
    category: 'Application Security',
    text: 'What is "OS Command Injection"?',
    options: [
      'Injecting operating system updates.',
      'A vulnerability allowing an attacker to execute arbitrary operating system commands on the server.',
      'A method to inject commands into the client OS.',
      'A technique to optimize OS command execution.'
    ],
    correctAnswer: 'A vulnerability allowing an attacker to execute arbitrary operating system commands on the server.'
  },

  // ==================== CRYPTOGRAPHY (Questions 25-35) ====================
  {
    id: 'cs-25',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is the primary difference between symmetric and asymmetric encryption?',
    options: [
      'Symmetric encryption is faster; asymmetric uses key pairs (public/private) for different operations.',
      'Symmetric encryption is newer than asymmetric.',
      'Asymmetric encryption cannot be used for data encryption.',
      'Symmetric encryption uses prime numbers only.'
    ],
    correctAnswer: 'Symmetric encryption is faster; asymmetric uses key pairs (public/private) for different operations.'
  },
  {
    id: 'cs-26',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "AES" (Advanced Encryption Standard)?',
    options: [
      'An asymmetric encryption algorithm.',
      'A symmetric block cipher with 128-bit block size supporting 128, 192, and 256-bit keys.',
      'A hashing algorithm for password storage.',
      'A protocol for secure email communication.'
    ],
    correctAnswer: 'A symmetric block cipher with 128-bit block size supporting 128, 192, and 256-bit keys.'
  },
  {
    id: 'cs-27',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "RSA" algorithm based on?',
    options: [
      'The difficulty of factoring large prime numbers.',
      'The speed of symmetric key exchange.',
      'The efficiency of block cipher operations.',
      'The randomness of hash functions.'
    ],
    correctAnswer: 'The difficulty of factoring large prime numbers.'
  },
  {
    id: 'cs-28',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Elliptic Curve Cryptography" (ECC) advantage over RSA?',
    options: [
      'It requires larger key sizes for equivalent security.',
      'It provides equivalent security with smaller key sizes, improving efficiency.',
      'It is only used for hashing, not encryption.',
      'It is less secure but faster than RSA.'
    ],
    correctAnswer: 'It provides equivalent security with smaller key sizes, improving efficiency.'
  },
  {
    id: 'cs-29',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "SHA-256"?',
    options: [
      'An encryption algorithm with 256-bit keys.',
      'A cryptographic hash function producing a 256-bit digest, part of the SHA-2 family.',
      'A symmetric cipher with 256 rounds.',
      'A password hashing algorithm with 256 iterations.'
    ],
    correctAnswer: 'A cryptographic hash function producing a 256-bit digest, part of the SHA-2 family.'
  },
  {
    id: 'cs-30',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Birthday Attack" in cryptography?',
    options: [
      'An attack that occurs on the birthday of a system administrator.',
      'A brute-force attack exploiting the mathematics behind the birthday problem to find hash collisions.',
      'A social engineering attack targeting birthday information.',
      'A timing attack on birthday algorithms.'
    ],
    correctAnswer: 'A brute-force attack exploiting the mathematics behind the birthday problem to find hash collisions.'
  },
  {
    id: 'cs-31',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Side-Channel Attack"?',
    options: [
      'Attacking through the side entrance of a data center.',
      'Exploiting information gained from the physical implementation of a cryptosystem (timing, power consumption, electromagnetic leaks).',
      'A secondary attack channel used when primary fails.',
      'Attacking side servers in a distributed system.'
    ],
    correctAnswer: 'Exploiting information gained from the physical implementation of a cryptosystem (timing, power consumption, electromagnetic leaks).'
  },
  {
    id: 'cs-32',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Post-Quantum Cryptography" concerned with?',
    options: [
      'Cryptography used only in quantum computers.',
      'Developing cryptographic algorithms resistant to attacks by quantum computers.',
      'Cryptography that uses quantum entanglement.',
      'Cryptography for space exploration.'
    ],
    correctAnswer: 'Developing cryptographic algorithms resistant to attacks by quantum computers.'
  },
  {
    id: 'cs-33',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "HMAC" (Hash-based Message Authentication Code)?',
    options: [
      'A hashing algorithm for passwords.',
      'A specific construction for creating a message authentication code using a cryptographic hash function and secret key.',
      'A method to encrypt HTTP traffic.',
      'A certificate authority protocol.'
    ],
    correctAnswer: 'A specific construction for creating a message authentication code using a cryptographic hash function and secret key.'
  },
  {
    id: 'cs-34',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "PBKDF2" used for?',
    options: [
      'Fast encryption of large files.',
      'Key derivation by applying a pseudorandom function to a password with salt and iterations to slow brute-force.',
      'Compressing passwords for storage.',
      'Generating random passwords.'
    ],
    correctAnswer: 'Key derivation by applying a pseudorandom function to a password with salt and iterations to slow brute-force.'
  },
  {
    id: 'cs-35',
    type: 'mcq',
    category: 'Advanced Cryptography',
    text: 'What is "Chosen-Ciphertext Attack" (CCA)?',
    options: [
      'An attack where the attacker can choose arbitrary ciphertexts and obtain the decryption of those ciphertexts.',
      'An attack that chooses which ciphertext to use based on speed.',
      'A method to select the best encryption cipher.',
      'An attack on the ciphertext choice algorithm.'
    ],
    correctAnswer: 'An attack where the attacker can choose arbitrary ciphertexts and obtain the decryption of those ciphertexts.'
  },

  // ==================== CLOUD SECURITY (Questions 36-45) ====================
  {
    id: 'cs-36',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "IAM" (Identity and Access Management) in cloud security?',
    options: [
      'A method to identify and manage hardware devices.',
      'A framework for managing digital identities and controlling access to resources based on policies.',
      'A technique to monitor internet access.',
      'A protocol for secure instant messaging.'
    ],
    correctAnswer: 'A framework for managing digital identities and controlling access to resources based on policies.'
  },
  {
    id: 'cs-37',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "S3 Bucket Misconfiguration" commonly lead to?',
    options: [
      'Faster data access speeds.',
      'Unintentional exposure of sensitive data due to overly permissive access controls.',
      'Improved data redundancy.',
      'Better integration with other AWS services.'
    ],
    correctAnswer: 'Unintentional exposure of sensitive data due to overly permissive access controls.'
  },
  {
    id: 'cs-38',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Container Escape" vulnerability?',
    options: [
      'A feature to export containers from the cloud.',
      'A vulnerability allowing a process to break out of its container isolation and access the host system.',
      'A method to scale containers automatically.',
      'A technique to backup container data.'
    ],
    correctAnswer: 'A vulnerability allowing a process to break out of its container isolation and access the host system.'
  },
  {
    id: 'cs-39',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Metadata Service" attack in cloud environments (e.g., IMDS in AWS)?',
    options: [
      'Attacking the metadata of music files stored in the cloud.',
      'Exploiting the instance metadata service to retrieve temporary credentials and compromise cloud resources.',
      'Modifying the metadata of cloud storage objects.',
      'Attacking the metadata database of cloud providers.'
    ],
    correctAnswer: 'Exploiting the instance metadata service to retrieve temporary credentials and compromise cloud resources.'
  },
  {
    id: 'cs-40',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Serverless Security" primarily concerned with?',
    options: [
      'Security of servers without operating systems.',
      'Securing function-as-a-service platforms, managing permissions, dependencies, and event injection.',
      'Physical security of server rooms.',
      'Security of serverless protocols.'
    ],
    correctAnswer: 'Securing function-as-a-service platforms, managing permissions, dependencies, and event injection.'
  },
  {
    id: 'cs-41',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "CASB" (Cloud Access Security Broker)?',
    options: [
      'A cloud storage service.',
      'Security policy enforcement between cloud service consumers and providers, providing visibility and compliance.',
      'A method to broker cloud access between users.',
      'A certificate authority for cloud services.'
    ],
    correctAnswer: 'Security policy enforcement between cloud service consumers and providers, providing visibility and compliance.'
  },
  {
    id: 'cs-42',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Shared Responsibility Model" in cloud security?',
    options: [
      'All security is the cloud provider\'s responsibility.',
      'Security responsibilities are divided between the cloud provider and the customer based on the service model.',
      'Security is shared equally among all cloud users.',
      'A model where security is outsourced to third parties.'
    ],
    correctAnswer: 'Security responsibilities are divided between the cloud provider and the customer based on the service model.'
  },
  {
    id: 'cs-43',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Secrets Management" in cloud environments?',
    options: [
      'Managing user passwords only.',
      'Securely storing, rotating, and managing sensitive credentials, API keys, and certificates.',
      'Managing secret projects in the cloud.',
      'Hiding cloud resources from administrators.'
    ],
    correctAnswer: 'Securely storing, rotating, and managing sensitive credentials, API keys, and certificates.'
  },
  {
    id: 'cs-44',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Cloud Workload Protection Platform" (CWPP)?',
    options: [
      'A platform to protect cloud provider workloads.',
      'Security solutions focused on protecting workloads (VMs, containers, serverless) across multiple cloud environments.',
      'A workload balancing platform for cloud servers.',
      'A platform to protect against cloud outages.'
    ],
    correctAnswer: 'Security solutions focused on protecting workloads (VMs, containers, serverless) across multiple cloud environments.'
  },
  {
    id: 'cs-45',
    type: 'mcq',
    category: 'Cloud Security',
    text: 'What is "Cloud Security Posture Management" (CSPM)?',
    options: [
      'Managing the physical posture of cloud servers.',
      'Automated tools that identify and remediate security risks and compliance issues in cloud infrastructure.',
      'Managing user postures in cloud applications.',
      'A method to optimize cloud server positioning.'
    ],
    correctAnswer: 'Automated tools that identify and remediate security risks and compliance issues in cloud infrastructure.'
  },

  // ==================== MALWARE & THREATS (Questions 46-55) ====================
  {
    id: 'cs-46',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Polymorphic Malware"?',
    options: [
      'Malware that can infect multiple operating systems.',
      'Malware that changes its code signature to evade detection while maintaining the same functionality.',
      'Malware that spreads through polymorphic networks.',
      'Malware that only targets polymorphic data structures.'
    ],
    correctAnswer: 'Malware that changes its code signature to evade detection while maintaining the same functionality.'
  },
  {
    id: 'cs-47',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Rootkit"?',
    options: [
      'A kit for repairing root directories.',
      'Malware designed to hide the existence of certain processes or programs from normal detection methods.',
      'A toolkit for root cause analysis.',
      'A security kit for root users.'
    ],
    correctAnswer: 'Malware designed to hide the existence of certain processes or programs from normal detection methods.'
  },
  {
    id: 'cs-48',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Ransomware"?',
    options: [
      'Software that randomly encrypts files.',
      'Malware that encrypts victim\'s files and demands payment for decryption.',
      'Software that holds random access memory hostage.',
      'A tool for random security audits.'
    ],
    correctAnswer: 'Malware that encrypts victim\'s files and demands payment for decryption.'
  },
  {
    id: 'cs-49',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Fileless Malware"?',
    options: [
      'Malware that does not use files at all.',
      'Malware that operates in memory without writing to disk, using legitimate system tools to evade detection.',
      'Malware with no file system access.',
      'A lightweight malware with small file size.'
    ],
    correctAnswer: 'Malware that operates in memory without writing to disk, using legitimate system tools to evade detection.'
  },
  {
    id: 'cs-50',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Stuxnet" famous for?',
    options: [
      'Being the first antivirus software.',
      'A sophisticated worm that targeted industrial control systems, specifically Iranian nuclear facilities.',
      'A popular firewall configuration.',
      'An encryption standard for industrial systems.'
    ],
    correctAnswer: 'A sophisticated worm that targeted industrial control systems, specifically Iranian nuclear facilities.'
  },
  {
    id: 'cs-51',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "C2" (Command and Control) infrastructure?',
    options: [
      'A cloud-to-cloud communication protocol.',
      'Infrastructure used by attackers to maintain communication with compromised systems and control malware.',
      'A certification and compliance framework.',
      'A command line interface for controlling networks.'
    ],
    correctAnswer: 'Infrastructure used by attackers to maintain communication with compromised systems and control malware.'
  },
  {
    id: 'cs-52',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Dropper" in malware terminology?',
    options: [
      'A tool to drop network packets.',
      'A program designed to install malware on a target system.',
      'A feature to drop malicious files from quarantine.',
      'A network device that drops unwanted traffic.'
    ],
    correctAnswer: 'A program designed to install malware on a target system.'
  },
  {
    id: 'cs-53',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Packer" used for in malware?',
    options: [
      'Compressing files for faster transmission.',
      'Obfuscating malware code through compression/encryption to evade signature-based detection.',
      'Packing malware into containers.',
      'A tool for packing network packets.'
    ],
    correctAnswer: 'Obfuscating malware code through compression/encryption to evade signature-based detection.'
  },
  {
    id: 'cs-54',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "APT" (Advanced Persistent Threat)?',
    options: [
      'An automated patching tool.',
      'A sophisticated, long-term targeted attack where intruders establish a prolonged presence to steal data.',
      'A fast attack that happens in milliseconds.',
      'A public threat announcement.'
    ],
    correctAnswer: 'A sophisticated, long-term targeted attack where intruders establish a prolonged presence to steal data.'
  },
  {
    id: 'cs-55',
    type: 'mcq',
    category: 'Malware Analysis',
    text: 'What is "Living off the Land" (LotL) technique?',
    options: [
      'Surviving in wilderness using natural resources.',
      'Using legitimate system tools and binaries already present on the system to carry out malicious activities.',
      'A technique to live off cloud resources.',
      'Using only open-source security tools.'
    ],
    correctAnswer: 'Using legitimate system tools and binaries already present on the system to carry out malicious activities.'
  },

  // ==================== IDENTITY & ACCESS MANAGEMENT (Questions 56-65) ====================
  {
    id: 'cs-56',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "Multi-Factor Authentication" (MFA)?',
    options: [
      'Using multiple passwords for one account.',
      'Requiring two or more verification factors (something you know, have, or are) for authentication.',
      'Authenticating multiple users simultaneously.',
      'Using multiple authentication servers.'
    ],
    correctAnswer: 'Requiring two or more verification factors (something you know, have, or are) for authentication.'
  },
  {
    id: 'cs-57',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "OAuth 2.0" primarily used for?',
    options: [
      'Encrypting email communications.',
      'Delegated authorization allowing users to grant limited access to their resources without sharing credentials.',
      'Authenticating users with biometrics.',
      'Creating secure VPN connections.'
    ],
    correctAnswer: 'Delegated authorization allowing users to grant limited access to their resources without sharing credentials.'
  },
  {
    id: 'cs-58',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "SAML" (Security Assertion Markup Language)?',
    options: [
      'A programming language for security applications.',
      'An XML-based standard for exchanging authentication and authorization data between identity providers and service providers.',
      'A method to encrypt SAML files.',
      'A security algorithm for machine learning.'
    ],
    correctAnswer: 'An XML-based standard for exchanging authentication and authorization data between identity providers and service providers.'
  },
  {
    id: 'cs-59',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "Privilege Escalation"?',
    options: [
      'Upgrading user privileges through normal HR processes.',
      'Exploiting a bug or design flaw to gain elevated access to resources not normally available.',
      'Escalating security alerts to management.',
      'Increasing encryption key privileges.'
    ],
    correctAnswer: 'Exploiting a bug or design flaw to gain elevated access to resources not normally available.'
  },
  {
    id: 'cs-60',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "Kerberos" authentication protocol based on?',
    options: [
      'Public key infrastructure only.',
      'Symmetric key cryptography and tickets to provide strong authentication in client-server environments.',
      'Biometric authentication methods.',
      'Blockchain technology.'
    ],
    correctAnswer: 'Symmetric key cryptography and tickets to provide strong authentication in client-server environments.'
  },
  {
    id: 'cs-61',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "RBAC" (Role-Based Access Control)?',
    options: [
      'Random-based access control.',
      'Restricting system access based on the roles of individual users within an organization.',
      'Remote-based access control.',
      'Real-time biometric access control.'
    ],
    correctAnswer: 'Restricting system access based on the roles of individual users within an organization.'
  },
  {
    id: 'cs-62',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "ABAC" (Attribute-Based Access Control)?',
    options: [
      'Access control based on absolute binary attributes.',
      'Access control where permissions are granted based on attributes of the user, resource, and environment.',
      'Automatic backup access control.',
      'Access control for abstract base classes.'
    ],
    correctAnswer: 'Access control where permissions are granted based on attributes of the user, resource, and environment.'
  },
  {
    id: 'cs-63',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "Just-in-Time" (JIT) access?',
    options: [
      'Access provided immediately upon request without verification.',
      'Temporary privileged access granted only when needed and automatically revoked after use.',
      'Real-time access monitoring only.',
      'Access provided during business hours only.'
    ],
    correctAnswer: 'Temporary privileged access granted only when needed and automatically revoked after use.'
  },
  {
    id: 'cs-64',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "PAM" (Privileged Access Management)?',
    options: [
      'Public access management for websites.',
      'Solutions to secure, control, and monitor access to critical systems and sensitive data by privileged users.',
      'Personal account management for employees.',
      'Password access management only.'
    ],
    correctAnswer: 'Solutions to secure, control, and monitor access to critical systems and sensitive data by privileged users.'
  },
  {
    id: 'cs-65',
    type: 'mcq',
    category: 'Identity & Access',
    text: 'What is "FIDO2" standard used for?',
    options: [
      'Fast identity online gaming.',
      'Strong authentication without passwords using public key cryptography and hardware authenticators.',
      'File identification and organization.',
      'Firewall intrusion detection operations.'
    ],
    correctAnswer: 'Strong authentication without passwords using public key cryptography and hardware authenticators.'
  },

  // ==================== INCIDENT RESPONSE & FORENSICS (Questions 66-75) ====================
  {
    id: 'cs-66',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is the "Diamond Model" of intrusion analysis?',
    options: [
      'A model for diamond-shaped network topologies.',
      'A framework connecting adversary, infrastructure, capability, and victim in a diamond structure for analysis.',
      'A model for secure diamond storage.',
      'A four-factor authentication model.'
    ],
    correctAnswer: 'A framework connecting adversary, infrastructure, capability, and victim in a diamond structure for analysis.'
  },
  {
    id: 'cs-67',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "Kill Chain" in cybersecurity?',
    options: [
      'A chain of infected computers.',
      'A model describing the stages of a cyberattack from reconnaissance to data exfiltration.',
      'A method to kill malicious processes.',
      'A chain of command for incident response.'
    ],
    correctAnswer: 'A model describing the stages of a cyberattack from reconnaissance to data exfiltration.'
  },
  {
    id: 'cs-68',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "Memory Forensics"?',
    options: [
      'Forensics on computer memory chips hardware.',
      'Analysis of a system\'s volatile memory (RAM) to extract artifacts and understand runtime behavior.',
      'Remembering past security incidents.',
      'Forensics on long-term storage memory.'
    ],
    correctAnswer: 'Analysis of a system\'s volatile memory (RAM) to extract artifacts and understand runtime behavior.'
  },
  {
    id: 'cs-69',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "Volatility Framework" used for?',
    options: [
      'Predicting stock market volatility.',
      'An open-source memory forensics framework for extracting digital artifacts from RAM dumps.',
      'Measuring network traffic volatility.',
      'A framework for volatile chemical analysis.'
    ],
    correctAnswer: 'An open-source memory forensics framework for extracting digital artifacts from RAM dumps.'
  },
  {
    id: 'cs-70',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "Chain of Custody" in digital forensics?',
    options: [
      'A blockchain for custody records.',
      'Documentation of the seizure, control, transfer, and analysis of evidence to maintain its integrity and admissibility.',
      'A network chain for secure custody.',
      'A method to chain multiple custodians.'
    ],
    correctAnswer: 'Documentation of the seizure, control, transfer, and analysis of evidence to maintain its integrity and admissibility.'
  },
  {
    id: 'cs-71',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "IOC" (Indicator of Compromise)?',
    options: [
      'International Olympic Committee cybersecurity.',
      'Forensic artifacts suggesting potential intrusion or malicious activity on a system or network.',
      'Input/output control mechanisms.',
      'Internal operating commands.'
    ],
    correctAnswer: 'Forensic artifacts suggesting potential intrusion or malicious activity on a system or network.'
  },
  {
    id: 'cs-72',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "Threat Hunting"?',
    options: [
      'Hiring threats to test security.',
      'Proactively searching for threats that may have evaded existing security defenses.',
      'Hunting for known malware signatures.',
      'A game where players hunt cyber threats.'
    ],
    correctAnswer: 'Proactively searching for threats that may have evaded existing security defenses.'
  },
  {
    id: 'cs-73',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "SOAR" (Security Orchestration, Automation and Response)?',
    options: [
      'A security soar analysis report.',
      'Platforms that collect security data and alerts from multiple sources to automate incident response workflows.',
      'Security operations and response team.',
      'A method to soar above security threats.'
    ],
    correctAnswer: 'Platforms that collect security data and alerts from multiple sources to automate incident response workflows.'
  },
  {
    id: 'cs-74',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "MTTD" (Mean Time to Detect)?',
    options: [
      'Mean time to deploy patches.',
      'The average time it takes to discover a security incident after it has occurred.',
      'Maximum time to detect threats.',
      'Minimum time to deploy tools.'
    ],
    correctAnswer: 'The average time it takes to discover a security incident after it has occurred.'
  },
  {
    id: 'cs-75',
    type: 'mcq',
    category: 'Incident Response',
    text: 'What is "MTTR" (Mean Time to Respond/Remediate)?',
    options: [
      'Mean time to read logs.',
      'The average time required to respond to and resolve a security incident.',
      'Maximum time to run scans.',
      'Minimum time to restore backups.'
    ],
    correctAnswer: 'The average time required to respond to and resolve a security incident.'
  },

  // ==================== COMPLIANCE & GOVERNANCE (Questions 76-85) ====================
  {
    id: 'cs-76',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "GDPR" (General Data Protection Regulation)?',
    options: [
      'A general data processing rule for networks.',
      'EU regulation on data protection and privacy, with extraterritorial reach and significant penalties.',
      'A graphic data protection routine.',
      'A government data protection repository.'
    ],
    correctAnswer: 'EU regulation on data protection and privacy, with extraterritorial reach and significant penalties.'
  },
  {
    id: 'cs-77',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "PCI DSS" (Payment Card Industry Data Security Standard)?',
    options: [
      'A standard for personal computer interfaces.',
      'Security standards for organizations that handle branded credit cards to protect against card fraud.',
      'A protocol for cloud data security services.',
      'A personal credit information data sharing standard.'
    ],
    correctAnswer: 'Security standards for organizations that handle branded credit cards to protect against card fraud.'
  },
  {
    id: 'cs-78',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "HIPAA" (Health Insurance Portability and Accountability Act)?',
    options: [
      'A high-performance access protocol.',
      'US legislation providing data privacy and security provisions for safeguarding medical information.',
      'A hardware portability and accountability interface.',
      'A high-level application programming interface.'
    ],
    correctAnswer: 'US legislation providing data privacy and security provisions for safeguarding medical information.'
  },
  {
    id: 'cs-79',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "SOC 2" Type I vs Type II?',
    options: [
      'Type I is faster; Type II is more secure.',
      'Type I reports on controls at a point in time; Type II reports on control effectiveness over a period (minimum 6 months).',
      'Type I is for internal use; Type II is for external use.',
      'Type I covers technical controls; Type II covers physical controls.'
    ],
    correctAnswer: 'Type I reports on controls at a point in time; Type II reports on control effectiveness over a period (minimum 6 months).'
  },
  {
    id: 'cs-80',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "ISO 27001"?',
    options: [
      'An international standard for internet speed.',
      'An international standard for information security management systems (ISMS).',
      'A standard for 27001-bit encryption.',
      'An ISO standard for hardware manufacturing.'
    ],
    correctAnswer: 'An international standard for information security management systems (ISMS).'
  },
  {
    id: 'cs-81',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "NIST Cybersecurity Framework"?',
    options: [
      'A framework for network installation standards.',
      'A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.',
      'A framework for new internet security technology.',
      'A national intelligence security test.'
    ],
    correctAnswer: 'A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity risk.'
  },
  {
    id: 'cs-82',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "Data Retention Policy"?',
    options: [
      'A policy to retain all data forever.',
      'Guidelines determining how long data should be stored and when it should be deleted for compliance and operational needs.',
      'A policy to retain data in memory only.',
      'A method to retain data encryption keys.'
    ],
    correctAnswer: 'Guidelines determining how long data should be stored and when it should be deleted for compliance and operational needs.'
  },
  {
    id: 'cs-83',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "Right to be Forgotten" in data privacy?',
    options: [
      'The right to forget passwords.',
      'The right to have personal data deleted from systems when it is no longer necessary.',
      'The right to forget security incidents.',
      'The right to be forgotten by colleagues.'
    ],
    correctAnswer: 'The right to have personal data deleted from systems when it is no longer necessary.'
  },
  {
    id: 'cs-84',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "Breach Notification Requirement"?',
    options: [
      'Notifying users when a dam breaches.',
      'Legal obligation to notify affected individuals and authorities when a data breach occurs.',
      'Notifying IT when a firewall is breached.',
      'A requirement to breach systems for testing.'
    ],
    correctAnswer: 'Legal obligation to notify affected individuals and authorities when a data breach occurs.'
  },
  {
    id: 'cs-85',
    type: 'mcq',
    category: 'Compliance',
    text: 'What is "Third-Party Risk Management" (TPRM)?',
    options: [
      'Managing risks from third-party software only.',
      'Identifying and controlling risks presented to company data, operations, and finances by parties other than the company.',
      'Risk management for third-world countries.',
      'Managing the third party in a dispute.'
    ],
    correctAnswer: 'Identifying and controlling risks presented to company data, operations, and finances by parties other than the company.'
  },

  // ==================== DEVSECOPS & SECURITY TESTING (Questions 86-93) ====================
  {
    id: 'cs-86',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "SAST" (Static Application Security Testing)?',
    options: [
      'Security testing on static websites only.',
      'Analyzing source code for security vulnerabilities without executing the program.',
      'Testing that does not change over time.',
      'Static analysis of security tools.'
    ],
    correctAnswer: 'Analyzing source code for security vulnerabilities without executing the program.'
  },
  {
    id: 'cs-87',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "DAST" (Dynamic Application Security Testing)?',
    options: [
      'Testing that changes dynamically.',
      'Testing running applications from the outside to find security vulnerabilities during runtime.',
      'Dynamic allocation of security tokens.',
      'Testing static code with dynamic inputs.'
    ],
    correctAnswer: 'Testing running applications from the outside to find security vulnerabilities during runtime.'
  },
  {
    id: 'cs-88',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "IAST" (Interactive Application Security Testing)?',
    options: [
      'Interactive user interface testing.',
      'Combining elements of SAST and DAST by analyzing code from within the application during runtime.',
      'Interactive authentication security testing.',
      'Testing that interacts with users.'
    ],
    correctAnswer: 'Combining elements of SAST and DAST by analyzing code from within the application during runtime.'
  },
  {
    id: 'cs-89',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "Dependency Scanning" in DevSecOps?',
    options: [
      'Scanning for dependent servers.',
      'Identifying known vulnerabilities in third-party libraries and components used by an application.',
      'Scanning network dependencies.',
      'Testing dependencies between departments.'
    ],
    correctAnswer: 'Identifying known vulnerabilities in third-party libraries and components used by an application.'
  },
  {
    id: 'cs-90',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "Infrastructure as Code" (IaC) security concern?',
    options: [
      'Writing secure source code only.',
      'Security misconfigurations in automated infrastructure templates can propagate at scale.',
      'Code that builds physical infrastructure.',
      'Security of code repositories only.'
    ],
    correctAnswer: 'Security misconfigurations in automated infrastructure templates can propagate at scale.'
  },
  {
    id: 'cs-91',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "Container Image Scanning"?',
    options: [
      'Scanning shipping containers at ports.',
      'Analyzing container images for vulnerabilities, misconfigurations, and malware before deployment.',
      'Scanning images within containers.',
      'Visual scanning of container contents.'
    ],
    correctAnswer: 'Analyzing container images for vulnerabilities, misconfigurations, and malware before deployment.'
  },
  {
    id: 'cs-92',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "Penetration Testing"?',
    options: [
      'Testing pen durability.',
      'Authorized simulated cyberattack on a system to evaluate security posture and identify vulnerabilities.',
      'Testing network penetration speeds.',
      'Testing physical penetration of facilities.'
    ],
    correctAnswer: 'Authorized simulated cyberattack on a system to evaluate security posture and identify vulnerabilities.'
  },
  {
    id: 'cs-93',
    type: 'mcq',
    category: 'DevSecOps',
    text: 'What is "Red Team vs Blue Team" exercises?',
    options: [
      'Sports competitions between security teams.',
      'Red Team simulates attacks; Blue Team defends, to test organizational security capabilities.',
      'Team building exercises with color codes.',
      'Testing network speed with red and blue cables.'
    ],
    correctAnswer: 'Red Team simulates attacks; Blue Team defends, to test organizational security capabilities.'
  },

  // ==================== EXPLOIT DEVELOPMENT & REVERSE ENGINEERING (Questions 94-100) ====================
  {
    id: 'cs-94',
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
    id: 'cs-95',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "Buffer Overflow" vulnerability?',
    options: [
      'A buffer that overflows with data.',
      'Writing data beyond the allocated buffer boundary to overwrite adjacent memory, potentially hijacking execution flow.',
      'Overflowing network buffers to cause DoS.',
      'A buffer that is too large for memory.'
    ],
    correctAnswer: 'Writing data beyond the allocated buffer boundary to overwrite adjacent memory, potentially hijacking execution flow.'
  },
  {
    id: 'cs-96',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "ASLR" (Address Space Layout Randomization)?',
    options: [
      'A method to layout addresses sequentially.',
      'Security technique that randomizes memory locations to prevent exploitation of memory corruption vulnerabilities.',
      'A layout algorithm for address books.',
      'Randomization of IP addresses.'
    ],
    correctAnswer: 'Security technique that randomizes memory locations to prevent exploitation of memory corruption vulnerabilities.'
  },
  {
    id: 'cs-97',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "DEP" (Data Execution Prevention) or "NX" (No-Execute)?',
    options: [
      'Preventing data from being encrypted.',
      'Marking memory regions as non-executable to prevent code execution from data segments.',
      'Preventing data exfiltration.',
      'A method to deprecate old data.'
    ],
    correctAnswer: 'Marking memory regions as non-executable to prevent code execution from data segments.'
  },
  {
    id: 'cs-98',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "Shellcode"?',
    options: [
      'Code written in shell scripting languages.',
      'Small piece of code used as the payload in the exploitation of a software vulnerability to spawn a shell.',
      'Code that runs in the system shell.',
      'A shell for writing exploit code.'
    ],
    correctAnswer: 'Small piece of code used as the payload in the exploitation of a software vulnerability to spawn a shell.'
  },
  {
    id: 'cs-99',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "Fuzzing" (Fuzz Testing)?',
    options: [
      'Testing that makes software fuzzy and unclear.',
      'Automated testing technique that provides invalid, unexpected, or random data as inputs to find vulnerabilities.',
      'Testing with fuzzy logic algorithms.',
      'A method to fuzz out security boundaries.'
    ],
    correctAnswer: 'Automated testing technique that provides invalid, unexpected, or random data as inputs to find vulnerabilities.'
  },
  {
    id: 'cs-100',
    type: 'mcq',
    category: 'Exploit Development',
    text: 'What is "Use-After-Free" vulnerability?',
    options: [
      'Using free software after the trial period.',
      'Accessing memory after it has been freed, leading to undefined behavior and potential code execution.',
      'Freeing memory after use.',
      'Using free cloud resources after quota.'
    ],
    correctAnswer: 'Accessing memory after it has been freed, leading to undefined behavior and potential code execution.'
  }
];