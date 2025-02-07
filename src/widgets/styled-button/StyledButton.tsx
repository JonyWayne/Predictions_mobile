import { FC, useEffect } from 'react';

import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StyledButtonProps } from './types';
import { fadeInAnimation } from '@/shared/lib';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const AnimatedButton: FC<StyledButtonProps> = ({ onPress, disabled = false }) => {
  const animatedScale = new Animated.Value(1);
  const animatedOpacity = new Animated.Value(1);

  const animatedButton = new Animated.Value(0);

  useEffect(() => {
    setTimeout(() => {
      fadeInAnimation(animatedButton);
    }, 3000);
  }, []);

  const handlePressIn = () => {
    Animated.spring(animatedScale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleLongPress = () => {
    Animated.spring(animatedScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
      disabled={disabled}
      style={styles.button}
      onPress={onPress}
    >
      <Animated.View
        style={[
          styles.buttonContent,
          {
            transform: [{ scale: animatedScale }],
            opacity: animatedOpacity,
          },
        ]}
      >
        <Text style={styles.text}>Расклад дня</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    letterSpacing: 0.1,
    textDecorationLine: 'none',
    borderWidth: 2,
    borderColor: '#34495e',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    bottom: SCREEN_HEIGHT * 0.05,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
