import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { BanksTab } from "./tabs/BanksTab"
import { RepossessionCompanies } from "./tabs/RepossessionCompanies"
import { Investors } from "./tabs/Investors"
import { RegulatoryAuthorities } from "./tabs/RegulatoryAuthorities"
import './style.css'
import Img1 from "../../../assets/icons/blue-1.svg";
import Img2 from "../../../assets/icons/blue-2.svg";
import Img3 from "../../../assets/icons/blue-3.svg";
import Img4 from "../../../assets/icons/blue-4.svg";
import Img5 from "../../../assets/icons/gray-1.svg";
import Img6 from "../../../assets/icons/gray-2.svg";
import Img7 from "../../../assets/icons/gray-3.svg";
import Img8 from "../../../assets/icons/gray-4.svg";

export const OurClientsDetailScreen = () => { 
    const { t } = useTranslation();
    const [ active, setActive ] = useState("item_1");
    const [ hover, setHover ] = useState("");


    const items = [
        {
            icon: Img8,
            hoverIcon: Img4,
            eventKey: "item_1",
            component: <BanksTab />
        },
        {
            icon: Img7,
            hoverIcon: Img3,
            eventKey: "item_2",
            component: <RegulatoryAuthorities />
        },
        {
            icon: Img6,
            hoverIcon: Img2,
            eventKey: "item_3",
            component: <Investors />
            
        },
        {
            icon: Img5,
            hoverIcon: Img1,
            eventKey: "item_4",
            component: <RepossessionCompanies />
        }
    ];

    const handleHover = e => setHover(e.target.getAttribute('name'));

    const handleHoverLeave = () => setHover("");

    return (
        <div className="our-clients-deteil-screen">        
            <Container className="main-container container-our-clients-deteil-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-our-clients-deteil">{t('our_clients.header')}</h2>
                        <div className="top-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} className="col-our-clients-deteil-item-screen">
                        <Tabs className="clients-tabs" defaultActiveKey="item_1" id="uncontrolled-tab-example" onSelect={setActive}>
                            {items.map((item, index) => 
                                <Tab 
                                    eventKey={item.eventKey} 
                                    key={index}
                                    title={
                                        <div
                                            name={item.eventKey}
                                            onMouseEnter={handleHover}
                                            onMouseLeave={handleHoverLeave} 
                                        >
                                            <div 
                                                name={item.eventKey}
                                                className="tab-img"
                                            >
                                                <img 
                                                    name={item.eventKey}
                                                    src={active === item.eventKey || hover === item.eventKey ? item.hoverIcon : item.icon} alt="" 
                                                />
                                            </div>
                                            <p name={item.eventKey}>{t("main.our_clients.list", {returnObjects: true})[index].text}</p>
                                        </div>
                                    }
                                >
                                    {item.component}
                                </Tab>
                            )}
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}