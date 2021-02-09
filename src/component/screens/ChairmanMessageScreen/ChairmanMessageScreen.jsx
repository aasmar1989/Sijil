import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import ChairmanMessage from "../../../assets/img/team/chairman-message.svg";
import { ReactComponent as QuoteIcon } from "../../../assets/icons/quote.svg";

import './style.css'


export const ChairmanMessageScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="chairman-screen">        
            <Container className="main-container container-chairman-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-chairman">{t('chairman.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} lg={4} className="col-chairman-item-screen">
                        <div className="chairman-img-wrap center">
                            <img src={ChairmanMessage} className="chairman-img" alt="" />
                            <p className="chairman-header-img">{t('chairman.chairman_name')}</p>
                            <p className="chairman-position-img">{t('chairman.chairman_position')}</p>
                        </div>
                    </Col>
                    <Col sx={1} lg={8}  className="col-chairman-item-screen">
                        <div className="item-wrap-chairman">
                            <QuoteIcon className="top-left-quote" />
                            <QuoteIcon className="bottom-right-quote" />

                            
                            <p className="chairman-message-header">{t('chairman.chairman_message_header')}</p>
                            {t("chairman.chairman_message_paragraph_list", {returnObjects: true}).map(({text}, index) => 
                                <p className="ceo-message-text" key={`${index}`}>{text}</p>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}