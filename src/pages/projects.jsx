import React, { useRef } from 'react'
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

const ProjectSection = styled.div`
  margin-bottom: 3em;
`

const SectionTitle = styled.h2`
  margin-bottom: 0.5em;
  color: #5b5b5b;
  font-size: 1.8rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  margin-bottom: 1.5em;
  color: #888;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.4;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`

const TechStack = styled.span`
  font-weight: 600;
  color: #5b5b5b;
  font-style: normal;
  background: linear-gradient(
    120deg,
    rgba(255, 154, 158, 0.1) 0%,
    rgba(254, 207, 239, 0.1) 100%
  );
  padding: 0.3em 0.6em;
  border-radius: 0.5em;
  border-left: 3px solid #ff9a9e;
  display: inline-block;
  margin-top: 0.5em;
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;
`

const CarouselWrapper = styled.div`
  display: flex;
  gap: 1.5em;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 1rem 1rem 1rem;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Prevent browser back/forward navigation on horizontal scroll */
  overscroll-behavior-x: contain;
  touch-action: pan-x;

  @media ${device.tablet} {
    padding: 0 2rem 1rem 2rem;
  }
`

const ProjectCard = styled.div`
  min-width: 300px;
  max-width: 350px;
  flex-shrink: 0;
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
    min-width: 350px;
    max-width: 400px;
  }
`

const ProjectCardHeading = styled.h2`
  text-align: center;
  padding: 1.2rem 1.5rem;
  background-image: ${props =>
    props.primary
      ? 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 100%)'
      : 'linear-gradient(120deg, #ffc3a0 0%, #ffafbd 100%)'};
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  color: white;
  line-height: 1.3;

  @media ${device.tablet} {
    padding: 1.5rem 2rem;
    font-size: 1.4rem;
  }
`

const ProjectCardParagraph = styled.p`
  padding: 0 1em;
  font-size: 0.95rem;
  line-height: 1.5;

  @media ${device.tablet} {
    padding: 0 1.5em;
    font-size: 1rem;
  }
`

const ProjectCardList = styled.ul`
  padding-right: 1em;
`

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(91, 91, 91, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
  font-size: 16px;
  color: #5b5b5b;
  pointer-events: auto;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-color: rgba(91, 91, 91, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
    font-size: 18px;

    &.left {
      left: 20px;
    }

    &.right {
      right: 20px;
    }
  }
`

export default function Resume() {
  const workProjectsRef = useRef(null)
  const personalProjectsRef = useRef(null)

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350 // Scroll by card width
      const currentScroll = ref.current.scrollLeft
      const targetScroll =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount

      ref.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      })
    }
  }

  return (
    <SplitLayout>
      <GlobalStyles />
      <h1>Projects I'm particularly proud of:</h1>

      <ProjectSection>
        <SectionTitle>Work Projects</SectionTitle>
        <SectionSubtitle>
          Some of the features I built at Runn, a strategic resource management
          platform.
          <br />
          As the third engineer hire, I worked across the stack for 5+ years,
          leading and delivering key features that helped scale the platform
          globally.
          <br />
          <TechStack>
            Stack: TypeScript · React · Node.js · GraphQL (Hasura) · Postgres ·
            Ruby on Rails
          </TechStack>
        </SectionSubtitle>
        <CarouselContainer>
          <ScrollButton
            className="left"
            onClick={() => scrollCarousel(workProjectsRef, 'left')}
            aria-label="Scroll work projects left"
          >
            ‹
          </ScrollButton>
          <ScrollButton
            className="right"
            onClick={() => scrollCarousel(workProjectsRef, 'right')}
            aria-label="Scroll work projects right"
          >
            ›
          </ScrollButton>
          <CarouselWrapper ref={workProjectsRef}>
            <ProjectCard>
              <ProjectCardHeading primary>
                Enterprise Performance Optimization at Scale
              </ProjectCardHeading>
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
                ensuring smooth scheduling and reporting for enterprise
                customers.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading primary>
                SmartMatching AI – Intelligent Resource Scheduling
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Scheduling resources was
                time-consuming and error-prone, requiring manual matching of
                people and attributes.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Built an AI-driven matching feature
                that suggests the best person or placeholder for a role based on
                skills and attributes.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Made scheduling faster, more accurate,
                and more scalable for teams managing complex projects.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading>
                Project Team Membership & Workstreams
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Complex projects lacked clear team
                structures and sub-groups, making planning and long-term
                allocation difficult.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Introduced Project Team Membership,
                allowing people and placeholders to be linked to projects even
                without active allocations, simplifying reassignments and
                long-term planning. <br />
                <br /> Developed Workstreams, enabling projects to be divided
                into related sets of activities or deliverables (e.g., Research,
                Design, Development, QA, Deployment), with people and
                placeholders allocated directly to those workstreams within each
                project.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Improved clarity, enabled sub-team
                management, and made resource allocation more flexible for both
                immediate and long-term needs.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading primary>
                Consistent Time Off – Scalable Leave Management
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Inconsistent time-off logic led to
                inaccurate forecasting and reporting.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Refactored the platform's time-off
                system, unifying rules and calculations into a consistent
                framework.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Improved forecasting accuracy and
                increased customer trust through reliable leave and availability
                management.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading>
                Project Templates – Reusable Workflows
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Customers had to repeatedly set up the
                same project structures manually, wasting time.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Implemented a project templating
                system that allows users to create, save, and reuse project
                blueprints.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Reduced project setup time, streamlined
                onboarding, and improved adoption of the platform.
              </ProjectCardParagraph>
            </ProjectCard>
          </CarouselWrapper>
        </CarouselContainer>
      </ProjectSection>

      <ProjectSection>
        <SectionTitle>Personal Projects</SectionTitle>
        <SectionSubtitle>
          Side projects, open source contributions, and hackathon wins
        </SectionSubtitle>
        <CarouselContainer>
          <ScrollButton
            className="left"
            onClick={() => scrollCarousel(personalProjectsRef, 'left')}
            aria-label="Scroll personal projects left"
          >
            ‹
          </ScrollButton>
          <ScrollButton
            className="right"
            onClick={() => scrollCarousel(personalProjectsRef, 'right')}
            aria-label="Scroll personal projects right"
          >
            ›
          </ScrollButton>
          <CarouselWrapper ref={personalProjectsRef}>
            <ProjectCard>
              <ProjectCardHeading>
                Andria's Cottage - Interactive Portfolio
              </ProjectCardHeading>
              <ProjectCardParagraph>
                Interactive portfolio where you can explore my cozy cottage and
                get to know me by interacting with objects.
              </ProjectCardParagraph>
              <ProjectCardList>
                <h5>Stack:</h5>
                <li>Javascript</li>
                <li>Kaplay.js</li>
                <li>Vite</li>
              </ProjectCardList>
              <ProjectCardParagraph>
                I wanted to try building something I haven't done before and so
                I made this little game to showcase who I am. Try it out on both
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
                A project I did for the Humanitarian OpenStreetMap Team as part
                of the Outreachy Programme to improve internal comms for the
                team.
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
                various AWS Services within a tight deadline and had to ensure
                the project was maintainable, scalable, cost-efficient, and easy
                to contribute to as per the needs of an open-source project.
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
                I was lead developer for the team and was responsible for
                managing the dev team as well as coordinating between the tech
                and business strategy sides of the group.
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
          </CarouselWrapper>
        </CarouselContainer>
      </ProjectSection>
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
