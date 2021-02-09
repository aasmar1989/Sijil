import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import { EmployeeItem } from "../../base/EmployeeItem/EmployeeItem"
import Managers_1 from "../../../assets/img/team/managers/11.svg"
import Managers_2 from "../../../assets/img/team/managers/22.svg"
import Managers_3 from "../../../assets/img/team/managers/33.svg"
import Managers_4 from "../../../assets/img/team/managers/44.svg"
import './style.css'


export const ManagmentScreen = () => { 
    const { t } = useTranslation();
    const managers_img = [
        Managers_1,
        Managers_2,
        Managers_3,
        Managers_4,
    ]

    return (
        <div className="management-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <div className="top-line"/>
                        <h2 className="header-management">{t('team.management.header')}</h2>
                    </Col>
                </Row>
            </Container>
                    <Container className="main-container">
                        <Row>
                        {t("team.management.employee_list", {returnObjects: true}).map(({name, jobTitle, description, email, linkedIn}, employeeIndex) => (
                                <Col sx={12} lg={employeeIndex === 0 ? 12 : 4} className="col-item-wrap-management" key={employeeIndex}>
                                    <div className="slide-management-item-wrap">
                                        <EmployeeItem
                                            img={managers_img[employeeIndex]}
                                            name={name}
                                            jobTitle={jobTitle}
                                            description={description}
                                            email={email}
                                            linkedIn={linkedIn}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
            <PageIndicator
                dark
                currentPage="2"
                totalPages="3"
            />
        </div>

    );
}