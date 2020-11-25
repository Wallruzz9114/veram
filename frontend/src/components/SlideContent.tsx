import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SlideButton from './SlideButton';

interface IPSlideContentProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },

  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
  },

  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});

const SlideContent: ({
  subtitle,
  description,
  last,
  onPress,
}: IPSlideContentProps) => JSX.Element = ({ subtitle, description, last, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.description}>{description}</Text>
    <SlideButton
      label={last ? "Let's get Started" : 'Next'}
      variant={last ? 'primary' : 'default'}
      {...{ onPress }}
    />
  </View>
);

export default SlideContent;
