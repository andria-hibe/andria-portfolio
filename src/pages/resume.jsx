import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import { device, GlobalStyles } from '../components/globalStyle'
import SplitLayout from '../split-layout/split-layout'
import Button from '../components/button'

const ButtonLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2em;

  @media ${device.laptop} {
    padding-bottom: 3em;
  }
`

export default function Resume() {
  return (
    <SplitLayout>
      <GlobalStyles />
      <h1>Andria Cristia Hibe</h1>
      <h2>Full Stack Developer</h2>
      <h3>Skills</h3>
      <h4>Tech Stack:</h4>
      <ul>
        <li>JavaScript & Node.js</li>
        <li>Cloud-computing platforms—AWS & Netlify</li>
        <li>Express.js</li>
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
      </ul>
      <h4>Other Skills:</h4>
      <ul>
        <li>
          <h5>Project management</h5>
          <p>
            Heading projects including budget planning, negotiating with clients
            and suppliers, and managing team members and suppliers.
          </p>
        </li>

        <li>
          <h5>Communication skills</h5>
          <p>
            Liaising with stakeholders including clients, suppliers, community
            groups, and government agencies.
          </p>
        </li>

        <li>
          <h5>Content writing</h5>
          <p>
            Crafting and editing articles and stories that engage audiences in a
            variety of ways.
          </p>
        </li>
      </ul>
      <h3>Work Experience</h3>
      <h4>Runn.io</h4>
      <h5>Software Developer (October 2020 - Present)</h5>
      <h4>Humanitarian OpenStreetMap Team (Outreachy Programme)</h4>
      <h5>Software Developer Intern (May 2020 - August 2020)</h5>
      <ul>
        <li>
          Developed a Slack app to improve internal comms and increase
          efficiency. Utilised the Slack API, GitHub API, and different
          OpenStreetMap APIs and tools.
        </li>
        <br />
        <li>
          Created the application using AWS services—Lambda functions to handle
          application logic, API Gateway for routing, SNS for messaging, and
          CloudFormation to codify the infrastructure.
        </li>
        <br />
        <li>
          Planned the architecture with the dev team bearing in mind
          maintainability, scalability, and cost-efficiency as per the needs of
          a free, open-source software community.
        </li>
      </ul>
      <h4>Freelance</h4>
      <h5>Web Developer (May 2020 - Present)</h5>
      <ul>
        Building static and dynamic websites for clients using Javascript
        frameworks and libraries—React, Redux, Gatsby—Node.js, Express, SQLite3,
        and Netlify
      </ul>
      <h4>Joylab Restaurant Group - Regatta Bar & Eatery</h4>
      <h5>Sales and Events Manager (March - July 2019)</h5>
      <ul>
        <li>
          Created strategies to generate revenue and maximise venue sales.
        </li>
        <br />
        <li>
          Oversaw all event requirements and ensured events ran smoothly to
          maximise the highest level of spend and customer satisfaction.
        </li>
      </ul>
      <h4>Takapuna Beach Business Association</h4>
      <h5>Marketing and Events Coordinator (September 2015 - December 2018)</h5>
      <ul>
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
      </ul>
      <h3>Education</h3>
      <h4>Enspiral DevAcademy</h4>
      <h5>Web Development Bootcamp</h5>
      <ul>
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
      </ul>
      <h4>De La Salle University</h4>
      <h5>Bachelor of Arts in International Studies</h5>
      <ul>
        <li>Graduated with First Class Honours</li>
        <li>Awarded Outstanding Thesis</li>
      </ul>
      <ButtonLayout>
        <a href="mailto:andriacohibe@gmail.com">
          <Button text="Email me!" />
        </a>
        <a href="https://drive.google.com/uc?export=download&id=1WFBif-SXgrJOJGzeigoZwM7V6Eo5QTko">
          <Button text="Download as pdf" />
        </a>
      </ButtonLayout>
    </SplitLayout>
  )
}

export function Head() {
  return <SEO title="Andria's Resume" description="Check out my journey so far" />
}
