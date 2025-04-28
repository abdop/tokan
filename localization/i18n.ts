import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

// Import translation files (we will create these next)
import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';

const i18n = new I18n({
  en,
  ar,
  fr,
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.getLocales()[0]?.languageTag || 'en';

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.enableFallback = true;
// To see the fallback mechanism uncomment the line below to force the app to use the French language.
// i18n.locale = 'fr';

// Define the translation function type for better type checking
type TranslateFunction = (scope: string, options?: Record<string, unknown>) => string;

export const t: TranslateFunction = (scope, options) => {
  return i18n.t(scope, options);
};

export default i18n;