import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Card, Carousel, Accordion } from 'react-bootstrap';
import { ReactComponent as FAQChevronIcon } from "../../../assets/icons/FAQChevron.svg";
import './style.css'


export const FAQSDetailsScreen = () => { 
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const slidesCount =  (t("faq.slide_list", {returnObjects: true}).length - 1) // slides are counted from zero
    const handleSelect = (selectedIndex, e) => {
        if (selectedIndex < 0) {
            setIndex(slidesCount);
        } else if ( selectedIndex > slidesCount) {
            setIndex(0);
        } else {
            setIndex(selectedIndex);
        }
    };

    return (
        <div className="faq-details-screen">
            <Container className="main-container">
                <Row>
                    <Col md={12} lg={12}>
                        <div className="line-container">
                            <h6 className="header-faq-details">{t('faq.header')}</h6>
                            <div className="bottom-line"></div>
                        </div>
                    </Col>
                    <Col md={12} lg={12}>
                        <Carousel 
                            interval={10000}
                            pause={'hover'}
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            controls={false}
                        >
                            {t("faq.slide_list", {returnObjects: true}).map(({item_list}, slideIndex) =>   
                                    <Carousel.Item key={`slide_key_${slideIndex}`}>
                                        <div className="faq-details-wrap">
                                            <Accordion className="faq-details-accordion">
                                                {item_list.map(({question, answer}, itemIndex) => {
                                                    return (                
                                                        <Card className="faq-details-card" key={`item_key_${itemIndex}`}>
                                                            <Accordion.Toggle 
                                                                as={Card.Header} 
                                                                eventKey={`${itemIndex}`}
                                                                className="faq-details-card-header-wrap"
                                                            >
                                                            <p className="faq-details-card-header-text">{question}</p>
                                                            <FAQChevronIcon className="faq-details-card-header-chevron"/>
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={`${itemIndex}`}>
                                                                <Card.Body className="faq-details-card-body">
                                                                    {answer.map(({text}, textIndex) => (
                                                                        <p className="faq-details-card-body-text" key={`text_key_${textIndex}`}>{text}</p>
                                                                    ))}
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    )
                                                })}
                                            </Accordion>
                                        </div>
                                    </Carousel.Item>
                            )}
                        </Carousel>
                    </Col>
                    <Col>
                        <div className="center button-wrap-reasons" dir="ltr">
                            <button className="slider-button-prev" onClick={()=> {handleSelect(index - 1)}}></button>
                            <button className="slider-button-next" onClick={()=> {handleSelect(index + 1)}}></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}