import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const HistoryScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="history-screen">        
            <Container className="main-container container-history-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-history">{t('about.history.header')}</h2>
                        <div className="top-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} lg={4} className="col-history-item-screen">
                        <div className="item-wrap-history item-wrap-history-1">
                            <p  className="item-title-history">{t('about.history.our_past')}</p>
                            <div className="item-bg-history">
                                <p  className="item-text-history">{t('about.history.our_past_text')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sx={1} lg={4}  className="col-history-item-screen">
                        <div className="item-wrap-history item-wrap-history-2">
                            <p  className="item-title-history">{t('about.history.our_present')}</p>
                            <div className="item-bg-history">
                                <p  className="item-text-history">{t('about.history.our_future_text')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sx={1} lg={4}  className="col-history-item-screen">               
                        <div className="item-wrap-history item-wrap-history-3">
                            <p  className="item-title-history">{t('about.history.our_future')}</p>
                            <div className="item-bg-history">
                                <p  className="item-text-history">{t('about.history.our_future_text')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PageIndicator 
                dark
                currentPage="1"
                totalPages="3"
            />
        </div>
    );
}