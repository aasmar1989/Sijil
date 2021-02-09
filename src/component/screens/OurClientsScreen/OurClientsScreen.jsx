import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as ChevronIcon } from "../../../assets/icons/chevron.svg";
import { OUR_CLIENTS } from "../../../constants/paths";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const OurClientsScreen = (props) => { 
    const { t } = useTranslation();
    const backgroundClasses = [ //must match with main.our_clients.list
        "bank-img our-clients-img",
        "investor-img our-clients-img",
        "companies-img our-clients-img",
        "authorities-img our-clients-img"
    ]

    return (
        <div className="our-clients-screen">
            <Container className="main-container">
                <Row>
                    <Col>
                        <h6 className="subheader-our-clients">{t('main.our_clients.subheader')}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-our-clients">{t('main.our_clients.header')}</h2>
                    </Col>
                </Row>
                <Row className="align-items-start pt-5">
                    {t("main.our_clients.list", {returnObjects: true}).map(({text}, index) => 
                        <Col xs={12} sm={6} md={3} className="col-item-wrap-our-clients">
                            <div className="our-clients-item-wrap">
                                <div className={backgroundClasses[index]}></div>
                                <p className="item-text-our-clients">{text}</p>
                            </div>
                        </Col>
                    )}
                </Row>
                <Row>
                    <Col>
                        <Link to={OUR_CLIENTS}>
                            <button className="button-our-clients">Client List<ChevronIcon /></button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <PageIndicator 
                dark
                currentPage="5"
                totalPages="6"
            />
        </div>
    );
}