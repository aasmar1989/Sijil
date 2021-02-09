import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Logo1 from "../../../../assets/img/lessors/logo1.png";
import Logo2 from "../../../../assets/img/lessors/logo2.png";
import Logo4 from "../../../../assets/img/lessors/logo4.svg";
import Logo5 from "../../../../assets/img/lessors/logo5.svg";
import Logo6 from "../../../../assets/img/lessors/logo6.svg";
import Logo7 from "../../../../assets/img/lessors/logo7.svg";
import Logo8 from "../../../../assets/img/lessors/logo8.png";
import Logo10 from "../../../../assets/img/lessors/logo10.svg";
import Logo11 from "../../../../assets/img/lessors/logo11.svg";
import Logo12 from "../../../../assets/img/lessors/logo12.svg";
import Logo13 from "../../../../assets/img/lessors/logo13.svg";
import Logo14 from "../../../../assets/img/lessors/logo14.svg";
import Logo16 from "../../../../assets/img/lessors/logo16.svg";
import Logo17 from "../../../../assets/img/lessors/logo17.svg";
import Logo18 from "../../../../assets/img/lessors/logo18.svg";
import Logo19 from "../../../../assets/img/lessors/logo19.svg";
import Logo20 from "../../../../assets/img/lessors/logo20.svg";
import Logo21 from "../../../../assets/img/lessors/logo21.svg";
import Logo22 from "../../../../assets/img/lessors/logo22.svg";
import Logo23 from "../../../../assets/img/lessors/logo23.svg";
import Logo24 from "../../../../assets/img/lessors/logo24.svg";
import Logo25 from "../../../../assets/img/lessors/logo25.svg";
import Logo27 from "../../../../assets/img/lessors/logo27.svg";
import Logo28 from "../../../../assets/img/lessors/logo28.png";
import Logo29 from "../../../../assets/img/lessors/logo29.png";
import Logo30 from "../../../../assets/img/lessors/logo30.png";
import Logo31 from "../../../../assets/img/lessors/logo31.png";
import Logo32 from "../../../../assets/img/lessors/logo32.png";
import Logo33 from "../../../../assets/img/lessors/logo33.svg";
import Logo34 from "../../../../assets/img/lessors/logo34.svg";
import Logo35 from "../../../../assets/img/lessors/logo35.png";
import '../style.css'

const list = [ Logo1, Logo2, Logo4, Logo5, Logo6, Logo7, Logo8, Logo10, Logo11, Logo12, Logo13, Logo14,
               Logo16, Logo17, Logo18, Logo19, Logo20, Logo21, Logo22, Logo23, Logo24, Logo25, Logo27, Logo28, Logo29, 
               Logo30, Logo31, Logo32, Logo33, Logo34, Logo35
            ];

export const BanksTab = () => { 

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