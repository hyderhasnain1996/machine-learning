export interface TeamMember {
  id: string
  name: string
  role: string
  title: string
  department?: string
  email?: string
  phone?: string
  office?: string
  image?: string
  bio: string
  researchInterests: string[]
  education: Array<{
    degree: string
    institution: string
    year: number
    field?: string
  }>
  experience?: Array<{
    position: string
    organization: string
    period: string
    description?: string
  }>
  publications?: number
  citations?: number
  hIndex?: number
  googleScholar?: string
  orcid?: string
  linkedin?: string
  website?: string
  achievements?: string[]
  currentProjects?: string[]
  socialLinks?: {
    twitter?: string
    github?: string
    researchGate?: string
  }
  status: 'active' | 'alumni'
  joinDate?: string
  graduationDate?: string
  currentPosition?: string
  currentAffiliation?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "prof-byun",
    name: "Dr. Yung-Cheol Byun",
    role: "Professor & Lab Director",
    title: "Associate Professor",
    department: "Department of Computer Engineering",
    email: "yungcheolbyun@gmail.com",
    phone: "+82-64-754-3657",
    office: "Engineering Building 3F-314",
    image: "/Prof.png",
    bio: "Dr. Yung-Cheol Byun is an Associate Professor in the Computer Engineering Department at Jeju National University. He received his Ph.D. from Yonsei University in 2001 and has extensive experience in machine learning, pattern recognition, and blockchain technologies. He has published over 150 peer-reviewed papers and has been leading cutting-edge research in AI applications for healthcare, renewable energy, and smart systems.",
    researchInterests: [
      "Machine Learning & AI",
      "Pattern Recognition",
      "Blockchain Technology",
      "Deep Learning Applications",
      "Big Data Analytics",
      "Time Series Analysis",
      "Medical Image Processing",
      "Recommendation Systems",
      "IoT and Smart Systems",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Yonsei University",
        year: 2001,
        field: "Pattern Recognition and Machine Learning",
      },
      {
        degree: "M.S. in Computer Science",
        institution: "Yonsei University",
        year: 1995,
        field: "Computer Vision",
      },
      {
        degree: "B.S. in Computer Engineering",
        institution: "Jeju National University",
        year: 1993,
      },
    ],
    experience: [
      {
        position: "Associate Professor",
        organization: "Jeju National University",
        period: "2008 - Present",
        description: "Leading research in machine learning and AI applications",
      },
      {
        position: "Assistant Professor",
        organization: "Jeju National University",
        period: "2003 - 2008",
      },
      {
        position: "Senior Researcher",
        organization:
          "Electronics and Telecommunications Research Institute (ETRI)",
        period: "2001 - 2003",
      },
      {
        position: "Special Lecturer",
        organization: "Samsung Electronics",
        period: "2000 - 2001",
      },
    ],
    publications: 150,
    citations: 2850,
    hIndex: 28,
    googleScholar: "https://scholar.google.com/citations?user=example",
    achievements: [
      "Best Paper Award - IEEE Conference on AI 2023",
      "Excellence in Research Award - JNU 2022",
      "Outstanding Faculty Award 2021",
      "Top 2% Scientists Worldwide (Stanford Study 2023)",
    ],
    currentProjects: [
      "AI for Renewable Energy Optimization",
      "Blockchain-based Healthcare Systems",
      "Deep Learning for Medical Diagnosis",
      "Smart City Analytics Platform",
    ],
    status: "active",
    joinDate: "2003-03-01",
  },
  {
    id: "yong-woon-kim",
    name: "Yong Woon Kim",
    role: "Research Professor",
    title: "Research Professor",
    email: "yongwoon.kim@jnu.ac.kr",
    image: "/Prof_kim.jpg",
    bio: "Dr. Yong Woon Kim is a distinguished Research Professor bringing extensive expertise in IoT, Edge Computing, and Artificial Intelligence. His research focuses on developing innovative solutions that bridge the gap between theoretical AI concepts and practical applications, particularly in deep learning and image segmentation technologies.",
    researchInterests: [
      "IoT (Internet of Things)",
      "Edge Computing",
      "Artificial Intelligence",
      "Deep Learning",
      "Image Segmentation",
    ],
    education: [
      {
        degree: "Ph.D.",
        institution: "Major University",
        year: 2010,
        field: "Computer Science & Engineering",
      },
      {
        degree: "M.S.",
        institution: "Major University",
        year: 2005,
        field: "Computer Science",
      },
      {
        degree: "B.S.",
        institution: "Major University",
        year: 2003,
        field: "Computer Engineering",
      },
    ],
    experience: [
      {
        position: "Senior Research Scientist",
        organization: "Leading Tech Company",
        period: "2015-2024",
        description: "Led IoT and Edge Computing research initiatives",
      },
      {
        position: "Research Engineer",
        organization: "Technology Institute",
        period: "2010-2015",
        description: "Developed AI algorithms for industrial applications",
      },
    ],
    publications: 45,
    citations: 800,
    hIndex: 18,
    googleScholar: "https://scholar.google.com/citations?user=example",
    achievements: [
      "Outstanding Research Award in IoT Technologies",
      "Best Paper Award at AI Conference 2023",
      "Innovation Award for Edge Computing Solutions",
    ],
    currentProjects: [
      "Smart IoT Systems for Industrial Applications",
      "Edge AI for Real-time Image Processing",
      "Distributed Intelligence Networks",
    ],
    status: "active",
    joinDate: "2024-09-01",
  },
  {
    id: "amreen-batool",
    name: "Amreen Batool",
    role: "Ph.D. Student",
    title: "Doctoral Researcher",
    email: "amreen@example.com",
    image: "/Batool.JPG",
    bio: "Amreen Batool is a dedicated Ph.D. student specializing in medical AI and blockchain applications. Her research focuses on developing innovative AI solutions for healthcare challenges, particularly in medical image analysis and secure health data management. She has published several high-impact papers in top-tier journals and conferences.",
    researchInterests: [
      "Medical Image Analysis",
      "Deep Learning for Healthcare",
      "Blockchain in Healthcare",
      "Computer Vision",
      "Smart Agriculture Applications",
      "Renewable Energy Systems",
      "AI Ethics in Medicine",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering (In Progress)",
        institution: "Jeju National University",
        year: 2026,
        field: "Medical AI and Blockchain",
      },
      {
        degree: "M.S. in Computer Science",
        institution: "University of Punjab",
        year: 2020,
        field: "Machine Learning",
      },
      {
        degree: "B.S. in Computer Science",
        institution: "University of the Punjab",
        year: 2018,
      },
    ],
    publications: 25,
    citations: 420,
    hIndex: 12,
    googleScholar: "https://scholar.google.com/citations?user=teUAdhkAAAAJ&hl",
    currentProjects: [
      "Brain Tumor Classification using Multi-path CNN",
      "Blockchain for Secure Medical Records",
      "AI-powered Diagnostic Systems",
    ],
    achievements: [
      "Best Student Paper Award - ICML 2024",
      "Graduate Student Excellence Award 2023",
      "Research Publication Excellence Award 2022",
    ],
    status: "active",
    joinDate: "2021-09-01",
  },
  {
    id: "cyreneo-dofitas",
    name: "Cyreneo Dofitas Jr.",
    role: "Ph.D. Student",
    title: "Doctoral Researcher",
    email: "cyreneo@example.com",
    image: "/Cy1.jpg",
    bio: "Cyreneo Dofitas Jr. is a Ph.D. student focusing on video processing, large language models, and advanced machine learning techniques. His research contributes to the development of intelligent video analysis systems and natural language understanding applications.",
    researchInterests: [
      "Video Processing & Analysis",
      "Large Language Models (LLM)",
      "Natural Language Processing",
      "Computer Vision",
      "Multimodal Learning",
      "Deep Learning Architectures",
      "Real-time Video Analytics",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering (In Progress)",
        institution: "Jeju National University",
        year: 2025,
        field: "Video Processing and NLP",
      },
      {
        degree: "M.S. in Information Technology",
        institution: "Mindanao State University",
        year: 2019,
      },
      {
        degree: "B.S. in Computer Science",
        institution: "Mindanao State University",
        year: 2017,
      },
    ],
    publications: 18,
    citations: 245,
    hIndex: 8,
    googleScholar:
      "https://scholar.google.com/citations?user=UUHDK7MAAAAJ&hl=en&oi=ao",
    currentProjects: [
      "Intelligent Video Surveillance Systems",
      "LLM for Video Content Understanding",
      "Real-time Action Recognition",
    ],
    status: "active",
    joinDate: "2020-03-01",
  },

  {
    id: "kinza-nazir",
    name: "Kinza Nazir",
    role: "Ph.D. Student",
    title: "Doctoral Researcher",
    email: "kinza@example.com",
    image: "/Kinza.jpeg",
    bio: "Kinza Nazir is a Ph.D. student specializing in medical image analysis and computer vision. Her research focuses on developing AI systems for medical diagnosis, particularly in ophthalmology and radiology applications.",
    researchInterests: [
      "Medical Image Analysis",
      "Computer Vision",
      "Deep Learning",
      "Ophthalmology AI",
      "Radiology Applications",
      "Healthcare Informatics",
      "Pattern Recognition",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering (In Progress)",
        institution: "Jeju National University",
        year: 2025,
        field: "Medical Computer Vision",
      },
      {
        degree: "M.S. in Computer Science",
        institution: "University of Engineering and Technology",
        year: 2020,
      },
    ],
    publications: 16,
    citations: 289,
    hIndex: 9,
    currentProjects: [
      "Diabetic Retinopathy Detection",
      "Medical Image Segmentation",
      "AI-assisted Radiology",
    ],
    status: "active",
    joinDate: "2021-09-01",
  },
  {
    id: "hasnain-hyder",
    name: "Hasnain Hyder",
    role: "Ph.D. Student",
    title: "Doctoral Researcher",
    email: "hasnain@example.com",
    image: "/hasnain.jpg",
    bio: "Hasnain Hyder is a Ph.D. student working on computer vision, robotics, and renewable energy applications. His research contributes to the development of intelligent systems for autonomous vehicles and sustainable energy solutions.",
    researchInterests: [
      "Computer Vision",
      "Robotics and Automation",
      "Renewable Energy Systems",
      "Autonomous Vehicles",
      "Deep Learning",
      "IoT Applications",
      "Smart Grid Technology",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering (In Progress)",
        institution: "Jeju National University",
        year: 2026,
        field: "Computer Vision and Robotics",
      },
      {
        degree: "M.S. in Electrical Engineering",
        institution: "NED University",
        year: 2020,
      },
    ],
    publications: 14,
    citations: 198,
    hIndex: 7,
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=5jOnCw4AAAAJ",
    currentProjects: [
      "Road Situation Recognition for AVs",
      "Smart Energy Management Systems",
      "Robotic Vision Systems",
    ],
    status: "active",
    joinDate: "2022-03-01",
  },
  {
    id: "muhammad-waqar",
    name: "Muhammad Waqar",
    role: "Ph.D. Student",
    title: "Doctoral Researcher",
    email: "waqar@example.com",
    image: "/waqarp-png.jpeg",
    bio: "Muhammad Waqar is a Ph.D. student specializing in machine learning, multimodal learning, and natural language processing. His research focuses on developing advanced AI systems that can understand and process multiple types of data simultaneously.",
    researchInterests: [
      "Multimodal Machine Learning",
      "Natural Language Processing",
      "Deep Learning",
      "Artificial Intelligence",
      "Computer Vision",
      "Cross-modal Understanding",
      "Transformer Architectures",
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering (In Progress)",
        institution: "Jeju National University",
        year: 2025,
        field: "Multimodal Learning and NLP",
      },
      {
        degree: "M.S. in Computer Science",
        institution: "COMSATS University",
        year: 2020,
      },
      {
        degree: "B.S. in Computer Science",
        institution: "University of Sargodha",
        year: 2018,
      },
    ],
    publications: 22,
    citations: 315,
    hIndex: 10,
    googleScholar:
      "https://scholar.google.com/citations?hl=en&user=fSifQmcAAAAJ",
    currentProjects: [
      "Multimodal Sentiment Analysis",
      "Cross-modal Information Retrieval",
      "Vision-Language Understanding",
    ],
    status: "active",
    joinDate: "2021-03-01",
  },
];

// Alumni data
export const alumniMembers: TeamMember[] = [
  {
    id: "subhajit-chatterjee",
    name: "Dr. Subhajit Chatterjee",
    role: "Former Ph.D. Student & Post Doc",
    title: "Research Scientist",
    image: "/Subhajit.jpg",
    bio: "Dr. Subhajit Chatterjee completed his Ph.D. and Post-doctoral research at our lab, focusing on medical image analysis and machine learning. He is now working as a Research Scientist at Tampere University, Finland.",
    researchInterests: [
      "Medical Image Analysis",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering",
        institution: "Jeju National University",
        year: 2023
      }
    ],
    publications: 35,
    citations: 567,
    googleScholar: "https://scholar.google.com/citations?user=l0VXI68AAAAJ&hl",
    status: "alumni",
    joinDate: "2018-03-01",
    graduationDate: "2023-08-31",
    currentPosition: "Research Scientist",
    currentAffiliation: "Tampere University, Finland"
  },
  {
    id: "sadiqa-jafari",
    name: "Dr. Sadiqa Jafari",
    role: "Former Ph.D. Student & Post Doc",
    title: "Research Fellow",
    image: "/sadiqa24.jpg",
    bio: "Dr. Sadiqa Jafari completed her Ph.D. and Post-doctoral research focusing on battery degradation prediction and energy systems. She is currently a Research Fellow at Vrije Universiteit Brussel, Belgium.",
    researchInterests: [
      "Energy Systems",
      "Battery Technology",
      "Predictive Modeling",
      "Machine Learning"
    ],
    education: [
      {
        degree: "Ph.D. in Computer Engineering",
        institution: "Jeju National University",
        year: 2023
      }
    ],
    publications: 28,
    citations: 445,
    googleScholar: "https://scholar.google.com/citations?user=x0vGNFwXNfgC&hl=en",
    status: "alumni",
    currentPosition: "Research Fellow",
    currentAffiliation: "Vrije Universiteit Brussel, Belgium"
  }
]

export const facultyMembers = teamMembers.filter(member => member.role.includes("Professor"))
export const currentStudents = teamMembers.filter(member => member.status === "active" && !member.role.includes("Professor"))
export const allAlumni = alumniMembers

export const teamStats = {
  totalMembers: teamMembers.length + alumniMembers.length,
  currentMembers: teamMembers.filter(m => m.status === "active").length,
  faculty: facultyMembers.length,
  phdStudents: currentStudents.filter(s => s.role.includes("Ph.D.")).length,
  masterStudents: currentStudents.filter(s => s.role.includes("Master")).length,
  alumni: alumniMembers.length,
  totalPublications: teamMembers.reduce((sum, member) => sum + (member.publications || 0), 0),
  totalCitations: teamMembers.reduce((sum, member) => sum + (member.citations || 0), 0)
}