import React from 'react';
import { useTranslation } from 'react-i18next';
import history from "../../../history";
import { MEDIA } from "../../../constants/paths";
import { Dropdown } from 'react-bootstrap';
import './style.css'

export const MediaDropdown = () => {
  const { t } = useTranslation();//

  const tabs = t("media.tabs", {returnObjects: true});
  return (
    <Dropdown className="nav-dropdown">
      <Dropdown.Toggle className="nav-dropdown-btn">
        {t("header.media")}
      </Dropdown.Toggle>

      <Dropdown.Menu className="nav-dropdown-menu">
        <Dropdown.Item onClick={() => history.push(MEDIA)}>{tabs[0].header}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(MEDIA)}>{tabs[1].header}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}