import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, Image, Animated } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const CardComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const rotateAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: isLoading ? 1 : 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    rotateAnimation();
  }, [isLoading]);

  return (
    <View style={styles.cardContainer}>
      <Animated.Image
        source={require('@/assets/images/card_background.jpeg')}
        style={[
          styles.cardImage,
          {
            transform: [
              {
                rotate: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardContainer: {
    justifyContent: 'center',
    width: '50%',
    height: '40%',
    borderWidth: 2,
    borderColor: '#34495e',
    borderRadius: 8,
    bottom: SCREEN_HEIGHT * 0.1,
  },
});
