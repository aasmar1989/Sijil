import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import headerLogo from "../../assets/header-logo.png";
import { ReactComponent as LoupeIcon } from "../../assets/icons/loupe.svg";
import { ChangeLanguageButton } from "../../component/base/ChangeLanguageButton/ChangeLanguageButton"
import history from "../../history";
import { MAIN } from "../../constants/paths";
import { NavBar } from "../NavBar/NavBar"
import './style.css'

export const Header = () => {
    const { t } = useTranslation();
      
    return (
        <Navbar className="nav-bar-wrap" expand="xl">
          <Navbar.Brand>
            <img src={headerLogo} className="header-logo" onClick={() => history.push(MAIN)} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <header className="app-header">
              <Container className="header">
                <Row>
                    <Col className="" sm={12} md={12} lg={12} xl={8}>
                      <NavBar />
                    </Col>
                    <Col className="" sm={12} md={12} lg={12} xl={4}>
                      <Row className="header-item-wrap" >
                        <Col xs={12} sm={4}>
                          <div className="center">
                            <button className="e-services">
                              {t('header.e_services')}
                            </button>
                          </div>
                        </Col>
                        <Col xs={12} sm={4}>
                          <div className="center">
                            <LoupeIcon className="searchIcon" />
                          </div>
                        </Col>
                        <Col xs={12} sm={4}>
                          <div className="center">
                            <ChangeLanguageButton />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
            </header>
          </Navbar.Collapse>
        </Navbar>
  );
}