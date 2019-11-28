import i18n from 'i18n-js';

import en from '../locales/en.json';
import fr from '../locales/fr.json';

import * as RNLocalize from "react-native-localize";


console.log(RNLocalize.getLocales()[0].languageCode);
console.log(RNLocalize.getCurrencies());

i18n.defaultLocale = 'en';
i18n.locale = RNLocalize.getLocales()[0].languageCode;
i18n.fallbacks = true;
i18n.translations = { en, fr };

export default i18n;
