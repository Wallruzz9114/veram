import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoadAssets from './src/components/LoadAssets';
import OnboardingScreen from './src/screens/OnboardingScreen';

const Stack = createStackNavigator();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.ttf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.ttf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
};

const AuthenticationNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

const App: () => JSX.Element = () => (
  <LoadAssets {...{ fonts }}>
    <AuthenticationNavigator />
  </LoadAssets>
);

export default App;
