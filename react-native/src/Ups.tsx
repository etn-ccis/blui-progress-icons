import React from 'react';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import { UpsProgressProps } from './types';
import { rangeValue } from './utilities';
import { ProgressIcon } from './ProgressIcon';

const basePath =
    'M20 40C20 28.9543 28.9543 20 40 20H200C211.046 20 220 28.9543 220 40V60H190V80H220V110H190V130H220V160H190V180H220V200C220 211.046 211.046 220 200 220H40C28.9543 220 20 211.046 20 200V180H50V160H20V130H50V110H20V80H50V60H20V40Z';

export const Ups: React.FC<UpsProgressProps> = (props) => {
    const {
        backgroundColor,
        outlined = false,
        size = 24,
        percent = 100,
        color,
        labelSize,
        labelColor,
        showPercentLabel,
        labelPosition,
        styles,
        ...svgProps
    } = props;

    const rangedPercent = rangeValue(percent, 0, 100);
    const startY = outlined ? ((100 - rangedPercent) / 100) * 160 + 40 : ((100 - rangedPercent) / 100) * 200 + 20;
    const fillHeight = outlined ? (rangedPercent / 100) * 160 : (rangedPercent / 100) * 200;

    return (
        <ProgressIcon
            color={color}
            percent={percent}
            labelColor={labelColor}
            labelSize={labelSize}
            size={size}
            showPercentLabel={showPercentLabel}
            labelPosition={labelPosition}
            styles={styles}
        >
            <Svg height={`${size}px`} width={`${size}px`} x={0} y={0} viewBox="0 0 240 240" {...svgProps}>
                {!outlined && (
                    <>
                        <Path opacity={backgroundColor ? 1 : 0.3} d={basePath} fill={backgroundColor || color} />
                        <ClipPath id="ups-filled">
                            <Path d={basePath} />
                        </ClipPath>
                        <G clipPath="url(#ups-filled)">
                            <Rect x={20} y={startY} width={200} height={fillHeight} fill={color} />
                        </G>
                    </>
                )}
                {outlined && (
                    <>
                        <Defs>
                            <ClipPath id="outlined-progress-clip">
                                <Path d="M40 80V40H200V80H170V90H200V120H170V130H200V160H170V170H200V200H40V170H70V160H40V130H70V120H40V90H70V80H40Z" />
                            </ClipPath>
                            <ClipPath id={`outlined-border-clip-${rangedPercent}`}>
                                <Rect x="20" y="20" width="200" height={startY - 20} />
                            </ClipPath>
                        </Defs>
                        {backgroundColor && <Rect x={40} y={40} width={160} height={160} fill={backgroundColor} />}
                        <Path
                            fillRule="evenodd"
                            d="M220 40C220 28.9543 211.046 20 200 20H40C28.9543 20 20 28.9543 20 40V200C20 211.046 28.9543 220 40 220H200C211.046 220 220 211.046 220 200V40ZM40 40V80H70V90H40V120H70V130H40V160H70V170H40V200H200V170H170V160H200V130H170V120H200V90H170V80H200V40H40Z"
                            clipPath={`url(#outlined-border-clip-${rangedPercent})`}
                            clipRule="evenodd"
                            fill={color}
                        />
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M40 20C28.9543 20 20 28.9543 20 40V200C20 211.046 28.9543 220 40 220H200C211.046 220 220 211.046 220 200V40C220 28.9543 211.046 20 200 20H40ZM200 40H40V200H200V40Z"
                            fill={color}
                        />
                        <Rect
                            x="40"
                            y={startY}
                            width="160"
                            height={fillHeight}
                            clipPath="url(#outlined-progress-clip)"
                            fill={color}
                        />
                    </>
                )}
            </Svg>
        </ProgressIcon>
    );
};
