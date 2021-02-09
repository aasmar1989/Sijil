  import React from 'react';
// import { ReactComponent as GoOnTop } from "../../../assets/icons/goOnTop.svg";
import { ReactComponent as EmailIcon } from "../../../assets/icons/social_employee/email.svg";
import { ReactComponent as LinkedIcon } from "../../../assets/icons/social_employee/linkedin.svg";
import PropTypes from 'prop-types'
import "./style.css"

export const EmployeeItem = ({img, name, jobTitle, description, email, linkedIn, dark}) => {

  return (
    <div className="employee-wrap">
      <img src={img} className="employee-img" alt="" />
      <div className={`employee-text-wrap ${dark && "employee-text-wrap-dark"}`}>
        <p className="employee-name">{name}</p>
        <p className={`employee-job-title ${dark && "employee-job-title-dark"}`}>{jobTitle}</p>
        <p className="employee-description">{description}</p>
        <div className="employee-social-wrap">
          {email && 
            <a 
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="employee-social-link"
            >
              <EmailIcon />
            </a>
          }
          {linkedIn && 
            <a 
              href={linkedIn}
              target="_blank"
              className="employee-social-link" 
              rel="noreferrer" 
            >
              <LinkedIcon />
            </a>
          }        
        </div>
      </div>
    </div>
  );
}

EmployeeItem.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  dark: PropTypes.bool,
}
