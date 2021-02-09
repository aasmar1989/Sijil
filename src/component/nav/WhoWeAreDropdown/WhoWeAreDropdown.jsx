import React from 'react';
import { useTranslation } from 'react-i18next';
import history from "../../../history";
import { 
  ABOUT,
  CHAIRMAN_MESSAGE,
  CEO_MESSAGE,
  OUR_CLIENTS,
  OUR_TEAM,
} from "../../../constants/paths";
import { Dropdown } from 'react-bootstrap';
import './style.css'

export const WhoWeAreDropdown = () => {
  const { t } = useTranslation();//
  return (
    <Dropdown className="nav-dropdown">
      <Dropdown.Toggle className="nav-dropdown-btn">
        {t('header.who_we_are')}
      </Dropdown.Toggle>

      <Dropdown.Menu className="nav-dropdown-menu">
        <Dropdown.Item onClick={() => history.push(ABOUT)}>{t('header.who_we_are_dropdown.about_sijil')}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(CHAIRMAN_MESSAGE)}>{t('header.who_we_are_dropdown.chairman_message')}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(CEO_MESSAGE)}>{t('header.who_we_are_dropdown.ceo_message')}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(OUR_CLIENTS)}>{t('header.who_we_are_dropdown.our_clients')}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(OUR_TEAM)}>{t('header.who_we_are_dropdown.our_team')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}