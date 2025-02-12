import { ImageBackground } from 'expo-image';
import { StyleSheet } from 'react-native';

export const StarryBackground = () => (
  <ImageBackground
    source={require('@/assets/images/background.gif')}
    style={styles.backgroundImage}
  />
);

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
