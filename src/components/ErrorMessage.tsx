import { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

import { ERROR_MESSAGE } from '@/constants/Common';
import { fadeInAnimation } from '@/shared/lib';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const isLargeScreen = SCREEN_HEIGHT > 700;

export const ErrorMessage = () => {
  const animatedErrorTitleOpacity = new Animated.Value(0);

  useEffect(() => {
    setTimeout(() => {
      fadeInAnimation(animatedErrorTitleOpacity);
    }, 1000);
  }, []);

  return (
    <View>
      <Animated.View style={[{ opacity: animatedErrorTitleOpacity }]}>
        <Text style={styles.title}>{ERROR_MESSAGE}</Text>
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
});
