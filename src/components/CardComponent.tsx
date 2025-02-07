import { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, ViewStyle } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const CardComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    if (isLoading) {
      startRotation();
    } else {
      animatedValue.setValue(0); // Останавливаем анимацию, если isLoading=false
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      {/* Контейнер для перспективы */}
      <View style={styles.perspectiveContainer as ViewStyle}>
        <Animated.View
          style={[
            styles.cardContainer,
            {
              transform: [
                { perspective: 1000 }, // Перспектива внутри transform
                {
                  rotateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        >
          <Image
            source={require('@/assets/images/card_background.jpeg')}
            style={styles.cardImage}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  perspectiveContainer: {
    // Перспектива для родительского контейнера
    transform: [{ perspective: 1000 }],
  },
  cardContainer: {
    bottom: SCREEN_HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 300,
    borderWidth: 2,
    borderColor: '#34495e',
    borderRadius: 8,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
