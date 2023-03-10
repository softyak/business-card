import { LANGUAGES } from "./constants";
import { TEXTS } from "./texts"

export const getTranslatedTexts = language => {
  return TEXTS[language];
}

export const getBrowserLanguage = () => {
  switch (true) {
    case (navigator.language).includes('tr'):
      return LANGUAGES.TURKISH;
    default:
      return LANGUAGES.ENGLISH;
  }
}