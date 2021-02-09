import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import PenIcon from "../../../assets/icons/ourService/pen.svg";
import CopyIcon from "../../../assets/icons/ourService/copy.svg";
import CertificationIcon from "../../../assets/icons/ourService/certification.svg";
import FinSertificationIcon from "../../../assets/icons/ourService/fin_certification.svg";
import ShareIcon from "../../../assets/icons/ourService/share.svg";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import PropTypes from 'prop-types'
import './style.css'


export const OurServiceScreen = ({ fullscreen }) => { 
    const { t } = useTranslation();
    const our_service_icons = [//must match with main.our_service.list
        PenIcon,
        CopyIcon,
        CertificationIcon,
        FinSertificationIcon,
        ShareIcon,
      ];

    return (
        <div className={`our-service-screen ${fullscreen && "our-service-screen-fullscreen"}`}>
            <Container>
                <Row>
                    <Col className='line-container'>
                        <div className="top-line"/>
                        <h2 className={`header-our-service ${fullscreen && "header-our-service-fullscreen"}`}>{t('main.our_service.header')}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="main-container container-our-service">
                <Row>
                {t("main.our_service.list", {returnObjects: true}).map(({header_text, hover_text}, slideIndex) => 
                    <Col sx={12} sm={12} md={6} lg={4}>
                        <div class="item-wrap-our-service">
                            <div class="item-wrap-our-service-inner">
                                <div class="item-wrap-our-service-front">
                                    <img className='item-icon-our-service' src={our_service_icons[slideIndex]} alt="" />
                                    <p className='item-text-our-service'>{header_text}</p>
                                </div>
                                <div class="item-wrap-our-service-back">
                                    <p className='item-hover-text-our-service'>{hover_text}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                )}
                </Row>
            </Container>
            {!fullscreen 
             && <PageIndicator
                    dark
                    currentPage="4"
                    totalPages="6"
                />
            }
            
        </div>

    );
}

PageIndicator.propTypes = {
    fullscreen: PropTypes.bool,
}
  