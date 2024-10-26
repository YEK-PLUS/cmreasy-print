import {Languages} from '../languages';
import en from '../../messages/en.json';
import de from '../../messages/de.json';
import pl from '../../messages/pl.json';
import {_get} from '../utils';

const dictionary = {
  [Languages.en]: en,
  [Languages.de]: de,
  [Languages.pl]: pl,
};
type ExtractKeys<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends object
    ? ExtractKeys<T[K], `${Prefix}${Extract<keyof T, string>}.`>
    : `${Prefix}${Extract<keyof T, string>}`;
}[keyof T];

export type keys = ExtractKeys<typeof en>;

export const intl = (id: keys, language: Languages): string => {
  const messages = dictionary[language];
  if (!messages) return id;
  const message = _get(messages, id);
  return message || id;
};
