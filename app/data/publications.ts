export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  impactFactor: string
  doi: string
  link: string
  category: string
  tags: string[]
  abstract?: string
  citations?: number
  type: 'journal' | 'conference' | 'book' | 'patent'
  featured?: boolean
}

export const publications: Publication[] = [
  {
    id: "pub-2025-000",
    title: "A hybrid deep learning framework for multivariate energy forecasting and peak load prediction in electric vehicle charging infrastructure",
    authors: ["Muhammad Waqar", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "Applied Energy",
    year: 2025,
  impactFactor: "11",
    doi: "",
    link: "https://www.sciencedirect.com/science/article/pii/S0306261925016940?via%3Dihub",
    category: "energy-systems",
    tags: ["Deep Learning", "Energy Forecasting", "EV Charging", "Load Prediction"],
    type: "journal",
    featured: true,
    abstract: "A hybrid deep learning framework for multivariate energy forecasting and peak load prediction in electric vehicle charging infrastructure.",
    citations: 0
  },
  {
    id: "pub-2025-002",
    title: "A Robust Deep Learning Framework for Mitigating Label Noise With Dual Selective Attention",
    authors: ["Hasnain Hyder", "Gulsher Baloch", "Amreen Batool", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.6",
    doi: "",
    link: "https://ieeexplore.ieee.org/abstract/document/11062817",
    category: "machine-learning",
    tags: ["Label Noise", "Attention", "Deep Learning", "Robustness"],
    type: "journal",
    featured: true,
    abstract: "A robust deep learning framework (Dual Selective Attention Network - DSAN) proposed to improve robustness against mislabeled data in deep learning tasks.",
    citations: 2
  },
  {
    id: "pub-2025-001",
    title: "A Lightweight multi-path convolutional neural network architecture using optimal features selection for multiclass classification of brain tumor using magnetic resonance images",
    authors: ["Amreen Batool", "Yung-Cheol Byun"],
    journal: "Results in Engineering",
    year: 2025,
    impactFactor: "6.0",
    doi: "10.1016/j.rineng.2025.104327",
    link: "https://doi.org/10.1016/j.rineng.2025.104327",
    category: "medical-ai",
    tags: ["Deep Learning", "Medical Imaging", "Brain Tumor", "CNN", "Feature Selection"],
    type: "journal",
    featured: true,
    abstract: "This paper presents a novel lightweight multi-path convolutional neural network architecture specifically designed for brain tumor classification using MRI images. The proposed method incorporates optimal feature selection techniques to enhance classification accuracy while maintaining computational efficiency.",
    citations: 15
  },
  {
    id: "pub-2024-001",
    title: "Optimized XGBoost modeling for accurate battery capacity degradation prediction",
    authors: ["Sadiqa Jafari", "Ji-Hyeok Yang", "Yung-Cheol Byun"],
    journal: "Results in Engineering",
    year: 2024,
    impactFactor: "6.0",
    doi: "10.1016/j.rineng.2024.102786",
    link: "https://doi.org/10.1016/j.rineng.2024.102786",
    category: "machine-learning",
    tags: ["XGBoost", "Battery Degradation", "Predictive Modeling", "Energy Systems"],
    type: "journal",
    featured: true,
    abstract: "An optimized XGBoost model for predicting battery capacity degradation with high accuracy, enabling better battery management systems and extending battery life in various applications.",
    citations: 28
  },
  {
    id: "pub-2024-002",
    title: "Early Detection of Multiclass Skin Lesions Using Transfer Learning-based IncepX-Ensemble Model",
    authors: ["Subhajit Chatterjee", "Joon-Min Gil", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.4",
    doi: "10.1109/ACCESS.2024.3432904",
    link: "https://doi.org/10.1109/ACCESS.2024.3432904",
    category: "medical-ai",
    tags: ["Transfer Learning", "Skin Cancer", "Ensemble Learning", "Medical Diagnosis"],
    type: "journal",
    featured: true,
    abstract: "A novel transfer learning-based ensemble model for early detection and classification of multiple types of skin lesions, achieving state-of-the-art performance in medical image analysis.",
    citations: 42
  },
  {
    id: "pub-2024-003",
    title: "Brain tumor detection with integrating traditional and computational intelligence approaches across diverse imaging modalities",
    authors: ["Amreen Batool", "Yung-Cheol Byun"],
    journal: "Computers in Biology and Medicine",
    year: 2024,
    impactFactor: "7.7",
    doi: "10.1016/j.compbiomed.2024.108412",
    link: "https://doi.org/10.1016/j.compbiomed.2024.108412",
    category: "medical-ai",
    tags: ["Brain Tumor", "Multi-modal Imaging", "Traditional Methods", "AI Integration"],
    type: "journal",
    featured: true,
    abstract: "Comprehensive analysis of brain tumor detection methods combining traditional image processing techniques with modern computational intelligence approaches across various imaging modalities.",
    citations: 67
  },
  {
    id: "pub-2024-004",
    title: "Multi-Directional Long-Term Recurrent Convolutional Network for Road Situation Recognition",
    authors: ["Hasnain Hyder", "Yung-Cheol Byun"],
    journal: "Sensors",
    year: 2024,
    impactFactor: "3.4",
    doi: "10.3390/s24144618",
    link: "https://doi.org/10.3390/s24144618",
    category: "computer-vision",
    tags: ["Road Recognition", "RNN", "CNN", "Autonomous Vehicles", "Traffic Analysis"],
    type: "journal",
    abstract: "Novel multi-directional LSTM-CNN architecture for enhanced road situation recognition in autonomous vehicle applications.",
    citations: 23
  },
  {
    id: "pub-2024-005",
    title: "Enhancing Early-Stage Diabetic Retinopathy Detection Using a Weighted Ensemble of Deep Neural Networks",
    authors: ["Kinza Nazir", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.47",
    doi: "10.1109/ACCESS.2024.3432867",
    link: "https://doi.org/10.1109/ACCESS.2024.3432867",
    category: "medical-ai",
    tags: ["Diabetic Retinopathy", "Ensemble Learning", "Early Detection", "Ophthalmology"],
    type: "journal",
    abstract: "Advanced ensemble deep learning approach for early-stage diabetic retinopathy detection with improved sensitivity and specificity.",
    citations: 31
  },
  {
    id: "pub-2024-006",
    title: "Enhanced Sentiment Analysis and Topic Modeling During the Pandemic Using Automated Latent Dirichlet Allocation",
    authors: ["Muhammad Waqar", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.47",
    doi: "10.1109/ACCESS.2024.3411717",
    link: "https://doi.org/10.1109/ACCESS.2024.3411717",
    category: "nlp",
    tags: ["Sentiment Analysis", "Topic Modeling", "LDA", "Pandemic Analysis", "NLP"],
    type: "journal",
    abstract: "Automated sentiment analysis and topic modeling framework for understanding public sentiment during pandemic using advanced NLP techniques.",
    citations: 19
  },
  {
    id: "pub-2024-007",
    title: "AETUnet: Enhancing Retinal Segmentation With Parameter-Efficient UNet Architecture and Lightweight Attention Mechanism",
    authors: ["Nazrul Amin", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.4",
    doi: "10.1109/ACCESS.2025.3539372",
    link: "https://doi.org/10.1109/ACCESS.2025.3539372",
    category: "medical-ai",
    tags: ["Retinal Segmentation", "UNet", "Attention Mechanism", "Medical Imaging"],
    type: "journal",
    abstract: "Parameter-efficient UNet architecture with lightweight attention mechanism for enhanced retinal vessel segmentation.",
    citations: 12
  },
  {
    id: "pub-2024-008",
    title: "Predictive PID Control for Automated Guided Vehicles Using Genetic Algorithm and Machine Learning",
    authors: ["Yu-Seok Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.4",
    doi: "10.1109/ACCESS.2025.3559072",
    link: "https://doi.org/10.1109/ACCESS.2025.3559072",
    category: "robotics",
    tags: ["AGV", "PID Control", "Genetic Algorithm", "Predictive Control", "Robotics"],
    type: "journal",
    abstract: "Intelligent PID control system for automated guided vehicles using genetic algorithm optimization and machine learning prediction.",
    citations: 8
  }
]

export const publicationCategories = [
  { id: "all", name: "All Publications", count: publications.length },
  { id: "medical-ai", name: "Medical AI", count: publications.filter(p => p.category === "medical-ai").length },
  { id: "machine-learning", name: "Machine Learning", count: publications.filter(p => p.category === "machine-learning").length },
  { id: "computer-vision", name: "Computer Vision", count: publications.filter(p => p.category === "computer-vision").length },
  { id: "nlp", name: "Natural Language Processing", count: publications.filter(p => p.category === "nlp").length },
  { id: "robotics", name: "Robotics", count: publications.filter(p => p.category === "robotics").length }
]

export const featuredPublications = publications.filter(p => p.featured)