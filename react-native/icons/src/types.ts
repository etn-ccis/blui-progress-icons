import { TextStyle, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ProgressIconProps = SvgProps & {
    backgroundColor?: string;
    styles?: {
        progressIcon?: ViewStyle;
        progressIconLabel?: TextStyle;
        centered?: TextStyle;
    };
    color?: string;
    labelColor?: string;
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    labelSize?: number;
    outlined?: boolean;
    percent?: number;
    showPercentLabel?: boolean;
    size?: number;
};

export type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export type HeartProgressProps = ProgressIconProps;
export type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
export type UpsProgressProps = ProgressIconProps;
