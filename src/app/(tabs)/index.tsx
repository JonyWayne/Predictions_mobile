/* eslint-disable */
import { MotionTitle } from '@/components/MotionTitle';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StarryBackground } from '@/widgets';
import { Text, type TextProps, StyleSheet, View, Image } from 'react-native';

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
