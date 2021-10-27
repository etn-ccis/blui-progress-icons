import React from 'react';
import Svg, { G, Path, Polygon, Rect, Defs, ClipPath, Mask } from 'react-native-svg';
import { BatteryProgressProps } from './types';
import { rangeValue } from './utilities';
import { ProgressIcon } from './ProgressIcon';

const basePath =
    'M200,100V83C200,76,194,70,187,70H33C26,70,20,76,20,83v73C20,164,26,170,33,170h153c7,0,13-6,13-13V140h20v-40H200z';
const chargePath =
    'M200,100V83.3a13.19,13.19,0,0,0-10-12.63A12.57,12.57,0,0,0,186.7,70H33.4A13.38,13.38,0,0,0,20,83.3v73.3A13.38,13.38,0,0,0,33.3,170H186.7a12.57,12.57,0,0,0,3.3-.67,13.19,13.19,0,0,0,10-12.63V140h20V100Zm-85,30v20L40,110H95V90L170,130Z';
const outlinedPath =
    'M180,90v60H40V90H180m7-20H33A13.24,13.24,0,0,0,20,83v73A13.47,13.47,0,0,0,33,170H186a13.24,13.24,0,0,0,13-13V140h20V100H200V83A13.24,13.24,0,0,0,187,70Z';
const baseID = 'blui-battery-clip';
const chargeID = 'blui-battery-clip-charge';

const getBasepath = (outlined: boolean): string => (outlined ? outlinedPath : basePath);
const getClipPath = (charging: boolean): string => (charging ? chargePath : basePath);
const getID = (charging: boolean): string => (charging ? chargeID : baseID);

export const Battery: React.FC<BatteryProgressProps> = (props) => {
    const {
        backgroundColor,
        outlined = false,
        charging = false,
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

    const maskIDleft = `maskLeft-${percent}`;
    const maskIDright = `maskRight-${percent}`;
    const startX = outlined ? 39 : 20;
    const fillWidth = outlined ? 142 : 180;

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
            <Svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 240 240" {...svgProps}>
                <Defs>
                    {outlined && (
                        <>
                            <Mask id={maskIDleft}>
                                <Rect width="100%" height="100%" fill="white" />
                                <Polygon fill="black" points="115,130 115,150 40,110 95,110 95,90 170,130" />
                            </Mask>
                            <Mask id={maskIDright}>
                                <Rect width="100%" height="100%" fill="white" />
                                <Rect
                                    x={startX}
                                    y="70"
                                    fill="black"
                                    width={`${Math.min((rangeValue(percent, 0, 100) * fillWidth) / 100, fillWidth)}`}
                                    height="100"
                                />
                            </Mask>
                        </>
                    )}
                    <ClipPath id={getID(charging)}>
                        <Path d={getClipPath(charging)} />
                    </ClipPath>
                </Defs>

                {/* Basic background shape */}
                {backgroundColor && (
                    <Path
                        d={basePath}
                        fill={backgroundColor}
                        clipPath={outlined ? undefined : `url(#${getID(charging)})`}
                    />
                )}

                {/* Background Outline shape */}
                <Path
                    fill={(!outlined && backgroundColor) || color}
                    fillOpacity={outlined || percent >= 100 || (!outlined && backgroundColor) ? 1 : 0.3}
                    clipPath={`url(#${getID(charging)})`}
                    d={getBasepath(outlined)}
                />

                <G fill={color}>
                    <Rect
                        x={startX}
                        y="70"
                        clipPath={`url(#${getID(charging)})`}
                        width={`${Math.min((rangeValue(percent, 0, 100) * fillWidth) / 100, fillWidth)}`}
                        height="100"
                        mask={outlined && charging ? `url(#${maskIDleft})` : undefined}
                    />
                    {outlined && charging && (
                        <Polygon points="115,130 115,150 40,110 95,110 95,90 170,130" mask={`url(#${maskIDright})`} />
                    )}
                </G>
            </Svg>
        </ProgressIcon>
    );
};
