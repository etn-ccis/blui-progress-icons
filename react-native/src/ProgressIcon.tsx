import React from 'react';
import { ProgressIconProps } from './types';
import color from 'color';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

const useStyles = (
    props: ProgressIconProps
): StyleSheet.NamedStyles<{
    progressIcon: ViewStyle;
    progressIconLabel: TextStyle;
    centered: TextStyle;
}> => {
    const { labelSize, size = 24, labelColor } = props;
    return StyleSheet.create({
        progressIcon: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
        },
        progressIconLabel: {
            display: 'flex',
            textAlign: 'center',
            zIndex: 2,
            fontSize: labelSize || size / 4,
            color: labelColor || '#424e54',
        },
        centered: {
            fontWeight: '600',
            position: 'absolute',
            width: size,
            height: size,
            lineHeight: size,
            textShadowColor: color(props.labelColor).isDark() ? 'white' : 'black',
            textShadowOffset: {
                width: 0,
                height: 0,
            },
            textShadowRadius: size / 16,
        },
    });
};

/**
 * [Progress Icon ](https://github.com/etn-ccis/blui-progress-icons/tree/master/react-native)
 *
 * @param props ProgressIconProps
 * @returns A wrapper around a progress icon for handling label positioning
 */
export const ProgressIcon: React.FC<ProgressIconProps> = (props) => {
    const { showPercentLabel, labelPosition = 'center', children, percent, styles = {} } = props;
    const defaultStyles = useStyles(props);

    const getFlexDirection = (): any => {
        switch (labelPosition) {
            case 'left':
                return 'row';
            case 'right':
                return 'row-reverse';
            case 'top':
                return 'column';
            case 'bottom':
                return 'column-reverse';
            case 'center':
            default:
                return 'row';
        }
    };

    const isCentered = (): boolean => labelPosition === 'center';

    return (
        <View
            style={[
                {
                    flexDirection: getFlexDirection(),
                },
                defaultStyles.progressIcon,
                styles.progressIcon,
            ]}
        >
            {showPercentLabel && (
                <Text
                    style={[
                        defaultStyles.progressIconLabel,
                        styles.progressIconLabel,
                        isCentered() ? defaultStyles.centered : {},
                        isCentered() ? styles.centered : {},
                    ]}
                >
                    {percent}%
                </Text>
            )}
            {children}
        </View>
    );
};
