import { links } from './links';
import { portfolio } from './portfolioContent.js';

export const profile = {
  name: portfolio.site.name,
  title: portfolio.site.title,
  intro: portfolio.hero.summary,
  location: portfolio.site.location,
  email: links.email,
  github: links.github,
  linkedin: links.linkedin,
  resume: links.resume,
};
