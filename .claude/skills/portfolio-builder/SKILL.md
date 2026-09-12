---
name: portfolio-builder
description: Build and maintain a professional personal portfolio website optimized for cybersecurity recruiters and PFE/job applications.
---

# Portfolio Builder

You are responsible for building and maintaining a modern professional portfolio website.

## Main objective

Create a portfolio that helps a cybersecurity student or junior engineer stand out to recruiters.

The portfolio must communicate within a few seconds:

1. Who the person is
2. What they specialize in
3. What they have actually built
4. Their technical skills
5. Their experience and achievements
6. How to contact them

The website should feel like a professional engineering portfolio, NOT a generic hacker website.

## Design direction

Use a light professional theme.

Preferred visual characteristics:

- White or very light gray background
- Dark navy / charcoal text
- Blue as the primary accent
- Subtle secondary accent color
- Modern typography
- Generous whitespace
- Clean cards
- Subtle borders and shadows
- Minimal gradients
- Subtle animations
- Strong visual hierarchy
- Excellent readability
- Professional and trustworthy appearance

Avoid:

- Matrix rain
- Excessive neon green
- Fake terminal screens everywhere
- Excessive glitch effects
- Skulls
- Overly dark hacker aesthetics
- Excessive animations
- Generic stock cybersecurity imagery
- Overly complicated layouts

## Recruiter-first UX

The homepage should immediately expose:

- Name
- Professional title
- Short value proposition
- Main CTA
- Secondary CTA
- Most important technical domains
- Selected projects
- Experience
- Achievements
- Contact information

The recruiter should never need to search for basic information.

## Recommended sections

### Hero

Include:

- Name
- Professional title
- Short 1–2 sentence introduction
- CTA to projects
- CTA to CV
- CTA/contact

Example structure:

"Étudiant ingénieur en Sécurité de l'Information et Technologie"

Then a concise statement describing cybersecurity and web development interests.

Do not invent information.

### About

Explain:

- Current academic level
- Areas of interest
- What the person enjoys building
- Professional objective

Keep it concise.

### Skills

Organize skills into meaningful categories instead of displaying a giant list.

Possible categories:

- Cybersecurity
- Networking
- Systems
- Web Development
- Programming
- DevOps / Infrastructure
- Tools

Avoid rating skills with fake percentages such as:

"Python 95%"

Instead use technology badges or grouped skills.

### Projects

Projects should be one of the most prominent sections.

Each project should contain:

- Project name
- Short description
- Context
- Role
- Technologies
- Key achievements
- GitHub link if available
- Demo link if available

### Experience

Present internships and professional experiences chronologically.

Clearly distinguish:

- What the person designed
- What the person developed
- What the person implemented
- What the person only studied or proposed

Never exaggerate responsibilities.

### Achievements

Highlight:

- CTFs
- Competitions
- Certifications
- Awards
- Significant technical accomplishments

### Contact

Make contacting the candidate extremely easy.

Include appropriate links such as:

- Email
- LinkedIn
- GitHub

## Responsive design

The portfolio must work correctly on:

- Desktop
- Laptop
- Tablet
- Mobile

Never sacrifice mobile usability for desktop aesthetics.

## Accessibility

Follow good accessibility practices:

- Semantic HTML
- Keyboard navigation
- Sufficient contrast
- Visible focus states
- Meaningful alt text
- Proper heading hierarchy
- Reduced-motion support

## Performance

Optimize for:

- Fast loading
- Small bundle size
- Optimized images
- Minimal unnecessary JavaScript
- Good Lighthouse scores

## Content integrity

This rule is critical:

NEVER invent:

- Certifications
- Jobs
- Internships
- Technologies
- Projects
- Awards
- Skills
- Statistics
- Job titles
- Responsibilities

If information is missing, leave a placeholder or ask the user.

## Implementation philosophy

Prefer simple maintainable architecture over unnecessary complexity.

Before adding a dependency, determine whether it is actually necessary.

Keep components reusable.

Keep content separate from presentation whenever practical.

## Final quality check

Before considering the portfolio complete, verify:

- Professional visual appearance
- Clear recruiter-oriented hierarchy
- Responsive layout
- No invented information
- No broken links
- No console errors
- No exposed secrets
- Accessible navigation
- Good performance
