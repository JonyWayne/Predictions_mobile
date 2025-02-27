import { Animated } from 'react-native';

export const fadeInAnimation = (value: Animated.Value, duration: number = 1500) => {
  Animated.timing(value, {
    toValue: 1,
    duration: duration,
    useNativeDriver: true,
  }).start();
};
