import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import { ReactComponent as FAQIcon } from "../../../assets/icons/FAQ.svg";
import { ReactComponent as FAQChevronIcon } from "../../../assets/icons/FAQChevron.svg";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import { FAQ, CONTACT_US } from "../../../constants/paths";

import './style.css'


export const FAQScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="faq-screen">
            <Container className="main-container">
                <Row>
                    <Col className="d-none d-lg-block" lg={4}>
                        <div className="center">
                            <FAQIcon />
                        </div>
                    </Col>
                    <Col  md={12} lg={8}>
                        <div className="faq-wrap">
                            <h6 className="subheader-faq">{t('main.faq.subheader')}</h6>
                            <h2 className="header-faq">{t('main.faq.header')}</h2>
                            <Accordion className="faq-accordion">
                                {t("main.faq.list", {returnObjects: true}).map(({question, answer}, index) => 
                                    <Card className="faq-card">
                                        <Accordion.Toggle 
                                            as={Card.Header} 
                                            eventKey={`${index}`}//to string
                                            className="faq-card-header-wrap"
                                        >
                                        <p className="faq-card-header-text">{question}</p>
                                        <FAQChevronIcon className="faq-card-header-chevron"/>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={`${index}`}>
                                            <Card.Body className="faq-card-body">
                                                <p className="faq-card-body-text">{answer}</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )}
                            </Accordion>
                            <Row className="faq-button-wrap" xs={1} sm={2}>
                                <Col>
                                    <Link to={FAQ}>
                                        <button className="button-more-faq">{t('main.faq.button_more_faq')}</button>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to={CONTACT_US}>
                                        <button className="button-contact-us">{t('main.faq.button_contact_us')}</button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PageIndicator 
                currentPage="6"
                totalPages="6"
            />
        </div>
    );
}