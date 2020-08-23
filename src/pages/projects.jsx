import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'
import Button from '../components/button'

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-start;
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

  :hover {
    box-shadow: 0.25em 1em 3em rgba(91, 91, 91, 0.3);
    transform: translate3D(0, -2px, 0);
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
      <SEO
        title="Andria's Projects"
        description="A list of projects I'm proud of"
      />
      <GlobalStyles />
      <h1>Projects I'm particularly proud of:</h1>
      <ProjectCardContainer>
        <ProjectCard>
          <ProjectCardHeading primary>Slack Bots</ProjectCardHeading>
          <ProjectCardParagraph>
            A project I did for the Humanitarian OpenStreetMap Team as part of
            the Outreachy Programme to improve internal comms for the team.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>Node.JS</li>
            <li>AWS Services (CloudFormation, API Gateway, SNS, Lambda)</li>
            <li>Various APIs (Slack, GitHub, OpenStreetMap tools)</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I created the application from scratch as well as was heavily
            involved in the architecture planning and stakeholder
            communications.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            This project was both exciting and challenging as I had to learn
            various AWS Services within a tight deadline.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a href="https://github.com/hotosm/slack-bots/">
              <Button text="GitHub" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>Peer Postie</ProjectCardHeading>
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
            <li>Node.JS</li>
            <li>React and Redux</li>
            <li>Bootstrap</li>
            <li>Google Maps API</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I was lead developer for the team and was responsible for managing
            the dev team as well as coordinating between the tech and business
            strategy sides of the group.
          </ProjectCardParagraph>
          <ButtonLayout>
            <a href="https://youtu.be/Ju80eMQxyC8">
              <Button text="Watch pitch" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading primary>This Website</ProjectCardHeading>
          <ProjectCardParagraph>
            This portfolio website was designed and created by myself using
            Gatsby and hosted on Netlify.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React</li>
            <li>Gatsby</li>
            <li>Styled Components</li>
            <li>Netlify</li>
          </ProjectCardList>
          <ButtonLayout>
            <a href="https://github.com/andria-hibe/andria-portfolio">
              <Button text="GitHub" />
            </a>
          </ButtonLayout>
        </ProjectCard>
        <ProjectCard>
          <ProjectCardHeading>Wa</ProjectCardHeading>
          <ProjectCardParagraph>
            Graduation project for Enspiral DevAcademy. Wa is a location-based
            time-banking application where users can offer and request services
            using time as currency.
          </ProjectCardParagraph>
          <ProjectCardList>
            <h5>Stack:</h5>
            <li>React and Redux</li>
            <li>Node.js and Express.js</li>
            <li>SQLite3</li>
            <li>Semantic UI CSS framework</li>
            <li>GoogleMaps API</li>
          </ProjectCardList>
          <ProjectCardParagraph>
            I was responsible for using the GoogleMaps API to render a map of
            the immediate area of the current user as well as creating map
            markers for the tasks uled depending on proximity to the user.
          </ProjectCardParagraph>
          <ProjectCardParagraph>
            I was responsible for coordinating the team and troubleshooting for
            blocked members.
          </ProjectCardParagraph>
        </ProjectCard>
      </ProjectCardContainer>
    </SplitLayout>
  )
}
