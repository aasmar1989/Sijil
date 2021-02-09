import React from 'react';
import { ReactComponent as GoOnTop } from "../../../assets/icons/goOnTop.svg";
import "./style.css"

export const GoOnTopButton = (props) => {

  return (
    <div 
      onClick={() => {window.scrollTo(0, 0)}}
    >
      <GoOnTop className="footer-go-on-top-button" />
      <p className="footer-go-on-top-text">Go to the Top</p>
    </div>
  );
}