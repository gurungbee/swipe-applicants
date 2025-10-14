import type { Applicant } from "../types/applicant"

export const applicants: Applicant[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    email: "sarah.chen@techflow.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    photo:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Experienced product manager with a passion for creating innovative solutions that drive business growth and enhance user experiences. Skilled in Agile methodologies, data-driven decision making, and cross-functional team leadership.",
    experience: [
      {
        company: "TechFlow",
        role: "Senior Product Manager",
        duration: "2018 - Present",
        description:
          "Lead a team of 10 to develop and launch cutting-edge SaaS products, resulting in a 40% increase in user engagement and $2M in new annual recurring revenue.",
      },
      {
        company: "InnovateCorp",
        role: "Product Manager",
        duration: "2015 - 2018",
        description:
          "Managed the product lifecycle for a B2B analytics platform, driving a 25% year-over-year growth in user adoption.",
      },
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "MBA, Technology Management",
        year: "2015",
      },
      {
        institution: "University of California, Berkeley",
        degree: "BS, Computer Science",
        year: "2010",
      },
    ],
    skills: [
      "Product Strategy",
      "Agile/Scrum",
      "Data Analytics",
      "User Research",
      "A/B Testing",
      "Wireframing",
      "Product Roadmapping",
    ],
    languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Intermediate)"],
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    email: "michael.rodriguez@innovatesphere.com",
    phone: "+1 (555) 234-5678",
    location: "Austin, TX",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Visionary technology leader with over 10 years of experience building and scaling engineering teams. Expert in cloud architecture, microservices, and leading digital transformation initiatives for enterprise organizations.",
    experience: [
      {
        company: "InnovateSphere",
        role: "Chief Technology Officer",
        duration: "2019 - Present",
        description:
          "Architected scalable cloud infrastructure serving 5M+ users. Led technical strategy and managed team of 50+ engineers across multiple product lines.",
      },
      {
        company: "CloudVenture",
        role: "VP of Engineering",
        duration: "2015 - 2019",
        description:
          "Built engineering organization from ground up. Implemented DevOps practices reducing deployment time by 70%.",
      },
    ],
    education: [
      {
        institution: "MIT",
        degree: "MS, Computer Science",
        year: "2013",
      },
      {
        institution: "University of Texas",
        degree: "BS, Software Engineering",
        year: "2011",
      },
    ],
    skills: ["Cloud Architecture", "Team Leadership", "System Design", "DevOps", "Kubernetes", "Python", "Go"],
    languages: ["English (Native)", "Spanish (Native)"],
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Operations Director",
    email: "emily.watson@cloudscale.com",
    phone: "+1 (555) 345-6789",
    location: "Seattle, WA",
    photo:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Strategic operations leader specializing in process optimization and supply chain management. Proven track record of reducing operational costs while improving service quality and team efficiency across global operations.",
    experience: [
      {
        company: "CloudScale",
        role: "Operations Director",
        duration: "2017 - Present",
        description:
          "Streamlined operations across 15 locations, achieving 30% cost reduction. Implemented new inventory management system improving accuracy by 95%.",
      },
      {
        company: "LogiTech Solutions",
        role: "Operations Manager",
        duration: "2014 - 2017",
        description:
          "Managed day-to-day operations for regional distribution center. Increased on-time delivery rate from 82% to 97%.",
      },
    ],
    education: [
      {
        institution: "Harvard Business School",
        degree: "MBA, Operations Management",
        year: "2014",
      },
      {
        institution: "University of Washington",
        degree: "BS, Industrial Engineering",
        year: "2010",
      },
    ],
    skills: [
      "Process Optimization",
      "Supply Chain",
      "Lean Six Sigma",
      "Project Management",
      "Data Analysis",
      "Team Leadership",
    ],
    languages: ["English (Native)", "French (Intermediate)"],
  },
  {
    id: "4",
    name: "James Kim",
    role: "Engineering Lead",
    email: "james.kim@datapro.com",
    phone: "+1 (555) 456-7890",
    location: "New York, NY",
    photo:
      "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Full-stack engineering leader with deep expertise in building high-performance web applications. Passionate about clean code, mentoring junior developers, and implementing best practices across the entire software development lifecycle.",
    experience: [
      {
        company: "DataPro",
        role: "Engineering Lead",
        duration: "2018 - Present",
        description:
          "Lead team of 12 engineers building real-time data analytics platform. Improved system performance by 60% through architectural improvements.",
      },
      {
        company: "StartupTech",
        role: "Senior Software Engineer",
        duration: "2015 - 2018",
        description:
          "Developed core features for customer-facing applications serving 2M+ users. Mentored 5 junior engineers.",
      },
    ],
    education: [
      {
        institution: "Carnegie Mellon University",
        degree: "MS, Software Engineering",
        year: "2015",
      },
      {
        institution: "UCLA",
        degree: "BS, Computer Science",
        year: "2013",
      },
    ],
    skills: ["React", "Node.js", "PostgreSQL", "System Architecture", "TypeScript", "AWS", "Team Leadership"],
    languages: ["English (Native)", "Korean (Fluent)"],
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "VP of Technology",
    email: "lisa.thompson@futurenet.com",
    phone: "+1 (555) 567-8901",
    location: "Boston, MA",
    photo:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary:
      "Transformational technology executive with 12+ years driving innovation in fintech and enterprise software. Expert at aligning technology strategy with business objectives, building high-performing teams, and delivering solutions at scale.",
    experience: [
      {
        company: "FutureNet",
        role: "VP of Technology",
        duration: "2016 - Present",
        description:
          "Oversee technology strategy for $100M+ revenue organization. Led digital transformation initiative resulting in 45% operational efficiency gain.",
      },
      {
        company: "FinTech Innovations",
        role: "Director of Engineering",
        duration: "2012 - 2016",
        description:
          "Built and scaled engineering team from 8 to 40 members. Launched mobile banking platform used by 1M+ customers.",
      },
    ],
    education: [
      {
        institution: "MIT Sloan School of Management",
        degree: "MBA, Technology & Innovation",
        year: "2012",
      },
      {
        institution: "Boston University",
        degree: "BS, Computer Engineering",
        year: "2008",
      },
    ],
    skills: [
      "Technology Strategy",
      "Digital Transformation",
      "Team Building",
      "Cloud Computing",
      "Cybersecurity",
      "Budget Management",
    ],
    languages: ["English (Native)", "German (Intermediate)"],
  },
]
