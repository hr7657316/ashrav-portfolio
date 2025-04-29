// To update your resume:
// 1. Upload your resume to Google Drive
// 2. Right click on the file and select "Get link"
// 3. Make sure "Anyone with the link" is selected, then copy the link
// 4. The link will look like: https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing
// 5. Replace the resume URL below with your new link

export const Bio = {
  name: "Ashrav Gurung",
  roles: [
    "Software Engineer",
    "Machine Learning Enthusiast"
  ],
  description:
    "I am a motivated and versatile individual with a strong foundation in Computer Science and Engineering. Currently pursuing my Bachelor's degree at Lovely Professional University, I have developed expertise in Java, C++, Python, and various web technologies. I am passionate about Machine Learning and Data Science, with hands-on experience in projects involving predictive analytics and data visualization.",
  github: "https://github.com/AshravGurung0804",
  resume: "https://drive.google.com/file/d/1UOtgyNI7mlwJudEvRcKlYEdfkDWs9t11/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/ashrav-gurung-60403b251",
  email: "ashravgurung08@gmail.com",
  mobile: "7448248724"
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "C++", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" }
    ]
  },
  {
    title: "Technologies/Frameworks",
    skills: [
      { name: "Angular", image: "https://angular.io/assets/images/logos/angular/angular.svg" },
      { name: "React JS", image: "https://reactjs.org/logo-og.png" },
      { name: "Node JS", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
    ]
  }
];

export const education = [
  {
    id: 0,
    school: "Lovely Professional University, Punjab",
    date: "2022 – 2026",
    grade: "CGPA: 7.10",
    desc: "Computer Science and Engineering",
    degree: "Bachelor of Technology"
  },
  {
    id: 1,
    school: "Mayor World",
    date: "2021 – 2022",
    grade: "Percentage: 80%",
    desc: "12th with Science",
    degree: "Intermediate"
  },
  {
    id: 2,
    school: "Orchid the International",
    date: "2019 – 2020",
    grade: "Percentage: 80%",
    desc: "10th with CBSE board",
    degree: "Matriculation"
  }
];

export const projects = [
  {
    id: 0,
    title: "Deep Autoencoder-Based Text Generation for Natural Language",
    date: "May 2024 - July 2024",
    description: "Utilized deep autoencoders to generate coherent natural language text by encoding input sequences into a latent representation and reconstructing meaningful text through a decoder. Demonstrated the potential of neural networks in learning semantic patterns for automated content creation and text summarization.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy"],
    category: "machine learning"
  },
  {
    id: 1,
    title: "Predictive Analytics for Customer Churn in E-commerce using Machine Learning",
    date: "July 2024 - Aug 2024",
    description: "Leveraged machine learning to predict customer churn based on historical data, analyzing customer behavior and identifying key patterns. Achieved 85% accuracy in predicting churn, helping businesses take proactive measures for customer retention.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    category: "data science"
  }
];

export const certificates = [
  {
    id: 0,
    title: "IBM Data Science and Analytics",
    date: "August 2022",
    description: "Coursera — https://www.coursera.org/professional-certificates/ibm-data-science"
  },
  {
    id: 1,
    title: "Microsoft AI & ML Engineering Professional Certificate",
    date: "March 2023",
    description: "Coursera — https://www.coursera.org/professional-certificates/microsoft-ai-and-ml-engineering"
  }
];

// Function to fetch projects - currently returns the static projects
// This could be modified in the future to fetch from an API
export const fetchProjects = async () => {
  // Simulating an API call with a small delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 500);
  });
};
