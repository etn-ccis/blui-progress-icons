import React from 'react';
import { SignalProgressProps } from './types';
import { rangeValue } from './utilities';
import { ProgressIcon } from './ProgressIcon';

// Base filled triangle path (from bottom-left to top-right)
const basePath = 'M2 22L22 2V22H2Z';

const outlinedPath = 'M24 24H0L24 0V24ZM5.794 21.6H21.6V5.794L5.794 21.6Z';

const getPath = (outlined: boolean): string => (outlined ? outlinedPath : basePath);

/**
 * Signal progress icon component
 * Displays a triangular signal strength indicator that fills from bottom-left to top-right
 * based on percentage (0-100%)
 */
export const Signal: React.FC<SignalProgressProps> = (props) => {
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
        ...svgProps
    } = props;

    const rangedPercent = rangeValue(percent, 0, 100);

    const getFillPath = (): string => {
        if (rangedPercent === 0) return '';

        if (outlined) {
            const startX = 5.729;
            const startY = 21.604;

            // Calculate diagonal point based on percentage

            const maxDiagonal = 15.871;
            const diagonalProgress = (rangedPercent / 100) * maxDiagonal;

            const x = startX + diagonalProgress;
            const y = startY - diagonalProgress;

            // Create filled triangle within the outline
            return `M${startX} ${startY}L${x} ${y}V${startY}H${startX}Z`;
        }

        const x = 2 + (rangedPercent / 100) * 20;
        const y = 22 - (rangedPercent / 100) * 20;

        return `M2 22L${x} ${y}V22H2Z`;
    };

    const fillPath = getFillPath();

    return (
        <ProgressIcon
            color={color}
            percent={percent}
            labelColor={labelColor}
            labelSize={labelSize}
            size={size}
            showPercentLabel={showPercentLabel}
            labelPosition={labelPosition}
        >
            <svg height={`${size}px`} width={`${size}px`} viewBox="0 0 24 24" fill="none" {...svgProps}>
                {outlined && backgroundColor && <path d={outlinedPath} fill={backgroundColor} />}
                <path
                    d={getPath(outlined)}
                    fill={(!outlined && backgroundColor) || color}
                    fillOpacity={outlined || percent >= 100 || (!outlined && backgroundColor) ? 1 : 0.3}
                />

                {percent > 0 && <path d={fillPath} fill={color} fillOpacity={1} />}
            </svg>
        </ProgressIcon>
    );
};
