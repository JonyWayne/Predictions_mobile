import { StyleSheet, View } from 'react-native';

import { CardComponent, MotionTitle, ReadingResult, Spinner, ErrorMessage } from '@/components';
import { AnimatedButton, StarryBackground } from '@/widgets';
import { useFetchFunc, useStorageDataManager } from '@/hooks';
import { TarotReading } from '@/shared/types';

import { EURL } from '@/constants/Common';

const { PREDICTION_DATA } = EURL;

export default function HomeScreen() {
  const { data, fetchData, isError, isLoading } = useFetchFunc<TarotReading>();
  const { receivedPrediction, isStorageLoading } = useStorageDataManager(data);
  const isReadingReault = receivedPrediction && !isLoading && !isError;
  const isInitialState = !receivedPrediction && !isError && !isLoading;
  const isErrorState = isError && !isLoading;
  const isLoadingState = !receivedPrediction && !isError;

  // Отображение спиннера, если данные загружаются
  if (isStorageLoading) {
    <Spinner />;
  } else {
    return (
      <View style={styles.container}>
        {/* Фоновое изображение */}
        <StarryBackground />
        {/* Контент */}
        <View style={isLoading || isReadingReault ? '' : styles.content}>
          {isInitialState && <MotionTitle />}
          {isLoadingState && <CardComponent isLoading={isLoading} />}
          {isErrorState && <ErrorMessage />}
          {isReadingReault && (
            <ReadingResult
              cards={receivedPrediction?.cards}
              prediction={receivedPrediction?.prediction}
            />
          )}
          {isInitialState && <AnimatedButton onPress={() => fetchData(PREDICTION_DATA)} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
