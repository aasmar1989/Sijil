import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo1 from "../../../../assets/img/regulatory/logo1.svg";
import Logo2 from "../../../../assets/img/regulatory/logo2.svg";
import Logo3 from "../../../../assets/img/regulatory/logo3.svg";
import Logo4 from "../../../../assets/img/regulatory/logo4.svg";
import '../style.css'

const list = [ Logo1, Logo2, Logo3, Logo4 ];

export const RegulatoryAuthorities = () => { 

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