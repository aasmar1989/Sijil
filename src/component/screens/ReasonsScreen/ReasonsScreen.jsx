import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import SliderItem_1 from "../../../assets/icons/slider/sliderItem_1.png";
import { PageIndicator } from "../PageIndicator/PageIndicator"
import './style.css'


export const ReasonsScreen = (props) => { 
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    const slidesCount = 1 // slides are counted from zero
    const handleSelect = (selectedIndex, e) => {
        if (selectedIndex < 0) {
            setIndex(slidesCount);
        } else if ( selectedIndex > slidesCount) {
            setIndex(0);
        } else {
            setIndex(selectedIndex);
        }
    };

    const slide_images = [//must match with main.reasons.slide_list
        [
            SliderItem_1,
            SliderItem_1,
            SliderItem_1,
            SliderItem_1,
        ],
        [
            SliderItem_1,
            SliderItem_1,
            SliderItem_1,
            SliderItem_1
        ],
      ];

    return (
        <div className="reasons-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <div className="top-line"/>
                        <h2 className="header-reasons">{t('main.reasons.header')}</h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h6 className="subheader-reasons">{t(`main.reasons.subheader${index+1}`)}</h6>
                    </Col>
                </Row>
            </Container>
            <Carousel 
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
            >
                {t("main.reasons.slide_list", {returnObjects: true}).map(({item_list}, slideIndex) => 
                        <Carousel.Item key={`slide_key_${slideIndex}`}>
                            <Container className="main-container">
                                <Row>{
                                    item_list.map(({text}, itemIndex) => {
                                        return (
                                        <Col sx={1} md={6} lg={3} className="col-item-wrap-reasons" key={`item_key_${itemIndex}`}>
                                            <div className="slide-item-wrap">
                                                <img src={slide_images[slideIndex][itemIndex]} className="slider-item-logo" alt="" />
                                                <p className="slide-item-text-reasons">{text}</p>
                                            </div>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </Container>
                        </Carousel.Item>
                )}
            </Carousel>
            <Container>
                <Row>
                    <Col>
                        <div className="center button-wrap-reasons" dir="ltr">
                            <button className="slider-button-prev" onClick={()=> {handleSelect(index - 1)}}></button>
                            <button className="slider-button-next" onClick={()=> {handleSelect(index + 1)}}></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PageIndicator 
                currentPage="3"
                totalPages="6"
            />
        </div>

    );
}