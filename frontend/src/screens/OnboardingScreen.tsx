import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { interpolateColor, onScrollEvent, useValue } from 'react-native-redash';
import { Slide, SLIDE_HEIGHT } from '../components/Slide';
import SlideContent from '../components/SlideContent';

const BORDER_RADIUS = 75;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },

  footer: {
    flex: 1,
  },

  footerUnderlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: "Confused about your Outfits? Don't worry! Find the best outfit here!",
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explorre hundreds of outfit ideas.',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description: 'Create your individual & unique style and look amazing everyday.',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality.',
    color: '#FFDDDD',
  },
];

const OnboardingScreen: () => JSX.Element = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <Animated.View
          style={[
            styles.footerUnderlay,
            { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <SlideContent
              key={index}
              onPress={() => {
                if (scroll.current) {
                  console.log({ scrollTo: width * index });
                  scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true });
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
