import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.scss';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { RecoilRoot } from 'recoil';
import i18next from 'i18next';
import AR_LANG from "./locales/ar/common.json";
import EN_LANG from "./locales/en/common.json";
import { I18nextProvider } from 'react-i18next';
import { TranslateProvider } from './utils/TranslateContext.jsx';

i18next.init({
    interpolation: {
        escapeValue: false // react already safes from xss
      },
      resources:{
        en:{
            global:EN_LANG,
        },
        ar:{
            global:AR_LANG,
        }
      },
      lng:"en",  
});



createRoot(document.getElementById('root')).render(
    <RecoilRoot>
    <I18nextProvider i18n={i18next} >
        <TranslateProvider>
        <App />
        </TranslateProvider>
    </I18nextProvider> 
    </RecoilRoot>
)
