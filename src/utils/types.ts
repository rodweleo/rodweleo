export type SkillProps =  {
  name: string;
  image: string;
}

export type ProjectProps = {
  name: string;
  description: string;
  thumbnail_url: string;
  live_link: string;
  tech_stack: string[];
}

export type WorkExperienceProps = {
  title: string;
  company: string;
  achievements: string[];
  started_at: string;
  ended_at: string;
}

export type BlogPostProps = {
  title: string;
  slug: string;
  description: string;
  markdown: string;
  thumbnail: string;
  tags: string[];
  created_at: string;
  created_by: string;
}

export type ServiceProps = {
  icon: string;
  title: string;
  description: string;
}

export type QuotationProps = {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  services: string[];
  attachments?: FileList
  description: string
  message?: string
}