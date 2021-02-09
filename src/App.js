import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import * as Paths from "./constants/paths";
import history from "./history";
import { Main } from "./pages/Main/Main";
import { About } from "./pages/About/About";
import { CharimanMessage } from "./pages/CharimanMessage/CharimanMessage";
import { CEOMessage } from "./pages/CEOMessage/CEOMessage";
import { OurClinets } from "./pages/OurClinets/OurClinets";
import { OurTeam } from "./pages/OurTeam/OurTeam";
import { OurServices } from "./pages/OurServices/OurServices";
import { Media } from "./pages/Media/Media";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { FAQ } from "./pages/FAQ/FAQ";
import { Sitemap } from "./pages/Sitemap/Sitemap";
import { Rules } from "./pages/Rules/Rules";
import { CareerOpportunities } from "./pages/CareerOpportunities/CareerOpportunities";
import { Initiatives } from "./pages/Initiatives/Initiatives";
import { Framework } from "./pages/Framework/Framework";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { InvestorRelations } from "./pages/InvestorRelations/InvestorRelations";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  const { i18n } = useTranslation();
  const getLang = () => i18n.language || window.localStorage.i18nLng
  return (
    <div className="app"  dir={getLang() === 'ar' ? 'rtl' : 'ltr'} style={{direction: getLang() === 'ar' ? 'rtl' : 'ltr',}}>
      <Router history={history}>
        <Switch>
          <Route exact path={Paths.MAIN} component={Main} />
          <Route exact path={Paths.ABOUT} component={About} />
          <Route exact path={Paths.CHAIRMAN_MESSAGE} component={CharimanMessage} />
          <Route exact path={Paths.CEO_MESSAGE} component={CEOMessage} />
          <Route exact path={Paths.OUR_CLIENTS} component={OurClinets} />
          <Route exact path={Paths.OUR_TEAM} component={OurTeam} />
          <Route exact path={Paths.OUR_TEAM} component={OurTeam} />
          <Route exact path={Paths.OUR_SERVICES} component={OurServices} />
          <Route exact path={Paths.MEDIA} component={Media} />
          <Route exact path={Paths.CONTACT_US} component={ContactUs} />
          <Route exact path={Paths.FAQ} component={FAQ} />
          <Route exact path={Paths.SITEMAP} component={Sitemap} />
          <Route exact path={Paths.RULES_REGULATION} component={Rules} />
          <Route exact path={Paths.INITIATIVES} component={Initiatives} />
          <Route exact path={Paths.CAREER_OPPORTUNITIES} component={CareerOpportunities} />
          <Route exact path={Paths.FRAMEWORK} component={Framework} />
          <Route exact path={Paths.PRIVACY_POLICY} component={PrivacyPolicy} />
          <Route exact path={Paths.INVESTORS_RELATIONS} component={InvestorRelations} />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;