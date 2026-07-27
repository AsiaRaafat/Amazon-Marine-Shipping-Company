// import { dir } from "i18next";
// import { createContext, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";



// const TranslateContext = createContext();


// function TranslateProvider ({children}) {

//     const[ArLang,setArLang]=useState(false);

//     const[letter,setLetter]=useState('');
     
//     const {i18n} =useTranslation("global");
     
//     function handleChangLan (lang) {
         
//         setArLang(!ArLang);


//         i18n.changeLanguage (lang)

//         localStorage.setItem("lang",lang);

//     }   
    
//     useEffect(() => {
//       if(localStorage.getItem("lang").includes("ar")){
//         setArLang(true);
//       } else{
//         setArLang(false);
//       } 
//       i18n.changeLanguage(localStorage.getItem("lang"))
//     }, [])
    
    


    
//     return <TranslateContext.Provider value={{handleChangLan , setArLang , ArLang , letter , setLetter}}  >{children}</TranslateContext.Provider>
// }




// export {TranslateContext,TranslateProvider};


// TranslateProvider.jsx


import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const TranslateContext = createContext();

function TranslateProvider({ children }) {
  const [ArLang, setArLang] = useState(false);
  const [letter, setLetter] = useState("");

  const { i18n } = useTranslation("global");

  function handleChangLan(lang) {
    setArLang(!ArLang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";

    if (savedLang?.includes("ar")) {
      setArLang(true);
    } else {
      setArLang(false);
    }

    i18n.changeLanguage(savedLang);
  }, [i18n]);

  return (
    <TranslateContext.Provider
      value={{ handleChangLan, setArLang, ArLang, letter, setLetter }}
    >
      {children}
    </TranslateContext.Provider>
  );
}

export { TranslateContext, TranslateProvider };
