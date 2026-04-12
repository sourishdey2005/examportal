import { Question } from '../types';

export const PATENT_RESEARCH_QUESTIONS: Question[] = [
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
    correctAnswer: 'A legal rule that allows a court to find infringement if the accused product performs substantially the same function in substantially the same way to achieve the same result.'
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
    correctAnswer: 'A dense web of overlapping intellectual property rights that requires innovators to seek licenses from multiple patentees, potentially stifling innovation.'
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
    correctAnswer: 'It measures both the productivity and citation impact of a researcher, but it can be biased by field-specific citation patterns and career length.'
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
    correctAnswer: 'It provides a unified procedure for filing patent applications to protect inventions in each of its contracting states, delaying the cost of national filings.'
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
    correctAnswer: 'The tendency of researchers and journals to publish positive results more frequently than negative or null results, leading to an overestimation of effect sizes.'
  }
];

const prCategories = ['Patent Drafting', 'Prior Art Search', 'IP Valuation', 'Research Ethics', 'Tech Transfer', 'Bibliometrics'];
const prTopics = [
  'Drafting "Means-Plus-Function" claims',
  'Boolean vs Semantic patent searching',
  'Income-based vs Cost-based IP valuation',
  'Double-blind vs Open peer review',
  'Bayh-Dole Act and University tech transfer',
  'Impact Factor vs Eigenfactor metrics'
];

for (let i = 6; i <= 100; i++) {
  const category = prCategories[i % prCategories.length];
  const topic = prTopics[i % prTopics.length];
  PATENT_RESEARCH_QUESTIONS.push({
    id: `pr-${i}`,
    type: 'mcq',
    category: category,
    text: `[Advanced ${category}] When conducting ${topic}, which factor is most critical for ensuring the legal and scientific validity of the findings?`,
    options: [
      'The total number of pages in the final report.',
      'The rigor and transparency of the methodology used.',
      'The reputation of the institution where the research was conducted.',
      'The speed at which the patent application was filed.'
    ],
    correctAnswer: 'The rigor and transparency of the methodology used.'
  });
}
