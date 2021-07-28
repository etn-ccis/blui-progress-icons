import { TextStyle, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ProgressIconProps = SvgProps & {
    /** The color to show behind the icon */
    backgroundColor?: string;

    /** Style overrides for internal elements */
    styles?: {
        progressIcon?: ViewStyle;
        progressIconLabel?: TextStyle;
        centered?: TextStyle;
    };

    /** Color to use for the icon */
    color: string;

    /** Color to use for the label text */
    labelColor?: string;

    /** Placement of the label relative to the icon */
    labelPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center';

    /** Font size to use for the label */
    labelSize?: number;

    /** Use an outlined variation of the icon */
    outlined?: boolean;

    /** Percentage to fill the icon */
    percent?: number;

    /** Show the percentage label */
    showPercentLabel?: boolean;

    /** Size of the icon */
    size?: number;
};

export type PieProgressProps = ProgressIconProps & {
    /** Display the icon as a ring instead of a full pie */
    ring?: number;
};
export type HeartProgressProps = ProgressIconProps;
export type BatteryProgressProps = ProgressIconProps & {
    /** Show a charging indicator (lightning bolt) */
    charging?: boolean;
};
export type UpsProgressProps = ProgressIconProps;
