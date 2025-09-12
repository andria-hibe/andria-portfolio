import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'
import Button from '../components/button'

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  padding-top: 0.5em;
  padding-left: 1em;

  @media ${device.tablet} {
    padding-left: 2em;
  }
`

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`

const ProjectCard = styled.div`
  width: 100%;
  align-self: center;
  margin: 1rem;
  background: white;
  box-shadow: 0.25em 0.5em 1.5em rgba(91, 91, 91, 0.25);
  border-radius: 1em;
  overflow: hidden;
  transition: all 0.2s linear;
  color: #5b5b5b;
  padding-bottom: 1em;
  position: relative;

  &:hover {
    box-shadow: 0.25em 1em 3em rgba(91, 91, 91, 0.3);
    transform: translateY(-4px);
  }

  /* Prevent child elements from interfering with hover */
  & * {
    pointer-events: none;
  }

  /* Re-enable pointer events for interactive elements */
  & a,
  & button {
    pointer-events: auto;
  }

  @media ${device.tablet} {
    width: 80%;
  }
`

const ProjectCardHeading = styled.h2`
  text-align: center;
  padding: 1.5rem 2.5rem;
  background-image: ${props =>
    props.primary
      ? 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)'
      : 'linear-gradient(120deg, #ffc3a0 0%, #ffafbd 100%)'};
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  color: white;
`

const ProjectCardParagraph = styled.p`
  padding: 0 1em;

  @media ${device.tablet} {
    padding: 0 2em;
  }
`

const ProjectCardList = styled.ul`
  padding-right: 1em;
`

export default function Resume() {
  return (
    <SplitLayout>
      <GlobalStyles />
      <h1>Projects I'm particularly proud of:</h1>
      <ProjectCardContainer>
        <ProjectCard>
          <ProjectCardHeading primary>
            Enterprise Performance Optimization at Scale
          </ProjectCardHeading>
          <ProjectCardParagraph>
            <em>Built at Runn, a SaaS resource planning platform</em>
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Problem:</strong> Large accounts with 1,000+ users
            experienced significant lag and slow load times.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Solution:</strong> Redesigned client-side data handling,
            optimized GraphQL queries, and improved rendering logic for
            high-volume datasets.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Impact:</strong> Achieved up to 10x faster performance,
            ensuring smooth scheduling and reporting for enterprise customers.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL (Hasura)</li>
            <li>Postgres</li>
            <li>Ruby on Rails</li>
          </ProjectCardList>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>
            Project Templates – Reusable Workflows
          </ProjectCardHeading>
          <ProjectCardParagraph>
            <em>Built at Runn</em>
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Problem:</strong> Customers had to repeatedly set up the
            same project structures manually, wasting time.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Solution:</strong> Designed and delivered a project
            templating system that allows users to create, save, and reuse
            project blueprints.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Impact:</strong> Reduced project setup time, streamlined
            onboarding, and improved adoption of the platform.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Node.js</li>
            <li>Postgres</li>
          </ProjectCardList>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading primary>
            Smartmatching AI – Intelligent Resource Scheduling
          </ProjectCardHeading>
          <ProjectCardParagraph>
            <em>Built at Runn</em>
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Problem:</strong> Scheduling resources was time-consuming
            and error-prone, requiring manual matching of people and attributes.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Solution:</strong> Built an AI-driven matching feature that
            suggests the best person or placeholder for a role based on skills
            and attributes.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Impact:</strong> Made scheduling faster, more accurate, and
            more scalable for teams managing complex projects.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Node.js</li>
          </ProjectCardList>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>
            Consistent Time Off – Scalable Leave Management
          </ProjectCardHeading>
          <ProjectCardParagraph>
            <em>Built at Runn</em>
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Problem:</strong> Inconsistent time-off logic led to
            inaccurate forecasting and reporting.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Solution:</strong> Refactored the platform's time-off
            system, unifying rules and calculations into a consistent framework.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Impact:</strong> Improved forecasting accuracy and increased
            customer trust through reliable leave and availability management.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>Ruby on Rails</li>
            <li>Postgres</li>
            <li>GraphQL</li>
            <li>React</li>
          </ProjectCardList>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading primary>
            Project Team Membership & Workstreams
          </ProjectCardHeading>
          <ProjectCardParagraph>
            <em>Built at Runn</em>
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Problem:</strong> Complex projects lacked clear team
            structures and sub-groups, making planning and long-term allocation
            difficult.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Solution:</strong> Introduced Project Team Membership,
            allowing people and placeholders to be linked to projects even
            without active allocations, simplifying reassignments and long-term
            planning. Developed Workstreams, enabling projects to be divided
            into related sets of activities or deliverables (e.g., Research,
            Design, Development, QA, Deployment).
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            <strong>Impact:</strong> Improved clarity, enabled sub-team
            management, and made resource allocation more flexible for both
            immediate and long-term needs.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL (Hasura)</li>
            <li>Node.js</li>
            <li>Postgres</li>
            <li>Ruby on Rails</li>
          </ProjectCardList>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>
            Andria's Cottage - Interactive Portfolio
          </ProjectCardHeading>
          <ProjectCardParagraph>
            Interactive portfolio where you can explore my cozy cottage and get
            to know me by interacting with objects.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>Javascript</li>
            <li>Kaplay.js</li>
            <li>Vite</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I wanted to try building something I haven't done before and so I
            made this little game to showcase who I am. Try it out on both
            mobile and desktop.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a
              href="https://andria-hibe.github.io/2d-portfolio-cottage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Play" />
            </a>
            <a
              href="https://github.com/andria-hibe/2d-portfolio-cottage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="GitHub" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading primary>Slackbot Router</ProjectCardHeading>
          <ProjectCardParagraph>
            A project I did for the Humanitarian OpenStreetMap Team as part of
            the Outreachy Programme to improve internal comms for the team.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>Node.js</li>
            <li>AWS Services (CloudFormation, API Gateway, SNS, Lambda)</li>
            <li>Various APIs (Slack, GitHub, OpenStreetMap tools)</li>
            <li>Tape & Sinon for testing</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            The application is a collection of different bots that deliver
            information using a router setup which asynchronously parses and
            forwards incoming messages to respective Lambdas.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            This project was both exciting and challenging as I had to learn
            various AWS Services within a tight deadline and had to ensure the
            project was maintainable, scalable, cost-efficient, and easy to
            contribute to as per the needs of an open-source project.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a
              href="https://github.com/hotosm/slack-bots/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="GitHub" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>This Website</ProjectCardHeading>
          <ProjectCardParagraph>
            This website was designed and created by myself using Gatsby and
            hosted on Netlify.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>Gatsby</li>
            <li>Styled Components</li>
            <li>Netlify</li>
            <li>Figma</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I had a design-first approach when creating this website with a
            focus on reusable components.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a
              href="https://github.com/andria-hibe/andria-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="GitHub" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading primary>Peer Postie</ProjectCardHeading>
          <ProjectCardParagraph>
            Won second equal during Hack the Crisis NZ 2020, a 48-hour
            nationwide hackathon with over 800 participants aimed at
            conceptualising and developing innovative ideas for life beyond
            COVID-19.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            A prototype for a peer-to-peer delivery service focused on local
            communities and businesses.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>Node.js</li>
            <li>React & Redux</li>
            <li>Bootstrap</li>
            <li>Google Maps API</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I was lead developer for the team and was responsible for managing
            the dev team as well as coordinating between the tech and business
            strategy sides of the group.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a
              href="https://youtu.be/Ju80eMQxyC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Watch pitch" />
            </a>
          </ButtonLayout>
        </ProjectCard>
      </ProjectCardContainer>
    </SplitLayout>
  )
}

export function Head() {
  return (
    <SEO
      title="Andria's Projects"
      description="A list of projects I'm proud of"
    />
  )
}
