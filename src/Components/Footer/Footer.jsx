import React from "react";
import "./Footer.scss";
import { useRecoilState } from "recoil";
import { $countries } from "../../recoilstore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn, faPhoenixFramework, faSquareYoutube, faYoutube, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

import { faBuildingColumns, faHeadphones, faMailBulk, faPhone, faX } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

export default function Footer() {
   const { t } = useTranslation("global");
   const  userLang = localStorage.getItem("lang");

  const [countries] = useRecoilState($countries);
  return (
    <div className="col-12 foter1 " dir={userLang === 'ar' ? 'rtl' : 'ltr'}>
      <hr />
      <div className="footer">
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.COUNTRY-LOCATION / LOCAL OFFICE")}</h5>
            <li>
            <label for="fselect">{t("text.Choose Country")}</label>
            <br/>
              <select id="fselect">
                {countries.map((country) => (
                  <option key={country.unicode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <a id="flink" href="/"  aria-label="شركة شحن">
              <FontAwesomeIcon icon={faPhone}/>
              <span>+2022540974</span>
              </a>
            </li>
            <li>
              <a id="flink" href="/"  aria-label="شركة شحن"> 
              <FontAwesomeIcon icon={faMailBulk}/>
              <span>eg177-AA.egypt@AA.com </span>
              </a>
              <a id="flink" href="/"  aria-label="شركة شحن">
              <FontAwesomeIcon icon={faBuildingColumns}/>
              <span>{t("text.Office Details")}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Doing business togethe")}</h5>
            <li>
              <a id="flink" href="/"  aria-label="شركة شحن">
              {t("text.Solutions /")}
              </a>
              <a id="flink" href="/" aria-label="شركة شحن"> 
             {t('text. Local information/')}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
             {t("text. E-Buisness")}
              </a>
            </li>
            <li style={{paddingLeft:"25px"}}>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.Sustainability /")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
               MY MA
              </a>
            </li>
            <li style={{visibility:"hidden"}}>
              <a id="flink" href="/" aria-label="best shipping company">
                {" "}
                SkinCare
              </a>
            </li>
          </ul>
        </div>
        <div className="footerdiv">
          <ul>
            <h5 id="fh4">{t("text.Get to know us")}</h5>
            <li>
              <a id="flink" href="/" aria-label="best shipping company" >
               {t("text.  AM Group /")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.News Room /")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.Events /")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.Blog /")}
              </a>
            </li>
            <li>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.Careers/")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text.ContactUs/")}
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              {t("text. Preference Center")}
              </a>
            </li>
            <li className="d-flex">
              <a id="flink" href="/" aria-label="best shipping company" >
              <div id="fiacon"  >
             <FontAwesomeIcon  icon={faFacebookF} />
              </div>
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              <div  id="fiacon">
               <FontAwesomeIcon icon={faX} />
              </div>
              </a>
              <a id="flink" href="/" aria-label="best shipping company">
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faInstagram} />
              </div>
              </a>
              <a id="flink" href="/" aria-label="best shipping company" >
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faLinkedinIn} />
              </div>
              </a>
              <a id="flink" href="/" aria-label="amazon marin best shipping company" >
              <div  id="fiacon">
               <FontAwesomeIcon  icon={faYoutube}/>
              </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
