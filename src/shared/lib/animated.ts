/* eslint-disable */
import { Animated } from 'react-native';

export const fadeInAnimation = (value: Animated.Value) => {
  Animated.timing(value, {
    toValue: 1,
    duration: 1500,
    useNativeDriver: true,
  }).start();
};
