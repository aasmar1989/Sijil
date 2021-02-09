import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import CeoMessage from "../../../assets/img/team/ceo_message.svg";
import { ReactComponent as QuoteIcon } from "../../../assets/icons/quote.svg";

import './style.css'


export const CEOMessageScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="ceo-screen">        
            <Container className="main-container container-ceo-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-ceo">{t('ceo.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} lg={4} className="col-ceo-item-screen">
                        <div className="ceo-img-wrap center">
                            <img src={CeoMessage} className="ceo-img" alt="" />
                            <p className="ceo-header-img">{t('ceo.ceo_name')}</p>
                            <p className="ceo-position-img">{t('ceo.ceo_position')}</p>
                        </div>
                    </Col>
                    <Col sx={1} lg={8}  className="col-ceo-item-screen">
                        <div className="item-wrap-ceo">
                            <QuoteIcon className="top-left-quote" />
                            <QuoteIcon className="bottom-right-quote" />

                            
                            <p className="ceo-message-header">{t('ceo.ceo_message_header')}</p>
                            {t("ceo.ceo_message_paragraph_list", {returnObjects: true}).map(({text}) => 
                                <p className="ceo-message-text" key={text}>{text}</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}