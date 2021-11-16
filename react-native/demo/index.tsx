/**
 * @format
 */
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import React from 'react';
import { AppRegistry } from 'react-native';
import { App } from './App';
import { Provider as PaperProvider } from 'react-native-paper';
import { blue } from '@brightlayer-ui/react-native-themes';

const wrapper = (): JSX.Element => (
    <PaperProvider theme={blue}>
        <App />
    </PaperProvider>
);

AppRegistry.registerComponent(appName, () => wrapper);
