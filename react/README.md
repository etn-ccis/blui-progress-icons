# Brightlayer UI Progress Icons

[![](https://img.shields.io/npm/v/@brightlayer-ui/ng-progress-icons.svg?label=@brightlayer-ui/ng-progress-icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/ng-progress-icons)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-progress-icons.svg?label=@brightlayer-ui/react-progress-icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-progress-icons)
[![](https://img.shields.io/npm/v/@brightlayer-ui/react-native-progress-icons.svg?label=@brightlayer-ui/react-native-progress-icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-native-progress-icons)

<img width="100%" style="max-width: 600px" alt="Progress icons" src="https://raw.githubusercontent.com/etn-ccis/blui-progress-icons/master/assets/progress-icons.png" />

This is a library of icons with dynamic fill capabilities that can be used to show progress (similar to a traditional progress spinner or bar). These can be used to show health, battery life, etc.

Currently, we have icons available for:

-   battery
-   heart
-   pie
-   ups

## Installation

To install the Brightlayer UI progress icons from NPM as a dependency for your project, you can run the following command in your project root:

```sh
yarn add @brightlayer-ui/react-progress-icons
```

## Using the progress icons in your application

The progress icon components can be imported and used like you would use any other component. You can manually set the desired color for the icon, otherwise it will inherit the text color of its parent container;

```tsx
import {Battery, Heart, Pie} from '@brightlayer-ui/react-progress-icons';
...
<Battery percent={100} size={36} color={'green'} charging={true} outlined={true}/>
<Heart percent={50} size={18} color={'pink'} outlined={true}/>
<Pie percent={50} size={48} color={'blue'} ring={4} outlined={true}/>
```

## API

### Shared Properties

These props are available on all of the progress icons in this package.

<div style="overflow: auto;">

| Prop Name        | Description                            | Type                                                         | Required | Default   |
| ---------------- | -------------------------------------- | ------------------------------------------------------------ | -------- | --------- |
| backgroundColor  | Background color for the unfilled area | `string`                                                     | no       |           |
| color            | The color used for the icon fill       | `string`                                                     | no       | 'inherit' |
| labelColor       | Label text color                       | `string`                                                     | no       |           |
| labelPosition    | Where to display the text label        | `'top'` \| `'bottom'` \| `'center'` \| `'right'` \| `'left'` | no       | `center`  |
| labelSize        | Size of the label in px                | `number`                                                     | no       | `size/4`  |
| outlined         | Whether to use the outlined style      | `boolean`                                                    | no       | false     |
| percent          | The amount to fill the icon (0-100)    | `number`                                                     | no       | 100       |
| showPercentLabel | Option to show percentage overlay      | `boolean`                                                    | no       | false     |
| size             | The size of the icon (in px)           | `number`                                                     | no       | 24        |

</div>

Any other props supplied will be provided to the root element (`svg`).

### Battery Properties

The battery supports all of the shared properties above and the following additional properties:

| Prop Name | Description                            | Type      | Required | Default |
| --------- | -------------------------------------- | --------- | -------- | ------- |
| charging  | Whether to show the charging indicator | `boolean` | no       | false   |

### Pie Properties

The pie supports all of the shared properties above and the following additional properties:

| Prop Name | Description                                                        | Type     | Required | Default |
| --------- | ------------------------------------------------------------------ | -------- | -------- | ------- |
| ring      | The thickness of the outer ring (1 = thin ring, 10 = full circle ) | `number` | no       | 10      |

## Building & Packaging

These progress icons are currently created manually by modifying the svg files from the design folder with various clip paths and fill algorithms. They are then packaged up for distribution via npm.

The react icons are created as stateless functional components in individual files for each icon.

To create the /dist version of the icons:

```sh
cd /react
yarn build
```

And then to publish:

```sh
npm version patch
npm publish
```
