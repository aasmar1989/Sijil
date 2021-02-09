import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css'


export const PrivacyScreen = () => { 
    const { t } = useTranslation();

    return (
        <div className="privacy-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-privacy">{t('privacy.title')}</h2>
                        <div className="bottom-line-left"></div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul className="privacy-list">
                            <li><span>{t("privacy.updated")}</span></li>
                            <li><span>{t("privacy.updated_by")}</span></li>
                        </ul>
                        <div className="secondary-text">{t("privacy.informs")}</div>
                    </Col>
                </Row>

                <hr className="my-5" />
                {t("privacy.policy_list", {returnObjects: true}).map(({title, paragraphs}, index) => 
                    <Row className="mb-5" key={`${index}`}>
                        <Col>
                            <h2 className="mb-4 privacy-title">{title}</h2>
                            {paragraphs.map(({text}) => (
                                <div className="mb-3 secondary-text">{text}</div>
                            ))}
                        </Col>
                    </Row>
                )}
                {/* <Row>
                    <Col>
                        <h2 className="mb-4 privacy-title">{t("privacy.info_title")}</h2>
                        <div className="secondary-text">{t("privacy.sub_text1")}</div>
                        <div className="secondary-text mt-3">{t("privacy.sub_text2")}</div>
                        <ul className="privacy-list">
                            {t("privacy.list1", { returnObjects: true }).map((item, index) => 
                                <li key={index}><span>{item}</span></li>
                            )}
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="secondary-text mt-5">{t("privacy.sub_text3")}</div>
                        <div className="secondary-text my-5">{t("privacy.sub_text4")}</div>
                        <div className="secondary-text mt-3">{t("privacy.sub_text5")}</div>
                        <div className="secondary-text mt-5">{t("privacy.sub_text6")}</div>
                        <div className="secondary-text mt-5">{t("privacy.sub_text7")}</div>
                        <ul className="privacy-list">
                            {t("privacy.list2", { returnObjects: true }).map((item, index) => 
                                <li key={index}><span>{item}</span></li>
                            )}
                        </ul>
                        <div className="secondary-text mt-5">{t("privacy.sub_text8")}</div>
                        <div className="secondary-text mt-5">{t("privacy.sub_text9")}</div>
                        <div className="secondary-text mt-5">{t("privacy.sub_text10")}</div>
                        <div className="secondary-text mt-5">{t("privacy.sub_text11")}</div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h2 className="my-5 privacy-title">{t("privacy.protect_title")}</h2>
                        <div className="secondary-text">{t("privacy.sub_text12")}</div>
                        <div className="secondary-text mt-3">{t("privacy.sub_text13")}</div>
                    </Col>
                </Row> */}
            </Container>
        </div>

    );
}