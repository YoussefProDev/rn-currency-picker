import type { TextStyle, ViewStyle } from 'react-native';
import currencyFlags from '../constants/CommonCurrency.json';
export type Currency = keyof typeof currencyFlags;

// Tipo per i dati della valuta, basato sui valori del JSON delle bandiere
export type CurrencyData = (typeof currencyFlags)[Currency];

// Tipi per gli stili degli item
type ItemStyle = {
  itemContainer?: ViewStyle;
  flagWidth?: number;
  currencyCodeStyle?: TextStyle;
  currencyNameStyle?: TextStyle;
  symbolStyle?: TextStyle;
  symbolNativeStyle?: TextStyle;
  container: ViewStyle;
};

// Tipi per gli stili del modale
type ModalStyle = {
  itemStyle: ItemStyle;
  container: ViewStyle;
  searchStyle?: ViewStyle;
  tileStyle?: TextStyle;
};

// Props per il componente DialogCurrency
export type DialogCurrencyProps = {
  onSelectItem: (item: CurrencyData) => void;
  title?: string;
  searchPlaceholder?: string;
  textEmpty?: string;
  setVisible: (visible: boolean) => void;
  darkMode?: boolean;
  modalStyle?: ModalStyle;
  showCloseButton?: boolean;
  showModalTitle?: boolean;
  showCurrencySymbol?: boolean;
  showCurrencyNativeSymbol?: boolean;
};

// Riferimento al componente CurrencyPicker per il controllo programmatico
export type CurrencyPickerRef = {
  open: () => void;
  close: () => void;
};

// Props per il componente CurrencyPicker
export type CurrencyPickerProps = {
  onSelectCurrency?: (data: CurrencyData) => void;
  currencyCode?: Currency | string;
  showFlag?: boolean;
  showCurrencyName?: boolean;
  showSymbol?: boolean;
  showNativeSymbol?: boolean;
  darkMode?: boolean;
  renderChildren?: React.ReactNode;
  showCurrencyCode?: boolean;
  currencyPickerRef?: (methods: CurrencyPickerRef) => void;
  enable?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  containerStyle?: ItemStyle;
  modalStyle?: ModalStyle;
  title?: string;
  searchPlaceholder?: string;
  textEmpty?: string;
  showCloseButton?: boolean;
  showModalTitle?: boolean;
};
