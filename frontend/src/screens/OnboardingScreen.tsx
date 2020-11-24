import React from 'react';
import { StyleSheet, View } from 'react-native';

const OnboardingScreen: () => JSX.Element = () => <View style={styles.view}></View>;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});

export default OnboardingScreen;
