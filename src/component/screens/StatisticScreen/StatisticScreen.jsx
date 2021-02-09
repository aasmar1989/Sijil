import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const StatisticScreen = (props) => { 
    const { t } = useTranslation();

    return (
        <div className="statistic-screen">        
            <Container className="main-container container-statistic-screen">
                <Row>
                    <Col>
                        <h6 className="subheader-statistic">{t('main.statistic.subheader')}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="header-statistic">{t('main.statistic.header')}</h2>
                    </Col>
                </Row>
                <Row>
                    {t("main.statistic.list", {returnObjects: true}).map(({number, text}) => 
                        <Col sx={1} md={4} className="col-statistic-item-screen">
                            <div className="item-wrap-statistic">
                                <p className="item-number-statistic">{number}</p>
                                <p  className="item-text-statistic">{text}</p>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
            <PageIndicator 
                dark
                currentPage="2"
                totalPages="6"
            />
        </div>
    );
}