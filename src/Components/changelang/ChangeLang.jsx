import React, { Fragment, useContext } from 'react'
import { TranslateContext } from '../../utils/TranslateContext'
import { useTranslation } from "react-i18next";
import "./lang.scss"

export default function ChangeLang() {
    const { t } = useTranslation("global");
    const {handleChangLan , ArLang } = useContext(TranslateContext);
    const handleRefresh = () => {
      window.location.reload();
    };


  return (
    <Fragment>
        <div className='lang_btn'>
        <button className= {`lang ${ArLang? "deactive": ""}`}  onClick={()=>{
          handleChangLan("ar");
          handleRefresh();
        }}>
             <p className='p4'>AR</p>
        </button>
        <button className={`lang  ${ArLang? "": "deactive"}`}  onClick={()=>{
          handleChangLan("en");
          handleRefresh();
        }} 
        >
             <p className='p4'>EN</p>
        </button>
        </div>
    </Fragment>
  )
}
