/**
 * Jaswanth Ande - Portfolio Project Data
 * Accurate data matching resume and professional background
 */

const portfolioProjects = [
  {
    id: "resume-parser",
    title: "AI-Based Resume Parser and Candidate Screening System",
    category: "ai",
    badge: "Flagship AI Project",
    subtitle: "Automated NLP & ML Candidate Screening Pipeline",
    shortDescription: "An automated resume parsing and candidate screening system that extracts structured candidate information from PDF/DOCX resumes and evaluates applicants against target job descriptions.",
    technologies: ["Python", "NLP", "NLTK", "scikit-learn", "RegEx"],
    keyFeatures: [
      "PDF/DOCX resume parsing",
      "Contact information extraction",
      "Technical skill extraction",
      "Education extraction",
      "NLP preprocessing",
      "TF-IDF feature extraction",
      "Cosine similarity",
      "Candidate ranking",
      "Structured JSON output"
    ],
    githubUrl: "https://github.com/Jaswanthande",
    details: {
      problem: "Manual resume screening is time-consuming, inconsistent, and difficult to scale across hundreds of unstructured applicant files in varied formats (.pdf and .docx).",
      solution: "Engineered an end-to-end automated screening pipeline in Python that extracts candidate metadata, parses technical proficiencies and education, and calculates semantic match scores against job descriptions using NLP and vector similarity.",
      technologiesBreakdown: [
        { name: "Python", role: "Core programming language for parsing and pipeline execution" },
        { name: "NLTK", role: "Tokenization, stop-word removal, and vocabulary matching" },
        { name: "scikit-learn", role: "TF-IDF feature extraction & cosine similarity calculation" },
        { name: "RegEx", role: "Pattern matching for emails, phone numbers, and profile URLs" },
        { name: "JSON", role: "Standardized output structure for recruiter evaluation" }
      ],
      technicalImplementation: [
        "Ingested unstructured text from multi-format documents (PDF and Word).",
        "Implemented targeted regex patterns to extract contact numbers, email addresses, and portfolio links.",
        "Created an NLP preprocessing workflow with tokenization, stop-word filtering, and lemmatization via NLTK.",
        "Built a vectorization module using TF-IDF from scikit-learn to convert both resume profiles and targeted job descriptions into vector spaces.",
        "Computed cosine similarity between candidate vectors and job requirement vectors to rank applicants objectively.",
        "Generated clean, validated JSON schemas containing parsed attributes and matching scores for instant recruiter review."
      ],
      results: [
        "Automated extraction of applicant data into structured schemas.",
        "Enabled objective, semantic candidate ranking against specific job requirements.",
        "Delivered a practical software solution combining NLP and Python data processing."
      ]
    }
  },
  {
    id: "fundraiser-platform",
    title: "Fundraiser & Crowdfunding Web Platform",
    category: "fullstack",
    badge: "Full-Stack MERN",
    subtitle: "MERN Platform with Real-Time Goal Visualization",
    shortDescription: "A full-stack MERN crowdfunding platform supporting campaign creation, donor contribution tracking, and fundraising goal visualization.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose"],
    keyFeatures: [
      "User/campaign management",
      "Donation tracking",
      "Fundraising goals",
      "Responsive React UI",
      "REST APIs",
      "MongoDB data models",
      "Mongoose integration"
    ],
    githubUrl: "https://github.com/Jaswanthande",
    details: {
      problem: "Fundraising initiatives need transparent, accessible digital tools to engage supporters, track incoming contributions, and clearly display campaign milestones in real time.",
      solution: "Developed a full-stack MERN crowdfunding web application offering clean campaign creation, donor contribution logs, visual goal trackers, and dependable REST API communication.",
      technologiesBreakdown: [
        { name: "React.js", role: "Interactive, component-based frontend with state management" },
        { name: "Node.js & Express.js", role: "Asynchronous backend REST API services" },
        { name: "MongoDB & Mongoose", role: "NoSQL document storage, schema validation, and CRUD operations" },
        { name: "RESTful Architecture", role: "JSON endpoints for campaign and donation operations" }
      ],
      technicalImplementation: [
        "Constructed dynamic, reusable React components with client-side state handling and responsive CSS styling.",
        "Built RESTful API routes in Express.js to process campaign submissions, donation logging, and detail fetching.",
        "Designed MongoDB schemas using Mongoose with schema validation, required attributes, and nested donation arrays.",
        "Managed asynchronous client-server communication using JSON payloads with error handling and status code conventions.",
        "Maintained version control with Git and GitHub, employing feature branching and code reviews."
      ],
      results: [
        "Engineered an interactive crowdfunding workflow with real-time goal tracking.",
        "Implemented full-stack CRUD capabilities backed by schema-validated MongoDB persistence.",
        "Ensured responsive design and seamless cross-device compatibility."
      ]
    }
  },
  {
    id: "object-color-detection",
    title: "AI-Enhanced Real-Time Object & Color Detection System",
    category: "ai",
    badge: "Computer Vision",
    subtitle: "High-Speed Video Inference & HSV Color Segmentation",
    shortDescription: "A real-time computer vision system capable of detecting and localizing multiple objects through live webcam feeds while identifying primary color distributions.",
    technologies: ["Python", "OpenCV", "YOLO", "CNN", "NumPy"],
    keyFeatures: [
      "Real-time webcam detection",
      "YOLO object detection",
      "CNN-based vision",
      "Multi-class object localization",
      "HSV color masking",
      "NumPy vectorization",
      "Low-latency bounding-box rendering"
    ],
    githubUrl: "https://github.com/Jaswanthande",
    details: {
      problem: "Computer vision applications in surveillance and robotic automation require simultaneous object detection and precise color segmentation with minimal inference latency.",
      solution: "Built a real-time computer vision pipeline in Python combining YOLO and CNN models with OpenCV HSV color space masking and NumPy vectorization for rapid detection and localization.",
      technologiesBreakdown: [
        { name: "Python", role: "Core language orchestrating the vision processing pipeline" },
        { name: "OpenCV", role: "Live camera stream acquisition, frame processing, and drawing routines" },
        { name: "YOLO & CNN", role: "Deep learning models for multi-class object localization" },
        { name: "NumPy", role: "High-speed matrix math and vectorized array manipulations" }
      ],
      technicalImplementation: [
        "Configured OpenCV VideoCapture for low-latency live webcam frame streaming.",
        "Integrated pre-trained YOLO and CNN layers to detect and localize multiple object classes across frames.",
        "Converted BGR frames into HSV color space to decouple intensity from chrominance for robust color thresholding.",
        "Applied NumPy array vectorization to accelerate pixel mask evaluations without slow nested loops.",
        "Rendered bounding boxes, confidence ratings, and dominant color labels onto output video streams with low latency."
      ],
      results: [
        "Achieved responsive multi-class object detection on live webcam feeds.",
        "Successfully coupled deep neural network detection with accurate HSV color masking.",
        "Demonstrated optimized NumPy vectorization for high-throughput image frame computations."
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
