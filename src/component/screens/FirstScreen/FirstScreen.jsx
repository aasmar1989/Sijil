import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as BigLogoIcon } from "../../../assets/icons/bigLogo.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ReactComponent as ShieldIcon } from "../../../assets/icons/shield.svg";
import { ReactComponent as GoDownIcon } from "../../../assets/icons/goDown.svg";
import { OUR_SERVICES, ABOUT } from "../../../constants/paths";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const FirstScreen = (props) => { 
    const { t } = useTranslation();

    return (
        <div className="first-screen">
            <Container className="main-container container-first-screen">
                <Row>
                    <Col className="col-first-screen" xs={12} sm={12} md={8} lg={6}>
                        <div className="left-column-first-screen">
                            <h6 className="subheader-first-screen">{t('main.first_screen.subheader')}</h6>
                            <h2 className="header-first-screen">{t('main.first_screen.header_1')}<span className="header-first-screen">{t('main.first_screen.header_2')}</span>{t('main.first_screen.header_3')}</h2>
                            <div className="text-wrap-first-screen">
                                <p className="text-first-screen">{t('main.first_screen.text')}</p>
                            </div>
                            <Row  className="button-wrap-first-screen" xs={1} sm={2}>
                                <Col>
                                    <Link to={ABOUT}>
                                        <button className="about-us-first-screen">{t('main.first_screen.about_us')}<ShieldIcon /></button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to={OUR_SERVICES}>
                                        <button className="our-services-first-screen">{t('main.first_screen.our_services')}<ArrowIcon /></button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="col-first-screen d-none  d-md-block"  xs={12} sm={12} md={4} lg={6}>
                        <div className="center">
                            <BigLogoIcon className="big-logo" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <GoDownIcon className="go-down-icon-wrap" />
            <PageIndicator 
                dark
                currentPage="1"
                totalPages="6"
            />
        </div>
    );
}