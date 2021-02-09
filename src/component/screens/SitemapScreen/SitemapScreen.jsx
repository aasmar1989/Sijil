import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { AccordionItem } from "./AccordionItem";
import * as Paths from "../../../constants/paths";
import './style.css'


export const SitemapScreen = () => { 
    const { t } = useTranslation();
    const [activeKey, setActiveKey] = useState(0);

    const medias = t("media.tabs", {returnObjects: true});

    const items = [
        {
            eventKey: 1,
            title: t("header.who_we_are"),
            links: [
                { title: t("header.who_we_are_dropdown.about_sijil"), to: Paths.ABOUT },
                { title: t("header.who_we_are_dropdown.chairman_message"), to: Paths.CHAIRMAN_MESSAGE },
                { title: t("header.who_we_are_dropdown.ceo_message"), to: Paths.CEO_MESSAGE },
                { title: t("header.who_we_are_dropdown.our_clients"), to: Paths.OUR_CLIENTS },
                { title: t("header.who_we_are_dropdown.our_team"), to: Paths.OUR_TEAM }

            ]
        },
        {
            eventKey: 2,
            title: t("header.our_services"),
            links: [
                { title: t("our_service.service_1.header"), to: "" },
                { title: t("our_service.service_2.header"), to: "" },
                { title: t("our_service.service_3.header"), to: "" },
                { title: t("our_service.service_4.header"), to: "" },
                { title: t("our_service.service_5.header"), to: "" }
            ]
        },
        {
            eventKey: 3,
            title: t("header.sijil")
        },
        {
            eventKey: 4,
            title: t("header.references"),
            links: [
                { title: t("rules.title"), to: Paths.RULES_REGULATION },
                { title: t("privacy.title"), to: Paths.PRIVACY_POLICY },
                { title: t("initiatives.title"), to: Paths.INITIATIVES },
                { title: t("footer.investors_relations"), to: Paths.INVESTORS_RELATIONS }
            ]
        },
        {
            eventKey: 5,
            title: t("media.header"),
            links: [
                { title: medias[0].header, to: Paths.MEDIA },
                { title: medias[1].header, to: Paths.MEDIA }
            ]
        }
    ]

    return (
        <div className="rules-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-sitemap">{t('sitemap.title')}</h2>
                        <div className="bottom-line-left"></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion className="accordion" onSelect={setActiveKey}>
                            {items.map(( item, index ) => 
                                <AccordionItem 
                                    key={index} 
                                    {...item}
                                    active={ item.eventKey === activeKey } 
                                />
                            )}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}