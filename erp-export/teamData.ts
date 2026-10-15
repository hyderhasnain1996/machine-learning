// ─────────────────────────────────────────────────────────────────────────
// Team data model + sample data for the ERP / professor dashboard team page.
// Replace the sample members with your real list. Members are grouped
// automatically by `role` / `status` at the bottom of this file.
// ─────────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string
  name: string
  role: string          // e.g. "Professor & Lab Director", "Ph.D. Student", "Post-Doctoral Fellow"
  title: string         // e.g. "Professor", "Researcher"
  department?: string
  email?: string
  phone?: string
  office?: string
  image?: string        // photo path/URL; falls back to initials if omitted
  bio?: string
  researchInterests?: string[]
  education?: Array<{ degree: string; institution: string; year: number; field?: string }>
  experience?: Array<{ position: string; organization: string; period: string; description?: string }>
  publications?: number
  citations?: number
  hIndex?: number
  googleScholar?: string
  orcid?: string
  linkedin?: string
  website?: string
  achievements?: string[]
  status: 'active' | 'alumni'
  currentPosition?: string
}

// ── All active members (faculty, post-docs, students) live in one array ──
export const teamMembers: TeamMember[] = [
  {
    id: 'prof-byun',
    name: 'Dr. Yung-Cheol Byun',
    role: 'Professor & Lab Director',
    title: 'Professor',
    department: 'Department of Computer Engineering',
    email: 'yungcheolbyun@gmail.com',
    phone: '+82-64-754-3657',
    office: 'Engineering Building 3F-314',
    image: '/Prof.png',
    bio: 'Professor in the Computer Engineering Department at Jeju National University. Ph.D. from Yonsei University (2001). Research in machine learning, pattern recognition, and blockchain.',
    researchInterests: [
      'Machine Learning & AI',
      'Pattern Recognition',
      'Blockchain Technology',
      'Deep Learning Applications',
      'Big Data Analytics',
      'Medical Image Processing',
    ],
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Yonsei University', year: 2001 },
      { degree: 'M.S. in Computer Science', institution: 'Yonsei University', year: 1995 },
      { degree: 'B.S. in Computer Engineering', institution: 'Jeju National University', year: 1993 },
    ],
    publications: 386,
    citations: 7267,
    hIndex: 48,
    googleScholar: 'https://scholar.google.com/citations?user=jfGGqJIAAAAJ&hl=en',
    status: 'active',
  },

  // ── Sample Post-Doctoral Fellow ──
  {
    id: 'postdoc-1',
    name: 'Dr. Jane Researcher',
    role: 'Post-Doctoral Fellow',
    title: 'Post-Doctoral Researcher',
    image: '',
    researchInterests: ['Computer Vision', 'Medical AI', 'Deep Learning'],
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Some University', year: 2023 },
    ],
    googleScholar: 'https://scholar.google.com',
    status: 'active',
  },

  // ── Sample students ──
  {
    id: 'student-1',
    name: 'Amreen Batool',
    role: 'Ph.D. Student',
    title: 'Ph.D. Candidate',
    image: '',
    researchInterests: ['Medical Imaging', 'CNN', 'Brain Tumor Detection'],
    status: 'active',
    googleScholar: 'https://scholar.google.com',
  },
  {
    id: 'student-2',
    name: 'Muhammad Waqar',
    role: 'Master Student',
    title: 'M.S. Candidate',
    image: '',
    researchInterests: ['Energy Forecasting', 'EV Charging', 'Time Series'],
    status: 'active',
  },
  {
    id: 'student-3',
    name: 'Hasnain Hyder',
    role: 'Master Student',
    title: 'M.S. Candidate',
    image: '',
    researchInterests: ['Label Noise', 'Attention', 'Solar Cell Defects'],
    status: 'active',
  },
]

// ── Alumni (kept separate) ──
export const alumniMembers: TeamMember[] = [
  {
    id: 'alum-1',
    name: 'Dr. Former Student',
    role: 'Alumni',
    title: 'Ph.D. (2022)',
    image: '',
    status: 'alumni',
    experience: [{ position: 'Senior Researcher, XYZ Corp', organization: 'XYZ', period: '2022-' }],
  },
]

// ── Auto-grouping (do not usually need to edit) ──
export const facultyMembers = teamMembers.filter((m) => m.role.includes('Professor'))
export const postDocFellows = teamMembers.filter((m) => m.role.includes('Post-Doctoral'))
export const currentStudents = teamMembers.filter(
  (m) => m.status === 'active' && !m.role.includes('Professor') && !m.role.includes('Post-Doctoral'),
)
