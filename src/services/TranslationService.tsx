/* eslint-disable prettier/prettier */
import translations from '../../assets/translations.json';

class TranslationService {
  static get(value: string): string {
    let local = translations.en as any;
    return local[value];
  }
}

export default TranslationService;
