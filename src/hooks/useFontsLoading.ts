import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const useFontsLoading = () => {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Cinzel: require('../assets/fonts/Cinzel-Regular.ttf'),
    Cinzel_ru: require('../assets/fonts/Cinzel_ru.ttf'),
    Cinzel_ru_bold: require('../assets/fonts/Cinzel_ru_bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
};
