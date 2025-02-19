import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';

// Маппинг для MaterialCommunityIcons
const MAPPING_COMMUNITY = {
  'cards.outline': 'cards-outline',
  'heart.fill': 'heart',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialCommunityIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING_COMMUNITY;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialCommunityIcons
      name={MAPPING_COMMUNITY[name]}
      size={size}
      color={color}
      style={style as StyleProp<TextStyle>}
    />
  );
}
