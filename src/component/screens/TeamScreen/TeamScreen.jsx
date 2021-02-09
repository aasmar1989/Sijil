import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const TeamScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="team-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <div className="top-line"/>
                        <h2 className="header-team">{t('team.team.header')}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="main-container">
                <Row>
                    <Col sx={12} md={6} className="col-item-wrap-team">
                        <div className="slide-item-team-wrap">
                            <h6 className="slide-item-header-team">{t('team.team.subheader')}</h6>
                            {t("team.team.paragraphs", {returnObjects: true}).map(({texts}, paragraphIndex) => (
                                <p className="slide-item-text-team" key={`Paragraph_${paragraphIndex}`}>
                                    {Array.isArray(texts) && texts.map(({text, highlight}, spanIndex) => (
                                        <span className={highlight && "slide-item-highlight"} key={`span_${spanIndex}`}>{text}</span>
                                    ))}
                                </p>
                            ))}
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