import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TarotReading } from '@/shared/types';
import { getTodayFormattedDate, isDataReceivedToday } from '@/shared/lib/date';
import { PREDICTION_KEY, TIMESTAMP_KEY } from '@/constants/Common';

export const useStorageDataManager = (data?: TarotReading | null) => {
  const [receivedPrediction, setReceivedPrediction] = useState<TarotReading | null>(null);
  const [dataTimeStamp, setDataTimeStamp] = useState<string | null>(null);
  const [isStorageLoading, setIsStorageLoading] = useState(true);
  const { prediction } = (data as TarotReading) || {};

  // Загрузка данных из AsyncStorage при монтировании компонента
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedPrediction = await AsyncStorage.getItem(PREDICTION_KEY);
        const storedTimestamp = await AsyncStorage.getItem(TIMESTAMP_KEY);
        if (storedPrediction) setReceivedPrediction(JSON.parse(storedPrediction));
        if (storedTimestamp) setDataTimeStamp(storedTimestamp);
      } catch (error) {
        console.error('Ошибка при загрузке данных из AsyncStorage:', error);
      } finally {
        setIsStorageLoading(false);
      }
    };

    loadData();
  }, []);

  // Сохранение данных в AsyncStorage при получении новых данных
  useEffect(() => {
    if (prediction) {
      const saveData = async () => {
        try {
          await AsyncStorage.setItem(PREDICTION_KEY, JSON.stringify(data));
          await AsyncStorage.setItem(TIMESTAMP_KEY, getTodayFormattedDate());
          setReceivedPrediction(data as TarotReading);
          setDataTimeStamp(getTodayFormattedDate());
        } catch (error) {
          console.error('Ошибка при сохранении данных в AsyncStorage:', error);
        }
      };

      saveData();
    }
  }, [prediction]);

  const resetData = async () => {
    try {
      await AsyncStorage.removeItem(PREDICTION_KEY);
      await AsyncStorage.removeItem(TIMESTAMP_KEY);
      setReceivedPrediction(null);
      setDataTimeStamp(null);
    } catch (error) {
      console.error('Ошибка при сбросе данных в AsyncStorage:', error);
    }
  };

  // Сброс данных, если временная метка устарела
  useEffect(() => {
    const resetDataIfNeeded = async () => {
      if (dataTimeStamp && !isDataReceivedToday(dataTimeStamp)) {
        resetData();
      }
    };

    resetDataIfNeeded();
  }, [dataTimeStamp]);

  return { receivedPrediction, dataTimeStamp, isStorageLoading, resetData };
};
