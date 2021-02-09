import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Chevron from "../../../assets/icons/blue-chevron.svg";
import { Link } from "react-router-dom";
import './style.css'


export const AccordionItem = ({ title, links, eventKey, active }) => { 
    return (
        <Card >
            <Accordion.Toggle as={Card.Header} eventKey={eventKey} >
            {title}
            <img src={Chevron} alt="" className={active && "active-img"} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <ul>
                        {links?.map(({title, to}, index) => <Link to={to} key={index}><li>{title}</li></Link>)}
                    </ul>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}