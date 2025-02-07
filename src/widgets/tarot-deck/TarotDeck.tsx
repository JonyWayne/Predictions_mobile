import { ImageBackground } from 'react-native';

export const TarotDeck = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/card_background.jpeg')}
      style={{ width: '100%', height: '50%' }}
    />
  );
};
