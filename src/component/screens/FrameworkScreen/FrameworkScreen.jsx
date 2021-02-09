import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'


export const FrameworkScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="framework-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-framework">{t('framework.title')}</h2>
                        <div className="bottom-line-left"></div>
                    </Col>
                </Row>

                <Row>
                    <Col><div className="framework-subtitle">{t("framework.subTitle")}</div></Col>
                </Row>

                <Row>
                    <Col>
                        {t("framework.list", {returnObjects: true}).map(({title, text}, index) => 
                            <div key={index} className="list-item">
                                <p className="list-item-title">{index + 1}. {title}</p>
                                <p className="list-item-text">{text}</p>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}