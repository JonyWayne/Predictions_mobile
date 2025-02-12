import { Linking } from 'react-native';

export const openDonationPage = async () => {
  try {
    const url = 'https://yoomoney.ru/to/4100117836702517';
    await Linking.openURL(url);
  } catch (error) {
    alert('Не удалось открыть страницу доната. Проверьте интернет-соединение.');
  }
};
