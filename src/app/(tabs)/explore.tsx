import { StyleSheet, Image, View, TouchableOpacity, Text, Dimensions } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { openDonationPage } from '@/shared/lib';
import { useStorageDataManager } from '@/hooks';
import { EText } from '@/constants/Common';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const { ABOUT, ABOUT_INFO, MAIN_INFO, DESCRIPTION, DONATE, DONATE_INFO } = EText;

export default function TabTwoScreen() {
  const { resetData } = useStorageDataManager();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: '#353636' }}
      headerImage={<Image source={require('@/assets/images/dev.jpeg')} style={styles.image} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{MAIN_INFO}</ThemedText>
      </ThemedView>
      <ThemedText style={styles.textStyle}>{DESCRIPTION}</ThemedText>

      <Collapsible title={ABOUT}>
        <ThemedText style={styles.textStyle}>{ABOUT_INFO}</ThemedText>
      </Collapsible>
      <Collapsible title={DONATE}>
        <ThemedText style={styles.textStyle}>{DONATE_INFO}</ThemedText>
        <View>
          <TouchableOpacity style={styles.button} onPress={openDonationPage}>
            <Text style={styles.buttonText}>{DONATE}</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* TODO временная кнопка для очистки стора */}
          <TouchableOpacity style={styles.button} onPress={resetData}>
            <Text style={styles.buttonText}>Очистить стор</Text>
          </TouchableOpacity>
        </View>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    fontFamily: 'Cinzel_ru_bold',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Cinzel_ru_bold',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    top: SCREEN_HEIGHT * 0.04,
  },
  textStyle: {
    fontFamily: 'Cinzel_ru_bold',
  },
});
