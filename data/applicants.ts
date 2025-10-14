import { Applicant } from "../types/applicant";

export const applicants: Applicant[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    email: "sarah.chen@techflow.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    summary: "Experienced product manager with a passion for creating innovative solutions that drive business growth and enhance user experiences. Skilled in Agile methodologies, data-driven decision making, and cross-functional team leadership.",
    experience: [
      {
        company: "TechFlow",
        role: "Senior Product Manager",
        duration: "2018 - Present",
        description: "Lead a team of 10 to develop and launch cutting-edge SaaS products, resulting in a 40% increase in user engagement and $2M in new annual recurring revenue."
      },
      {
        company: "InnovateCorp",
        role: "Product Manager",
        duration: "2015 - 2018",
        description: "Managed the product lifecycle for a B2B analytics platform, driving a 25% year-over-year growth in user adoption."
      }
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "MBA, Technology Management",
        year: "2015"
      },
      {
        institution: "University of California, Berkeley",
        degree: "BS, Computer Science",
        year: "2010"
      }
    ],
    skills: ["Product Strategy", "Agile/Scrum", "Data Analytics", "User Research", "A/B Testing", "Wireframing", "Product Roadmapping"],
    languages: ["English (Native)", "Mandarin (Fluent)", "Spanish (Intermediate)"]
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "CTO",
    email: "michael.rodriguez@innovatesphere.com",
    phone: "+1 (555) 234-5678",
    summary: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    experience: "10 years",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Operations Director",
    email: "emily.watson@cloudscale.com",
    phone: "+1 (555) 345-6789",
    summary: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    experience: "7 years",
    photo: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "James Kim",
    role: "Engineering Lead",
    email: "james.kim@datapro.com",
    phone: "+1 (555) 456-7890",
    summary: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    experience: "8 years",
    photo: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "VP of Technology",
    email: "lisa.thompson@futurenet.com",
    phone: "+1 (555) 567-8901",
    summary: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    experience: "12 years",
    photo: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

