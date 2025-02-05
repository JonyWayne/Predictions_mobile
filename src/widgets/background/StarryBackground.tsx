import { View, StatusBar } from 'react-native';
import { Image } from 'expo-image';

export const StarryBackground = () => (
  <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <Image
      source={require('@/assets/images/background.gif')}
      style={{ width: '100%', height: '100%' }}
    />
  </View>
);
