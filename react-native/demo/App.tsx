import React, { /*useEffect,*/ useState } from 'react';
import { ScrollView, View, I18nManager, Text } from 'react-native';
import { Header, Spacer, wrapIcon } from '@brightlayer-ui/react-native-components';
import { useTheme } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { Battery, Heart, Ups, Pie } from '@brightlayer-ui/react-native-progress-icons';
import * as Colors from '@brightlayer-ui/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// const backgroundImage = require('./assets/images/farm.jpg');
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: I18nManager.isRTL });

type LabelPosition = 'center' | 'top' | 'right' | 'bottom' | 'left';
const positions: LabelPosition[] = ['center', 'left', 'top', 'right', 'bottom'];

export const App: React.FC = () => {
    const theme = useTheme();
    const [percent /*, setPercent*/] = useState(50);

    // useEffect(() => {
    //     const percentInterval = setInterval(() => setPercent((oldPercent) => (oldPercent + 3) % 100), 2000);

    //     return (): void => clearInterval(percentInterval);
    // }, []);

    return (
        <SafeAreaProvider>
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
                        {positions.map((alignment, posIndex) => (
                            <View key={`position-${posIndex}`}>
                                <Text style={{ fontSize: 36 }}>{alignment.toUpperCase()}</Text>
                                {[24, 36, 48, 72, 120, 240].map((size, fontSizeIndex) => (
                                    <View key={`${String(alignment)}-${fontSizeIndex}`}>
                                        <Text style={{ fontSize: 24 }}>{`${size}px`}</Text>
                                        <Battery
                                            percent={percent}
                                            size={size}
                                            color={Colors.purple[500]}
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Battery
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Battery
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            charging
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Battery
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            charging
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Heart
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Heart
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Ups
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Ups
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Pie
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Pie
                                            percent={percent}
                                            size={size}
                                            color="#983fef"
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Pie
                                            percent={percent}
                                            size={size}
                                            ring={4}
                                            color="#983fef"
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Pie
                                            percent={percent}
                                            size={size}
                                            ring={4}
                                            color="#983fef"
                                            outlined
                                            showPercentLabel={true}
                                            labelPosition={alignment}
                                        />
                                        <Spacer flex={0} height={24} />
                                    </View>
                                ))}
                                <Spacer flex={0} height={24} />
                            </View>
                        ))}
                    </>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
};
