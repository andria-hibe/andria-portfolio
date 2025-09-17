import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'
import Button from '../components/button'

const colors = {
  primary: '#4a3f35',
  secondary: '#6b5b47',
  accent: '#a94442',
  white: '#ffffff',
  background: '#f5f0e8',
  cardBackground: '#faf6f0',
  border: '#d4c4b0',
  buttonBg: 'rgba(212, 165, 165, 0.4)',
  buttonBorder: 'rgba(212, 165, 165, 0.3)',
}

const fonts = {
  primary: "'Nunito', sans-serif",
  heading: "'Playfair Display', serif",
}

const transitions = {
  smooth: 'all 0.3s ease',
  card: 'all 0.2s linear',
}

const PageHeading = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 300;
`

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1em;
  padding-top: 0.5em;
  padding-left: 1em;

  @media ${device.tablet} {
    padding-left: 1.5em;
  }
`

const ProjectSection = styled.div`
  margin-bottom: 3em;
`

const SectionTitle = styled.h2`
  font-family: ${fonts.heading};
  font-weight: 300;
  margin-bottom: 0.5em;
  color: ${colors.secondary};
  font-size: 1.8rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  margin-bottom: 1.5em;
  color: ${colors.secondary};
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }
`

const TechStack = styled.span`
  font-weight: 600;
  color: ${colors.secondary};
  font-style: normal;
  background: ${colors.background};
  padding: 0.3em 0.6em;
  border-radius: 0.5em;
  border-left: 3px solid ${colors.accent};
  display: inline-block;
  margin-top: 0.5em;
`

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2em;

  /* Enhance scroll buttons visibility on hover/interaction - desktop only */
  @media (min-width: 768px) {
    &:hover button {
      opacity: 1;
    }
  }

  /* Add subtle fade indicators for scrollability on mobile */
  @media (max-width: 767px) {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 15px;
      z-index: 2;
      pointer-events: none;
      transition: opacity 0.3s ease;
      opacity: 0.6;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        rgba(250, 246, 240, 0.9),
        rgba(250, 246, 240, 0.3),
        transparent
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        to left,
        rgba(250, 246, 240, 0.9),
        rgba(250, 246, 240, 0.3),
        transparent
      );
    }

    &:hover {
      &::before,
      &::after {
        opacity: 0.3;
      }
    }
  }
`

const CarouselWrapper = styled.div`
  display: flex;
  gap: 1.5em;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 3rem 1rem 3rem;

  /* Scroll snapping for better card alignment */
  scroll-snap-type: x mandatory;

  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Prevent browser back/forward navigation on horizontal scroll */
  overscroll-behavior-x: contain;
  overscroll-behavior-y: auto;

  /* Native touch scrolling for best mobile experience */
  touch-action: auto;
  -webkit-overflow-scrolling: touch;

  /* Mobile-specific improvements */
  @media (max-width: 767px) {
    padding: 0 1rem 1rem 1rem;
    gap: 1rem;
  }

  @media ${device.tablet} {
    padding: 0 4rem 1rem 4rem;
  }
`

const ProjectCard = styled.div`
  min-width: 280px;
  max-width: calc(100vw - 3rem); /* Account for padding + scroll buttons */
  flex-shrink: 0;
  background: ${colors.background};
  border: 1px solid ${colors.border};
  box-shadow: 0.25em 0.5em 1.5em rgba(75, 63, 53, 0.15);
  border-radius: 1.2em;
  overflow: hidden;
  transition: ${transitions.card};
  color: ${colors.secondary};
  padding-bottom: 1em;
  position: relative;

  /* Scroll snap alignment */
  scroll-snap-align: start;

  &:hover {
    background: ${colors.cardBackground};
    box-shadow: 0.25em 1em 3em rgba(75, 63, 53, 0.2);
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

  @media ${device.mobileM} {
    min-width: 300px;
    max-width: calc(100vw - 3.5rem); /* Slightly more space */
  }

  @media ${device.mobileL} {
    min-width: 340px;
    max-width: calc(100vw - 4rem); /* More space for larger mobile */
  }

  @media ${device.tablet} {
    min-width: 420px;
    max-width: 480px; /* Fixed width on tablet+ */
  }
`

const ProjectCardHeading = styled.h2`
  text-align: center;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #d4a5a5 0%, #e6c4a0 100%);
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  color: ${colors.white};
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

const StyledStackContainer = styled.div`
  background: ${colors.background};
  padding: 0.8em 1em;
  margin: 0.5em 1em;
  border-radius: 0.5em;
  border-left: 3px solid ${colors.accent};

  h5 {
    margin: 0 0 0.5em 0;
    font-weight: 600;
    color: ${colors.primary};
  }

  ul {
    margin: 0;
    padding-left: 1.2em;
    color: ${colors.secondary};
  }
`

const StackContainer = ({ technologies }) => (
  <StyledStackContainer>
    <h5>Stack:</h5>
    <ul>
      {technologies.map((tech, index) => (
        <li key={index}>{tech}</li>
      ))}
    </ul>
  </StyledStackContainer>
)

StackContainer.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.buttonBg};
  border: 2px solid ${colors.buttonBorder};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: ${transitions.smooth};
  font-family: ${fonts.primary};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  opacity: 0.7;

  &:hover {
    background: rgba(212, 165, 165, 0.9);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-color: rgba(212, 165, 165, 0.7);
    transform: translateY(-50%) scale(1.05);
    opacity: 1;
    color: ${colors.white};
  }

  &:focus {
    outline: 2px solid #d4a5a5;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.left {
    left: 2px;
  }

  &.right {
    right: 2px;
  }

  @media (max-width: 767px) {
    background: rgba(212, 165, 165, 0.5);
    border-color: rgba(212, 165, 165, 0.35);
    opacity: 0.6;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

    /* Remove hover states on touch devices - single consistent state */
    &:hover,
    &:active,
    &:focus {
      background: rgba(212, 165, 165, 0.5);
      border-color: rgba(212, 165, 165, 0.35);
      opacity: 0.6;
      transform: translateY(-50%); /* Remove scale effect */
    }
  }

  @media ${device.mobileM} {
    width: 38px;
    height: 38px;
    font-size: 15px;

    &.left {
      left: 4px;
    }

    &.right {
      right: 4px;
    }
  }

  @media ${device.tablet} {
    width: 50px;
    height: 50px;
    font-size: 18px;

    &.left {
      left: 10px;
    }

    &.right {
      right: 10px;
    }
  }
`

export default function Projects() {
  const workProjectsRef = useRef(null)
  const personalProjectsRef = useRef(null)

  // State to track scroll positions for arrow visibility
  const [workScrollState, setWorkScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  })
  const [personalScrollState, setPersonalScrollState] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  })

  // Function to update scroll state based on current position
  const updateScrollState = (ref, setState) => {
    if (!ref.current) return

    const { scrollLeft, scrollWidth, clientWidth } = ref.current

    // Get padding values based on screen size
    const screenWidth = window.innerWidth
    const paddingLeft = screenWidth < 768 ? 16 : 64 // 1rem mobile, 4rem tablet+
    const paddingRight = paddingLeft

    // Account for padding in scroll detection
    const effectiveScrollWidth = scrollWidth - paddingLeft - paddingRight
    const canScrollLeft = scrollLeft > paddingLeft + 5 // Small threshold
    const canScrollRight =
      scrollLeft < effectiveScrollWidth - clientWidth + paddingLeft - 5

    setState({ canScrollLeft, canScrollRight })
  }

  // Set up scroll listeners and initial state
  useEffect(() => {
    const workElement = workProjectsRef.current
    const personalElement = personalProjectsRef.current

    const handleWorkScroll = () =>
      updateScrollState(workProjectsRef, setWorkScrollState)
    const handlePersonalScroll = () =>
      updateScrollState(personalProjectsRef, setPersonalScrollState)

    const handleResize = () => {
      // Update scroll states on resize
      updateScrollState(workProjectsRef, setWorkScrollState)
      updateScrollState(personalProjectsRef, setPersonalScrollState)
    }

    if (workElement) {
      workElement.addEventListener('scroll', handleWorkScroll)
      // Set initial state
      setTimeout(
        () => updateScrollState(workProjectsRef, setWorkScrollState),
        100
      )
    }

    if (personalElement) {
      personalElement.addEventListener('scroll', handlePersonalScroll)
      // Set initial state
      setTimeout(
        () => updateScrollState(personalProjectsRef, setPersonalScrollState),
        100
      )
    }

    // Listen for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      if (workElement) {
        workElement.removeEventListener('scroll', handleWorkScroll)
      }
      if (personalElement) {
        personalElement.removeEventListener('scroll', handlePersonalScroll)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      // Calculate scroll amount based on screen width and card size
      const getScrollAmount = () => {
        const screenWidth = window.innerWidth
        let cardWidth, gap

        if (screenWidth < 375) {
          // Mobile S: 280px-320px cards + 1rem gap
          cardWidth = 300
          gap = 16 // 1rem = 16px
        } else if (screenWidth < 495) {
          // Mobile M: 300px-340px cards + 1rem gap
          cardWidth = 320
          gap = 16
        } else if (screenWidth < 768) {
          // Mobile L: 340px-380px cards + 1rem gap
          cardWidth = 360
          gap = 16
        } else {
          // Tablet+: larger cards + 1.5rem gap
          cardWidth = 450
          gap = 24 // 1.5rem = 24px
        }

        return cardWidth + gap
      }

      const scrollAmount = getScrollAmount()
      const currentScroll = ref.current.scrollLeft
      const targetScroll =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount

      ref.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      })

      // Update scroll state after scrolling completes
      setTimeout(() => {
        if (ref === workProjectsRef) {
          updateScrollState(ref, setWorkScrollState)
        } else if (ref === personalProjectsRef) {
          updateScrollState(ref, setPersonalScrollState)
        }
      }, 300) // Wait for smooth scroll to complete
    }
  }

  return (
    <SplitLayout>
      <GlobalStyles />
      <PageHeading>Featured Projects:</PageHeading>

      <ProjectSection>
        <SectionTitle>Work Projects</SectionTitle>
        <SectionSubtitle>
          Some of the features I built at Runn, a strategic resource management
          platform.
          <br />
          As employee #3 on the engineering team, I&apos;ve contributed to
          Runn&apos;s growth from a small startup to a global platform serving
          customers across multiple countries. I&apos;ve led and delivered key
          features that helped scale the platform globally.
          <br />
          <TechStack>
            Stack: TypeScript · React · Node.js · GraphQL (Hasura) · Postgres ·
            Ruby on Rails
          </TechStack>
        </SectionSubtitle>
        <CarouselContainer>
          {workScrollState.canScrollLeft && (
            <ScrollButton
              className="left"
              onClick={() => scrollCarousel(workProjectsRef, 'left')}
              aria-label="Scroll work projects left"
            >
              ‹
            </ScrollButton>
          )}
          {workScrollState.canScrollRight && (
            <ScrollButton
              className="right"
              onClick={() => scrollCarousel(workProjectsRef, 'right')}
              aria-label="Scroll work projects right"
            >
              ›
            </ScrollButton>
          )}
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
                SmartMatching AI - Intelligent Resource Scheduling
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Scheduling resources was
                time-consuming and error-prone, requiring manual matching of
                people and attributes.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Helped deliver an AI-driven matching
                feature that improves scheduling by suggesting the best person
                or placeholder based on skills and attributes.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Made scheduling faster, more accurate,
                and more scalable for teams managing complex projects.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading primary>
                Consistent Time Off - Scalable Leave Management
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Inconsistent time-off logic led to
                inaccurate forecasting and reporting.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Refactored the platform&apos;s
                time-off system, unifying rules and calculations into a
                consistent framework.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Improved forecasting accuracy and
                increased customer trust through reliable leave and availability
                management.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading>Project Team Membership</ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Long-term project planning was
                difficult without clear project team structures, and reassigning
                people between projects was cumbersome.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Introduced Project Team Membership,
                allowing people and placeholders to be linked to projects even
                without active allocations, simplifying reassignments and
                long-term planning.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Made resource allocation more flexible
                and improved long-term project planning capabilities.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading primary>
                Workstreams - Sub-team Organization
              </ProjectCardHeading>
              <ProjectCardParagraph>
                <strong>Problem:</strong> Complex projects lacked clear
                sub-groups and activity organization, making it hard to manage
                different work streams within a project.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Solution:</strong> Developed Workstreams, enabling
                projects to be divided into related sets of activities or
                deliverables (e.g., Research, Design, Development, QA,
                Deployment), with people and placeholders allocated directly to
                those workstreams within each project.
              </ProjectCardParagraph>
              <ProjectCardParagraph>
                <strong>Impact:</strong> Improved clarity, enabled sub-team
                management, and made resource allocation more granular and
                organized.
              </ProjectCardParagraph>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading>
                Project Templates - Reusable Workflows
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
          {personalScrollState.canScrollLeft && (
            <ScrollButton
              className="left"
              onClick={() => scrollCarousel(personalProjectsRef, 'left')}
              aria-label="Scroll personal projects left"
            >
              ‹
            </ScrollButton>
          )}
          {personalScrollState.canScrollRight && (
            <ScrollButton
              className="right"
              onClick={() => scrollCarousel(personalProjectsRef, 'right')}
              aria-label="Scroll personal projects right"
            >
              ›
            </ScrollButton>
          )}
          <CarouselWrapper ref={personalProjectsRef}>
            <ProjectCard>
              <ProjectCardHeading>
                Andria&apos;s Cottage - Interactive Portfolio
              </ProjectCardHeading>
              <ProjectCardParagraph>
                Interactive portfolio where you can explore my cozy cottage and
                get to know me by interacting with objects.
              </ProjectCardParagraph>
              <StackContainer
                technologies={['Javascript', 'Kaplay.js', 'Vite']}
              />
              <ProjectCardParagraph>
                I wanted to try building something I haven&apos;t done before
                and so I made this little game to showcase who I am. Try it out
                on both mobile and desktop.
              </ProjectCardParagraph>
              <ButtonLayout>
                <a
                  href="https://andria-hibe.github.io/2d-portfolio-cottage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Play</Button>
                </a>
                <a
                  href="https://github.com/andria-hibe/2d-portfolio-cottage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">GitHub</Button>
                </a>
              </ButtonLayout>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading primary>Slackbot Router</ProjectCardHeading>
              <ProjectCardParagraph>
                A project I built for the Humanitarian OpenStreetMap Team (HOT),
                an international organization that creates open map data for
                disaster response and humanitarian action in vulnerable
                communities.
              </ProjectCardParagraph>
              <StackContainer
                technologies={[
                  'Node.js',
                  'AWS Services (CloudFormation, API Gateway, SNS, Lambda)',
                  'Various APIs (Slack, GitHub, OpenStreetMap tools)',
                  'Tape & Sinon for testing',
                ]}
              />
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
                  <Button variant="primary">GitHub</Button>
                </a>
                <a
                  href="https://www.canva.com/design/DAFgZ0AtNg4/M8zzeI00LBemZp8ZqhZV2w/view?utm_content=DAFgZ0AtNg4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h39eb4cb3de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">Details</Button>
                </a>
              </ButtonLayout>
            </ProjectCard>
            <ProjectCard>
              <ProjectCardHeading>
                Personal Portfolio Website
              </ProjectCardHeading>
              <ProjectCardParagraph>
                Clean, responsive website showcasing my projects and experience.
                Built with a focus on modern design patterns and optimal
                performance.
              </ProjectCardParagraph>
              <StackContainer
                technologies={[
                  'React',
                  'Gatsby',
                  'Styled Components',
                  'Netlify',
                ]}
              />
              <ProjectCardParagraph>
                Features smooth navigation, responsive design, and static site
                generation for fast loading times across all devices.
              </ProjectCardParagraph>
              <ButtonLayout>
                <a
                  href="https://github.com/andria-hibe/andria-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary">GitHub</Button>
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
              <StackContainer
                technologies={[
                  'Node.js',
                  'React & Redux',
                  'Bootstrap',
                  'Google Maps API',
                ]}
              />
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
                  <Button variant="primary">Watch pitch</Button>
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
