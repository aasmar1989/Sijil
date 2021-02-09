import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'


export const RulesScreen = (props) => { 
    const { t } = useTranslation();

    return (
        <div className="rules-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-rules">{t('rules.title')}</h2>
                        <div className="bottom-line-left"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="link-list">
                            {t("rules.links", { returnObjects: true })
                                .map(({title, href}, index) => 
                                <a href={href} key={index} className="link-item">
                                    <li>{title}</li>
                                </a>
                            )}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}