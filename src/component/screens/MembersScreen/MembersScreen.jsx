import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { PageIndicator } from "../PageIndicator/PageIndicator"
import { EmployeeItem } from "../../base/EmployeeItem/EmployeeItem"
import Employee_1 from "../../../assets/img/team/employee/1.svg"
import Employee_2 from "../../../assets/img/team/employee/2.svg"
import Employee_3 from "../../../assets/img/team/employee/3.svg"
import Employee_4 from "../../../assets/img/team/employee/4.svg"
import Employee_5 from "../../../assets/img/team/employee/5.svg"
import Employee_6 from "../../../assets/img/team/employee/6.svg"
import Employee_7 from "../../../assets/img/team/employee/7.svg"
import './style.css'


export const MembersScreen = () => { 
    const { t } = useTranslation();
    const membersImageList = [
        Employee_1,
        Employee_2,
        Employee_3,
        Employee_4,
        Employee_5,
        Employee_6,
        Employee_7,
    ]

    return (
        <div className="members-screen">        
            <Container className="main-container container-members-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-members">{t('team.members.header')}</h2>
                        <div className="top-line"></div>
                    </Col>
                </Row>
                <Row>
                    {t("team.members.employee_list", {returnObjects: true}).map(({name, jobTitle, description, email, linkedIn}, paragraphIndex) => (
                        <Col sx={12} lg={paragraphIndex === 0 ? 12 : 4} className="col-item-wrap-management" key={`${paragraphIndex}`}>
                            <div className="slide-management-item-wrap">
                                <EmployeeItem
                                    dark
                                    img={membersImageList[paragraphIndex]}
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
                currentPage="3"
                totalPages="3"
            />
        </div>
    );
}