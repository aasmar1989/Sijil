import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { Table } from "./Table";
import './style.css'


export const InvestorRelationsScreen = () => { 
    const { t } = useTranslation();

    const table = [
        "Aliquam auctor nunc at rutrum rhoncus",
        "Aliquam auctor nunc at rutrum rhoncus",
        "Aliquam auctor nunc at rutrum rhoncus",
        "Aliquam auctor nunc at rutrum rhoncus",
        "Aliquam auctor nunc at rutrum rhoncus",
    ]

    return (
        <div className="investor-screen">
            <Container>
                <Row>
                    <Col className='line-container'>
                        <h2 className="header-investor">{t('investor.title')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Table title={t("investor.anual")} list={table} />
                <Table title={t("investor.financial")} list={table} />

                <div className="for-investors">
                    <h3>{t("investor.for_investors")}</h3>
                    <p>{t("investor.email")} IR@sijil.sa</p>
                    <p>{t("investor.telephone")} 0112833802</p>
                </div>
            </Container>
        </div>

    );
}