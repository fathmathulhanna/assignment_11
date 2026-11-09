const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  name: String,
  contact: {
    location: String,
    phone: String,
    email: String,
    linkedin: String,
    github: String
  },
  summary: String,
  education: [{
    degree: String,
    institution: String,
    date: String,
    cgpa: String
  }],
  internships: [{
    position: String,
    company: String,
    location: String,
    date: String,
    responsibilities: [String]
  }],
  technicalSkills: [{
    category: String,
    skills: [String]
  }],
  projects: [{
    name: String,
    year: String,
    technologies: String,
    description: [String]
  }],
  leadership: [{
    position: String,
    organization: String,
    year: String,
    responsibilities: [String]
  }]
}, { timestamps: true });

module.exports = mongoose.model("Resume", ResumeSchema);
