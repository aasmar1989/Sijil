import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col} from 'react-bootstrap';
import { useFormik } from "formik";
import { useError, useFieldTouched } from "../../../utils/forms";
import { ContactUsMap } from "../../base/ContactUsMap/ContactUsMap"
import { ReactComponent as EmailIcon } from "../../../assets/icons/contacts/email.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/icons/contacts/phone.svg";
import { ReactComponent as LinkedIcon } from "../../../assets/icons/contacts/linkedin.svg";
import { ReactComponent as PlaceIcon } from "../../../assets/icons/contacts/place.svg";
import * as Yup from "yup";
import './style.css'


export const ContactUsScreen = () => { 
    const { t } = useTranslation();
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            mobile: "",
            title: "",
            email: "",
            message: "",
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string().required(t('contact_us.form.required')),
            mobile: Yup.string().required(t('contact_us.form.required')),
            title: Yup.string().required(t('contact_us.form.required')),
            email: Yup.string().email(t('contact_us.form.email_validation')).required(t('contact_us.form.required')),
            message: Yup.string().required(t('contact_us.form.required')),
        }),
        onSubmit: values => {
            console.log('onSubmit values', values)
            emailjs.send('service_989dxzk', 'template_f4mcqbe', values, 'user_6DdDgzTF6cNfynoUIFdiJ')// emailjs.send(serviceID, templateID, templateParams, userID);
            .then((result) => {
                setSuccess(true)
            }, (error) => {
                setFailed(true)
            });
        }
      });



      const form = () => (
        <form className="modal-body pt-2 pb-2" onSubmit={formik.handleSubmit}>
         <Row>
              <Col sm={12} md={6}>
                <label htmlFor="name" className="control-label contact-us-input">
                    {t('contact_us.form.name_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control contact-us-input"
                  id="name"
                  name="name"
                  placeholder={t('contact_us.form.name_placeholder')}
                  value={formik.values.name}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("name")}
              </Col>

              <Col sm={12} md={6}>
                <label htmlFor="mobile" className="control-label contact-us-input">
                  {t('contact_us.form.mobile_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control contact-us-input"
                  id="mobile"
                  name="mobile"
                  placeholder={t('contact_us.form.mobile_placeholder')}
                  value={formik.values.mobile}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("mobile")}
              </Col>
              <Col sm={12} md={6}>
                <label htmlFor="title" className="control-label contact-us-input">
                  {t('contact_us.form.title_label')}<span>*</span>
                </label>
                <input
                  type="title"
                  className="form-control contact-us-input"
                  id="title"
                  name="title"
                  placeholder={t('contact_us.form.title_placeholder')}
                  value={formik.values.title}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("title")}
              </Col>
              <Col sm={12} md={6}>
                <label htmlFor="email" className="control-label contact-us-input">
                  {t('contact_us.form.email_label')}<span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control contact-us-input"
                  id="email"
                  name="email"
                  placeholder={t('contact_us.form.email_placeholder')}
                  value={formik.values.email}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("email")}
              </Col>
              <Col sm={12} md={12}>
                <label htmlFor="message" className="control-label contact-us-input">
                  {t('contact_us.form.message_label')}<span>*</span>
                </label>
                <textarea
                  type="text"
                  className="form-control contact-us-textarea"
                  id="message"
                  name="message"
                  placeholder={t('contact_us.form.message_placeholder')}
                  value={formik.values.message}
                  onFocus={setFieldTouched}
                  onChange={formik.handleChange}
                />
                {getError("message")}
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="contact-us-submit-button-wrap">
                  <button className="contact-us-submit-button" type="submit" color="success">
                    {t('contact_us.form.submit_button')}
                  </button>
              </Col>
              <Col sm={6} className="contact-us-success-wrap">
                  {success 
                    ? <p className="contact-us-submit-success">{t('contact_us.form.success')}</p>
                    : failed && <p className="contact-us-submit-failed">{t('contact_us.form.failed')}</p>
                  }
                  
              </Col>
            </Row>
        </form>
      );

      const getError = useError(formik);

      const setFieldTouched = useFieldTouched(formik);

    return (
        <div className="contact-us-screen">        
            <Container className="main-container container-contact-us-screen">
                <Row>
                    <Col className="line-container">
                        <h2 className="header-contact-us">{t('contact_us.header')}</h2>
                        <div className="bottom-line"></div>
                    </Col>
                </Row>
                <Row>
                    <Col sx={1} className="col-contact-us-item-screen">
                      <div className="contact-us-form-wrap">
                        {form()}
                      </div>
                      <div className="contact-us-contacts-block-wrap d-none d-lg-block d-xl-block">
                        <h6 className="contact-us-contacts-block-header">{t('contact_us.subheader')}</h6>
                        <ContactUsMap />
                        <div className="contact-us-contacts-wrap">
                          <p><EmailIcon />{t('contact_us.company_email')}</p>
                          <p><PhoneIcon />{t('contact_us.company_phone')}</p>
                          <p><LinkedIcon />{t('contact_us.company_linked_in')}</p>
                          <p><PlaceIcon />{t('contact_us.company_address')}</p>
                        </div>
                      </div>
                    </Col>
                    <Col sx={1} className="col-contact-us-item-screen d-block d-lg-none  d-xl-none">
                      <div className="contact-us-contacts-bottom-block-wrap">
                        <h6 className="contact-us-contacts-block-header">{t('contact_us.subheader')}</h6>
                        <ContactUsMap />
                        <div className="contact-us-contacts-wrap">
                          <p><EmailIcon />{t('contact_us.company_email')}</p>
                          <p><PhoneIcon />{t('contact_us.company_phone')}</p>
                          <p><LinkedIcon />{t('contact_us.company_linked_in')}</p>
                          <p><PlaceIcon />{t('contact_us.company_address')}</p>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
