import { SVGAttributes } from 'react';
export declare type ProgressIconProps = SVGAttributes<SVGElement> & {
    backgroundColor?: string;
    classes?: {
        progressIcon?: string;
        progressIconLabel?: string;
        centered?: string;
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
export declare type PieProgressProps = ProgressIconProps & {
    ring?: number;
};
export declare type HeartProgressProps = ProgressIconProps;
export declare type BatteryProgressProps = ProgressIconProps & {
    charging?: boolean;
};
export declare type UpsProgressProps = ProgressIconProps;
