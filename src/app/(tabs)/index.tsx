import { StyleSheet, View } from 'react-native';

import { MotionTitle } from '@/components/MotionTitle';
import { StarryBackground, AnimatedButton } from '@/widgets';
import { CardComponent } from '@/components/CardComponent';

export default function HomeScreen() {
  return (
    <StarryBackground>
      <View style={styles.overlay}>
        <MotionTitle />
        {/* <TarotDeck /> */}
        <CardComponent />
        <AnimatedButton onPress={() => console.log('piska')} />
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
