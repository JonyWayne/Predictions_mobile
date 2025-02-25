import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { SFSymbol } from 'expo-symbols';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { EText } from '@/constants/Common';

const { TRIPLET, MAIN_INFO } = EText;

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Cinzel_ru_bold',
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: TRIPLET,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name={'cards.outline' as SFSymbol} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: MAIN_INFO,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name={'information.outline' as SFSymbol} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
