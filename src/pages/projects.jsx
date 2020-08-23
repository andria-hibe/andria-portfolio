import React from 'react'
import styled from 'styled-components'
import { device, GlobalStyles } from '../components/globalStyle'

import Nav from '../split-layout/nav'
import Button from '../components/button'

const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;

  @media ${device.laptop} {
    display: grid;
    justify-items: center;
    grid-template-columns: 30% auto;
    overflow: hidden;
  }
`

const NavLayout = styled.div`
  @media ${device.laptop} {
    grid-column: 1;
  }
`

const ProjectLayout = styled.div`
  width: 100%;
  padding: 0 1.5em;

  @media ${device.laptop} {
    overflow-y: scroll;
    grid-column: 2;
    padding: 0 5em;
  }
`

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #5b5b5b;
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

  :hover {
    box-shadow: 0.25em 1em 3em rgba(91, 91, 91, 0.3);
    transform: translate3D(0, -2px, 0);
  }

  @media ${device.tablet} {
    width: 80%;
  }
`

const ProjectHeading = styled.h2`
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

const ProjectParagraph = styled.p`
  padding: 0 1em;

  @media ${device.tablet} {
    padding: 0 2em;
  }
`

const Bold = styled.p`
  font-weight: bold;
  margin: 0;
`

const List = styled.ul`
  font-size: 1rem;
  line-height: 1.5em;
  list-style-type: circle;
  text-align: left;
  color: #5b5b5b;
  margin: 0.5em 0;
`

const ScrollToTop = styled.div`
  font-size: 0;

  @media (max-width: 1023px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: white;
    text-align: center;
    font-size: 1rem;
  }

  :hover {
    color: #555555;
  }
`

export default function Resume() {
  return (
    <ContentContainer>
      <GlobalStyles />
      <NavLayout>
        <a name="top">
          <Nav />
        </a>
      </NavLayout>
      <ProjectLayout>
        <Heading>Projects I'm particularly proud of:</Heading>
        <ProjectCardContainer>
          <ProjectCard>
            <ProjectHeading primary>Slack Bots</ProjectHeading>
            <ProjectParagraph>
              A project I did for the Humanitarian OpenStreetMap Team as part of
              the Outreachy Programme to improve internal comms for the team.
            </ProjectParagraph>
            <List>
              <Bold>Stack:</Bold>
              <li>Node.JS</li>
              <li>AWS Services (CloudFormation, API Gateway, SNS, Lambda)</li>
              <li>Various APIs (Slack, GitHub, OpenStreetMap tools)</li>
            </List>
            <ProjectParagraph>
              I created the application from scratch as well as was heavily
              involved in the architecture planning and stakeholder
              communications.
            </ProjectParagraph>
            <ProjectParagraph>
              This project was both exciting and challenging as I had to learn
              various AWS Services within a tight deadline.
            </ProjectParagraph>
            <ButtonLayout>
              <a href="https://github.com/hotosm/slack-bots/">
                <Button text="GitHub" />
              </a>
            </ButtonLayout>
          </ProjectCard>
          <ProjectCard>
            <ProjectHeading>Peer Postie</ProjectHeading>
            <ProjectParagraph>
              Won second equal during Hack the Crisis NZ 2020, a 48-hour
              nationwide hackathon with over 800 participants aimed at
              conceptualising and developing innovative ideas for life beyond
              COVID-19.
            </ProjectParagraph>
            <ProjectParagraph>
              A prototype for a peer-to-peer delivery service focused on local
              communities and businesses.
            </ProjectParagraph>
            <List>
              <Bold>Stack:</Bold>
              <li>Node.JS</li>
              <li>React and Redux</li>
              <li>Bootstrap</li>
              <li>Google Maps API</li>
            </List>
            <ProjectParagraph>
              I was lead developer for the team and was responsible for managing
              the dev team as well as coordinating between the tech and business
              strategy sides of the group.
            </ProjectParagraph>
            <ButtonLayout>
              <a href="https://youtu.be/Ju80eMQxyC8">
                <Button text="Watch pitch" />
              </a>
            </ButtonLayout>
          </ProjectCard>
          <ProjectCard>
            <ProjectHeading primary>This Website</ProjectHeading>
            <ProjectParagraph>
              This portfolio website was designed and created by myself using
              Gatsby and hosted on Netlify.
            </ProjectParagraph>
            <List>
              <Bold>Stack:</Bold>
              <li>React</li>
              <li>Gatsby</li>
              <li>Styled Components</li>
              <li>Netlify</li>
            </List>
            <ButtonLayout>
              <a href="https://github.com/andria-hibe/andria-portfolio">
                <Button text="GitHub" />
              </a>
            </ButtonLayout>
          </ProjectCard>
          <ProjectCard>
            <ProjectHeading>Wa</ProjectHeading>
            <ProjectParagraph>
              Graduation project for Enspiral DevAcademy. Wa is a location-based
              time-banking application where users can offer and request
              services using time as currency.
            </ProjectParagraph>
            <List>
              <Bold>Stack:</Bold>
              <li>React and Redux</li>
              <li>Node.js and Express.js</li>
              <li>SQLite3</li>
              <li>Semantic UI CSS framework</li>
              <li>GoogleMaps API</li>
            </List>
            <ProjectParagraph>
              I was responsible for using the GoogleMaps API to render a map of
              the immediate area of the current user as well as creating map
              markers for the tasks listed depending on proximity to the user.
            </ProjectParagraph>
            <ProjectParagraph>
              I was responsible for coordinating the team and troubleshooting
              for blocked members.
            </ProjectParagraph>
          </ProjectCard>
        </ProjectCardContainer>
        <a href="#top">
          <ScrollToTop>Scroll to the top</ScrollToTop>
        </a>
      </ProjectLayout>
    </ContentContainer>
  )
}
