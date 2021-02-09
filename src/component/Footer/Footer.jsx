import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import footerLogo from "../../assets/header-logo.png";
// import { ReactComponent as MailIcon } from "../../assets/icons/social/email.svg";
// import { ReactComponent as FacebookIcon } from "../../assets/icons/social/facebook.svg";
// import { ReactComponent as TwitterIcon } from "../../assets/icons/social/twitter.svg";
// import { ReactComponent as WhatsappIcon } from "../../assets/icons/social/whatsapp.svg";
import { GoOnTopButton } from "../base/GoOnTopButton/GoOnTopButton";
import history from "../../history";
import { 
  MAIN, 
  FAQ,
  CAREER_OPPORTUNITIES,
  CONTACT_US,
  SITEMAP
 } from "../../constants/paths";
 import { Link } from "react-router-dom";
import './style.css'

export const Footer = () => {
    const { t } = useTranslation();
      
    return (
          <footer className="app-footer">
            <Container className="footer">
              <Row xs={12} sm={12} lg={12} xl={12}>
                  <Col sm={12} md={6} lg={3} xl={3}>
                      <div className="footer-item-wrap">
                          <img src={footerLogo} className="footeer-logo" onClick={() => history.push(MAIN)} alt="" />
                          <div className="footer-text-wrap">
                            <p className="footer-text">{t('footer.text_1')}</p>
                            <p className="footer-text">{t('footer.all_rights')}</p>
                          </div>
                      </div>
                  </Col>
                  <Col className="footer-item-wrap" sm={12} md={6} lg={3} xl={3}>
                    <div className="center">
                      <div className="footer-text-wrap">
                        <Link
                          className="footer-text-bold"
                          to={FAQ}
                        >{t('footer.faq')}</Link>
                        <Link
                          className="footer-text-bold"
                          to={CAREER_OPPORTUNITIES}
                        >{t('footer.opportunities')}</Link>
                        {/* <Link 
                          className="footer-text-bold"
                          to={INVESTORS_RELATIONS}
                        >{t('footer.investors_relations')}</Link> */}
                      </div>
                    </div>
                  </Col>
                  <Col className="footer-item-wrap" sm={12} md={6} lg={3} xl={3}>
                    <div className="center">
                      <div className="footer-text-wrap">
                        <Link 
                          className="footer-text-bold"
                          to={CONTACT_US}
                        >{t('footer.contact_us')}</Link>
                        <Link
                          className="footer-text-bold"
                          to={SITEMAP}
                        >{t('footer.sitemap')}</Link>
                      </div>
                    </div>
                  </Col>
                  <Col className="footer-item-wrap" sm={12} md={6} lg={3} xl={3}>
                    <GoOnTopButton />
                    {/* <div className="social-icons-wrap">
                      <MailIcon />
                      <FacebookIcon />
                      <TwitterIcon />
                      <WhatsappIcon />
                    </div> */}
                  </Col>
                </Row>
              </Container>
          </footer>
    );
}