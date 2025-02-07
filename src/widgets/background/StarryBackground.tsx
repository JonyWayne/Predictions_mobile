import { FC } from 'react';
import { View, StatusBar } from 'react-native';
import { ImageBackground } from 'expo-image';

interface StarryBackgroundProps {
  children?: React.ReactNode;
}

export const StarryBackground: FC<StarryBackgroundProps> = ({ children }) => (
  <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <StatusBar barStyle={'light-content'} />
    <ImageBackground
      source={require('@/assets/images/background.gif')}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </ImageBackground>
  </View>
);
