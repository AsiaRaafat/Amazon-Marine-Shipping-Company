// import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./myform.scss";
import "react-phone-number-input/style.css";
// import parsePhoneNumber from "libphonenumber-js";
// import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { $countries } from "../../recoilstore";
import axios from "axios"
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MYForm() {
  const { t } = useTranslation("global");
  const [countries] = useRecoilState($countries);
  const  userLang = localStorage.getItem("lang");
  const handleRefresh = () => {
    window.location.reload();
  };
  const navigate = useNavigate();
  const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Organisation: "",
    Country: "",
    Query: "",
  };

 
  

  const validationSchema = Yup.object().shape({
      FirstName: Yup.string()
      .required("FirstName is required!")
      .min(3, "FirstName must be at least 3 characters long"),
      LastName: Yup.string()
      .required("LastName is required!")
      .min(3, "LastName must be at least 3 characters long"),
      Email: Yup.string()
      .required("Email is required!")
      .email("Invalid email format"),
      PhoneNumber: Yup.string()
      .matches(/^\+?\d{1,3}?[-. ]?\d{10}$/, "Phone number is invalid")
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      ),

    });

    
    const sendData = async (values, { setSubmitting, setErrors}) => {
      const data = {
        FirstName: values.FirstName,
        LastName: values.LastName,
        Email: values.Email,
        PhoneNumber: values.PhoneNumber,
        Organisation: values.Organisation,
        Country: values.Country,
        Query: values.Query,
      };
    
      
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
    
      try {
        const response = await axios.post('https://shipping.somee.com/api/Website/AddOpinion', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept': '/',
          },
        });
        console.log('Response:', response.data);
        console.log(response.data);
        Swal.fire({
                icon: "success",
              }); 
      setTimeout(handleRefresh, 1500);          
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        Swal.fire({
          icon: "error",
        });       
      }
    };
  

    
   
  return (
    <div className="container" >
      <Formik dir={userLang === 'ar' ? 'rtl' : 'ltr'}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendData}
      >
        {({ isSubmitting }) => (
          <Form className="row d-flex form">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="register_form w-100 h-100">
                <p className="name">
                   {t("text.First name*")}
                </p>
                <Field
                  className="input"
                  name="FirstName"
                  placeholder={t("text.please enter your first name")}
                />
                <ErrorMessage
                  name=" FirstName"
                  // component="div"
                  className="error"
                />

                <p className="name">
                  {t("text.Enter Your Email")}
                </p>
                <Field
                  className="input"
                  name="Email"
                  type="email"
                  placeholder={t("text.insert your email")}
                />
                <ErrorMessage name="Email" component="div" className="error" />

                <p className="name">{t("text.Organisation*")}</p>
                <Field
                  className="input"
                  name="Organisation"
                  placeholder={t("text.insert the name of your organisation")}
                />
                <ErrorMessage
                  name="Organisation"
                  // component="div"
                  className="error"
                />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className=" w-100 h-100">
                <p className="name">{t("text.Last name*")}</p>
                <Field
                  className="input"
                  name="LastName"
                  placeholder={t("text.please enter your last name")}
                />
                <ErrorMessage
                  name="LastName"
                  // component="div"
                  className="error"
                />

                <p className="name">{t("text.Phone No*")}</p>
                <Field
                   dir={userLang === 'ar' ? 'rtl' : 'ltr'}
                  className="input"
                  name="PhoneNumber"
                  placeholder={t("text.enter ur phone number")}
                  type="tel"
                />
                <ErrorMessage
                  name="PhoneNumber"
                  // component="div"
                  className="error"
                />

                <p className="name">{t("text.Select Country*")}</p>
                <Field as="select" type="text" className="input" name="Country">
                  <option value="">{t("text.Choose Country ")}</option>
                  {countries.map((country) => (
                    <option key={country.unicode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="Country"
                  // component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="name">{t("text.Query*")}</p>
              <Field
                className="input4"
                name="Query"
                placeholder={t("text.tell us more about your query")}
              />
              <ErrorMessage name="Query"
               className="error" />
            </div>
          
           <div className="finalfild col-lg-10 col-md-12 col-sm-12">
           <button className="sub" type="submit" disabled={isSubmitting}>
                {t("text.  Submit")}
                </button>
           </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
