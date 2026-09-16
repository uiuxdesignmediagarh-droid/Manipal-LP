import { Programme, Accolade, WhyFeature, ScholarshipItem, AdmissionStep, FAQItem } from '../types';

export const HERO_CONTENT = {
  headline: "Get a UGC-Entitled Online Degree from Sikkim Manipal University",
  subHeadline: "MBA • BBA • B.Com • MA English — 100% Online | NAAC A+ Accredited | No-Cost EMI",
  trustMicroLine: "30+ Years of Quality Education | 6 Lakh+ Alumni | 500,000+ Students Educated Since 2001 | Access to Coursera Certifications",
  formCTA: "Get Free Counselling — Enter Your Number",
  primaryBtn: "Get Free Counselling",
  downloadBrochureBtn: "Download Brochure",
  talkCounsellorBtn: "Talk to a Counsellor (Call/WhatsApp)",
  whatsAppNumber: "+919711849719",
  phoneNumber: "9711849719",
  tollFreeNumber: "9711849719",
};

export const TRUST_STRIP_ITEMS = [
  {
    title: "UGC",
    subtitle: "Entitled",
    description: "Equivalent to on-campus degrees",
    badge: "UGC",
  },
  {
    title: "NAAC A+",
    subtitle: "Accredited",
    description: "Highest academic standards",
    badge: "NAAC A+",
  },
  {
    title: "Ranked #151–200",
    subtitle: "(India, 2025)",
    description: "NIRF Top Universities",
    badge: "NIRF",
  },
  {
    title: "#1 Private University,",
    subtitle: "North East (2026)",
    description: "IIRF Top Ranked",
    badge: "#1 Regional",
  },
];

export const ABOUT_SMU_CONTENT = {
  sectionTitle: "ABOUT SIKKIM MANIPAL UNIVERSITY (SMU)",
  paragraph: "Established in 1995, Sikkim Manipal University (SMU) is a NAAC A+ accredited institution and part of the respected Manipal Education & Medical Group, founded by Padma Shri Dr. T.M.A. Pai. SMU's distance education arm, founded in 2001, has educated over 500,000 students, making it one of India's leading providers of professional online programmes.",
  quote: "Give an individual a professional education and you have given him a lifestyle.",
  author: "Padma Shri Dr. T.M.A. Pai",
  authorTitle: "Founder, Manipal Group",
};

export const SMU_ACCOLADES: Accolade[] = [
  {
    id: "acc-1",
    title: "Accredited A+ Grade by NAAC",
    highlight: "NAAC A+",
    badgeType: "naac",
  },
  {
    id: "acc-2",
    title: "UGC-entitled online degrees — equivalent to on-campus degrees",
    highlight: "UGC Entitled",
    badgeType: "ugc",
  },
  {
    id: "acc-3",
    title: "Ranked #151–200 among India's Top Universities (2025)",
    highlight: "#151–200",
    badgeType: "nirf",
  },
  {
    id: "acc-4",
    title: "Ranked #6 among India's Top Multidisciplinary Universities, East Zone (2025)",
    highlight: "#6 East Zone",
    badgeType: "zone",
  },
  {
    id: "acc-5",
    title: "Ranked #1 among Top Private Universities in North East India (2026)",
    highlight: "#1 North East",
    badgeType: "private",
  },
  {
    id: "acc-6",
    title: "Ranked #15 among Top Universities Showcasing Entrepreneurial Spirit",
    highlight: "#15",
    badgeType: "spirit",
  },
  {
    id: "acc-7",
    title: "Ranked #330 among South Asia's Top Universities (2026)",
    highlight: "#330 QS Asia",
    badgeType: "asia",
  },
  {
    id: "acc-8",
    title: "Ranked #801+ in Asia University Rankings (2026)",
    highlight: "#801+",
    badgeType: "asia",
  },
  {
    id: "acc-9",
    title: "'Most Preferred Distance Education University Among Students' award",
    highlight: "Most Preferred",
    badgeType: "award",
  },
  {
    id: "acc-10",
    title: "AICTE Norms Compliant",
    highlight: "AICTE Compliant",
    badgeType: "aicte",
  },
  {
    id: "acc-11",
    title: "Degrees issued after 2016 evaluated by World Education Services (WES)",
    highlight: "WES Evaluated",
    badgeType: "wes",
  },
];

export const WHY_STUDY_ONLINE: WhyFeature[] = [
  {
    id: "why-1",
    title: "Flexible, modern curriculum built for industry relevance",
  },
  {
    id: "why-2",
    title: "Dedicated course mentors for a comprehensive learning experience",
  },
  {
    id: "why-3",
    title: "Industry expert sessions, webinars, and live projects",
  },
  {
    id: "why-4",
    title: "AI-enabled Learning Management System (LMS)",
  },
  {
    id: "why-5",
    title: "Access to Coursera course certifications",
  },
  {
    id: "why-6",
    title: "24x7 learning with best-suited content, anytime, anywhere",
  },
];

export const SCHOLARSHIPS_CONTENT = {
  sectionTitle: "SCHOLARSHIPS & FINANCING",
  noCostEmi: "No-Cost EMI — Stress-free learning with zero-cost EMI available on annual fee payment",
  schemeTitle: "Manipal Scholarship Scheme — Fee concessions for:",
  scholarships: [
    {
      category: "Candidates from Sikkim & North East region",
      discount: "30%",
      highlight: true,
    },
    {
      category: "Differently-abled (Divyaang)",
      discount: "20%",
      highlight: false,
    },
    {
      category: "Defence Personnel",
      discount: "20%",
      highlight: false,
    },
    {
      category: "SMU Alumni (UG/PG)",
      discount: "20%",
      highlight: false,
    },
    {
      category: "Full programme fee paid upfront",
      discount: "10% discount",
      highlight: false,
    },
    {
      category: "Annual fee paid upfront",
      discount: "5% discount",
      highlight: false,
    },
  ] as ScholarshipItem[],
  note: "Learners opting for loan financing are not eligible for additional discounts.",
};

export const PROGRAMMES: Programme[] = [
  {
    id: "mba",
    name: "ONLINE MBA — Dual Specialisation",
    badge: "Flagship Programme",
    isFlagship: true,
    duration: "2 Years (4 Semesters), 15–20 hrs/week",
    mode: "100% Online",
    totalCredits: "102",
    eligibility: "10+2+3/10+2+4/10+3+3-year Bachelor's degree in any discipline, min. 50% aggregate (45% for reserved categories)",
    specialisationsTitle: "Choose Dual Specialisations from:",
    specialisations: [
      "Marketing",
      "Finance",
      "HR",
      "Systems",
      "Operations & Supply Chain Management",
      "Healthcare",
    ],
  },
  {
    id: "bba",
    name: "ONLINE BBA",
    badge: "Undergraduate",
    isFlagship: false,
    duration: "Minimum 3 Years (6 Semesters), 15–20 hrs/week",
    mode: "100% Online",
    totalCredits: "120",
    eligibility: "10+2 or 10+3 diploma from a recognised board/institute, any discipline",
    tracksTitle: "4 Specialisation Tracks (choose in Semester 5, continues in Semester 6):",
    tracks: [
      "Business Analytics & Fintech",
      "Entrepreneurship",
      "Operations & Supply Chain Management",
      "Banking & Insurance",
    ],
  },
  {
    id: "bcom",
    name: "ONLINE B.COM (Bachelor of Commerce)",
    badge: "Undergraduate",
    isFlagship: false,
    duration: "Minimum 3 Years (6 Semesters), 15–20 hrs/week",
    mode: "100% Online",
    totalCredits: "120",
    eligibility: "10+2/Intermediate/Senior Secondary from a recognised board, any discipline",
  },
  {
    id: "ma-english",
    name: "ONLINE MA IN ENGLISH",
    badge: "Postgraduate",
    isFlagship: false,
    duration: "Minimum 2 Years (4 Semesters), 15–20 hrs/week",
    mode: "100% Online",
    totalCredits: "80",
    eligibility: "10+2+3-year Bachelor's degree from a recognised university, any discipline",
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: "Program Registration",
    description: "Fill in your basic, education & work experience details → Pay the application fee to register.",
  },
  {
    stepNumber: 2,
    title: "Fee Payment",
    description: "Pay the admission fee for the first semester/year or the full programme.",
  },
  {
    stepNumber: 3,
    title: "Document Upload",
    description: "Upload supporting documents and submit your application.",
  },
  {
    stepNumber: 4,
    title: "University Approval",
    description: "SMU evaluates your documents and confirms admission.",
  },
];

export const ADMISSION_FEE_NOTE = "Application fee note: A non-refundable ₹500 application fee applies for Indian, Nepalese, Bhutanese, Bangladeshi, and Sri Lankan applicants. SAARC nation applicants (Nepal, Bhutan, Bangladesh, Sri Lanka) pay fees in INR.";

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "Are SMU's online degrees valid and recognized?",
    answer: "Yes — SMU's online degrees are UGC-entitled and equivalent to on-campus degrees, backed by NAAC A+ accreditation.",
  },
  {
    id: 2,
    question: "Do I need to attend classes or exams on campus?",
    answer: "No — both classes and semester-end examinations are conducted fully online (computer-based, proctored), so you can study and appear for exams from home.",
  },
  {
    id: 3,
    question: "What is the difference between SMU, Manipal University Jaipur (MUJ), and MAHE?",
    answer: "All three are part of the Manipal Group's online education network (Online Manipal), but each has its own fee structure, specialisations, and accreditation profile. Our counsellors can help you compare and choose the right fit.",
  },
  {
    id: 4,
    question: "Is EMI or scholarship support available?",
    answer: "Yes — No-Cost EMI is available on annual fee payment, and the Manipal Scholarship Scheme offers fee concessions of up to 30% for defence personnel, differently-abled candidates, SMU alumni, and learners from Sikkim/North-East India.",
  },
  {
    id: 5,
    question: "Can I access additional certifications during my programme?",
    answer: "Yes — SMU learners get access to Coursera course certifications alongside their degree.",
  },
  {
    id: 6,
    question: "What happens if I fail a paper?",
    answer: "You can reappear for the relevant paper through a resitting application (with applicable fees) within the due date.",
  },
];

export const FINAL_CTA_CONTENT = {
  headline: "Your Degree, Your Pace — Powered by the Manipal Legacy",
  subLine: "Join 6 lakh+ alumni who chose Sikkim Manipal University for a UGC-entitled degree they could earn without pausing life. Get free counselling",
  btn1: "Get Free Counselling",
  btn2: "Download Brochure",
  btn3: "WhatsApp Us Now",
};
