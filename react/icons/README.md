# Brightlayer UI Progress Icons for React

[![](https://img.shields.io/npm/v/@brightlayer-ui/react-progress-icons.svg?label=@brightlayer-ui/react-progress-icons&style=flat)](https://www.npmjs.com/package/@brightlayer-ui/react-progress-icons)

<img width="100%" style="max-width: 600px" alt="Progress icons" src="https://raw.githubusercontent.com/etn-ccis/blui-progress-icons/master/assets/progress-icons.png" />

This package provides a set of progress icons with dynamic fill capabilities for React applications. These icons can be used to show battery life, health, signal strength, and other progress-like states.

Currently, the package includes:

- battery
- battery large
- heart
- pie
- signal
- ups

## Installation

```sh
yarn add @brightlayer-ui/react-progress-icons
```

## Usage

```tsx
import { Battery, BatteryLarge, Heart, Pie, Signal, Ups } from '@brightlayer-ui/react-progress-icons';

<Battery percent={100} size={36} color={'green'} charging={true} outlined={true} />
<Heart percent={50} size={18} color={'pink'} outlined={true} />
<Pie percent={50} size={48} color={'blue'} ring={4} outlined={true} />
<Signal percent={80} size={36} color={'orange'} outlined={true} />
<Ups percent={75} size={36} color={'teal'} outlined={true} />
<BatteryLarge percent={56} size={28} color={'goldenrod'} outlined={true} />
```

## API

### Shared Properties

These props are available on all progress icons in this package.

| Prop Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| backgroundColor | Background color for the unfilled area | `string` | no | |
| color | The color used for the icon fill | `string` | no | `'inherit'` |
| labelColor | Label text color | `string` | no | |
| labelPosition | Where to display the text label | `'top' \| 'bottom' \| 'center' \| 'right' \| 'left'` | no | `center` |
| labelSize | Size of the label in px | `number` | no | `size / 4` |
| outlined | Whether to use the outlined style | `boolean` | no | `false` |
| percent | The amount to fill the icon (0-100) | `number` | no | `100` |
| showPercentLabel | Whether to show the percentage label | `boolean` | no | `false` |
| size | The size of the icon in px | `number` | no | `24` |

Any additional props supplied are forwarded to the root `svg` element.

### Battery Properties

The battery icon also supports:

| Prop Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| charging | Whether to show the charging indicator | `boolean` | no | `false` |

### Pie Properties

The pie icon also supports:

| Prop Name | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| ring | The thickness of the outer ring (1 = thin ring, 10 = full circle) | `number` | no | `10` |

## Development

Build the React package from the repository root:

```sh
yarn build:react
```

Or from this package directory:

```sh
yarn build
```

## License

BSD-3-Clause