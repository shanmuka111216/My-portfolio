export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'AI / ML' | 'Systems / Tools' | 'Web3 / Cloud';
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Intermediate';
    iconColor?: string;
    category?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Internship' | 'Leadership' | 'Community';
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeLabel: string;
  location: string;
  coursework: string[];
  achievements: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  badgeType: 'Award' | 'Certification' | 'Coding';
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitles: string[];
    bio: string;
    longBio: string;
    status: string;
    statusAvailable: boolean;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    leetcode: string;
    codeforces?: string;
    discord: string;
    resumeUrl: string;
  };

  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];

  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: Project[];
  achievements: AchievementItem[];

  codingProfiles: {
    platform: string;
    handle: string;
    statValue: string;
    statLabel: string;
    secondaryStat: string;
    profileUrl: string;
    color: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "B. Shanmuka Sai",

    title: "Computer Science Engineering Student",

    subtitles: [
      "CSE Student",
      "Learning Programming & Web Development",
      "Exploring IoT & Technology",
      "Aspiring Software Developer"
    ],

    bio: "I am a Computer Science Engineering student at REVA University, Bangalore, interested in learning programming, web development, IoT, and emerging technologies.",

    longBio:
      "I am a Computer Science Engineering student at REVA University, Bangalore. I am currently building my programming and technical skills through academic projects, practical learning, and hackathon activities. I enjoy exploring new technologies and working on projects that solve real-world problems. I am continuously learning and improving my knowledge in computer science and software development.",

    status: "Currently Learning & Building Projects",

    statusAvailable: true,

    location: "Bangalore, Karnataka, India",

    email: "your-email@example.com",

    github: "#",

    linkedin: "#",

    leetcode: "#",

    codeforces: "#",

    discord: "#",

    resumeUrl: "#"
  },

  stats: [
    {
      label: "Current CGPA",
      value: "7.01 / 10",
      subtext: "REVA University"
    },
    {
      label: "Course",
      value: "CSE",
      subtext: "Computer Science Engineering"
    },
    {
      label: "Projects",
      value: "2",
      subtext: "IoT & SIH Projects"
    },
    {
      label: "Learning",
      value: "Ongoing",
      subtext: "Building technical skills"
    }
  ],

  education: [
    {
      id: "reva-cse",

      degree: "Bachelor of Technology in Computer Science & Engineering",

      institution: "REVA University",

      period: "2026 - 2027",

      grade: "7.01 / 10",

      gradeLabel: "CGPA",

      location: "Bangalore, Karnataka, India",

      coursework: [
        "Programming in C",
        "Java Programming",
        "Data Structures",
        "Database Management Systems",
        "Computer Science Fundamentals",
        "Web Development"
      ],

      achievements: [
        "Working on academic and practical technology projects.",
        "Participating in project-based learning and hackathon activities."
      ]
    }
  ],

  experience: [],

  skills: [
    {
      name: "Programming",
      iconName: "Code2",
      description: "Currently learning and improving programming fundamentals.",

      skills: [
        {
          name: "C Programming",
          level: "Intermediate"
        },
        {
          name: "Java",
          level: "Intermediate"
        },
        {
          name: "Python",
          level: "Intermediate"
        }
      ]
    },

    {
      name: "Web Development",
      iconName: "Globe",
      description: "Learning the fundamentals of modern web development.",

      skills: [
        {
          name: "HTML",
          level: "Intermediate"
        },
        {
          name: "CSS",
          level: "Intermediate"
        },
        {
          name: "JavaScript",
          level: "Intermediate"
        },
        {
          name: "React",
          level: "Intermediate"
        }
      ]
    },

    {
      name: "Database",
      iconName: "Database",
      description: "Learning database concepts and SQL.",

      skills: [
        {
          name: "SQL",
          level: "Intermediate"
        },
        {
          name: "MySQL",
          level: "Intermediate"
        }
      ]
    },

    {
      name: "Tools & Technologies",
      iconName: "Wrench",
      description: "Tools and technologies I am currently exploring.",

      skills: [
        {
          name: "Git",
          level: "Intermediate"
        },
        {
          name: "GitHub",
          level: "Intermediate"
        },
        {
          name: "VS Code",
          level: "Intermediate"
        },
        {
          name: "IoT",
          level: "Intermediate"
        }
      ]
    }
  ],

  projects: [
    {
      id: "iot-project",

      title: "IoT Project",

      tagline:
        "An IoT-based project developed to explore smart technology and real-world problem solving.",

      description:
        "A practical IoT project developed as part of my engineering learning and project work.",

      longDescription:
        "This project focuses on using IoT concepts to connect technology with a real-world application. The project helped me understand sensors, hardware components, connectivity, and software integration.",

      category: "Systems / Tools",

      tags: [
        "IoT",
        "Sensors",
        "Embedded Systems",
        "Programming"
      ],

      featured: true,

      githubUrl: "#",

      highlights: [
        "Worked on an IoT-based real-world problem.",
        "Explored hardware and software integration.",
        "Learned about sensors and connected systems.",
        "Developed the project as part of engineering project work."
      ]
    },

    {
      id: "sih-project",

      title: "Smart India Hackathon Project",

      tagline:
        "A team-based problem-solving project developed for Smart India Hackathon.",

      description:
        "A hackathon project focused on developing a technology-based solution for a real-world problem.",

      longDescription:
        "This project was developed as part of Smart India Hackathon activities. It provided practical experience in problem identification, solution design, teamwork, presentation, and prototype development.",

      category: "Full Stack",

      tags: [
        "SIH",
        "Problem Solving",
        "Prototype",
        "Team Project"
      ],

      featured: true,

      githubUrl: "#",

      highlights: [
        "Worked as part of a team to solve a real-world problem.",
        "Contributed to solution development and project planning.",
        "Worked on a technology-based prototype.",
        "Gained experience in hackathon presentation and teamwork."
      ]
    }
  ],

  achievements: [],

  codingProfiles: []
};