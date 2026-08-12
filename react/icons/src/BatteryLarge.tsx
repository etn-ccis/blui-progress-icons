import React from 'react';
import { ProgressIcon } from './ProgressIcon';
import { ProgressIconProps } from './types';
import { rangeValue } from './utilities';

const basePath =
    'M9.2002 4C9.47986 4 9.61966 4.00034 9.72656 4.05469C9.82064 4.10262 9.89738 4.17936 9.94531 4.27344C9.99966 4.38033 10 4.52014 10 4.7998V6H14V4.7998C14 4.52014 14.0003 4.38033 14.0547 4.27344C14.1026 4.17936 14.1794 4.10262 14.2734 4.05469C14.3803 4.00034 14.5201 4 14.7998 4H17.2002C17.4799 4 17.6197 4.00034 17.7266 4.05469C17.8206 4.10262 17.8974 4.17936 17.9453 4.27344C17.9997 4.38033 18 4.52014 18 4.7998V6H20C21.11 6 21.9902 6.89 21.9902 8L22 18C22 19.11 21.11 20 20 20H4C2.89 20 2 19.11 2 18V8C2 6.89 2.89 6 4 6H6V4.7998C6 4.52014 6.00034 4.38033 6.05469 4.27344C6.10262 4.17936 6.17936 4.10262 6.27344 4.05469C6.38033 4.00034 6.52014 4 6.7998 4H9.2002Z';
const outlinedPath =
    'M18.5 4.8C18.5 4.51997 18.5 4.37996 18.4455 4.273C18.3976 4.17892 18.3211 4.10243 18.227 4.0545C18.12 4 17.98 4 17.7 4H15.3C15.02 4 14.88 4 14.773 4.0545C14.6789 4.10243 14.6024 4.17892 14.5545 4.273C14.5 4.37996 14.5 4.51997 14.5 4.8V6H9.49999V4.8C9.49999 4.51997 9.49999 4.37996 9.44549 4.273C9.39756 4.17892 9.32107 4.10243 9.22699 4.0545C9.12003 4 8.98002 4 8.69999 4H6.29999C6.01996 4 5.87995 4 5.77299 4.0545C5.67891 4.10243 5.60242 4.17892 5.55449 4.273C5.49999 4.37996 5.49999 4.51997 5.49999 4.8V6H3.99999C2.88999 6 1.99999 6.89 1.99999 8V18C1.99999 19.11 2.88999 20 3.99999 20H20C21.11 20 22 19.11 22 18L21.99 8C21.99 6.89 21.11 6 20 6H18.5V4.8ZM4.01001 18V8L20.01 8.002V18H4.01001Z';
export type BatteryLargeProgressProps = ProgressIconProps;

export const BatteryLarge: React.FC<BatteryLargeProgressProps> = (props) => {
    const instanceId = React.useRef(`blui-battery-large-${Math.random().toString(36).slice(2, 9)}`).current;
    const clipId = `${instanceId}-clip`;
    const outlinedClipId = `${instanceId}-clip-outlined`;
    const filledBodyClipId = `${instanceId}-clip-filled-body`;

    const {
        backgroundColor,
        outlined = false,
        size = 24,
        percent = 100,
        color = 'inherit',
        labelSize,
        labelColor,
        showPercentLabel,
        labelPosition,
        classes,
        ...svgProps
    } = props;

    const rangedPercent = rangeValue(percent, 0, 100);
    const filledHeight = rangedPercent >= 100 ? 16 : (rangedPercent / 100) * 14;
    const filledY = rangedPercent >= 100 ? 4 : 20 - filledHeight;
    const fillHeight = outlined ? (rangedPercent / 100) * 10 : filledHeight;
    const fillY = outlined ? 8 + ((100 - rangedPercent) / 100) * 10 : filledY;
    const fillX = outlined ? 4.01 : 2;
    const fillWidth = outlined ? 16 : 20;
    const baseFillOpacity = outlined || backgroundColor || percent >= 100 ? 1 : 0.3;
    const getBasePath = (): string => (outlined ? outlinedPath : basePath);
    const progressClipPath = outlined
        ? `url(#${outlinedClipId})`
        : rangedPercent >= 100
        ? `url(#${clipId})`
        : `url(#${filledBodyClipId})`;

    return (
        <ProgressIcon
            color={color}
            percent={percent}
            labelColor={labelColor}
            labelSize={labelSize}
            size={size}
            showPercentLabel={showPercentLabel}
            labelPosition={labelPosition}
            classes={classes}
        >
            <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...svgProps}>
                <defs>
                    <clipPath id={clipId}>
                        <path d={basePath} />
                    </clipPath>
                    <clipPath id={filledBodyClipId}>
                        <path d="M4 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V8C2 6.89543 2.89543 6 4 6Z" />
                    </clipPath>
                    {outlined && (
                        <clipPath id={outlinedClipId}>
                            <rect x="4.01" y="8" width="16" height="10" />
                        </clipPath>
                    )}
                </defs>
                {backgroundColor && (
                    <path d={basePath} fill={backgroundColor} clipPath={outlined ? undefined : `url(#${clipId})`} />
                )}
                <path
                    d={getBasePath()}
                    fill={(!outlined && backgroundColor) || color || 'currentColor'}
                    fillOpacity={baseFillOpacity}
                    fillRule={outlined ? 'evenodd' : undefined}
                    clipRule={outlined ? 'evenodd' : undefined}
                    clipPath={`url(#${clipId})`}
                />
                {rangedPercent > 0 && (
                    <rect
                        x={fillX}
                        y={fillY}
                        width={fillWidth}
                        height={fillHeight}
                        fill={color || 'currentColor'}
                        clipPath={progressClipPath}
                    />
                )}
            </svg>
        </ProgressIcon>
    );
};
