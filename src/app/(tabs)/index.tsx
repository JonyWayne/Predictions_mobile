import { StyleSheet, View } from 'react-native';

import { CardComponent, MotionTitle, ReadingResult } from '@/components';
import { AnimatedButton, StarryBackground } from '@/widgets';
import { useFetchFunc } from '@/hooks';
import { TarotReading } from '@/shared/types';

export default function HomeScreen() {
  const { data, fetchData, isError, isLoading } = useFetchFunc<TarotReading>();
  const isShownResult = data && !isError && !isLoading;

  return (
    <View style={styles.container}>
      {/* Фоновое изображение */}
      <StarryBackground />
      {/* Контент */}
      <View style={styles.content}>
        {!isShownResult && <MotionTitle />}
        {!data && !isError && <CardComponent isLoading={isLoading} />}
        {isShownResult && <ReadingResult cards={data?.cards} prediction={data?.prediction} />}
        {!data && !isLoading && <AnimatedButton onPress={() => fetchData('/cards')} />}
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   titleContainer: {
//     height: SCREEN_HEIGHT * 0.2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   buttonContainer: {
//     height: SCREEN_HEIGHT * 0.15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 20,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between', // Распределяем пространство между элементами
    paddingHorizontal: 20, // Отступы по бокам
  },
});
