export type TFontSize = 'small' | 'medium' | 'large' | 'title';
export type TSpacing = 'small' | 'medium' | 'large';
export type TColors = 'red' | 'blue' | 'green' | 'black';
export type TModes = 'sender' | 'consignee' | 'carrier' | 'legal';

export const FontSize: Record<TFontSize, number> = {
  small: 5,
  medium: 6,
  large: 7,
  title: 16,
};

export const Spacing: Record<TSpacing, number> = {
  small: 1,
  medium: 5,
  large: 10,
} satisfies Record<TSpacing, number>;

export const Colors: Record<TColors, string> = {
  red: '#df384a',
  blue: '#3880c1',
  green: '#4ba559',
  black: '#000000',
};

export const Modes: Record<TModes, TModes> = {
  sender: 'sender',
  consignee: 'consignee',
  carrier: 'carrier',
  legal: 'legal',
};

export const ModeColor: Record<TModes, (typeof Colors)[TColors]> = {
  sender: Colors.red,
  consignee: Colors.blue,
  carrier: Colors.green,
  legal: Colors.black,
};
