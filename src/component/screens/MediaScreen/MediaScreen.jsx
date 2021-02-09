import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Tabs, Tab, Carousel } from 'react-bootstrap';
import { EventItem } from "../../base/EventItem/EventItem";
import Events1 from "../../../assets/img/events/events_1.jpg";
import Events2 from "../../../assets/img/events/events_2.jpg";
import Events3 from "../../../assets/img/events/events_3.jpg";
import Events4 from "../../../assets/img/events/events_4.jpg";
import Events5 from "../../../assets/img/events/events_5.jpg";
import Events6 from "../../../assets/img/events/events_6.jpg";
import './style.css'


export const MediaScreen = () => { 
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    const mediaImages = [//tab
        [//slide
            [//item
                Events1,
                Events2,
                Events3,
                Events4,
                Events5,
                Events6,
            ],
            [//item
                Events1,
                Events2,
                Events3,
                Events4,
                Events5,
                Events6,
            ]
        ],
        [//slide
            [//item
                Events1,
                Events2,
                Events3,
                Events4,
                Events5,
                Events6,
            ],
            [//item
                Events1,
                Events2,
                Events3,
                Events4,
                Events5,
                Events6,
            ]
        ]
    ]

    const handleSelect = (selectedIndex, length) => {
        const slidesCount = length - 1
        if (selectedIndex < 0) {
            setIndex(slidesCount);
        } else if ( selectedIndex > slidesCount) {
            setIndex(0);
        } else {
            setIndex(selectedIndex);
        }
    };

    return (
        <div className="media-screen">        
            <Container className="main-container container-media-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-media">{t('media.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} className="col-media-item-screen">
                        <Tabs dir="ltr" className="media-tabs" defaultActiveKey="0" id="uncontrolled-tab-example">
                            {t("media.tabs", {returnObjects: true}).map(({header, slider_list}, tabIndex) => (
                                <Tab eventKey={tabIndex} key={`tabIndex_${tabIndex}`} title={header}>
                                    <Carousel 
                                        activeIndex={index}
                                        onSelect={handleSelect}
                                        indicators={false}
                                        controls={false}
                                    >
                                        {slider_list.map(({item}, sliderIndex) => (
                                            <Carousel.Item key={`slider_${sliderIndex}`}>
                                                <Container className="main-container">
                                                    <Row xs={1} md={2} lg={3} xl={3}>
                                                        {item.map(({header, text, timedate, link }, textIndex) => (
                                                            <Col className="media-tab-content-wrap" key={`text_${textIndex}`}>
                                                                <EventItem 
                                                                    img={mediaImages[tabIndex][sliderIndex][textIndex]}
                                                                    header={header}
                                                                    text={text}
                                                                    timedate={timedate}
                                                                    link={link}
                                                                />
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Container>
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <Container>
                                        <Row>
                                            <Col sx={12}>
                                                <div className="center button-media-wrap" dir="ltr">
                                                    <button className="slider-media-button-prev" onClick={()=> {handleSelect(index - 1, slider_list.length)}}></button>
                                                    <button className="slider-media-button-next" onClick={()=> {handleSelect(index + 1, slider_list.length)}}></button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab>
                            ))}
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}