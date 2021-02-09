import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo1 from "../../../../assets/img/investors/logo1.png";
import '../style.css'


const list = [ Logo1 ];

export const Investors = () => { 

    return (
        <div className="clients-tab-content-wrap">
                <Row xs={1} md={2} lg={3} xl={5}>
                    {list.map((item, index) => 
                        <Col className="clients-tab-content-item-wrap" key={index}>
                            <img src={item} alt="" width="100" />
                        </Col>
                    )}
                </Row>
        </div>
    );
}