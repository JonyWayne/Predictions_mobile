import { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

import { INFO_TITLE_1, INFO_TITLE_2 } from '@/constants/Common';
import { fadeInAnimation } from '@/shared/lib';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isLargeScreen = SCREEN_HEIGHT > 700;

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
    <View>
      <Animated.View style={[{ opacity: animatedTitleOpacity }]}>
        <Text style={styles.title}>{INFO_TITLE_1}</Text>
      </Animated.View>

      <Animated.View style={[{ opacity: animatedSubtitleOpacity }]}>
        <Text style={styles.subtitle}>{INFO_TITLE_2}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: SCREEN_WIDTH * 0.08,
    color: '#fff',
    textAlign: 'center',
    marginTop: isLargeScreen ? SCREEN_HEIGHT * 0.17 : SCREEN_HEIGHT * 0.06,
    fontFamily: 'Cinzel_ru_bold',
    marginBottom: isLargeScreen ? SCREEN_HEIGHT * 0.03 : SCREEN_HEIGHT * 0.01,
  },
  subtitle: {
    fontSize: SCREEN_WIDTH * 0.05,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Cinzel_ru',
  },
});
