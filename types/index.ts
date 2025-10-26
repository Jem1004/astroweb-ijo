// Type definitions for Astro Digital Solution website

// Service data types
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  category?: string;
  features?: string[];
}

// Portfolio data types
export interface Portfolio {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link?: string;
  technologies?: string[];
  client?: string;
  year?: number;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ContactFormState {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitMessage: string;
  submitStatus: 'idle' | 'success' | 'error';
}

// Client testimonial types
export interface Client {
  id: number;
  name: string;
  company: string;
  role: string;
  testimonial: string;
  avatar?: string;
  rating?: number;
}

// Brand types
export interface Brand {
  id: number;
  name: string;
  logo: string;
  link?: string;
  description?: string;
}

// Company info types
export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
}

// Team member types
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  description: string;
  image: string;
  linkedin?: string;
  email?: string;
}

// Statistics types
export interface Statistic {
  id: number;
  value: string;
  label: string;
  description?: string;
}

// Process step types
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  stepNumber: number;
}

// Filter types for portfolio
export type PortfolioFilter = 'all' | 'web' | 'mobile' | 'ui-ux' | 'branding' | 'digital-marketing';

// Form validation error types
export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

// Button component props types
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  target?: '_blank' | '_self';
  rel?: string;
  disabled?: boolean;
}

// Card component props types
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
  hover?: boolean;
}

// Section component props types
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}