import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import Img1 from "../../../assets/icons/initiatives/img-1.png";
import Img2 from "../../../assets/icons/initiatives/img-2.png";
import Img3 from "../../../assets/icons/initiatives/img-3.png";
import './style.css'

export const InitiativesScreen = () => { 
    const { t } = useTranslation();

    const items = [
        { img: Img1, text: t("initiatives.housing"), hover_text: t("initiatives.hover_housing", {returnObjects: true})},
        { img: Img2, text: t("initiatives.financial_sector"), hover_text: t("initiatives.hover_financial_sector", {returnObjects: true})},
        { img: Img3, text: t("initiatives.transformation"), hover_text: t("initiatives.hover_transformation", {returnObjects: true})}
    ]

    return (
        <div className="initiatives-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-initiatives">{t('initiatives.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="initiatives-description">{t("initiatives.subTitle")}</p>
                    </Col>
                </Row>
                <Row className="initiatives-list">
                    {items.map(({img, text, hover_text}, index) => 
                        <Col xs={12} sm={6} lg={4} key={index} className="my-3">
                            <div class="initiatives-item-box-flip-box">
                                <div class="initiatives-item-box-flip-box-inner">
                                    <div class="initiatives-item-box-flip-box-front">
                                        <div className={`initiatives-item-box initiatives-item-box-${[index+1]}`}>
                                            <div className="initiatives-item-img"><img src={img} alt=""/></div>
                                            <div className="initiatives-item-text">{text}</div>
                                        </div>
                                    </div>
                                    <div class="initiatives-item-box-flip-box-back">
                                        <div className={`initiatives-item-box initiatives-item-box-${[index+1]}`}>
                                            <div className="center">
                                                <div className="initiatives-item-hover-text">
                                                    <dl>
                                                        {hover_text.map(({text}, hoverIndex) => (
                                                            <dd className="initiatives-item-hover-text" key={hoverIndex}>- {text}</dd>
                                                        ))}
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>

    );
}