  import React from 'react';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import "./style.css"

export const EventItem = ({img, header, text, timedate, link}) => {
  const { t } = useTranslation();

  return (
    <div className="events-wrap">
      <img src={img} className="events-img" alt="" />
      <div className="events-text-wrap">
        <p className="events-header">{header}</p>
        <p className="events-text">{text}</p>
        <div className="events-footer-wrap">
          <p className="events-timedate">{timedate}</p>
          {link &&
            <a 
              href={link}
              target="_blank" 
              rel="noreferrer" 
            >
              <button className="events-more">{t('media.more_button')}</button>
            </a>
          }
        </div>
      </div>
    </div>
  );
}

EventItem.propTypes = {
  img: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timedate: PropTypes.string.isRequired,
  link: PropTypes.string
}
