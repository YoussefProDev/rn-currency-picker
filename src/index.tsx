import { type FC } from 'react';
import { CurrencyPicker } from './screens';
import { type CurrencyPickerProps } from './types';

const DEFAULT_OPTIONS = {
  onSelectCurrency: () => {},
  style: {},
  showFlag: true,
  showCurrencyName: true,
  darkMode: true,
};

export const CurrencyPickerComponent: FC<CurrencyPickerProps> = (
  props: CurrencyPickerProps
) => {
  const propsModel = {
    ...DEFAULT_OPTIONS,
    ...props,
  };

  return <CurrencyPicker {...propsModel} />;
};
