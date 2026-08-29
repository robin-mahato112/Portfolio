import { portfolio } from './portfolioContent.js';

export const projects = portfolio.projects.map((project) => ({
  ...project,
  links: project.linkUrl ? [{ label: project.linkLabel || 'View', href: project.linkUrl }] : [],
}));
