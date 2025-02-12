import { StyleSheet, View } from 'react-native';

import { ReadingResult, CardComponent, MotionTitle } from '@/components';
import { StarryBackground, AnimatedButton } from '@/widgets';
import { useFetchFunc } from '@/hooks';
import { TarotReading } from '@/shared/types';

export default function HomeScreen() {
  const { data, fetchData, isError, isLoading } = useFetchFunc<TarotReading>();
  const isShownResult = data && !isError && !isLoading;

  return (
    <StarryBackground>
      <View style={styles.overlay}>
        {!isShownResult && <MotionTitle />}
        {!data && !isError && <CardComponent />}
        {isShownResult && <ReadingResult cards={data?.cards} prediction={data?.prediction} />}
        {!data && !isLoading && <AnimatedButton onPress={() => fetchData('/cards')} />}
      </View>
    </StarryBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
