Ecco una versione migliorata del file README che mette in evidenza le ottimizzazioni e funzionalità chiave che hai introdotto:

---

# @youssefprodev/rn-currency-picker

A high-performance and customizable **React Native Currency Picker** built with **TypeScript**, featuring an enhanced UI and advanced search functionality powered by **Fuse.js**. This picker supports over **180+ currencies** and leverages **@shopify/flash-list** to optimize performance, especially for large data sets.

## Key Features

- **Over 180+ Currencies**: Supports a comprehensive list of currencies, ensuring global coverage.
- **Optimized for Performance**: Utilizes **@shopify/flash-list**, a high-performance list component that efficiently renders large lists, reducing lag and improving scroll performance.
- **Built with TypeScript**: Ensures robust type safety and a smoother development experience, reducing bugs and improving code quality.
- **Enhanced UI**: The picker comes with a clean and intuitive design, offering better user interaction and customization options.
- **Fast and Fuzzy Search**: Integrated with **Fuse.js** for fast and flexible search capabilities, allowing users to quickly find the currency they need, even with partial or misspelled inputs.

## Installation

You can install the package using npm or yarn:

```sh
npm install @youssefprodev/rn-currency-picker
```

or

```sh
yarn add @youssefprodev/rn-currency-picker
```

## Demo

Check out the live demo of the picker in action:

<img src="https://github.com/03balogun/lib-gif/blob/main/rn-currency-picker-demo.gif?raw=true" width="350" alt="rn-currency-picker demo">

## Usage

Here’s a basic example of how to use the `CurrencyPickerComponent`:

```jsx
import React from 'react';
import { Button } from 'react-native';
import { CurrencyPickerComponent } from '@youssefprodev/rn-currency-picker';

export default function App() {
  const currencyPickerRef = React.useRef(null);

  return (
    <>
      <Button
        title="Open picker"
        onPress={() => currencyPickerRef.current?.open()}
      />
      <Button
        title="Close picker"
        onPress={() => currencyPickerRef.current?.close()}
      />
      <CurrencyPickerComponent
        currencyPickerRef={(ref) => (currencyPickerRef.current = ref)}
        enable={true}
        darkMode={false}
        currencyCode="NGN"
        showFlag={true}
        showCurrencyName={true}
        showCurrencyCode={true}
        onSelectCurrency={(data) => console.log('Selected Currency:', data)}
        onOpen={() => console.log('Picker opened')}
        onClose={() => console.log('Picker closed')}
        showNativeSymbol={true}
        showSymbol={false}
        containerStyle={{
          container: {},
          flagWidth: 25,
          currencyCodeStyle: {},
          currencyNameStyle: {},
          symbolStyle: {},
          symbolNativeStyle: {},
        }}
        modalStyle={{
          container: {},
          searchStyle: {},
          tileStyle: {},
          itemStyle: {
            itemContainer: {},
            flagWidth: 25,
            currencyCodeStyle: {},
            currencyNameStyle: {},
            symbolStyle: {},
            symbolNativeStyle: {},
          },
        }}
        title="Select a Currency"
        searchPlaceholder="Search for a currency"
        showCloseButton={true}
        showModalTitle={true}
      />
    </>
  );
}
```

## Performance Optimizations

- **@shopify/flash-list**: The integration of `FlashList` ensures smooth and efficient rendering, especially when dealing with large sets of over 180 currencies. This makes the picker responsive and minimizes potential lag during scrolling.
- **Fuse.js for Search**: The picker uses **Fuse.js**, a lightweight fuzzy-search library, to provide users with fast and flexible search options. Even with incomplete or inaccurate input, Fuse.js can quickly find relevant currencies, improving the overall user experience.

## Props

| Prop                | Type        | Default      | Description                                                                               |
| ------------------- | ----------- | ------------ | ----------------------------------------------------------------------------------------- |
| `enable`            | `boolean`   | `true`       | Enables or disables the currency picker.                                                  |
| `currencyPickerRef` | `function`  | `null`       | Reference to control `open()` and `close()` methods of the picker.                        |
| `darkMode`          | `boolean`   | `false`      | Toggles dark mode for the picker modal.                                                   |
| `currencyCode`      | `string`    | `"USD"`      | Sets the initial currency code displayed.                                                 |
| `onSelectCurrency`  | `function`  | `null`       | Callback function called when a currency is selected. Returns the selected currency data. |
| `onOpen`            | `function`  | `null`       | Callback function triggered when the picker is opened.                                    |
| `onClose`           | `function`  | `null`       | Callback function triggered when the picker is closed.                                    |
| `showNativeSymbol`  | `boolean`   | `true`       | Displays the native symbol of the currency.                                               |
| `showSymbol`        | `boolean`   | `false`      | Displays the currency symbol.                                                             |
| `showFlag`          | `boolean`   | `true`       | Displays the flag icon of the currency.                                                   |
| `showCurrencyName`  | `boolean`   | `true`       | Displays the name of the currency.                                                        |
| `showCurrencyCode`  | `boolean`   | `true`       | Displays the code of the currency.                                                        |
| `title`             | `string`    | `"Currency"` | The title displayed in the currency selection modal.                                      |
| `showCloseButton`   | `boolean`   | `true`       | Shows a close button in the modal.                                                        |
| `showModalTitle`    | `boolean`   | `true`       | Displays the title in the currency selection modal.                                       |
| `containerStyle`    | `object`    | `null`       | Custom styling for the picker container.                                                  |
| `modalStyle`        | `object`    | `null`       | Custom styling for the currency selection modal.                                          |
| `renderChildren`    | `ReactNode` | `null`       | Allows rendering custom child components inside the picker.                               |

### containerStyle

| Prop                | Type     | Default | Description                              |
| ------------------- | -------- | ------- | ---------------------------------------- |
| `container`         | `object` | `null`  | Custom style for the picker container.   |
| `flagWidth`         | `number` | `25`    | Width of the currency flag icon.         |
| `currencyCodeStyle` | `object` | `null`  | Custom style for the currency code text. |
| `currencyNameStyle` | `object` | `null`  | Custom style for the currency name text. |
| `symbolStyle`       | `object` | `null`  | Custom style for the currency symbol.    |
| `symbolNativeStyle` | `object` | `null`  | Custom style for the native symbol.      |

### modalStyle

| Prop          | Type     | Default | Description                                     |
| ------------- | -------- | ------- | ----------------------------------------------- |
| `container`   | `object` | `null`  | Custom style for the modal container.           |
| `searchStyle` | `object` | `null`  | Custom style for the search input in the modal. |
| `tileStyle`   | `object` | `null`  | Custom style for the modal title.               |
| `itemStyle`   | `object` | `null`  | Custom style for currency item components.      |

### itemStyle

| Prop                | Type     | Default | Description                               |
| ------------------- | -------- | ------- | ----------------------------------------- |
| `itemContainer`     | `object` | `null`  | Custom style for currency item container. |
| `flagWidth`         | `number` | `25`    | Width of the currency flag icon.          |
| `currencyCodeStyle` | `object` | `null`  | Custom style for the currency code text.  |
| `currencyNameStyle` | `object` | `null`  | Custom style for the currency name text.  |
| `symbolStyle`       | `object` | `null`  | Custom style for the currency symbol.     |
| `symbolNativeStyle` | `object` | `null`  | Custom style for the native symbol.       |

## Currency Data Type

The `onSelectCurrency` function returns the following data:

```ts
export type CurrencyData = {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  flag_emoji: string;
};
```

## Contributing

If you’d like to contribute, please see the [contributing guide](CONTRIBUTING.md).

## Credits

This library was inspired by [rn-currency-picker](https://github.com/03balogun/rn-currency-picker).

## License

MIT License. See the [LICENSE](LICENSE) file for details.

---

Creato con [create-react-native-library](https://github.com/callstack/react-native-builder-bob).

---

Questa versione mette
