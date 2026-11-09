const mongoose = require("mongoose");
require("dotenv").config();
const Resume = require("./models/Resume");

const resumeData = {
  name: "FATHIMATHUL HANNA P",
  contact: {
    location: "Kakkodi, Kerala",
    phone: "+91 7736712877",
    email: "fathimathulhannap77@gmail.com",
    linkedin: "https://linkedin.com/in/fathimathul-hanna-p-0b38972a7",
    github: "https://github.com/fathmathulhanna"
  },
  summary:
    "Software Development graduate (B.Voc) pursuing an M.Voc at CUSAT, with internship experience building and testing Java modules and hands-on exposure to web, mobile, and database-driven applications through academic projects. Skilled in Java, Python, JavaScript, Dart, and Flutter, with a strong foundation in OOP, responsive UI design, and full-stack development.",
  education: [
    {
      degree: "Master of Vocation (M.Voc) in Software Development",
      institution: "Cochin University of Science and Technology (CUSAT), Kochi",
      date: "In Progress",
      cgpa: ""
    },
    {
      degree: "Bachelor of Vocation (B.Voc) in Software Development",
      institution: "Farook College (Autonomous), Kozhikode",
      date: "Mar 2026",
      cgpa: "8.66"
    }
  ],
  internships: [
    {
      position: "Software Development Intern",
      company: "M2H Infotech LLP",
      location: "Kozhikode, Kerala",
      date: "Jan 2026 - Mar 2026",
      responsibilities: [
        "Completed an academic-curriculum internship on the UAB WPS and UAB FTS project, developing and testing Java-based modules under guidance from senior developers.",
        "Applied core Java and object-oriented programming concepts to build and debug functional components of the application.",
        "Collaborated with the development team to understand requirements, implement features, and resolve issues within project timelines.",
        "Received a positive performance evaluation for consistency, code quality, and ability to learn new tools quickly."
      ]
    }
  ],
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "Dart", "C", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Flutter", "Bootstrap", "ASP.NET (basic)"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "Hive"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "XAMPP"]
    }
  ],
  projects: [
    {
      name: "PaletteView - Online Painting Marketplace",
      year: "2025",
      technologies: "Flutter, Dart, Firebase",
      description: [
        "Developed a mobile application enabling artists to showcase and sell paintings, including browsing, listing, and purchase flows.",
        "Implemented secure cloud data storage using Firebase and streamlined buying/selling interactions for a smooth user experience."
      ]
    },
    {
      name: "Fresh Steps - Shoe Cleaning Service Website",
      year: "2024",
      technologies: "HTML, CSS, JavaScript, PHP",
      description: [
        "Built a responsive web platform for booking shoe-cleaning services, including free pickup and delivery scheduling.",
        "Implemented service listings, a contact form and a clean, user-friendly UI to improve service accessibility and booking conversion."
      ]
    },
    {
      name: "Spectacles & Eyewear E-Commerce Website",
      year: "2023",
      technologies: "HTML, CSS, JavaScript, PHP",
      description: [
        "Built a responsive product showcase website with categories, navigation, and a contact form backed by XAMPP."
      ]
    }
  ],
  leadership: [
    {
      position: "Quiz Event Coordinator",
      organization: "Skilla Tech Fest, Farook College",
      year: "2025",
      responsibilities: [
        "Organized and managed quiz events for 100+ participants at the national-level tech fest.",
        "Coordinated logistics and ensured smooth execution of competitions across multiple rounds."
      ]
    }
  ]
};

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Resume.deleteMany({});
    await Resume.create(resumeData);
    console.log("Resume data inserted successfully.");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
}

seedDatabase();
