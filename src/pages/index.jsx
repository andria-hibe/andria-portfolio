import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'
import Button from '../components/button'

// Resume data structure for easy updates
const resumeData = {
  personal: {
    name: 'Andria Hibe',
    email: 'andriacohibe@gmail.com',
    linkedin: 'https://www.linkedin.com/in/andriacristiahibe/',
    github: 'https://github.com/andria-hibe',
    portfolio: 'https://andriahibe.netlify.app',
  },
  profile:
    'Full-stack engineer with a unique blend of technical expertise and business acumen. Experienced in delivering features end-to-end, collaborating with product and customer success, and contributing to architectural decisions. Background in legislative advocacy, data-driven marketing, and stakeholder management brings valuable perspective on user needs, regulatory considerations, and cross-functional collaboration. Proven ability to bridge technical complexity with business strategy, making complex systems accessible to diverse audiences.',
  skills: {
    technical: [
      'TypeScript',
      'React',
      'GraphQL (Hasura)',
      'Node.js',
      'Ruby on Rails',
      'Postgres',
    ],
    professional: [
      'Feature Ownership',
      'Product Collaboration',
      'Communication',
      'Stakeholder Engagement',
      'Strategic Thinking',
      'Project Coordination',
    ],
  },
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Runn.io',
      period: 'October 2020 - Present',
      achievements: [
        'Third engineering hire. Helped shape product direction, tech stack, and engineering culture as the company scaled.',
        'Delivered enterprise performance improvements up to 10x for large accounts with 1,000+ users through client-side data handling optimization, GraphQL query improvements, and enhanced rendering logic for high-volume datasets.',
        'Led and contributed to end-to-end delivery of major features, including:',
        '• SmartMatching AI - intelligent resource matching based on people attributes, powered by AI.',
        '• Project Templates - reusable project blueprints that streamline project setup and onboarding.',
        '• Project Team Membership - enables linking people to projects without active allocations, simplifying reassignments and long-term capacity planning.',
        '• Workstreams - enables dividing projects into related activity groups with dedicated resource allocation.',
        '• Consistent Time Off - refactored leave logic for accurate forecasting.',
        'Collaborated with product, design and customer success teams, often refining requirements and suggesting improvements.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Humanitarian OpenStreetMap Team (Outreachy Programme)',
      period: 'May 2020 - August 2020',
      achievements: [
        'Developed a Slack app to improve internal communication and efficiency, integrating the Slack API, GitHub API, and OpenStreetMap tools.',
        'Built the application using AWS services, including Lambda for logic, API Gateway for routing, SNS for messaging, and CloudFormation for infrastructure as code.',
        'Collaborated with the dev team to plan an architecture focused on maintainability, scalability, and cost efficiency for an open-source community project.',
      ],
    },
    {
      title: 'Other Professional Experience',
      company: '(Policy Advocacy, Marketing, and Event Management roles)',
      period: '2013 - 2020',
      achievements: [
        'Legislative Advocacy - Successfully advocated for the passage of major economic legislation, developing skills in stakeholder alignment, strategic communication, and navigating complex regulatory environments.',
        'Brand Management & Digital Marketing - Grew social media engagement by 50%+ and increased local economic activity by 15% through data-driven marketing campaigns and community events.',
        'Business Development - Generated revenue through multi-channel sales strategies, client relationship management, and event coordination, building strong commercial acumen.',
        'Cross-functional Leadership - Managed diverse stakeholders including government agencies, business owners, suppliers, and community groups, translating between technical and non-technical audiences.',
      ],
    },
  ],
  projects: [
    {
      name: 'Interactive Portfolio Game',
      description:
        'A gamified portfolio built with Kaplay.js, where visitors explore a virtual cottage to learn about me.',
      tech: 'JavaScript, Kaplay.js, Vite',
      links: [
        {
          label: 'Play',
          url: 'https://andria-hibe.github.io/2d-portfolio-cottage/',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/andria-hibe/2d-portfolio-cottage',
        },
      ],
    },
    {
      name: 'Personal Portfolio Website',
      description:
        'Clean, responsive website showcasing my projects and experience.',
      tech: 'React, Gatsby, Styled Components, Netlify',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/andria-hibe/andria-portfolio',
        },
      ],
    },
    {
      name: 'Slackbot Router (HOTOSM)',
      description:
        'Open-source Slack bot framework with asynchronous message routing, integrating multiple APIs to automate tasks and improve internal communications.',
      tech: 'Node.js, AWS (Lambda, API Gateway, SNS, CloudFormation)',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/hotosm/slack-bots/',
        },
        {
          label: 'Details',
          url: 'https://www.canva.com/design/DAFgZ0AtNg4/M8zzeI00LBemZp8ZqhZV2w/view?utm_content=DAFgZ0AtNg4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h39eb4cb3de',
        },
      ],
    },
    {
      name: 'Peer Postie',
      description:
        'Hackathon-winning prototype for a peer-to-peer delivery service (Hack the Crisis NZ 2020, 800+ participants).',
      tech: 'React, Node.js, Google Maps API',
      links: [{ label: 'Watch Pitch', url: 'https://youtu.be/Ju80eMQxyC8' }],
    },
  ],
  education: [
    {
      degree: 'Web Development Bootcamp',
      institution: 'Enspiral DevAcademy',
      details: [
        'Simulated work environment using modern web development tech stack',
        'Completed projects with tight deadlines following Agile and Scrum principles',
      ],
    },
    {
      degree: 'Bachelor of Arts in International Studies',
      institution: 'De La Salle University',
      details: [
        'Graduated with First Class Honours',
        'Awarded Outstanding Thesis',
      ],
    },
  ],
}

// Styled components for better readability
const ResumeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 2rem;
  }

  @media ${device.laptop} {
    padding: 0;
  }
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 1.5em;
  padding-bottom: 1em;
  border-bottom: 2px solid #d4c4b0;

  @media ${device.tablet} {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
  }
`

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-size: 2em;
  margin-bottom: 0.2em;
  color: #4a3f35;

  @media ${device.tablet} {
    font-size: 2.5em;
  }
`

const ContactInfo = styled.div`
  font-size: 0.8em;
  color: #8b7a6b;
  margin-bottom: 1em;
  line-height: 1.4;

  @media ${device.tablet} {
    font-size: 0.9em;
  }

  a {
    color: #a94442;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Section = styled.section`
  margin-bottom: 2em;

  @media ${device.tablet} {
    margin-bottom: 2.5em;
  }
`

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  font-size: 1.4em;
  color: #4a3f35;
  margin-bottom: 1em;
  padding-bottom: 0.3em;
  border-bottom: 1px solid #d4c4b0;
`

const SubSection = styled.div`
  margin-bottom: 1.5em;
  padding-bottom: 1.5em;
  border-bottom: 1px solid rgba(212, 196, 176, 0.4);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const JobTitle = styled.h3`
  font-size: 1.1em;
  color: #4a3f35;
  margin-bottom: 0.2em;
`

const Company = styled.h4`
  font-size: 1em;
  color: #a94442;
  margin-bottom: 0.2em;
  margin-top: 0.1em;
`

const Period = styled.p`
  font-size: 0.9em;
  color: #8b7a6b;
  margin-bottom: 0.8em;
  font-style: italic;
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  margin-bottom: 1em;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5em;
  }
`

const SkillCategory = styled.div`
  h4 {
    color: #4a3f35;
    margin-bottom: 0.5em;
    font-size: 1em;
  }
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background: #f5f0e8;
    padding: 0.3em 0.6em;
    margin-bottom: 0.3em;
    border-radius: 4px;
    font-size: 0.9em;
    border-left: 3px solid #a94442;
  }
`

const AchievementList = styled.ul`
  margin-left: 0;
  padding-left: 1em;

  li {
    margin-bottom: 0.5em;
    line-height: 1.5;

    &.indented {
      margin-left: 1.5em;
      list-style-type: none;
      text-indent: -0.8em;
      padding-left: 0.8em;
    }
  }
`

const ProjectGrid = styled.div`
  display: grid;
  gap: 1.5em;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectCard = styled.div`
  background: #f5f0e8;
  border: 1px solid #d4c4b0;
  padding: 1.2em;
  border-radius: 12px;
  border-left: 4px solid #a94442;
  margin-bottom: 1.5em;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    color: #4a3f35;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 0.5em;
    line-height: 1.5;
  }

  .tech {
    font-size: 0.85em;
    color: #8b7a6b;
    font-style: italic;
    margin-bottom: 0.8em;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8em;
  margin-top: 0.8em;
  flex-wrap: wrap;
`

const SubtleLink = styled.a`
  font-size: 0.8em;
  color: #a94442;
  text-decoration: none;
  padding: 0.3em 0.6em;
  border: 1px solid rgba(169, 68, 66, 0.3);
  border-radius: 4px;
  transition: all 0.2s ease;
  background: rgba(169, 68, 66, 0.05);

  &:hover {
    background: rgba(169, 68, 66, 0.1);
    border-color: rgba(169, 68, 66, 0.5);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 1px solid #d4a5a5;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`

const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-top: 1.5em;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    margin-top: 2em;
    gap: 0.8em;
  }

  @media ${device.laptop} {
    padding-bottom: 3em;
  }
`

const Profile = styled.p`
  font-size: 1.05em;
  line-height: 1.7;
  color: #555;
  text-align: justify;
  margin-bottom: 0;

  @media ${device.tablet} {
    font-size: 1.1em;
  }
`

export default function Index() {
  return (
    <SplitLayout>
      <GlobalStyles />
      <ResumeContainer>
        <Header>
          <Name>{resumeData.personal.name}</Name>
          <ContactInfo>
            <a href={`mailto:${resumeData.personal.email}`}>
              {' '}
              {resumeData.personal.email}
            </a>{' '}
            ·
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              LinkedIn
            </a>{' '}
            ·
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              GitHub
            </a>
          </ContactInfo>
          <ButtonLayout>
            <a href={`mailto:${resumeData.personal.email}`}>
              <Button variant="primary">Email me!</Button>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1WFBif-SXgrJOJGzeigoZwM7V6Eo5QTko">
              <Button variant="primary">Download as pdf</Button>
            </a>
          </ButtonLayout>
        </Header>

        <Section>
          <SectionTitle>Profile</SectionTitle>
          <Profile>{resumeData.profile}</Profile>
        </Section>

        <Section>
          <SectionTitle>Key Skills</SectionTitle>
          <SkillGrid>
            <SkillCategory>
              <h4>Technical</h4>
              <SkillList>
                {resumeData.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillList>
            </SkillCategory>
            <SkillCategory>
              <h4>Professional</h4>
              <SkillList>
                {resumeData.skills.professional.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </SkillList>
            </SkillCategory>
          </SkillGrid>
        </Section>

        <Section>
          <SectionTitle>Professional Experience</SectionTitle>
          {resumeData.experience.map((job, index) => (
            <SubSection key={index}>
              <JobTitle>{job.title}</JobTitle>
              <Company>{job.company}</Company>
              <Period>{job.period}</Period>
              <AchievementList>
                {job.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className={achievement.startsWith('•') ? 'indented' : ''}
                  >
                    {achievement}
                  </li>
                ))}
              </AchievementList>
            </SubSection>
          ))}
        </Section>

        <Section>
          <SectionTitle>Projects (Personal & Open Source)</SectionTitle>
          <ProjectGrid>
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <p className="tech">{project.tech}</p>
                {project.links && (
                  <ProjectLinks>
                    {project.links.map((link, linkIndex) => (
                      <SubtleLink
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </SubtleLink>
                    ))}
                  </ProjectLinks>
                )}
              </ProjectCard>
            ))}
          </ProjectGrid>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          {resumeData.education.map((edu, index) => (
            <SubSection key={index}>
              <JobTitle>{edu.degree}</JobTitle>
              <Company>{edu.institution}</Company>
              <AchievementList>
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </AchievementList>
            </SubSection>
          ))}
        </Section>
      </ResumeContainer>
    </SplitLayout>
  )
}

export function Head() {
  return (
    <SEO
      title="Andria Hibe - Full Stack Developer"
      description="Portfolio of Andria Hibe, a passionate Full Stack Developer specializing in modern web technologies."
    />
  )
}
