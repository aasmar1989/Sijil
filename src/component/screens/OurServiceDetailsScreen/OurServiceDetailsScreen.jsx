import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as EditDocumentIcon } from "../../../assets/icons/ourServiceDetails/edit-document.svg";
import { ReactComponent as CopyIcon } from "../../../assets/icons/ourServiceDetails/copy.svg";
import { ReactComponent as CertificateOutlineIcon } from "../../../assets/icons/ourServiceDetails/certificate-outline.svg";
import { ReactComponent as CertificationIcon } from "../../../assets/icons/ourServiceDetails/certification.svg";
import { ReactComponent as ShareIcon } from "../../../assets/icons/ourServiceDetails/share.svg";
// import { ReactComponent as ShareIcon } from "../../../assets/icons/ourService/share.svg";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import PropTypes from 'prop-types'
import './style.css'


export const OurServiceDetailsScreen = ({ fullscreen }) => { 
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className="our-service-details-screen">
                <Container>
                    <Row>
                        <Col className='line-container'>
                            <div className="top-line"/>
                            <h2 className="header-details-our-service">{t('our_service.header')}</h2>
                        </Col>
                    </Row>
                </Container>
                <Container className="main-container container-details-our-service">
                    <Row>
                        <Col sx={12} sm={12} md={6} lg={4}>
                            <div className="center">
                                <EditDocumentIcon className="details-our-service-icon"/>
                            </div>
                        </Col>
                        <Col sx={12} sm={12} md={6} lg={8}>
                            <div className="details-our-service">
                                <h6 className="details-our-service-subheader">{t('our_service.service_1.header')}</h6>
                                <p className="details-our-service-text">
                                    {t('our_service.service_1.text_1')}
                                    {/* <span className="details-our-service-text-highlight"> {t('our_service.service_1.text_highlight_2')} </span> */}
                                    {/* {t('our_service.service_1.text_2')} */}
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="our-service-details-screen-dark">
                <Container className="main-container container-details-our-service">
                    <Row>
                        <Col sx={12} sm={12} md={6} lg={4}>
                            <div className="center">
                                <CopyIcon className="details-our-service-icon-dark"/>
                            </div>
                        </Col>
                        <Col sx={12} sm={12} md={6} lg={8}>
                            <div className="details-our-service">
                                <h6 className="details-our-service-subheader details-our-service-subheader-dark">{t('our_service.service_2.header')}</h6>
                                <p className="details-our-service-text details-our-service-text-dark">
                                    {t('our_service.service_2.text_1')}
                                    {/* <span className="details-our-service-text-highlight"> {t('our_service.service_2.text_highlight_2')} </span> */}
                                    {/* {t('our_service.service_2.text_2')} */}
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>       
            </div>
            <div className="our-service-details-screen">
                <Container className="main-container container-details-our-service">
                    <Row>
                        <Col sx={12} sm={12} md={6} lg={4}>
                            <div className="center">
                                <CertificateOutlineIcon className="details-our-service-icon"/>
                            </div>
                        </Col>
                        <Col sx={12} sm={12} md={6} lg={8}>
                            <div className="details-our-service">
                                <h6 className="details-our-service-subheader">{t('our_service.service_3.header')}</h6>
                                <p className="details-our-service-text details-our-service-text-dark">
                                    {t('our_service.service_3.text_1')}
                                    {/* <span className="details-our-service-text-highlight"> {t('our_service.service_3.text_highlight_2')} </span> */}
                                    {/* {t('our_service.service_3.text_2')} */}
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>       
            </div>
            <div className="our-service-details-screen-dark">
                <Container className="main-container container-details-our-service">
                    <Row>
                        <Col sx={12} sm={12} md={6} lg={4}>
                            <div className="center">
                                <CertificationIcon className="details-our-service-icon-dark"/>
                            </div>
                        </Col>
                        <Col sx={12} sm={12} md={6} lg={8}>
                            <div className="details-our-service">
                                <h6 className="details-our-service-subheader details-our-service-subheader-dark">{t('our_service.service_4.header')}</h6>
                                <p className="details-our-service-text details-our-service-text-dark">
                                    {t('our_service.service_4.text_1')}
                                    {/* <span className="details-our-service-text-highlight"> {t('our_service.service_4.text_highlight_2')} </span> */}
                                    {/* {t('our_service.service_4.text_2')} */}
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>       
            </div>
            <div className="our-service-details-screen">
                <Container className="main-container container-details-our-service">
                    <Row>
                        <Col sx={12} sm={12} md={6} lg={4}>
                            <div className="center">
                                <ShareIcon className="details-our-service-icon"/>
                            </div>
                        </Col>
                        <Col sx={12} sm={12} md={6} lg={8}>
                            <div className="details-our-service">
                                <h6 className="details-our-service-subheader">{t('our_service.service_5.header')}</h6>
                                <p className="details-our-service-text details-our-service-text-dark">
                                    {t('our_service.service_5.text_1')}
                                    {/* <span className="details-our-service-text-highlight"> {t('our_service.service_5.text_highlight_2')} </span> */}
                                    {/* {t('our_service.service_5.text_2')} */}
                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>       
            </div>
        </React.Fragment>
    );
}

PageIndicator.propTypes = {
    fullscreen: PropTypes.bool,
}
  