import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col} from 'react-bootstrap';
import { useFormik } from "formik";
import { useError, useFieldTouched } from "../../../utils/forms";
import * as Yup from "yup";
import './style.css'


export const CareerOpportunitiesScreen = () => { 
    const { t } = useTranslation();
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            email: "",
            years_of_experience: "",
            major: "",
            linked_in: "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string().required(t('opportunities.form.required')),
            mobile: Yup.string().required(t('opportunities.form.required')),
            email: Yup.string().email(t('opportunities.form.email_validation')).required(t('opportunities.form.required')),
            years_of_experience: Yup.string().required(t('opportunities.form.required')),
            major: Yup.string().required(t('opportunities.form.required')),
            linked_in: Yup.string(),
        }),
        onSubmit: values => {
            console.log('onSubmit values', values)
            emailjs.send('service_989dxzk', 'template_dms1uci', values, 'user_6DdDgzTF6cNfynoUIFdiJ')// emailjs.send(serviceID, templateID, templateParams, userID);
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setFailed(true)
            });
        }
      });



      const form = () => (
        <form className="modal-body pt-2 pb-2" onSubmit={formik.handleSubmit}>
         <Row>
              <Col sm={12} md={6}>
                <label htmlFor="name" className="control-label opportunities-input">
                    {t('opportunities.form.name_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control opportunities-input"
                  id="name"
                  name="name"
                  placeholder={t('opportunities.form.name_placeholder')}
                  value={formik.values.name}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("name")}
              </Col>

              <Col sm={12} md={6}>
                <label htmlFor="mobile" className="control-label opportunities-input">
                  {t('opportunities.form.mobile_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control opportunities-input"
                  id="mobile"
                  name="mobile"
                  placeholder={t('opportunities.form.mobile_placeholder')}
                  value={formik.values.mobile}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("mobile")}
              </Col>
              <Col sm={12} md={6}>
                <label htmlFor="email" className="control-label opportunities-input">
                  {t('opportunities.form.email_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control opportunities-input"
                  id="email"
                  name="email"
                  placeholder={t('opportunities.form.email_placeholder')}
                  value={formik.values.email}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("email")}
              </Col>
              <Col sm={12} md={6}>
                <label htmlFor="years_of_experience" className="control-label opportunities-input">
                  {t('opportunities.form.years_of_experience_label')}<span>*</span>
                </label>
                <input
                  type="years_of_experience"
                  className="form-control opportunities-input"
                  id="years_of_experience"
                  name="years_of_experience"
                  placeholder={t('opportunities.form.years_of_experience_placeholder')}
                  value={formik.values.years_of_experience}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("years_of_experience")}
              </Col>
              <Col sm={12} md={6}>
                <label htmlFor="major" className="control-label opportunities-input">
                  {t('opportunities.form.major_label')}<span>*</span>
                </label>
                <input
                  type="major"
                  className="form-control opportunities-input"
                  id="major"
                  name="major"
                  placeholder={t('opportunities.form.major_placeholder')}
                  value={formik.values.major}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("major")}
              </Col>
              <Col sm={12}>
                <label htmlFor="linked_in" className="control-label opportunities-input">
                  {t('opportunities.form.linked_in_label')}
                </label>
                <input
                  type="linked_in"
                  className="form-control opportunities-input"
                  id="linked_in"
                  name="linked_in"
                  placeholder={t('opportunities.form.linked_in_placeholder')}
                  value={formik.values.linked_in}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("linked_in")}
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="opportunities-submit-button-wrap">
                  <button className="opportunities-submit-button" type="submit" color="success">
                    {t('opportunities.form.submit_button')}
                  </button>
              </Col>
              <Col sm={6} className="opportunities-success-wrap">
                  {success 
                    ? <p className="opportunities-submit-success">{t('opportunities.form.success')}</p>
                    : failed && <p className="opportunities-submit-failed">{t('opportunities.form.failed')}</p>
                  }
              </Col>
            </Row>
        </form>
      );

      const getError = useError(formik);

      const setFieldTouched = useFieldTouched(formik);

    return (
        <div className="opportunities-screen">        
            <Container className="main-container container-opportunities-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-opportunities">{t('opportunities.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} className="col-opportunities-item-screen">
                      <div className="opportunities-form-wrap">
                        {form()}
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
