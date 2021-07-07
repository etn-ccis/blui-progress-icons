import React, { useEffect, useState } from 'react';
import { ScrollView, View, I18nManager, Text } from 'react-native';
import { Header, Spacer, wrapIcon } from '@pxblue/react-native-components';
import { useTheme } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Battery } from '@pxblue/react-native-progress-icons';

// const backgroundImage = require('./assets/images/farm.jpg');
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: I18nManager.isRTL });

// type LabelPosition = undefined | 'top' | 'right' | 'bottom' | 'left';
// const positions: LabelPosition[] = [undefined, 'left', 'top', 'right', 'bottom'];

export const App: React.FC = () => {
    const theme = useTheme();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const percentInterval = setInterval(() => setPercent((oldPercent) => (oldPercent + 3) % 100), 200);

        return (): void => clearInterval(percentInterval);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Header
                expandable={true}
                title={'South Tin Mill'}
                subtitle={'Gary Steel Works'}
                info={'Online'}
                navigation={{
                    icon: MenuIcon,
                }}
                // backgroundImage={backgroundImage}
                searchableConfig={{ placeholder: 'Search', autoFocus: true }}
            />
            <ScrollView>
                <>
                    {/* {positions.map((alignment, posIndex) => ( */}
                    <View /*key={`position-${posIndex}`}*/>
                        {/* <Text style={{ fontSize: 36 }}>{(alignment || 'Center').toUpperCase()}</Text> */}
                        {[240, 34, 48, 72, 120, 24].map((size, fontSizeIndex) => (
                            <View key={`${/*String(alignment)*/ ''}-${fontSizeIndex}`}>
                                <Text style={{ fontSize: 24 }}>{`${size}px`}</Text>
                                <Battery
                                    percent={percent}
                                    size={size}
                                    color="#983fef"
                                    // showPercentLabel={true}
                                    // labelPosition={alignment}
                                />
                                <Battery
                                    percent={percent}
                                    size={size}
                                    color="#983fef"
                                    outlined
                                    // showPercentLabel={true}
                                    // labelPosition={alignment}
                                />
                                <Battery
                                    percent={percent}
                                    size={size}
                                    color="#983fef"
                                    charging
                                    // showPercentLabel={true}
                                    // labelPosition={alignment}
                                />
                                <Battery
                                    percent={percent}
                                    size={size}
                                    color="#983fef"
                                    charging
                                    outlined
                                    // showPercentLabel={true}
                                    // labelPosition={alignment}
                                />
                                {/* <Battery
                                        percent={percent}
                                        size={size}
                                        color="#da7777"
                                        // showPercentLabel={true}
                                        // labelPosition={alignment}
                                    />
                                    <Battery
                                        percent={percent}
                                        size={size}
                                        color="#0088f2"
                                        // showPercentLabel={true}
                                        // labelPosition={alignment}
                                    />
                                    <Battery
                                        percent={percent}
                                        size={size}
                                        color="#f0cb2f"
                                        // showPercentLabel={true}
                                        // labelPosition={alignment}
                                    /> */}
                                <Spacer flex={0} height={24} />
                            </View>
                        ))}
                        <Spacer flex={0} height={24} />
                    </View>
                    {/* ))} */}
                </>
            </ScrollView>
        </View>
    );
};
