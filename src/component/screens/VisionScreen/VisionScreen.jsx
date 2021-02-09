import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as BigLogoIcon } from "../../../assets/icons/bigLogo.svg";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const VisionScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="vision-screen">
            <Container className="main-container container-vision">
                <Row>
                    <Col className="col-vision d-none d-md-block" xs={12} sm={12} md={4} lg={6}>
                        <div className="center">
                            <BigLogoIcon className="big-logo" />
                        </div>
                    </Col>
                    <Col className="col-vision" xs={12} sm={12} md={8} lg={6}>
                        <div className="right-column-vision">
                            <div className="line-container">
                                <h6 className="subheader-vision">{t('about.vision.header_1')}</h6>
                                <div className="left-bottom-line"></div>
                            </div>
                            <p className="text-vision">{t('about.vision.text_1')}</p>
                            <div className="line-container">
                                <h6 className="subheader-vision">{t('about.vision.header_2')}</h6>
                                <div className="left-bottom-line"></div>
                            </div>
                            <p className="text-vision">{t('about.vision.text_2')}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PageIndicator 
                currentPage="2"
                totalPages="3"
            />
        </div>

    );
}