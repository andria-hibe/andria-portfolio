import React from 'react'
import styled from 'styled-components'
import { device, GlobalStyles } from '../components/globalStyle'

import Nav from '../split-layout/nav'

const ContentContainer = styled.div`
  height: 100vh;
  width: 100vw;

  @media ${device.laptop} {
    display: grid;
    justify-items: center;
    grid-template-columns: 30% 70%;
    grid-gap: 5em;
  }
`

const NavLayout = styled.div`
  @media ${device.laptop} {
    grid-column: 1;
  }
`

const ResumeLayout = styled.div`
  margin: 0 1.5em;
`

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #5b5b5b;
`

const SubHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #5b5b5b;
  margin-bottom: 1.5em;
`

const CategoryHeading = styled.h3`
  font-size: 1.5rem;
  text-align: left;
  color: #ff9498;
  margin-top: 3em;
`

const CategorySubHeading = styled.h4`
  font-size: 1.2rem;
  text-align: left;
  color: #53c0f6;
  font-weight: bold;
  margin: 0;
`

const Bold = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`

const List = styled.ul`
  font-size: 1rem;
  line-height: 1.5em;
  list-style-type: circle;
  text-align: left;
  color: #5b5b5b;
  margin: 0.5em 0 3em;
`

const PageAnchor = styled.a`
  color: #5b5b5b;
  font-family: Lato;

  :hover {
    color: grey;
  }
`

const ScrollToTop = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: white;
  text-align: center;
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
      <ResumeLayout>
        <Heading>Andria Cristia Hibe</Heading>

        <SubHeading>Full Stack Developer</SubHeading>

        <p>
          I will bring to your organisation a passion for tech, and a continued
          and deep desire to learn and improve.
        </p>
        <p>
          I am looking to work with a collaborative team where I can have
          meaningful impact.
        </p>
        <p>
          I have proven experience in rapport building with stakeholders and
          clients, project management and communication skills that I have
          developed through years of working in advocacy, marketing, and sales.
        </p>

        <CategoryHeading>Skills</CategoryHeading>
        <CategorySubHeading>Tech Stack:</CategorySubHeading>
        <List>
          <li>JavaScript & Node.js</li>
          <li>Cloud-computing platforms—AWS & Netlify</li>
          <li>Express</li>
          <li>React</li>
          <li>Redux</li>
          <li>Gatsby</li>
          <li>SQLite3 & Knex</li>
          <li>REST-ful APIs</li>
          <li>HTML & CSS—including CSS frameworks</li>
          <li>Testing suites—Jest, Tape, Sinon, Enzyme, Supertest</li>
          <li>UI/UX design tools—Figma, Adobe XD</li>
          <li>Version Control with Git</li>
          <li>SEO & Google Analytics</li>
        </List>

        <CategorySubHeading>Other Skills:</CategorySubHeading>
        <List>
          <li>
            <Bold>Project management</Bold>
            <p>
              Heading projects including budget planning, negotiating with
              clients and suppliers, and managing team members and suppliers.
            </p>
          </li>

          <li>
            <Bold>Communication skills</Bold>
            <p>
              Liaising with stakeholders including clients, suppliers, community
              groups, and government agencies.
            </p>
          </li>

          <li>
            <Bold>Content writing</Bold>
            <p>
              Crafting and editing articles and stories that engage audiences in
              a variety of ways.
            </p>
          </li>
        </List>

        <CategoryHeading>Work Experience</CategoryHeading>
        <CategorySubHeading>
          Humanitarian OpenStreetMap Team (Outreachy Programme)
        </CategorySubHeading>
        <Bold>Software Developer Intern (May 2020 - August 2020)</Bold>
        <List>
          <li>
            Developed a Slack app to improve internal comms and increase
            efficiency. Utilised the Slack API, GitHub API, and different
            OpenStreetMap APIs and tools.
          </li>
          <br />
          <li>
            Created the application using AWS services—Lambda functions to
            handle application logic, API Gateway for routing, SNS for
            messaging, and CloudFormation to codify the infrastructure.
          </li>
          <br />
          <li>
            Planned the architecture with the dev team bearing in mind
            maintainability, scalability, and cost-efficiency as per the needs
            of a free, open-source software community.
          </li>
        </List>

        <CategorySubHeading>Freelance</CategorySubHeading>
        <Bold>Web Developer (May 2020 - Present)</Bold>
        <List>
          Building static and dynamic websites for clients using Javascript
          frameworks and libraries—React, Redux, Gatsby—Node.js, Express,
          SQLite3, and Netlify
        </List>

        <CategorySubHeading>
          Joylab Restaurant Group - Regatta Bar & Eatery
        </CategorySubHeading>
        <Bold>Sales and Events Manager (March - July 2019)</Bold>
        <List>
          <li>
            Created strategies to generate revenue and maximise venue sales
          </li>
          <br />
          <li>
            Oversaw all event requirements and ensured events ran smoothly to
            maximise the highest level of spend and customer satisfaction.
          </li>
        </List>

        <CategorySubHeading>
          Takapuna Beach Business Association
        </CategorySubHeading>
        <Bold>
          Marketing and Events Coordinator (September 2015 - December 2018)
        </Bold>
        <List>
          <li>
            Grew the following and engagement of the I Love Takapuna website and
            social media accounts and coordinated the production of marketing
            collaterals.
          </li>
          <br />
          <li>
            Organised and managed events and promotions in Takapuna attracting
            thousands of visitors to the town centre.
          </li>
        </List>

        <CategoryHeading>Education</CategoryHeading>
        <CategorySubHeading>Enspiral DevAcademy</CategorySubHeading>
        <Bold>Web Development Bootcamp</Bold>
        <List>
          <li>
            Simulated work environment using topical web development tech stack
            and following Agile and Scrum principles.
          </li>
          <br />
          <li>
            Completed projects with tight deadlines, doing project planning,
            coding, debugging, testing and presenting to tech and non-tech
            audiences.
          </li>
          <br />
          <li>
            Developed soft skills essential to working in the tech industry and
            worked with colleagues in pairs and groups.
          </li>
        </List>

        <CategorySubHeading>De La Salle University</CategorySubHeading>
        <Bold>Bachelor of Arts in International Studies</Bold>
        <List>
          <li>Graduated with First Class Honours</li>
          <li>Awarded Outstanding Theses</li>
        </List>
        <a href="#top">
          <ScrollToTop>Scroll to the top</ScrollToTop>
        </a>
      </ResumeLayout>
    </ContentContainer>
  )
}
