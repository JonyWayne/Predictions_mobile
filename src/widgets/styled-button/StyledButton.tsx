import { FC, useEffect } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StyledButtonProps } from './types';
import { fadeInAnimation } from '@/shared/lib';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

export const AnimatedButton: FC<StyledButtonProps> = ({ onPress }) => {
  const animatedOpacity = new Animated.Value(0);

  useEffect(() => {
    fadeInAnimation(animatedOpacity, 3000);
    return () => {
      fadeInAnimation(animatedOpacity, 3000);
    };
  }, []);

  return (
    <Animated.View style={[{ opacity: animatedOpacity }]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Расклад дня</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  button: {
    width: SCREEN_WIDTH * 0.6,
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
    textAlign: 'center',
    letterSpacing: 0.1,
    textDecorationLine: 'none',
    borderWidth: 2,
    borderColor: '#34495e',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Cinzel_ru_bold',
  },
});
