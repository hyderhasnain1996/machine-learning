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
    id: "pub-2025-009",
    title: "Knowledge Distillation-Based Lightweight Model for Solar Cell Defect Classification",
    authors: ["Hasnain Hyder", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "Multimedia Information Technology and Applications (MITA 2025)",
    year: 2025,
    impactFactor: "N/A",
    doi: "10.1007/978-981-95-3141-7_5",
    link: "https://link.springer.com/chapter/10.1007/978-981-95-3141-7_5",
    category: "computer-vision",
    tags: ["Knowledge Distillation", "Solar Cell", "Defect Classification", "Lightweight Model", "Computer Vision"],
    type: "conference",
    featured: true,
    abstract: "This paper presents a knowledge distillation-based approach for developing lightweight models for solar cell defect classification. The method enables efficient deployment of defect detection systems while maintaining high classification accuracy, making it suitable for real-time quality control in solar cell manufacturing.",
    citations: 0
  },
  {
    id: "pub-2025-004",
    title: "Hybrid Framework Combining Diffusion-Based Image Augmentation and Feature Level SMOTE for Addressing Extreme Class Imbalance",
    authors: ["Raj Kumar", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.6",
    doi: "10.1109/ACCESS.2025.3000000",
    link: "https://ieeexplore.ieee.org/document/",
    category: "machine-learning",
    tags: ["Class Imbalance", "Data Augmentation", "SMOTE", "Diffusion Models", "Deep Learning"],
    type: "journal",
    featured: true,
    abstract: "This paper presents a hybrid framework that combines diffusion-based image augmentation techniques with feature-level SMOTE (Synthetic Minority Over-sampling Technique) to effectively address extreme class imbalance problems in machine learning datasets. The proposed approach improves model performance on minority classes while maintaining overall classification accuracy.",
    citations: 1
  },
  {
    id: "pub-2024-005",
    title: "Enhancing Early-Stage Diabetic Retinopathy Detection Using a Weighted Ensemble of Deep Neural Networks",
    authors: ["Kinza Nazir", "Jisoo Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.9",
    doi: "10.1109/ACCESS.2024.3381722",
    link: "https://ieeexplore.ieee.org/document/10477913",
    category: "medical-ai",
    tags: ["Diabetic Retinopathy", "Ensemble Learning", "Deep Learning", "Early Detection", "Ophthalmology"],
    type: "journal",
    featured: true,
    abstract: "Diabetic Retinopathy (DR) is one of the biggest reasons for vision loss. It is a fatal eye disease damaging the retina, which is the light-sensitive tissue in the rear of the eye. Ophthalmologists use fundus images to capture retinal inner structures to find broken blood vessels and scars. To detect DR on time, early diagnosis is very important which is often not possible due to the scarcity of expert ophthalmologists. This research proposes a weighted ensemble of deep neural networks for enhanced early-stage diabetic retinopathy detection.",
    citations: 13
  },
  {
    id: "pub-2025-006",
    title: "Advanced Agricultural Query Resolution Using Ensemble-Based Large Language Models",
    authors: ["Cyreneo Dofitas", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.6",
    doi: "10.1109/ACCESS.2025.3000000",
    link: "https://ieeexplore.ieee.org/document/",
    category: "nlp",
    tags: ["Large Language Models", "Agriculture", "Ensemble Learning", "Query Resolution", "Smart Farming"],
    type: "journal",
    featured: true,
    abstract: "Effective knowledge retrieval is crucial for addressing challenges related to optimization, such as pest management, soil health and crop productivity. Current single-model approaches struggle with limited accuracy, inconsistent responses, and inability to handle the increasing complexity of agricultural data, leading to unreliable recommendations for farmers. This study presents an ensemble-based approach using multiple large language models to improve agricultural query resolution accuracy and reliability.",
    citations: 2
  },
  {
    id: "pub-2025-003",
    title: "LightSTATE: A Generalized Framework for Real-Time Human Activity Detection Using Edge-Based Video Processing and Vision Language Models",
    authors: ["Anik Debnath", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.9",
    doi: "10.1109/ACCESS.2025.3000000",
    link: "https://ieeexplore.ieee.org/document/",
    category: "computer-vision",
    tags: ["Human Activity Detection", "Edge Computing", "Video Processing", "Vision Language Models", "Real-Time"],
    type: "journal",
    featured: true,
    abstract: "Human activity detection plays a vital role in applications such as healthcare monitoring, smart environments, and security surveillance. However, traditional methods often rely on computationally intensive models, which are unsuitable for edge devices with limited resources. This paper presents LightSTATE, a generalized framework for real-time human activity detection using edge-based video processing and vision language models.",
    citations: 1
  },
  {
    id: "pub-2025-005",
    title: "AETUnet: Enhancing Retinal Segmentation With Parameter-Efficient UNet Architecture and Lightweight Attention Mechanism",
    authors: ["Kinza Nazir", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.6",
    doi: "10.1109/ACCESS.2025.3000000",
    link: "https://ieeexplore.ieee.org/document/",
    category: "medical-ai",
    tags: ["Retinal Segmentation", "UNet", "Attention Mechanism", "Medical Imaging", "Diabetic Retinopathy"],
    type: "journal",
    featured: true,
    abstract: "Diabetic retinopathy (DR) is a leading cause of vision loss in working-age adults, making early and accurate detection crucial. This paper presents AETUnet (Attention Enhanced Transformer UNet), a new lightweight architecture to improve on-response retinal lesion segmentation. By combining expanded convolutions with a lightweight attention mechanism, AETUnet improved segmentation accuracy while remaining computationally efficient. Evaluated on the DRIVE and IDRID datasets, AETUnet has demonstrated superior performance in retinal vessel and lesion segmentation.",
    citations: 1
  },
  {
    id: "pub-2025-007",
    title: "TEF-PLM: A Tabular and Embeddings Fusion Framework using Pretrained Language Model for enhanced electric vehicle energy forecasting",
    authors: ["Muhammad Waqar", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "Energy Reports",
    year: 2025,
    impactFactor: "5.2",
    doi: "10.1016/j.egyr.2025.11.004",
    link: "https://doi.org/10.1016/j.egyr.2025.11.004",
    category: "energy-systems",
    tags: ["Electric Vehicles", "Energy Forecasting", "Pretrained Language Models", "Tabular Data", "Deep Learning"],
    type: "journal",
    featured: true,
    abstract: "Proposes TEF-PLM, a hybrid framework combining PLM-based semantic embeddings with tabular features for improved EV energy prediction. Evaluates sequential and non-sequential models with PCA- and AE-reduced embeddings for efficient forecasting. This innovative approach leverages pretrained language models to enhance the accuracy of electric vehicle energy consumption predictions.",
    citations: 0
  },
  {
    id: "pub-2025-008",
    title: "A Stacking Ensemble Framework Leveraging Synthetic Data for Accurate and Stable Crop Yield Forecasting",
    authors: ["Muhammad Waqar", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2025,
    impactFactor: "3.6",
    doi: "10.1109/ACCESS.2025.3591802",
    link: "https://ieeexplore.ieee.org/document/11091272",
    category: "machine-learning",
    tags: ["Ensemble Learning", "Crop Yield Forecasting", "Synthetic Data", "Agriculture", "Time Series"],
    type: "journal",
    featured: true,
    abstract: "With the rapid increase in world's population and changing climate patterns, accurate crop yield forecasting is essential to ensure food security and sustainable agriculture. This study presents a yield prediction framework consisting of Stacking Ensemble Model (SEM) and its Optimized variant (OSEM), which integrates real-world agricultural data with synthetic data generated using the Prophet time-series model. The ensemble comprises Random Forest, XGBoost, Decision Tree, and K-Nearest Neighbors as base learners, with an Extra Trees Regressor as the meta-learner. Results achieved R² = 0.996 and MAE = 0.185 t/ha on diverse crop datasets.",
    citations: 2
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
    authors: ["Cyreneo Dofitas Jr", "Joon-Min Gil", "Yung-Cheol Byun"],
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
    id: "pub-2024-006",
    title: "Enhanced Sentiment Analysis and Topic Modeling During the Pandemic Using Automated Latent Dirichlet Allocation",
    authors: ["Amreen Batool", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.6",
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
    authors: ["Kinza Nazir", "Yung-Cheol Byun"],
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
    authors: ["Kinza Nazir", "Yong-Woon Kim", "Yung-Cheol Byun"],
    journal: "IEEE Access",
    year: 2024,
    impactFactor: "3.6",
    doi: "10.1109/ACCESS.2024.10960296",
    link: "https://ieeexplore.ieee.org/abstract/document/10960296",
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