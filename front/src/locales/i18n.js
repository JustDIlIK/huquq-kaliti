import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from './en.json'
import russian from './ru.json'
import uzbCir from './uzb-cir.json'
import uzbLat from './uzb-lat.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ...english
                }
            },
            ru: {
                translation: {
                    ...russian
                }
            },
            uz: {
                translation: {
                    ...uzbCir
                }
            },
            uz_l: {
                translation: {
                    ...uzbLat
                }
            },
        },
        lng: "uz_l",
        fallbackLng: "uz_l",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;