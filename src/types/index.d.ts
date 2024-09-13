import { CurrencyPickerComponent } from '../index';
import * as types from './types';
declare module '@youssefprodev/rn-currency-picker' {
  export { types };
  // Esportazione della classe CurrencyPicker
  // export class CurrencyPicker extends React.Component<CurrencyPickerProps> {}
  export { CurrencyPickerComponent };
}
