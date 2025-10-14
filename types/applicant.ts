export interface Applicant {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  photo: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}
