import { useRef, useEffect, FC } from 'react';
import { StyleSheet, View, Image, Animated, ViewStyle } from 'react-native';
import { CardComponentProps } from './types';

export const CardComponent: FC<CardComponentProps> = ({ isLoading }) => {
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
      animatedValue.setValue(0);
    }
  }, [isLoading]);

  return (
    <View>
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
  perspectiveContainer: {
    // Перспектива для родительского контейнера (эффект объема, визуальные эффект)
    transform: [{ perspective: 1000 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardContainer: {
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
});
