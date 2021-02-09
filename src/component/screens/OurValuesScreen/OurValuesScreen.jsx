import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import { ReactComponent as BlubCheckmarkIcon } from "../../../assets/icons/ourValues/bulb-checkmark.svg";
import { ReactComponent as PartnerHandshakeIcon } from "../../../assets/icons/ourValues/partner-handshake.svg";
import { ReactComponent as ShieldCheckmarkIcon } from "../../../assets/icons/ourValues/shield-checkmark-line.svg";
import './style.css'


export const OurValuesScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="values-screen">        
            <Container className="main-container container-values-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-values">{t('about.values.header')}</h2>
                        <div className="top-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} lg={4} className="col-values-item-screen">
                        <div className="item-wrap-values">
                            <BlubCheckmarkIcon />
                            <p className="item-header-values">{t('about.values.item_header_1')}</p>
                            <p className="item-text-values">{t('about.values.item_text_1')}</p>
                        </div>
                    </Col>
                    <Col sx={1} lg={4}  className="col-values-item-screen">
                        <div className="item-wrap-values">
                            <PartnerHandshakeIcon />
                            <p className="item-header-values">{t('about.values.item_header_2')}</p>
                            <p className="item-text-values">{t('about.values.item_text_2')}</p>
                        </div>
                    </Col>
                    <Col sx={1} lg={4}  className="col-values-item-screen">
                        <div className="item-wrap-values">
                            <ShieldCheckmarkIcon />
                            <p className="item-header-values">{t('about.values.item_header_3')}</p>
                            <p className="item-text-values">{t('about.values.item_text_3')}</p>
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