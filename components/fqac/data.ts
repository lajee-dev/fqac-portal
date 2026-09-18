import {
  BookOpen,
  ClipboardCheck,
  FileText,
  Landmark,
  MessageSquareQuote,
  Users,
} from "lucide-react";

export const nav = [
  "About",
  "Members",
  "Events",
  "Meetings",
  "Action Plans",
  "Downloads",
  "Gallery",
  "FAQs",
  "Contact",
];

export const services = [
  [
    "Programme Review",
    ClipboardCheck,
    "Evidence-led review for stronger academic programmes.",
  ],
  [
    "Institutional Review",
    Landmark,
    "A clear lens on systems, resources and student success.",
  ],
  [
    "Peer Evaluation",
    Users,
    "Collegial feedback that turns good practice into shared practice.",
  ],
  [
    "Result Analysis",
    FileText,
    "Insightful analysis to support better learning outcomes.",
  ],
  [
    "Student Feedback Analysis",
    MessageSquareQuote,
    "Listening carefully to improve every learner journey.",
  ],
  [
    "Curriculum Enhancement",
    BookOpen,
    "Supporting relevant, outcomes-based curriculum design.",
  ],
] as const;

export const faqs = [
  [
    "What is Quality Assurance?",
    "Quality Assurance is the systematic process of ensuring that academic provision meets agreed standards and continuously improves.",
  ],
  [
    "What is the CQA?",
    "The Centre for Quality Assurance coordinates university-wide quality assurance activities and supports faculties in maintaining academic standards.",
  ],
  [
    "What does FQAC do?",
    "The Faculty Quality Assurance Cell coordinates faculty-level review, evidence gathering, feedback analysis and quality enhancement initiatives.",
  ],
  [
    "What are IR and PR?",
    "Institutional Review evaluates the effectiveness of institutional systems, while Programme Review focuses on the quality and outcomes of an academic programme.",
  ],
  [
    "What is SLQF?",
    "The Sri Lanka Qualifications Framework provides a nationally consistent structure for qualifications and supports progression, recognition and outcomes-based education.",
  ],
] as const;

export const officialHighlights = [
  {
    title: "Programme review outcomes",
    text: "The UGC review panels for the BSc in Applied Mathematics and Computing, Environmental Science and ICT programmes awarded a “B” rating, indicating a good level of accomplishment against expected programme quality standards.",
    date: "2024–2025",
  },
  {
    title: "Staff Workload Assessment Portal",
    text: "The Faculty developed a web-based portal for academic workload assessment, supporting accountability, workload calculation and policy alignment across the faculty.",
    date: "2025",
  },
  {
    title: "Student feedback and action",
    text: "Course evaluation and teaching feedback were summarised and shared with departments for corrective actions and continuous improvement planning.",
    date: "2024–2025",
  },
] as const;

export const documentLibrary = [
  { name: "Update of the FQAC: May – June 2025", type: "PDF", year: "2025" },
  { name: "Faculty Satisfaction Survey 2024", type: "Report", year: "2024" },
  { name: "Faculty Satisfaction Survey 2023", type: "Report", year: "2023" },
  { name: "Programme Review Guidelines", type: "Guideline", year: "2025" },
  { name: "Quality Assurance Manual", type: "Manual", year: "2025" },
  { name: "Self-Evaluation Report", type: "Report", year: "2024" },
] as const;

export const committeeRoles = [
  "Chairperson — Dean",
  "Coordinator/FQAC",
  "Department Heads",
  "Secretary",
  "Librarian",
  "CDEC Chair",
  "FRC Chair",
  "Student Counsellor Representative",
] as const;

export const recentNews = [
  {
    date: "20 Mar 2025",
    title: "47th FQAC meeting",
    text: "Reviewed faculty satisfaction survey outcomes and prioritised follow-up actions.",
  },
  {
    date: "02 Apr 2025",
    title: "CQA presentation",
    text: "Presented the faculty workload assessment framework and quality assurance progress to the Centre for Quality Assurance.",
  },
  {
    date: "06 Nov 2024",
    title: "Faculty Board presentation",
    text: "Shared exit graduate survey findings and improvement measures with the Faculty Board.",
  },
] as const;

export const governancePillars = [
  [
    "Evidence-based review",
    "Quality assurance decisions are grounded in data, stakeholder feedback and verified academic performance indicators.",
  ],
  [
    "Continuous enhancement",
    "The faculty converts recommendations into focused actions that strengthen teaching, learning and support systems.",
  ],
  [
    "Stakeholder engagement",
    "Academic staff, supportive staff, students and external stakeholders contribute to the faculty’s quality culture.",
  ],
] as const;

export const meetingRecords = [
  {
    title: "FQAC Committee Meeting — Q1 Review",
    date: "18 March 2025",
    status: "Minutes available",
  },
  {
    title: "Faculty Quality Enhancement Action Plan",
    date: "2025",
    status: "Action plan updated",
  },
  {
    title: "Departmental Feedback Review",
    date: "April 2025",
    status: "Department follow-up",
  },
] as const;
