import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import { WhoWeAreDropdown } from "../nav/WhoWeAreDropdown/WhoWeAreDropdown"
import { ReferenceDropdown } from "../nav/ReferenceDropdown/ReferenceDropdown"
import { MediaDropdown } from "../nav/MediaDropdown/MediaDropdown"
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom'
import { 
  OUR_SERVICES,
  MEDIA,
  REFERENCES,
  ABOUT,
  CHAIRMAN_MESSAGE,
  CEO_MESSAGE,
  OUR_CLIENTS,
  OUR_TEAM,
  RULES_REGULATION,
  INITIATIVES,
  PRIVACY_POLICY,
  INVESTORS_RELATIONS
} from "../../constants/paths";
import './style.css'

export const NavBar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    
    const isWhoWeAreDropdown = () => (
         location.pathname === ABOUT
      || location.pathname === CHAIRMAN_MESSAGE
      || location.pathname === CEO_MESSAGE
      || location.pathname === OUR_CLIENTS
      || location.pathname === OUR_TEAM
    );

    const isReferenceDropdown = () => (
         location.pathname === RULES_REGULATION
      || location.pathname === INITIATIVES
      || location.pathname === PRIVACY_POLICY
      || location.pathname === INVESTORS_RELATIONS
    );

    const isCurrent = (path) => (location.pathname === path)

    return (
        <Row xs={1} sm={12} lg={12} xl={12}  className="navbar-wrap">
          <Col sm={3} md={3} lg={3} xl={2}>
            <div className="center navbar-item-wrap">
            {isWhoWeAreDropdown() && <div className="navbar-item-highlight" />}
              <WhoWeAreDropdown />
            </div>
          </Col>
          <Col sm={3} md={3} lg={3} xl={2}>
            <div className="center navbar-item-wrap">
              {isCurrent(OUR_SERVICES) && <div className="navbar-item-highlight" />}
              <Link
               className="navbar-item"
               to={OUR_SERVICES}
              >{t('header.our_services')}</Link> 
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}  xl={2}>
            <div className="center navbar-item-wrap">
              {isReferenceDropdown(REFERENCES) && <div className="navbar-item-highlight" />}
              <ReferenceDropdown />
            </div>
          </Col>
          <Col sm={3} md={3} lg={3}  xl={2}>
            <div className="center navbar-item-wrap">
              {isCurrent(MEDIA) && <div className="navbar-item-highlight" />}
              <MediaDropdown />
            </div>
          </Col>
        </Row>
    );
}