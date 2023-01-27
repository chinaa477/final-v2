import React from "react"
import { StyledFeatureDetails } from "./styles"
import img1 from "../../images/eduaccess/feature-details/1.png"
import img2 from "../../images/eduaccess/feature-details/2.png"
import img3 from "../../images/eduaccess/feature-details/3.png"
import img4 from "../../images/eduaccess/feature-details/4.png"

const FeatureDetails = () => {
  return (
    <div id="features-list">
      <StyledFeatureDetails className="features-list">
        <div className="wrapper">
          <div className="left">
            <img
              src={img1}
              alt=""
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
          <div className="right">
            <ul className="description">
              <li>
                The Turnkey Project by EDUACCESS involves setting up a school
                and defining its vision and mission, with the goal of becoming
                self-sustainable within two years.
              </li>
              <li>
                EDUACCESS offers diverse experiences and comprehensive solutions
                for successful learning and retention in automation and
                technology. Services include educational ecosystem setup,
                training, consulting, and LMS management.
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="left">
            <img
              src={img2}
              alt=""
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
          <div className="right">
            <ul className="description">
              <li>
                Eduaccess managed schools are known for their high academic
                standards and commitment to holistic development of students in
                a safe environment.
              </li>
              <li>
                The management team provides support to ensure compliance with
                statutory regulations, offers HR training and professional
                development, and assists with administrative and organizational
                needs.
              </li>
              <li>
                They also conduct regular visits, audits, and assessments to
                ensure the school's success.
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="left">
            <img
              src={img3}
              alt=""
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
          <div className="right">
            <ul className="description">
              <li>
                Eduaccess offers training programs for school leaders on
                leadership and management, based on the needs of the school and
                delivered online or offline.
              </li>
              <li>
                The training covers subject-specific and pedagogical topics as
                well as mental health and well-being.
              </li>
              <li>
                It is open to principals, vice principals, trustees, promoters,
                HODs, and senior teachers, and is designed to improve the
                capacity of educational institutions.
              </li>
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <div className="left">
            <img
              src={img4}
              alt=""
              className="drop-shadow-[0_30px_60px_rgba(59,130,246,0.25)]"
            />
          </div>
          <div className="right">
            <ul className="description">
              <li>
                We prioritize hiring the best teachers through individual and
                school-wide recruitment drives, with a focus on open-minded,
                positive, adaptable and student-focused candidates.
              </li>
              <li>
                We conduct background checks and use personal interviews,
                written tests, class demonstrations and group discussions in the
                selection process.
              </li>
              <li>
                Our HR protocol, including code of conduct and service rules, is
                also communicated to new faculty prior to appointment.
              </li>
            </ul>
          </div>
        </div>
      </StyledFeatureDetails>
    </div>
  )
}

export default FeatureDetails
