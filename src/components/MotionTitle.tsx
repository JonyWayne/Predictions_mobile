/* eslint-disable */
import { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { INFO_TITLE_1, INFO_TITLE_2 } from '@/constants/Common';
import { fadeInAnimation } from '@/shared/lib';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const MotionTitle = () => {
  const animatedTitleOpacity = new Animated.Value(0);
  const animatedSubtitleOpacity = new Animated.Value(0);

  useEffect(() => {
    setTimeout(() => {
      fadeInAnimation(animatedTitleOpacity);
      setTimeout(() => {
        fadeInAnimation(animatedSubtitleOpacity);
      }, 500);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.titleContainer,
          { opacity: animatedTitleOpacity, transform: [{ translateY: -50 }] },
        ]}
      >
        <Text style={styles.title}>{INFO_TITLE_1}</Text>
      </Animated.View>

      <Animated.View style={[styles.subtitleContainer, { opacity: animatedSubtitleOpacity }]}>
        <Text style={styles.subtitle}>{INFO_TITLE_2}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: SCREEN_HEIGHT * 0.2,
  },
  titleContainer: {
    marginBottom: -16,
  },
  subtitleContainer: {},
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Cinzel_ru_bold',
  },
  subtitle: {
    fontSize: 24,
    color: '#ccc',
    textAlign: 'center',
    fontFamily: 'Cinzel_ru',
  },
});
