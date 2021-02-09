import React from 'react';
import { useTranslation } from 'react-i18next';
import history from "../../../history";
import { 
  PRIVACY_POLICY,
  INITIATIVES,
  RULES_REGULATION,
  INVESTORS_RELATIONS
} from "../../../constants/paths";
import { Dropdown } from 'react-bootstrap';
import './style.css'

export const ReferenceDropdown = () => {
  const { t } = useTranslation();//
  return (
    <Dropdown className="nav-dropdown">
      <Dropdown.Toggle className="nav-dropdown-btn">
        {t("header.references")}
      </Dropdown.Toggle>

      <Dropdown.Menu className="nav-dropdown-menu">
        <Dropdown.Item onClick={() => history.push(RULES_REGULATION)}>{t("rules.title")}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(PRIVACY_POLICY)}>{t("privacy.title")}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(INITIATIVES)}>{t("initiatives.title")}</Dropdown.Item>
        <Dropdown.Item onClick={() => history.push(INVESTORS_RELATIONS)}>{t("footer.investors_relations")}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}