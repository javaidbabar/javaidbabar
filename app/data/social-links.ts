import React from 'react';
import { IconName } from 'lucide-react/dynamic';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode | IconName;
  href: string;
  label: string;
}
export const socialLinks: SocialLink[] = [
  {
    icon: React.createElement(Github, { className: "h-5 w-5" }),
    href: "https://github.com/javaidbabar",
    label: "GitHub",
  },
  {
    icon: React.createElement(Linkedin, { className: "h-5 w-5" }),
    href: "https://linkedin.com/in/javaidbabar",
    label: "LinkedIn",
  },
  {
    icon: React.createElement(Twitter, { className: "h-5 w-5" }),
    href: "https://x.com/javaidbabar",
    label: "Twitter",
  },
  {
    icon: React.createElement(Mail, { className: "h-5 w-5" }),
    href: "mailto:javaidbabar@gmail.com",
    label: "Email",
  }
];
