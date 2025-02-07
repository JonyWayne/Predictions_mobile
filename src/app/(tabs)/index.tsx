import { StyleSheet, View } from 'react-native';

import { MotionTitle } from '@/components/MotionTitle';
import { StarryBackground } from '@/widgets';

export default function HomeScreen() {
  return (
    <StarryBackground>
      <View style={styles.overlay}>
        <MotionTitle />
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
});
