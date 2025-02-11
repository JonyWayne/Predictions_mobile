/* eslint-disable */
import { StyleSheet, View } from 'react-native';

import { MotionTitle } from '@/components/MotionTitle';
import { StarryBackground, AnimatedButton } from '@/widgets';
import { CardComponent } from '@/components/CardComponent';
import { useFetchFunc } from '@/hooks';
import { ReadingResult } from '@/components/ReadingResult';
import { TarotReading } from '@/shared/types';

export default function HomeScreen() {
  const { data, fetchData, isError, isLoading } = useFetchFunc<TarotReading>();
  const isShownResult = data && !isError && !isLoading;
  console.log(data);
  console.log(isError, 'isError');
  console.log(isLoading, 'isLoading');

  return (
    <StarryBackground>
      <View style={styles.overlay}>
        {/* {!isShownResult && <MotionTitle />} */}
        {/* <TarotDeck /> */}
        {/* {!data && !isError && <CardComponent />} */}
        {/* {isShownResult && <ReadingResult cards={data?.cards} prediction={data?.prediction} />} */}
        {<ReadingResult cards={[]} prediction={''} />}
        {/* {!isShownResult && <AnimatedButton onPress={() => fetchData('/cards')} />} */}
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
