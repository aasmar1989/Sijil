import React from 'react';
import { ReactComponent as PageIndicatorIcon } from "../../../assets/icons/pageIndicator.svg";
import { ReactComponent as PageIndicatorDarkIcon } from "../../../assets/icons/pageIndicatorDark.svg";
import PropTypes from 'prop-types'
import "./style.css"

export const PageIndicator = ({dark, currentPage, totalPages}) => {  
  return (
    <div className="page-indicator-wrap">
      <p className={dark ? "page-indicator-current-dark" : "page-indicator-current"}>{currentPage}</p>
      {dark
        ? <PageIndicatorDarkIcon />
        : <PageIndicatorIcon />
      }
      <p className={dark ? "page-indicator-total-dark" : "page-indicator-total"}>{totalPages}</p>
    </div>
  );
}

PageIndicator.propTypes = {
  dark: PropTypes.bool,
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,
}
