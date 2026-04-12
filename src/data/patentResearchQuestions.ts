import { Question } from '../types';

export const PATENT_RESEARCH_QUESTIONS: Question[] = [
  // ==================== PATENT LAW & DOCTRINE (Questions 1-12) ====================
  {
    id: 'pr-1',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is the "Doctrine of Equivalents" in patent infringement cases?',
    options: [
      'A rule that states all patents are equal in value.',
      'A legal rule that allows a court to find infringement if the accused product performs substantially the same function in substantially the same way to achieve the same result.',
      'A requirement that all patent applications must be filed in English.',
      'A method for calculating the damages in a patent lawsuit.'
    ],
    correctAnswer: 'A legal rule that allows a court to find infringement if the accused product performs substantially the same function in substantially the same way to achieve the same result.',
    difficulty: 'expert',
    explanation: 'Doctrine of Equivalents prevents trivial design-arounds; limited by prosecution history estoppel and all-elements rule (Warner-Jenkinson v. Hilton Davis).'
  },
  {
    id: 'pr-2',
    type: 'mcq',
    category: 'Patent Strategy',
    text: 'What is a "Patent Thicket" and how does it impact innovation?',
    options: [
      'A dense forest where patent offices are located.',
      'A dense web of overlapping intellectual property rights that requires innovators to seek licenses from multiple patentees, potentially stifling innovation.',
      'A type of software used for patent searching.',
      'A collection of patents owned by a single individual.'
    ],
    correctAnswer: 'A dense web of overlapping intellectual property rights that requires innovators to seek licenses from multiple patentees, potentially stifling innovation.',
    difficulty: 'advanced',
    explanation: 'Patent thickets increase transaction costs and hold-up risk; common in semiconductors, biotech, and smartphones; addressed via patent pools or cross-licensing.'
  },
  {
    id: 'pr-3',
    type: 'mcq',
    category: 'Advanced Research',
    text: 'What is the "H-index" and what are its primary limitations as a metric for research impact?',
    options: [
      'It measures the height of a researcher.',
      'It measures both the productivity and citation impact of a researcher, but it can be biased by field-specific citation patterns and career length.',
      'It is a measure of how many patents a researcher has filed.',
      'It is a metric for the speed of the peer-review process.'
    ],
    correctAnswer: 'It measures both the productivity and citation impact of a researcher, but it can be biased by field-specific citation patterns and career length.',
    difficulty: 'advanced',
    explanation: 'H-index = h papers with ≥h citations each; limitations: field normalization, self-citations, career stage bias; complement with FWCI or Altmetrics.'
  },
  {
    id: 'pr-4',
    type: 'mcq',
    category: 'IP Management',
    text: 'What is the role of the "Patent Cooperation Treaty" (PCT) in the international patent filing process?',
    options: [
      'It grants a single "world patent" that is valid in all countries.',
      'It provides a unified procedure for filing patent applications to protect inventions in each of its contracting states, delaying the cost of national filings.',
      'It is a treaty that bans the patenting of software.',
      'It is a database of all international patent attorneys.'
    ],
    correctAnswer: 'It provides a unified procedure for filing patent applications to protect inventions in each of its contracting states, delaying the cost of national filings.',
    difficulty: 'advanced',
    explanation: 'PCT provides international search report and preliminary examination; national phase entry typically at 30/31 months from priority date.'
  },
  {
    id: 'pr-5',
    type: 'mcq',
    category: 'Scientific Methodology',
    text: 'What is "Publication Bias" (the File Drawer Problem) and how does it affect meta-analyses?',
    options: [
      'A bias towards publishing in expensive journals.',
      'The tendency of researchers and journals to publish positive results more frequently than negative or null results, leading to an overestimation of effect sizes.',
      'A bias against researchers from certain countries.',
      'The difficulty of finding old research papers in physical libraries.'
    ],
    correctAnswer: 'The tendency of researchers and journals to publish positive results more frequently than negative or null results, leading to an overestimation of effect sizes.',
    difficulty: 'expert',
    explanation: 'Publication bias distorts evidence synthesis; detected via funnel plots, Egger\'s test; mitigated by pre-registration and publishing negative results.'
  },
  {
    id: 'pr-6',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is "Prosecution History Estoppel" in patent law?',
    options: [
      'A rule preventing patent examiners from changing their decisions.',
      'A doctrine that limits the Doctrine of Equivalents by preventing patentees from recapturing subject matter surrendered during prosecution.',
      'A requirement to estop all prior art references.',
      'A method for estimating patent prosecution timelines.'
    ],
    correctAnswer: 'A doctrine that limits the Doctrine of Equivalents by preventing patentees from recapturing subject matter surrendered during prosecution.',
    difficulty: 'expert',
    explanation: 'Prosecution history estoppel arises from amendments made for patentability; creates presumption of surrender unless amendment was tangential (Festo Corp. v. Shoketsu).'
  },
  {
    id: 'pr-7',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is the "On-Sale Bar" under 35 U.S.C. § 102?',
    options: [
      'A rule that bars sales of patented products.',
      'A provision that invalidates a patent if the invention was offered for sale more than one year before the filing date.',
      'A bar on selling patent applications to competitors.',
      'A requirement to sell patents at public auction.'
    ],
    correctAnswer: 'A provision that invalidates a patent if the invention was offered for sale more than one year before the filing date.',
    difficulty: 'advanced',
    explanation: 'On-sale bar applies if invention was ready for patenting and commercially offered; critical for startups to file before commercialization (Pfaff v. Wells Electronics).'
  },
  {
    id: 'pr-8',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is "Obviousness-Type Double Patenting" (ODP)?',
    options: [
      'Filing two identical patents for the same invention.',
      'A rejection preventing a patentee from obtaining a second patent that is obvious over a first patent, unless a terminal disclaimer is filed.',
      'A method for doubling patent term extensions.',
      'A type of patent infringement involving two patents.'
    ],
    correctAnswer: 'A rejection preventing a patentee from obtaining a second patent that is obvious over a first patent, unless a terminal disclaimer is filed.',
    difficulty: 'expert',
    explanation: 'ODP prevents unjustified term extension; terminal disclaimer ties expiration dates of related patents; distinct from statutory double patenting.'
  },
  {
    id: 'pr-9',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is the "Written Description Requirement" under 35 U.S.C. § 112?',
    options: [
      'A requirement that patents must be written in English.',
      'A requirement that the specification must convey with reasonable clarity that the inventor possessed the claimed invention at the time of filing.',
      'A rule requiring patents to describe prior art in detail.',
      'A requirement for handwritten patent applications.'
    ],
    correctAnswer: 'A requirement that the specification must convey with reasonable clarity that the inventor possessed the claimed invention at the time of filing.',
    difficulty: 'advanced',
    explanation: 'Written description ensures claims are supported by disclosure; separate from enablement; critical for genus claims and biotechnology patents (Ariad v. Eli Lilly).'
  },
  {
    id: 'pr-10',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is "Patent Term Adjustment" (PTA) in the USPTO?',
    options: [
      'Adjusting patent claims during prosecution.',
      'Compensation for USPTO delays in examination that extend beyond statutory timeframes, adding days to the patent term.',
      'A method to adjust patent royalties over time.',
      'Adjusting the filing date of a patent application.'
    ],
    correctAnswer: 'Compensation for USPTO delays in examination that extend beyond statutory timeframes, adding days to the patent term.',
    difficulty: 'advanced',
    explanation: 'PTA adds days for USPTO delays (A, B, C delays) minus applicant delays; calculated automatically; distinct from Patent Term Extension for regulatory review.'
  },
  {
    id: 'pr-11',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is the "First Inventor to File" system under the America Invents Act (AIA)?',
    options: [
      'A system where the first person to invent automatically gets the patent.',
      'A system awarding patents to the first applicant to file, with limited derivation proceedings to address theft of invention.',
      'A filing system that prioritizes inventors from first-world countries.',
      'A method to file patents in first-class mail only.'
    ],
    correctAnswer: 'A system awarding patents to the first applicant to file, with limited derivation proceedings to address theft of invention.',
    difficulty: 'advanced',
    explanation: 'AIA shifted US from first-to-invent to first-inventor-to-file (March 2013); aligns with global systems; derivation proceedings replace interference proceedings.'
  },
  {
    id: 'pr-12',
    type: 'mcq',
    category: 'Patent Law',
    text: 'What is "Patent Eligibility" under 35 U.S.C. § 101 after Alice Corp. v. CLS Bank?',
    options: [
      'All inventions are eligible for patents.',
      'A two-step test: (1) Is the claim directed to a judicial exception (law of nature, natural phenomenon, abstract idea)? (2) Does it contain an inventive concept transforming the exception?',
      'Only mechanical inventions are eligible.',
      'Eligibility is determined solely by the USPTO Director.'
    ],
    correctAnswer: 'A two-step test: (1) Is the claim directed to a judicial exception (law of nature, natural phenomenon, abstract idea)? (2) Does it contain an inventive concept transforming the exception?',
    difficulty: 'expert',
    explanation: 'Alice/Mayo framework significantly impacts software, biotech, and diagnostic patents; claims must add significantly more than the abstract idea itself.'
  },

  // ==================== PATENT DRAFTING & CLAIMS (Questions 13-24) ====================
  {
    id: 'pr-13',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Means-Plus-Function" claiming under 35 U.S.C. § 112(f)?',
    options: [
      'A method for calculating patent damages.',
      'A claim format where an element is defined by its function rather than structure, interpreted to cover corresponding structure in the specification and equivalents.',
      'A requirement to mean exactly what is claimed.',
      'A function for adding means to patent claims.'
    ],
    correctAnswer: 'A claim format where an element is defined by its function rather than structure, interpreted to cover corresponding structure in the specification and equivalents.',
    difficulty: 'expert',
    explanation: 'Means-plus-function claims are narrowly construed; require explicit structure in specification; avoid unintended narrow scope or indefiniteness rejections.'
  },
  {
    id: 'pr-14',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is the purpose of "Dependent Claims" in a patent application?',
    options: [
      'To make claims dependent on the inventor\'s employment status.',
      'To narrow the scope of independent claims, providing fallback positions during prosecution and litigation.',
      'To claim dependencies between software modules.',
      'To reduce patent filing fees.'
    ],
    correctAnswer: 'To narrow the scope of independent claims, providing fallback positions during prosecution and litigation.',
    difficulty: 'advanced',
    explanation: 'Dependent claims add limitations to independent claims; create layered protection; enable validity challenges to be overcome by narrower claims.'
  },
  {
    id: 'pr-15',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Claim Differentiation" in patent interpretation?',
    options: [
      'A method to differentiate between patent claims and trademarks.',
      'A presumption that each claim in a patent has a different scope, preventing claims from being interpreted identically.',
      'A requirement to differentiate claims by color coding.',
      'A technique for differentiating prior art from claims.'
    ],
    correctAnswer: 'A presumption that each claim in a patent has a different scope, preventing claims from being interpreted identically.',
    difficulty: 'advanced',
    explanation: 'Claim differentiation aids claim construction; if dependent claim adds limitation, independent claim presumed broader; rebuttable by specification or prosecution history.'
  },
  {
    id: 'pr-16',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Markush Group" claiming in chemical patents?',
    options: [
      'A group of inventors named Markush.',
      'A claim format listing alternative species or subgroups within a single claim, commonly used in chemistry and biotechnology.',
      'A trademark for chemical compounds.',
      'A method for marking chemical structures.'
    ],
    correctAnswer: 'A claim format listing alternative species or subgroups within a single claim, commonly used in chemistry and biotechnology.',
    difficulty: 'expert',
    explanation: 'Markush claims use "selected from the group consisting of A, B, and C"; subject to unity of invention and enablement requirements; critical for pharmaceutical patents.'
  },
  {
    id: 'pr-17',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Enablement" requirement under 35 U.S.C. § 112(a)?',
    options: [
      'Enabling the patent to be enforced in court.',
      'The specification must teach a person skilled in the art how to make and use the invention without undue experimentation.',
      'A requirement to enable electronic filing of patents.',
      'Enabling multiple inventors to sign the application.'
    ],
    correctAnswer: 'The specification must teach a person skilled in the art how to make and use the invention without undue experimentation.',
    difficulty: 'advanced',
    explanation: 'Enablement assessed by Wands factors (breadth of claims, nature of invention, state of prior art, level of predictability, amount of guidance, working examples, quantity of experimentation).'
  },
  {
    id: 'pr-18',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Best Mode" requirement and its current status in US patent law?',
    options: [
      'A requirement to file the best patent application first.',
      'Historically required disclosure of the inventor\'s preferred embodiment; eliminated as a validity defense by the AIA but still required in application filing.',
      'A mode for selecting the best claims.',
      'A requirement to use the best available prior art.'
    ],
    correctAnswer: 'Historically required disclosure of the inventor\'s preferred embodiment; eliminated as a validity defense by the AIA but still required in application filing.',
    difficulty: 'expert',
    explanation: 'Best mode still required under § 112(a) for filing; failure no longer invalidates issued patent or renders it unenforceable post-AIA (September 2012).'
  },
  {
    id: 'pr-19',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Claim Construction" (Markman Hearing) in patent litigation?',
    options: [
      'The physical construction of patent models.',
      'A judicial proceeding where the court interprets the meaning and scope of patent claims, often determining the outcome of infringement cases.',
      'A method for constructing claim charts.',
      'A hearing to construct new patent claims during litigation.'
    ],
    correctAnswer: 'A judicial proceeding where the court interprets the meaning and scope of patent claims, often determining the outcome of infringement cases.',
    difficulty: 'advanced',
    explanation: 'Markman hearings use intrinsic evidence (claims, specification, prosecution history) and sometimes extrinsic evidence (expert testimony, dictionaries); claim construction is a matter of law.'
  },
  {
    id: 'pr-20',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is " Jepson Claim" format in patent drafting?',
    options: [
      'A claim named after inventor Jepson.',
      'A claim format with preamble stating prior art and body stating the improvement: "In [prior art], the improvement comprising..."',
      'A claim for Japanese patent applications only.',
      'A method for claiming genetic sequences.'
    ],
    correctAnswer: 'A claim format with preamble stating prior art and body stating the improvement: "In [prior art], the improvement comprising..."',
    difficulty: 'expert',
    explanation: 'Jepson claims (37 CFR 1.75(e)) admit preamble elements as prior art; useful for improvement inventions; body elements are the novel contribution.'
  },
  {
    id: 'pr-21',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Continuation-in-Part" (CIP) application?',
    options: [
      'A continuation of a patent application with no new matter.',
      'An application adding new subject matter not disclosed in the parent, with mixed priority dates for old and new claims.',
      'A part of a continuation application.',
      'A method for continuing patent prosecution in part-time.'
    ],
    correctAnswer: 'An application adding new subject matter not disclosed in the parent, with mixed priority dates for old and new claims.',
    difficulty: 'advanced',
    explanation: 'CIP claims to parent disclosure get parent\'s priority date; new matter claims get CIP filing date; useful for incremental improvements during prosecution.'
  },
  {
    id: 'pr-22',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Claim Chart" in patent infringement analysis?',
    options: [
      'A chart showing patent claim filing dates.',
      'A side-by-side mapping of claim elements to accused product features, used to demonstrate literal infringement or doctrine of equivalents.',
      'A graphical representation of claim scope.',
      'A chart for tracking claim amendments.'
    ],
    correctAnswer: 'A side-by-side mapping of claim elements to accused product features, used to demonstrate literal infringement or doctrine of equivalents.',
    difficulty: 'advanced',
    explanation: 'Claim charts are essential for infringement opinions, litigation pleadings, and ITC complaints; each claim element must be mapped to corresponding feature.'
  },
  {
    id: 'pr-23',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Antecedent Basis" requirement in patent claims?',
    options: [
      'A basis for antedating prior art.',
      'The requirement that claim terms introduced with "a" or "an" must be properly introduced before being referenced with "the" or "said".',
      'A basis for claiming ancient inventions.',
      'A requirement for antecedent inventors to sign applications.'
    ],
    correctAnswer: 'The requirement that claim terms introduced with "a" or "an" must be properly introduced before being referenced with "the" or "said".',
    difficulty: 'advanced',
    explanation: 'Antecedent basis ensures claim clarity; lack of basis can trigger indefiniteness rejection under § 112(b); critical for claim drafting precision.'
  },
  {
    id: 'pr-24',
    type: 'mcq',
    category: 'Patent Drafting',
    text: 'What is "Functional Claiming" and its risks under § 112?',
    options: [
      'Claiming only the function of an invention without structure.',
      'Defining claim elements by what they do rather than what they are; risks indefiniteness if specification lacks sufficient corresponding structure.',
      'Claiming functions of software only.',
      'A method for claiming functional foods.'
    ],
    correctAnswer: 'Defining claim elements by what they do rather than what they are; risks indefiniteness if specification lacks sufficient corresponding structure.',
    difficulty: 'expert',
    explanation: 'Functional language permissible if supported by structure in specification; pure functional claiming without structure may be indefinite (Williamson v. Citrix).'
  },

  // ==================== PRIOR ART SEARCH STRATEGIES (Questions 25-36) ====================
  {
    id: 'pr-25',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Boolean Search" in patent databases?',
    options: [
      'A search using only true/false logic.',
      'A search technique using operators (AND, OR, NOT, proximity) to combine keywords, classifications, and fields for precise prior art retrieval.',
      'A search method invented by George Boolean.',
      'A search limited to Boolean algebra patents.'
    ],
    correctAnswer: 'A search technique using operators (AND, OR, NOT, proximity) to combine keywords, classifications, and fields for precise prior art retrieval.',
    difficulty: 'advanced',
    explanation: 'Boolean searching in Derwent, Espacenet, USPTO enables targeted queries; combine CPC/IPC codes with keywords, truncation, and field codes for comprehensive results.'
  },
  {
    id: 'pr-26',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Semantic Search" in patent analytics platforms?',
    options: [
      'Searching for the meaning of patent terms.',
      'Using natural language processing and vector embeddings to find conceptually similar documents beyond keyword matching.',
      'A search for semantic web patents only.',
      'Searching patents by their semantic importance.'
    ],
    correctAnswer: 'Using natural language processing and vector embeddings to find conceptually similar documents beyond keyword matching.',
    difficulty: 'expert',
    explanation: 'Semantic search (PatSeer, Innography, PatSnap) uses word embeddings and similarity algorithms; effective for finding non-obvious prior art with different terminology.'
  },
  {
    id: 'pr-27',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Citation Searching" (Forward/Backward) in prior art analysis?',
    options: [
      'Searching for citations in academic papers only.',
      'Backward: finding references cited by a patent; Forward: finding patents that cite a patent; both essential for comprehensive prior art and landscape analysis.',
      'A method to cite patents in legal briefs.',
      'Searching for citation counts of patents.'
    ],
    correctAnswer: 'Backward: finding references cited by a patent; Forward: finding patents that cite a patent; both essential for comprehensive prior art and landscape analysis.',
    difficulty: 'advanced',
    explanation: 'Backward citation searching identifies foundational prior art; forward citations reveal technological impact and evolving art; use Google Patents, Lens.org, or commercial tools.'
  },
  {
    id: 'pr-28',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Classification Searching" using CPC/IPC codes?',
    options: [
      'Searching patents by their classification as prior art or not.',
      'Using Cooperative Patent Classification or International Patent Classification codes to find patents in specific technical fields regardless of keyword terminology.',
      'A method to classify search results by relevance.',
      'Searching for classification algorithms in patents.'
    ],
    correctAnswer: 'Using Cooperative Patent Classification or International Patent Classification codes to find patents in specific technical fields regardless of keyword terminology.',
    difficulty: 'advanced',
    explanation: 'CPC/IPC codes provide hierarchical technical categorization; essential for finding prior art using different terminology; combine with keywords for precision.'
  },
  {
    id: 'pr-29',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Non-Patent Literature" (NPL) searching and why is it critical?',
    options: [
      'Searching literature that is not patentable.',
      'Searching scientific papers, conference proceedings, theses, and technical reports that may constitute prior art under § 102.',
      'A search for literature about non-patents.',
      'Searching for non-literary patents.'
    ],
    correctAnswer: 'Searching scientific papers, conference proceedings, theses, and technical reports that may constitute prior art under § 102.',
    difficulty: 'advanced',
    explanation: 'NPL is critical for software, biotech, and academic inventions; use Google Scholar, IEEE Xplore, PubMed; examiners frequently cite NPL in rejections.'
  },
  {
    id: 'pr-30',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Prior Art Date" determination under pre-AIA vs. AIA § 102?',
    options: [
      'The date when prior art was first discovered.',
      'Pre-AIA: invention date or publication date; AIA: filing date or public disclosure date; critical for novelty and obviousness analysis.',
      'The date when a patent application is filed.',
      'The expiration date of prior art patents.'
    ],
    correctAnswer: 'Pre-AIA: invention date or publication date; AIA: filing date or public disclosure date; critical for novelty and obviousness analysis.',
    difficulty: 'expert',
    explanation: 'AIA § 102 (first-inventor-to-file) uses effective filing date; pre-AIA used invention date with diligence; grace period differs (1-year US vs. absolute novelty in many jurisdictions).'
  },
  {
    id: 'pr-31',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Inventive Step" (Non-Obviousness) analysis under Graham v. John Deere?',
    options: [
      'A step-by-step guide for inventors.',
      'A four-factor test: (1) scope/content of prior art, (2) differences from prior art, (3) level of ordinary skill, (4) secondary considerations (commercial success, long-felt need, etc.).',
      'A method for stepping through patent claims.',
      'An analysis of Graham crackers patent.'
    ],
    correctAnswer: 'A four-factor test: (1) scope/content of prior art, (2) differences from prior art, (3) level of ordinary skill, (4) secondary considerations (commercial success, long-felt need, etc.).',
    difficulty: 'expert',
    explanation: 'Graham framework guides obviousness rejections; secondary considerations (objective indicia) can rebut prima facie obviousness; KSR added "common sense" and predictable combinations.'
  },
  {
    id: 'pr-32',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Teaching-Suggestion-Motivation" (TSM) test post-KSR?',
    options: [
      'A test for teaching patents to students.',
      'A framework for obviousness requiring explicit teaching, suggestion, or motivation to combine prior art references; relaxed by KSR to include common sense and predictable results.',
      'A method for suggesting patent claims.',
      'A motivation test for patent examiners.'
    ],
    correctAnswer: 'A framework for obviousness requiring explicit teaching, suggestion, or motivation to combine prior art references; relaxed by KSR to include common sense and predictable results.',
    difficulty: 'expert',
    explanation: 'Pre-KSR, TSM required explicit motivation; KSR v. Teleflex (2007) allowed implicit motivation, common sense, and predictable combinations; increased obviousness rejections.'
  },
  {
    id: 'pr-33',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Prior Art Burden" in inter partes review (IPR)?',
    options: [
      'The burden of proving prior art is old.',
      'The petitioner\'s burden to prove unpatentability by preponderance of evidence using prior art patents or printed publications.',
      'A burden on prior art searchers.',
      'The burden of filing prior art references.'
    ],
    correctAnswer: 'The petitioner\'s burden to prove unpatentability by preponderance of evidence using prior art patents or printed publications.',
    difficulty: 'expert',
    explanation: 'IPR at PTAB requires petitioners to show >50% likelihood of prevailing; limited to § 102/103 challenges using patents/printed publications; estoppel applies to later litigation.'
  },
  {
    id: 'pr-34',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Prior Art Search Report" in PCT international applications?',
    options: [
      'A report on searching for prior art in PCT countries.',
      'An International Search Report (ISR) prepared by an ISA identifying potentially relevant prior art and providing written opinion on patentability.',
      'A report required before filing a PCT application.',
      'A search report for prior art in prior PCT applications.'
    ],
    correctAnswer: 'An International Search Report (ISR) prepared by an ISA identifying potentially relevant prior art and providing written opinion on patentability.',
    difficulty: 'advanced',
    explanation: 'ISR issued ~16 months from priority; includes X/Y/A category citations; written opinion guides national phase decisions; can be supplemented by supplementary international search.'
  },
  {
    id: 'pr-35',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Patent Family" searching and why is it important?',
    options: [
      'Searching for patents filed by family members.',
      'Identifying related applications across jurisdictions claiming priority to the same invention; essential for global freedom-to-operate and landscape analysis.',
      'A search for family-owned patents.',
      'Searching patents by inventor family names.'
    ],
    correctAnswer: 'Identifying related applications across jurisdictions claiming priority to the same invention; essential for global freedom-to-operate and landscape analysis.',
    difficulty: 'advanced',
    explanation: 'Patent families (INPADOC, Derwent) link applications via priority claims; critical for assessing global coverage, avoiding double patenting, and FTO in multiple markets.'
  },
  {
    id: 'pr-36',
    type: 'mcq',
    category: 'Prior Art Search',
    text: 'What is "Freedom-to-Operate" (FTO) analysis?',
    options: [
      'A guarantee of freedom to operate any business.',
      'A legal opinion assessing whether a product/process can be commercialized without infringing valid, in-force patents in target jurisdictions.',
      'A search for operating system patents.',
      'A method to operate freely without patents.'
    ],
    correctAnswer: 'A legal opinion assessing whether a product/process can be commercialized without infringing valid, in-force patents in target jurisdictions.',
    difficulty: 'expert',
    explanation: 'FTO requires claim charting against in-force patents in commercialization countries; distinct from patentability search; often includes design-around recommendations.'
  },

  // ==================== IP VALUATION METHODS (Questions 37-48) ====================
  {
    id: 'pr-37',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is the "Income Approach" to patent valuation?',
    options: [
      'Valuing patents based on inventor income.',
      'Estimating value based on projected future cash flows attributable to the patent, discounted to present value using risk-adjusted rates.',
      'A method to calculate patent filing income.',
      'Valuing patents by their annual maintenance fees.'
    ],
    correctAnswer: 'Estimating value based on projected future cash flows attributable to the patent, discounted to present value using risk-adjusted rates.',
    difficulty: 'advanced',
    explanation: 'Income approach uses DCF, relief-from-royalty, or excess earnings methods; requires estimating patent life, market share, royalty rates, and discount rates (WACC + risk premium).'
  },
  {
    id: 'pr-38',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is the "Market Approach" to IP valuation?',
    options: [
      'Valuing patents based on market trends only.',
      'Estimating value by comparing to recent transactions of comparable patents or licenses, adjusting for differences in scope, field, and geography.',
      'A method to sell patents in the open market.',
      'Valuing patents by their market capitalization.'
    ],
    correctAnswer: 'Estimating value by comparing to recent transactions of comparable patents or licenses, adjusting for differences in scope, field, and geography.',
    difficulty: 'advanced',
    explanation: 'Market approach uses comparable licenses or sales; challenging due to lack of transparent transaction data; requires adjustments for exclusivity, territory, field-of-use.'
  },
  {
    id: 'pr-39',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is the "Cost Approach" to patent valuation?',
    options: [
      'Valuing patents by their filing cost only.',
      'Estimating value based on the cost to recreate or replace the patented technology, including R&D expenses, filing costs, and opportunity costs.',
      'A method to calculate the cost of patent litigation.',
      'Valuing patents by their maintenance fee costs.'
    ],
    correctAnswer: 'Estimating value based on the cost to recreate or replace the patented technology, including R&D expenses, filing costs, and opportunity costs.',
    difficulty: 'advanced',
    explanation: 'Cost approach uses reproduction or replacement cost; often sets a floor value; less reflective of market value for high-impact patents but useful for early-stage or defensive portfolios.'
  },
  {
    id: 'pr-40',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "Relief-from-Royalty" method in IP valuation?',
    options: [
      'A method to avoid paying royalties.',
      'A valuation technique estimating the present value of royalty payments saved by owning the patent rather than licensing it.',
      'A royalty relief program for inventors.',
      'A method to calculate royalty rates for relief organizations.'
    ],
    correctAnswer: 'A valuation technique estimating the present value of royalty payments saved by owning the patent rather than licensing it.',
    difficulty: 'expert',
    explanation: 'Relief-from-royalty: Value = Σ [Revenue_t × RoyaltyRate × (1-Tax)] / (1+DiscountRate)^t; requires estimating hypothetical royalty rate via comparable licenses or industry benchmarks.'
  },
  {
    id: 'pr-41',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "25% Rule" in royalty rate determination?',
    options: [
      'A rule that 25% of patents are valuable.',
      'A heuristic suggesting licensee pays ~25% of expected profits as royalty; largely discredited post-Uniloc but still referenced in negotiations.',
      'A rule limiting royalties to 25% of revenue.',
      'A method to calculate 25-year patent terms.'
    ],
    correctAnswer: 'A heuristic suggesting licensee pays ~25% of expected profits as royalty; largely discredited post-Uniloc but still referenced in negotiations.',
    difficulty: 'expert',
    explanation: '25% rule (licensee keeps 75% of profits) rejected in Uniloc v. Microsoft (Fed. Cir. 2011) as unreliable; modern valuation uses Georgia-Pacific factors and economic analysis.'
  },
  {
    id: 'pr-42',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What are "Georgia-Pacific Factors" in reasonable royalty analysis?',
    options: [
      'Factors related to patent filing in Georgia and Pacific regions.',
      'Fifteen factors from Georgia-Pacific v. U.S. Plywood used by courts to determine reasonable royalty damages in patent infringement cases.',
      'A method for calculating patent geography.',
      'Factors for Pacific island patent filings.'
    ],
    correctAnswer: 'Fifteen factors from Georgia-Pacific v. U.S. Plywood used by courts to determine reasonable royalty damages in patent infringement cases.',
    difficulty: 'expert',
    explanation: 'Georgia-Pacific factors include: existing licenses, royalty rates in industry, nature/scope of use, commercial relationship, expert testimony; form basis for damages expert reports.'
  },
  {
    id: 'pr-43',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "Patent Strength Scoring" in portfolio valuation?',
    options: [
      'Scoring patents by their physical strength.',
      'Quantitative assessment of patent quality using metrics like citation count, family size, claim breadth, litigation history, and technical relevance.',
      'A method to score patent applications by examiners.',
      'Scoring patents for strength training.'
    ],
    correctAnswer: 'Quantitative assessment of patent quality using metrics like citation count, family size, claim breadth, litigation history, and technical relevance.',
    difficulty: 'advanced',
    explanation: 'Patent strength models (PatentSight, LexisNexis) combine bibliometric and legal metrics; used for M&A due diligence, licensing negotiations, and portfolio optimization.'
  },
  {
    id: 'pr-44',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "Technology Life Cycle" impact on patent valuation?',
    options: [
      'The cycle of filing, prosecuting, and maintaining patents.',
      'Patent value typically follows S-curve: low in emergence, peak in growth, decline in maturity/obsolescence; valuation must account for remaining economic life.',
      'A lifecycle for patent attorneys.',
      'The cycle of technology transfer processes.'
    ],
    correctAnswer: 'Patent value typically follows S-curve: low in emergence, peak in growth, decline in maturity/obsolescence; valuation must account for remaining economic life.',
    difficulty: 'advanced',
    explanation: 'Tech life cycle affects revenue projections and discount rates; fast-moving fields (software) have shorter economic life than pharma; valuation models incorporate obsolescence risk.'
  },
  {
    id: 'pr-45',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "Option Pricing" approach to patent valuation?',
    options: [
      'Valuing patents as stock options.',
      'Treating patents as real options: the right but not obligation to commercialize; valued using Black-Scholes or binomial models accounting for uncertainty and flexibility.',
      'A method to price patent filing options.',
      'Valuing patents by their option to be licensed.'
    ],
    correctAnswer: 'Treating patents as real options: the right but not obligation to commercialize; valued using Black-Scholes or binomial models accounting for uncertainty and flexibility.',
    difficulty: 'expert',
    explanation: 'Real options valuation captures value of deferral, expansion, or abandonment; useful for early-stage technologies with high uncertainty; requires estimating volatility and time to decision.'
  },
  {
    id: 'pr-46',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "Patent Box" tax regime and its valuation impact?',
    options: [
      'A box for storing patent documents.',
      'Tax incentives reducing corporate tax rates on income derived from patented inventions, increasing after-tax cash flows and patent value.',
      'A method to box in patent competitors.',
      'A tax on patent filing boxes.'
    ],
    correctAnswer: 'Tax incentives reducing corporate tax rates on income derived from patented inventions, increasing after-tax cash flows and patent value.',
    difficulty: 'advanced',
    explanation: 'Patent boxes (UK, Netherlands, Belgium) offer reduced tax rates (e.g., 10% vs. 25%) on IP income; increases DCF valuation; requires nexus between R&D and IP income per OECD BEPS rules.'
  },
  {
    id: 'pr-47',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "IP Due Diligence" in M&A transactions?',
    options: [
      'Diligent filing of IP applications.',
      'Comprehensive assessment of target\'s IP portfolio: validity, ownership, encumbrances, litigation risks, and alignment with business strategy.',
      'A method to diligently search for prior art.',
      'Diligence in paying IP maintenance fees.'
    ],
    correctAnswer: 'Comprehensive assessment of target\'s IP portfolio: validity, ownership, encumbrances, litigation risks, and alignment with business strategy.',
    difficulty: 'advanced',
    explanation: 'IP due diligence includes chain of title review, FTO analysis, pending litigation assessment, and valuation; critical for deal pricing, representations/warranties, and post-merger integration.'
  },
  {
    id: 'pr-48',
    type: 'mcq',
    category: 'IP Valuation',
    text: 'What is "FRAND" licensing and its valuation challenges?',
    options: [
      'A method to brand patents as FRAND.',
      'Fair, Reasonable, And Non-Discriminatory licensing commitments for standard-essential patents; valuation complicated by hold-up, hold-out, and determining FRAND rates.',
      'A brand name for patent valuation software.',
      'A method to franchise patent rights.'
    ],
    correctAnswer: 'Fair, Reasonable, And Non-Discriminatory licensing commitments for standard-essential patents; valuation complicated by hold-up, hold-out, and determining FRAND rates.',
    difficulty: 'expert',
    explanation: 'FRAND disputes (e.g., Huawei v. ZTE, Microsoft v. Motorola) involve complex valuation: top-down (aggregate royalty), comparable licenses, or ex ante value; courts increasingly set FRAND rates.'
  },

  // ==================== RESEARCH ETHICS & INTEGRITY (Questions 49-60) ====================
  {
    id: 'pr-49',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Research Misconduct" as defined by US federal policy?',
    options: [
      'Any error in research results.',
      'Fabrication, falsification, or plagiarism (FFP) in proposing, performing, or reviewing research, or in reporting results.',
      'Misconduct in research funding applications only.',
      'Ethical violations in animal research only.'
    ],
    correctAnswer: 'Fabrication, falsification, or plagiarism (FFP) in proposing, performing, or reviewing research, or in reporting results.',
    difficulty: 'advanced',
    explanation: 'Federal definition (42 CFR 50, 31 CFR 8) excludes honest error or differences of opinion; institutions must have policies and procedures for investigating allegations.'
  },
  {
    id: 'pr-50',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Authorship Criteria" per ICMJE guidelines?',
    options: [
      'Anyone who contributed to the research should be an author.',
      'Substantial contributions to conception/design, drafting/revising, final approval, and accountability for all aspects; all four criteria must be met.',
      'The person who writes the manuscript is the sole author.',
      'Authorship is determined by institutional hierarchy.'
    ],
    correctAnswer: 'Substantial contributions to conception/design, drafting/revising, final approval, and accountability for all aspects; all four criteria must be met.',
    difficulty: 'advanced',
    explanation: 'ICMJE criteria prevent gift/honorary authorship and ghostwriting; contributors not meeting criteria listed in acknowledgments; CRediT taxonomy provides more granular roles.'
  },
  {
    id: 'pr-51',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Conflict of Interest" (COI) disclosure in research?',
    options: [
      'A conflict between different research interests.',
      'Financial, personal, or professional relationships that could inappropriately influence research objectivity; must be disclosed to institutions, journals, and funders.',
      'A method to resolve conflicts in research teams.',
      'A conflict between patent and publication interests only.'
    ],
    correctAnswer: 'Financial, personal, or professional relationships that could inappropriately influence research objectivity; must be disclosed to institutions, journals, and funders.',
    difficulty: 'advanced',
    explanation: 'COI management includes disclosure, recusal, monitoring; not inherently unethical but non-disclosure undermines trust; journals require COI statements at submission.'
  },
  {
    id: 'pr-52',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Data Fabrication" vs. "Data Falsification"?',
    options: [
      'They are synonymous terms.',
      'Fabrication: making up data/results; Falsification: manipulating research materials, equipment, processes, or changing/omitting data/results.',
      'Fabrication is worse than falsification.',
      'Falsification is legal; fabrication is not.'
    ],
    correctAnswer: 'Fabrication: making up data/results; Falsification: manipulating research materials, equipment, processes, or changing/omitting data/results.',
    difficulty: 'advanced',
    explanation: 'Both are research misconduct; fabrication invents non-existent data; falsification distorts real data; detected via statistical forensics, replication, or whistleblower reports.'
  },
  {
    id: 'pr-53',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "IRB" (Institutional Review Board) approval required for?',
    options: [
      'All research projects regardless of subject.',
      'Research involving human subjects to ensure ethical treatment, informed consent, and risk minimization per Belmont Report principles.',
      'Patent applications involving human inventors.',
      'Review of research budgets only.'
    ],
    correctAnswer: 'Research involving human subjects to ensure ethical treatment, informed consent, and risk minimization per Belmont Report principles.',
    difficulty: 'advanced',
    explanation: 'IRBs review protocols for respect for persons, beneficence, justice; exempt, expedited, or full board review based on risk; required for federally funded human subjects research.'
  },
  {
    id: 'pr-54',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Dual Use Research of Concern" (DURC)?',
    options: [
      'Research that can be used for two different purposes.',
      'Life sciences research with legitimate applications that could also be misapplied to pose threats to public health, agriculture, or national security.',
      'Research with dual funding sources.',
      'Research conducted by dual-nationality scientists.'
    ],
    correctAnswer: 'Life sciences research with legitimate applications that could also be misapplied to pose threats to public health, agriculture, or national security.',
    difficulty: 'expert',
    explanation: 'DURC oversight (USPAP, NSABB) requires risk-benefit analysis, mitigation plans, and publication review; examples: gain-of-function pathogen research, synthetic biology.'
  },
  {
    id: 'pr-55',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Predatory Publishing" and its impact on research integrity?',
    options: [
      'Publishing research on predatory animals.',
      'Journals or publishers that exploit open-access models by charging fees without providing legitimate peer review or editorial services, undermining scholarly communication.',
      'Publishing patents that prey on competitors.',
      'A method to publish research quickly.'
    ],
    correctAnswer: 'Journals or publishers that exploit open-access models by charging fees without providing legitimate peer review or editorial services, undermining scholarly communication.',
    difficulty: 'advanced',
    explanation: 'Predatory journals lack transparency, fake impact factors, and spam researchers; identified via Think.Check.Submit; publishing in them damages credibility and wastes resources.'
  },
  {
    id: 'pr-56',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Reproducibility Crisis" in scientific research?',
    options: [
      'A crisis in reproducing historical experiments.',
      'The difficulty of replicating published research findings due to methodological flaws, p-hacking, publication bias, or insufficient reporting.',
      'A crisis in patent reproducibility.',
      'A method to reproduce research papers.'
    ],
    correctAnswer: 'The difficulty of replicating published research findings due to methodological flaws, p-hacking, publication bias, or insufficient reporting.',
    difficulty: 'expert',
    explanation: 'Reproducibility initiatives (preregistration, open data, registered reports) aim to improve reliability; fields like psychology and biomedicine have conducted large-scale replication projects.'
  },
  {
    id: 'pr-57',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "P-hacking" (Data Dredging) in statistical analysis?',
    options: [
      'Hacking into statistical software.',
      'Manipulating data analysis (multiple comparisons, selective reporting, post-hoc hypothesis generation) to obtain statistically significant p-values.',
      'A method to hack p-values for patents.',
      'Hacking research data to improve p-values.'
    ],
    correctAnswer: 'Manipulating data analysis (multiple comparisons, selective reporting, post-hoc hypothesis generation) to obtain statistically significant p-values.',
    difficulty: 'expert',
    explanation: 'P-hacking inflates false positive rates; mitigated by preregistration, adjusting for multiple testing (Bonferroni, FDR), and reporting all analyses performed.'
  },
  {
    id: 'pr-58',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Informed Consent" requirements in human subjects research?',
    options: [
      'Consent obtained after research is completed.',
      'Voluntary agreement by competent individuals after being informed of research purpose, procedures, risks, benefits, alternatives, and rights to withdraw.',
      'Consent obtained from institutional officials only.',
      'A method to consent to patent filings.'
    ],
    correctAnswer: 'Voluntary agreement by competent individuals after being informed of research purpose, procedures, risks, benefits, alternatives, and rights to withdraw.',
    difficulty: 'advanced',
    explanation: 'Informed consent requires comprehension, voluntariness, and disclosure; documented via signed forms; special protections for vulnerable populations (children, prisoners, cognitively impaired).'
  },
  {
    id: 'pr-59',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Research Data Management" (RDM) best practices?',
    options: [
      'Managing research budgets only.',
      'Planning for data collection, documentation, storage, sharing, and preservation throughout the research lifecycle to ensure reproducibility and compliance.',
      'A method to manage patent research data.',
      'Managing research team data only.'
    ],
    correctAnswer: 'Planning for data collection, documentation, storage, sharing, and preservation throughout the research lifecycle to ensure reproducibility and compliance.',
    difficulty: 'advanced',
    explanation: 'RDM includes data management plans (DMPs), metadata standards, FAIR principles (Findable, Accessible, Interoperable, Reusable), and secure storage; required by many funders.'
  },
  {
    id: 'pr-60',
    type: 'mcq',
    category: 'Research Ethics',
    text: 'What is "Plagiarism" in academic and patent contexts?',
    options: [
      'Using patents without permission.',
      'Presenting others\' ideas, words, or work as one\'s own without proper attribution; in patents, includes copying claims/specifications without authorization.',
      'A method to copy research methods.',
      'Plagiarizing patent drawings only.'
    ],
    correctAnswer: 'Presenting others\' ideas, words, or work as one\'s own without proper attribution; in patents, includes copying claims/specifications without authorization.',
    difficulty: 'advanced',
    explanation: 'Plagiarism violates academic integrity and patent law; detected via text-matching software (iThenticate, Turnitin); in patents, may constitute inequitable conduct or derivation.'
  },

  // ==================== TECHNOLOGY TRANSFER (Questions 61-72) ====================
  {
    id: 'pr-61',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is the "Bayh-Dole Act" and its impact on university technology transfer?',
    options: [
      'A law requiring all patents to be filed by universities.',
      'US legislation allowing universities/small businesses to retain title to federally funded inventions, incentivizing commercialization through licensing.',
      'A method to transfer Bayh-Dole patents internationally.',
      'A law banning technology transfer from universities.'
    ],
    correctAnswer: 'US legislation allowing universities/small businesses to retain title to federally funded inventions, incentivizing commercialization through licensing.',
    difficulty: 'advanced',
    explanation: 'Bayh-Dole (1980) requires march-in rights, US manufacturing preference, and reporting; spawned university TTOs; credited with boosting US innovation ecosystem.'
  },
  {
    id: 'pr-62',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Technology Transfer Office" (TTO) primary functions?',
    options: [
      'Transferring office equipment between departments.',
      'Evaluating inventions, filing patents, marketing technologies, negotiating licenses, and supporting startup formation to commercialize academic research.',
      'Transferring patent applications between countries.',
      'A method to transfer technology research data.'
    ],
    correctAnswer: 'Evaluating inventions, filing patents, marketing technologies, negotiating licenses, and supporting startup formation to commercialize academic research.',
    difficulty: 'advanced',
    explanation: 'TTOs assess invention disclosures for patentability/market potential; manage IP portfolio; negotiate license terms (exclusive/non-exclusive, field-of-use, milestones, royalties).'
  },
  {
    id: 'pr-63',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Exclusive vs. Non-Exclusive" licensing in tech transfer?',
    options: [
      'Exclusive licenses are always better.',
      'Exclusive: licensee has sole rights in field/territory; Non-exclusive: multiple licensees permitted; choice depends on market size, development risk, and public interest.',
      'Non-exclusive licenses are illegal in tech transfer.',
      'Exclusive licenses transfer patent ownership.'
    ],
    correctAnswer: 'Exclusive: licensee has sole rights in field/territory; Non-exclusive: multiple licensees permitted; choice depends on market size, development risk, and public interest.',
    difficulty: 'advanced',
    explanation: 'Exclusive licenses incentivize high-risk development (e.g., pharma); non-exclusive suits platform technologies or research tools; Bayh-Dole prefers non-exclusive for public benefit.'
  },
  {
    id: 'pr-64',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Startup Formation" from university research?',
    options: [
      'Forming research teams at universities.',
      'Creating new companies to commercialize university IP, often with faculty founders, equity licenses, and incubator support.',
      'A method to start patent applications.',
      'Forming transfer agreements between universities.'
    ],
    correctAnswer: 'Creating new companies to commercialize university IP, often with faculty founders, equity licenses, and incubator support.',
    difficulty: 'advanced',
    explanation: 'University startups receive equity licenses (often with milestone-based dilution); TTOs provide mentorship, proof-of-concept funding, and connections to venture capital.'
  },
  {
    id: 'pr-65',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Material Transfer Agreement" (MTA)?',
    options: [
      'An agreement to transfer patent materials.',
      'A contract governing the transfer of tangible research materials (cell lines, reagents, software) between institutions, defining use restrictions and IP rights.',
      'A method to transfer research materials internationally.',
      'An agreement for transferring research data only.'
    ],
    correctAnswer: 'A contract governing the transfer of tangible research materials (cell lines, reagents, software) between institutions, defining use restrictions and IP rights.',
    difficulty: 'advanced',
    explanation: 'MTAs address ownership of derivatives, publication rights, liability, and commercialization; standardized templates (UBMTA, NIH MTAs) streamline negotiations.'
  },
  {
    id: 'pr-66',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Reach-Through Rights" in research collaboration agreements?',
    options: [
      'Rights to reach through patent claims.',
      'Provisions granting rights to future inventions arising from the use of licensed technology or research results, often contentious in negotiations.',
      'A method to reach through prior art.',
      'Rights to reach through licensing fees.'
    ],
    correctAnswer: 'Provisions granting rights to future inventions arising from the use of licensed technology or research results, often contentious in negotiations.',
    difficulty: 'expert',
    explanation: 'Reach-through clauses (e.g., rights to improvements, new indications) balance incentivizing investment vs. preserving researcher freedom; scope and field limitations are critical.'
  },
  {
    id: 'pr-67',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Diligence Obligations" in patent license agreements?',
    options: [
      'Obligations to diligently file patent applications.',
      'Contractual requirements for licensee to actively develop and commercialize licensed technology, with milestones and termination for failure.',
      'A method to diligently search for licensees.',
      'Obligations to pay license fees diligently.'
    ],
    correctAnswer: 'Contractual requirements for licensee to actively develop and commercialize licensed technology, with milestones and termination for failure.',
    difficulty: 'advanced',
    explanation: 'Diligence terms prevent patent trolling and ensure public benefit; include development timelines, funding commitments, and commercialization milestones; enforceable via termination.'
  },
  {
    id: 'pr-68',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Royalty Stacking" risk in complex technology licensing?',
    options: [
      'Stacking royalty payments for tax purposes.',
      'The cumulative burden of paying royalties to multiple patent holders for a single product, potentially making commercialization economically unviable.',
      'A method to stack royalty rates for higher income.',
      'Stacking patent applications for royalty benefits.'
    ],
    correctAnswer: 'The cumulative burden of paying royalties to multiple patent holders for a single product, potentially making commercialization economically unviable.',
    difficulty: 'expert',
    explanation: 'Royalty stacking common in semiconductors, smartphones, biotech; mitigated via patent pools, cross-licenses, or FRAND commitments; critical for FTO and business planning.'
  },
  {
    id: 'pr-69',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Field-of-Use" restrictions in patent licenses?',
    options: [
      'Restricting patent use to specific fields only.',
      'Limiting licensee\'s rights to practice the patent in defined applications or markets, allowing licensor to license different fields to different parties.',
      'A method to restrict patent filing fields.',
      'Restrictions on using patents in research fields.'
    ],
    correctAnswer: 'Limiting licensee\'s rights to practice the patent in defined applications or markets, allowing licensor to license different fields to different parties.',
    difficulty: 'advanced',
    explanation: 'Field-of-use licenses maximize revenue by segmenting markets (e.g., research vs. commercial, human vs. veterinary); must be clearly defined to avoid ambiguity and disputes.'
  },
  {
    id: 'pr-70',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Sublicensing Rights" and their typical terms?',
    options: [
      'Rights to sub-license patent applications.',
      'Permission for licensee to grant further licenses to third parties, often requiring licensor approval and revenue sharing.',
      'A method to sub-license research materials.',
      'Rights to sub-license university technologies only.'
    ],
    correctAnswer: 'Permission for licensee to grant further licenses to third parties, often requiring licensor approval and revenue sharing.',
    difficulty: 'advanced',
    explanation: 'Sublicensing enables distribution and partnership strategies; agreements specify approval process, flow-down of terms, and sublicense income splits (e.g., 50/50 after costs).'
  },
  {
    id: 'pr-71',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Government March-In Rights" under Bayh-Dole?',
    options: [
      'Rights for government to march into patent offices.',
      'Authority for federal agencies to require licensing of federally funded inventions if licensee fails to commercialize or to address health/safety needs.',
      'A method for government to march in patent litigation.',
      'Rights to march in technology transfer meetings.'
    ],
    correctAnswer: 'Authority for federal agencies to require licensing of federally funded inventions if licensee fails to commercialize or to address health/safety needs.',
    difficulty: 'expert',
    explanation: 'March-in rights (35 USC § 203) rarely exercised; requires agency determination of failure to achieve practical application or public health needs; subject to administrative review.'
  },
  {
    id: 'pr-72',
    type: 'mcq',
    category: 'Tech Transfer',
    text: 'What is "Patent Term Extension" (PTE) for regulatory review?',
    options: [
      'Extending patent term for filing delays.',
      'Compensation for time lost during FDA/EMA regulatory approval process, adding up to 5 years to patent term for pharmaceuticals, medical devices, and food additives.',
      'A method to extend patent prosecution terms.',
      'Extending patent terms for technology transfer only.'
    ],
    correctAnswer: 'Compensation for time lost during FDA/EMA regulatory approval process, adding up to 5 years to patent term for pharmaceuticals, medical devices, and food additives.',
    difficulty: 'expert',
    explanation: 'PTE (Hatch-Waxman Act) extends term up to 5 years, max 14 years post-approval; calculated as regulatory review period minus applicant diligence; critical for pharma valuation.'
  },

  // ==================== BIBLIOMETRICS & RESEARCH METRICS (Questions 73-84) ====================
  {
    id: 'pr-73',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Impact Factor" and its primary criticisms?',
    options: [
      'A measure of patent impact only.',
      'Average citations per article in a journal over 2 years; criticized for field bias, skew by highly cited papers, and misuse in evaluating individual researchers.',
      'A factor for calculating patent impact.',
      'A metric for research funding impact.'
    ],
    correctAnswer: 'Average citations per article in a journal over 2 years; criticized for field bias, skew by highly cited papers, and misuse in evaluating individual researchers.',
    difficulty: 'advanced',
    explanation: 'Impact Factor (Clarivate) varies widely by field; DORA declaration advocates against using journal metrics for individual assessment; complement with article-level metrics.'
  },
  {
    id: 'pr-74',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Eigenfactor" score in journal metrics?',
    options: [
      'A factor for calculating patent eigenvalues.',
      'A network-based metric weighting citations by the influence of citing journals, similar to PageRank, reducing field bias compared to Impact Factor.',
      'A method to calculate research eigenvalues.',
      'A score for eigen-patents only.'
    ],
    correctAnswer: 'A network-based metric weighting citations by the influence of citing journals, similar to PageRank, reducing field bias compared to Impact Factor.',
    difficulty: 'expert',
    explanation: 'Eigenfactor (eigenfactor.org) uses 5-year citation window and iterative weighting; Article Influence Score normalizes to mean of 1; less manipulable than Impact Factor.'
  },
  {
    id: 'pr-75',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Field-Weighted Citation Impact" (FWCI)?',
    options: [
      'A method to weight citations by field size only.',
      'Ratio of actual citations to expected citations for similar papers in same field, year, and document type; FWCI=1.0 is world average.',
      'A field for calculating weighted citations.',
      'A metric for patent field citations.'
    ],
    correctAnswer: 'Ratio of actual citations to expected citations for similar papers in same field, year, and document type; FWCI=1.0 is world average.',
    difficulty: 'advanced',
    explanation: 'FWCI (SciVal) enables cross-field comparison; values >1.0 indicate above-average impact; accounts for citation practices differences between disciplines.'
  },
  {
    id: 'pr-76',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Altmetrics" and what do they measure?',
    options: [
      'Alternative metrics for patent filing only.',
      'Non-traditional indicators of research impact: social media mentions, news coverage, policy citations, Wikipedia references, and download counts.',
      'A method to calculate alternative patent metrics.',
      'Metrics for alternative research fields.'
    ],
    correctAnswer: 'Non-traditional indicators of research impact: social media mentions, news coverage, policy citations, Wikipedia references, and download counts.',
    difficulty: 'advanced',
    explanation: 'Altmetrics (Altmetric.com, PlumX) capture broader societal impact and early attention; complement citation-based metrics but require careful interpretation of context and quality.'
  },
  {
    id: 'pr-77',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Citation Half-Life" in bibliometric analysis?',
    options: [
      'The time it takes for half of citations to decay.',
      'The median age of citations received by a journal or paper; indicates whether impact is immediate or long-term.',
      'A method to calculate half-life of patents.',
      'The half-life of research citations only.'
    ],
    correctAnswer: 'The median age of citations received by a journal or paper; indicates whether impact is immediate or long-term.',
    difficulty: 'advanced',
    explanation: 'Citation half-life varies by field: fast-moving (CS: 2-3 years) vs. slow (math: 10+ years); informs collection development and research evaluation timeframes.'
  },
  {
    id: 'pr-78',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Co-Citation Analysis" in research mapping?',
    options: [
      'Analyzing citations together only.',
      'Mapping intellectual structure by identifying pairs of papers frequently cited together, revealing conceptual clusters and research fronts.',
      'A method to co-cite patents and papers.',
      'Analyzing co-citations in patent applications.'
    ],
    correctAnswer: 'Mapping intellectual structure by identifying pairs of papers frequently cited together, revealing conceptual clusters and research fronts.',
    difficulty: 'expert',
    explanation: 'Co-citation networks (CiteSpace, VOSviewer) visualize knowledge domains; high co-citation frequency suggests papers address related concepts or methods.'
  },
  {
    id: 'pr-79',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Bibliographic Coupling" vs. Co-Citation?',
    options: [
      'They are identical methods.',
      'Bibliographic coupling: papers citing same references (forward-looking); Co-citation: papers cited together by later works (backward-looking); both map research relationships.',
      'Coupling is for patents; co-citation is for papers.',
      'Bibliographic coupling is outdated.'
    ],
    correctAnswer: 'Bibliographic coupling: papers citing same references (forward-looking); Co-citation: papers cited together by later works (backward-looking); both map research relationships.',
    difficulty: 'expert',
    explanation: 'Bibliographic coupling reflects current research similarities; co-citation reflects historical influence; combined use provides comprehensive landscape mapping.'
  },
  {
    id: 'pr-80',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Research Front" identification in scientometrics?',
    options: [
      'Identifying the front page of research papers.',
      'Detecting emerging topics by analyzing bursty keywords, rapid citation growth, and novel term co-occurrence in recent literature.',
      'A method to identify research funding fronts.',
      'Identifying frontiers in patent research only.'
    ],
    correctAnswer: 'Detecting emerging topics by analyzing bursty keywords, rapid citation growth, and novel term co-occurrence in recent literature.',
    difficulty: 'expert',
    explanation: 'Research front detection (CiteSpace, Sci2) uses term bursting, citation bursts, and cluster evolution; critical for strategic planning and investment decisions.'
  },
  {
    id: 'pr-81',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Collaboration Network Analysis" in research evaluation?',
    options: [
      'Analyzing research collaboration software.',
      'Mapping co-authorship patterns to identify key institutions, countries, and researchers, assessing knowledge flow and partnership strength.',
      'A method to collaborate on network research.',
      'Analyzing patent collaboration networks only.'
    ],
    correctAnswer: 'Mapping co-authorship patterns to identify key institutions, countries, and researchers, assessing knowledge flow and partnership strength.',
    difficulty: 'advanced',
    explanation: 'Network metrics (centrality, betweenness, clustering coefficient) reveal influential actors and structural holes; used for partnership strategy and policy analysis.'
  },
  {
    id: 'pr-82',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Open Access" impact on citation advantage?',
    options: [
      'Open access has no impact on citations.',
      'OA articles often receive more citations due to greater visibility and accessibility, though effect size varies by field and OA type (gold, green, hybrid).',
      'Open access reduces citation counts.',
      'Citation advantage only applies to patent literature.'
    ],
    correctAnswer: 'OA articles often receive more citations due to greater visibility and accessibility, though effect size varies by field and OA type (gold, green, hybrid).',
    difficulty: 'advanced',
    explanation: 'OA citation advantage (10-50% in meta-analyses) may reflect self-selection bias (higher-quality papers more likely OA); Plan S and funder mandates accelerating OA adoption.'
  },
  {
    id: 'pr-83',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Predatory Journal" identification criteria?',
    options: [
      'Journals that publish predatory research.',
      'Lack of transparent peer review, fake impact factors, aggressive solicitation, unclear APCs, and misleading indexing claims.',
      'Journals with predatory animal research.',
      'A method to identify predatory patent journals.'
    ],
    correctAnswer: 'Lack of transparent peer review, fake impact factors, aggressive solicitation, unclear APCs, and misleading indexing claims.',
    difficulty: 'advanced',
    explanation: 'Think.Check.Submit checklist helps evaluate journals; Beall\'s list (archived) identified potential predators; institutional libraries provide vetted journal lists.'
  },
  {
    id: 'pr-84',
    type: 'mcq',
    category: 'Bibliometrics',
    text: 'What is "Responsible Metrics" movement (DORA, Leiden Manifesto)?',
    options: [
      'Metrics for responsible research only.',
      'Guidelines advocating qualitative assessment alongside quantitative metrics, field normalization, and transparency to avoid metric misuse in research evaluation.',
      'A method to calculate responsible metrics.',
      'Metrics for responsible patent filing.'
    ],
    correctAnswer: 'Guidelines advocating qualitative assessment alongside quantitative metrics, field normalization, and transparency to avoid metric misuse in research evaluation.',
    difficulty: 'expert',
    explanation: 'DORA (2012) and Leiden Manifesto (2015) promote responsible use of bibliometrics; emphasize expert judgment, context, and avoiding simplistic ranking based on single metrics.'
  },

  // ==================== PATENT ANALYTICS & LANDSCAPING (Questions 85-96) ====================
  {
    id: 'pr-85',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Landscape" analysis?',
    options: [
      'Analyzing the landscape where patents are filed.',
      'Comprehensive mapping of patent activity in a technology domain, identifying key players, trends, white spaces, and freedom-to-operate risks.',
      'A method to landscape patent applications.',
      'Analyzing patent filing landscapes only.'
    ],
    correctAnswer: 'Comprehensive mapping of patent activity in a technology domain, identifying key players, trends, white spaces, and freedom-to-operate risks.',
    difficulty: 'advanced',
    explanation: 'Patent landscapes combine bibliometric, citation, and text analysis; visualized via heat maps, cluster diagrams, and time series; used for R&D strategy and M&A due diligence.'
  },
  {
    id: 'pr-86',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Citation Network" analysis?',
    options: [
      'Analyzing patent citations in social networks.',
      'Mapping forward/backward citations to identify foundational patents, technology evolution paths, and influential assignees.',
      'A method to network patent citations.',
      'Analyzing citation networks in patent offices only.'
    ],
    correctAnswer: 'Mapping forward/backward citations to identify foundational patents, technology evolution paths, and influential assignees.',
    difficulty: 'advanced',
    explanation: 'Citation networks reveal knowledge flows; centrality metrics identify key patents; used for prior art search, valuation, and identifying acquisition targets.'
  },
  {
    id: 'pr-87',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Technology Clustering" in patent analytics?',
    options: [
      'Clustering patent applications by filing date.',
      'Grouping patents by technical similarity using IPC/CPC codes, keyword co-occurrence, or semantic embeddings to identify sub-domains and innovation hotspots.',
      'A method to cluster technology patents only.',
      'Clustering patent analytics tools.'
    ],
    correctAnswer: 'Grouping patents by technical similarity using IPC/CPC codes, keyword co-occurrence, or semantic embeddings to identify sub-domains and innovation hotspots.',
    difficulty: 'expert',
    explanation: 'Clustering algorithms (LDA, k-means, hierarchical) applied to patent text/metadata; visualized via topic maps; enables targeted prior art search and competitive intelligence.'
  },
  {
    id: 'pr-88',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Strength Index" calculation?',
    options: [
      'A method to measure patent physical strength.',
      'Composite score combining citation impact, family size, claim count, litigation history, and technical breadth to assess patent quality and enforceability.',
      'A method to index patent strength only.',
      'Calculating strength of patent applications only.'
    ],
    correctAnswer: 'Composite score combining citation impact, family size, claim count, litigation history, and technical breadth to assess patent quality and enforceability.',
    difficulty: 'expert',
    explanation: 'Patent strength models (PatentSight, Innography) use weighted metrics; validated against litigation outcomes and licensing revenue; used for portfolio optimization.'
  },
  {
    id: 'pr-89',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "White Space Analysis" in patent landscaping?',
    options: [
      'Analyzing white space in patent documents.',
      'Identifying technology areas with low patent density but high market potential, indicating opportunities for innovation or strategic filing.',
      'A method to analyze white space patents only.',
      'Analyzing whitespace in patent claims.'
    ],
    correctAnswer: 'Identifying technology areas with low patent density but high market potential, indicating opportunities for innovation or strategic filing.',
    difficulty: 'advanced',
    explanation: 'White space analysis combines patent maps with market data, scientific publications, and trend analysis; guides R&D investment and IP strategy.'
  },
  {
    id: 'pr-90',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Family Size" as a quality indicator?',
    options: [
      'The number of inventors in a patent family.',
      'Number of jurisdictions where protection is sought; larger families indicate higher perceived value and commercial potential, but also higher costs.',
      'A method to calculate family size only.',
      'Patent family size for research families only.'
    ],
    correctAnswer: 'Number of jurisdictions where protection is sought; larger families indicate higher perceived value and commercial potential, but also higher costs.',
    difficulty: 'advanced',
    explanation: 'Family size correlates with citation impact and licensing revenue; triadic families (US, EP, JP) are particularly valuable; used in portfolio benchmarking.'
  },
  {
    id: 'pr-91',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Age" analysis in portfolio management?',
    options: [
      'Analyzing the age of patent attorneys.',
      'Assessing distribution of patent grant dates to evaluate portfolio freshness, maintenance cost trajectory, and remaining commercial life.',
      'A method to analyze patent age only.',
      'Analyzing age of patent applications only.'
    ],
    correctAnswer: 'Assessing distribution of patent grant dates to evaluate portfolio freshness, maintenance cost trajectory, and remaining commercial life.',
    difficulty: 'advanced',
    explanation: 'Patent age affects maintenance fees (increase over time) and enforceability; aging portfolios may require pruning or continuation strategies.'
  },
  {
    id: 'pr-92',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Competitor Patent Monitoring" best practices?',
    options: [
      'Monitoring competitors\' patent filings only.',
      'Automated alerts for new publications, legal status changes, and assignment transfers of key competitors\' portfolios, integrated with business intelligence.',
      'A method to monitor patent competitors only.',
      'Monitoring patent competition in research only.'
    ],
    correctAnswer: 'Automated alerts for new publications, legal status changes, and assignment transfers of key competitors\' portfolios, integrated with business intelligence.',
    difficulty: 'advanced',
    explanation: 'Monitoring tools (PatBase, Orbit) enable real-time tracking; combined with claim analysis and FTO assessment to inform R&D and litigation strategy.'
  },
  {
    id: 'pr-93',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Thicket" navigation strategies?',
    options: [
      'Strategies to navigate through patent forests.',
      'Approaches to operate in dense IP environments: cross-licensing, patent pools, design-arounds, defensive publishing, and strategic acquisition.',
      'A method to navigate patent thickets only.',
      'Strategies for thickets in patent research only.'
    ],
    correctAnswer: 'Approaches to operate in dense IP environments: cross-licensing, patent pools, design-arounds, defensive publishing, and strategic acquisition.',
    difficulty: 'expert',
    explanation: 'Thicket navigation requires comprehensive FTO, portfolio analysis, and negotiation strategy; common in standards-essential patents and complex technologies.'
  },
  {
    id: 'pr-94',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Defensive Publishing" as an IP strategy?',
    options: [
      'Publishing patents defensively.',
      'Publicly disclosing inventions to create prior art, preventing others from patenting the same idea while avoiding patent filing costs.',
      'A method to publish defensive patents only.',
      'Publishing research defensively only.'
    ],
    correctAnswer: 'Publicly disclosing inventions to create prior art, preventing others from patenting the same idea while avoiding patent filing costs.',
    difficulty: 'advanced',
    explanation: 'Defensive publishing (IP.com, Research Disclosure) establishes prior art; useful for non-core innovations, open source projects, or when patent enforcement is impractical.'
  },
  {
    id: 'pr-95',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Portfolio Rationalization"?',
    options: [
      'Rationalizing patent filing decisions.',
      'Systematic evaluation of patent assets to abandon low-value patents, reduce maintenance costs, and focus resources on strategic IP.',
      'A method to rationalize patent portfolios only.',
      'Rationalizing patent research portfolios only.'
    ],
    correctAnswer: 'Systematic evaluation of patent assets to abandon low-value patents, reduce maintenance costs, and focus resources on strategic IP.',
    difficulty: 'advanced',
    explanation: 'Rationalization uses scoring models (citations, commercial relevance, litigation risk) to prioritize maintenance; typically saves 20-40% of portfolio costs.'
  },
  {
    id: 'pr-96',
    type: 'mcq',
    category: 'Patent Analytics',
    text: 'What is "Patent Valuation for M&A" due diligence?',
    options: [
      'Valuing patents for merger applications only.',
      'Assessing target\'s IP portfolio strength, freedom-to-operate, litigation exposure, and alignment with acquirer\'s strategy to inform deal pricing and integration.',
      'A method to value patents in M&A only.',
      'Valuing research patents for M&A only.'
    ],
    correctAnswer: 'Assessing target\'s IP portfolio strength, freedom-to-operate, litigation exposure, and alignment with acquirer\'s strategy to inform deal pricing and integration.',
    difficulty: 'expert',
    explanation: 'IP due diligence includes validity opinions, FTO analysis, encumbrance review, and valuation; critical for deal structure, representations, and post-merger IP strategy.'
  },

  // ==================== PATENT LITIGATION & ENFORCEMENT (Questions 97-100) ====================
  {
    id: 'pr-97',
    type: 'mcq',
    category: 'Patent Litigation',
    text: 'What is "Markman Hearing" in US patent litigation?',
    options: [
      'A hearing for marking patent claims.',
      'A pre-trial proceeding where the court construes claim terms, often determining the outcome of infringement cases before trial.',
      'A hearing for patent marking requirements.',
      'A hearing for marking patent litigation dates.'
    ],
    correctAnswer: 'A pre-trial proceeding where the court construes claim terms, often determining the outcome of infringement cases before trial.',
    difficulty: 'expert',
    explanation: 'Markman hearings (Markman v. Westview Instruments) establish claim scope as matter of law; parties submit briefs, claim charts, and expert testimony; critical for summary judgment.'
  },
  {
    id: 'pr-98',
    type: 'mcq',
    category: 'Patent Litigation',
    text: 'What is "Inter Partes Review" (IPR) at the PTAB?',
    options: [
      'A review between patent parties only.',
      'A post-grant proceeding allowing third parties to challenge patent validity based on prior art patents/printed publications, with lower burden of proof than district court.',
      'A review of inter-partes patent applications.',
      'A method to review patent interferences.'
    ],
    correctAnswer: 'A post-grant proceeding allowing third parties to challenge patent validity based on prior art patents/printed publications, with lower burden of proof than district court.',
    difficulty: 'expert',
    explanation: 'IPR (AIA 2012) requires petition showing >50% likelihood of prevailing; limited to § 102/103 challenges; estoppel bars later litigation on same grounds; high institution rate (~60%).'
  },
  {
    id: 'pr-99',
    type: 'mcq',
    category: 'Patent Litigation',
    text: 'What is "Willful Infringement" and its damages implications?',
    options: [
      'Infringement that is willfully ignored.',
      'Infringement with knowledge of the patent and reckless disregard; may lead to enhanced damages up to 3x under § 284 after Halo v. Pulse.',
      'A method to willfully infringe patents.',
      'Willful infringement of research patents only.'
    ],
    correctAnswer: 'Infringement with knowledge of the patent and reckless disregard; may lead to enhanced damages up to 3x under § 284 after Halo v. Pulse.',
    difficulty: 'expert',
    explanation: 'Post-Halo, enhanced damages discretionary based on egregiousness; factors include copying, investigation efforts, and litigation behavior; opinion of counsel critical for defense.'
  },
  {
    id: 'pr-100',
    type: 'mcq',
    category: 'Patent Litigation',
    text: 'What is "Patent Troll" (NPE) litigation strategy?',
    options: [
      'A strategy for trolling patent offices.',
      'Non-practicing entities asserting patents primarily for licensing revenue, often targeting operating companies with demand letters and litigation threats.',
      'A method to troll patent research.',
      'A strategy for patent trolling in research only.'
    ],
    correctAnswer: 'Non-practicing entities asserting patents primarily for licensing revenue, often targeting operating companies with demand letters and litigation threats.',
    difficulty: 'expert',
    explanation: 'NPE strategies include forum shopping (ED Texas historically), high-volume demand letters, and leveraging high litigation costs; countered by IPR, fee-shifting (Octane Fitness), and defensive aggregation.'
  }
];

// Verify we have exactly 100 unique questions
console.assert(PATENT_RESEARCH_QUESTIONS.length === 100, 
  `Expected 100 questions, got ${PATENT_RESEARCH_QUESTIONS.length}`);

// Verify no duplicate IDs
const ids = PATENT_RESEARCH_QUESTIONS.map(q => q.id);
const uniqueIds = new Set(ids);
console.assert(ids.length === uniqueIds.size, 'Duplicate question IDs detected!');

// Verify no duplicate question texts
const texts = PATENT_RESEARCH_QUESTIONS.map(q => q.text);
const uniqueTexts = new Set(texts);
console.assert(texts.length === uniqueTexts.size, 'Duplicate question texts detected!');

// Optional: Helper function to get questions by difficulty
export const getQuestionsByDifficulty = (difficulty: 'advanced' | 'expert'): Question[] => {
  return PATENT_RESEARCH_QUESTIONS.filter(q => q.difficulty === difficulty);
};

// Optional: Helper to get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return PATENT_RESEARCH_QUESTIONS.filter(q => q.category === category);
};

// Optional: Get random subset for exams with deterministic seeding
export const getRandomQuestions = (count: number, seed?: number): Question[] => {
  const shuffled = [...PATENT_RESEARCH_QUESTIONS];
  
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

export default PATENT_RESEARCH_QUESTIONS;