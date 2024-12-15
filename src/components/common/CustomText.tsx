import {Colors} from '@unistyles/Constants';
import React, {FC} from 'react';
import {Platform, Text, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
type PlatformType = 'android' | 'ios';

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: {android: 24, ios: 22},
  h2: {android: 22, ios: 20},
  h3: {android: 20, ios: 18},
  h4: {android: 18, ios: 16},
  h5: {android: 16, ios: 14},
  h6: {android: 12, ios: 10},
  h7: {android: 10, ios: 9},
};

interface CustomTextProps {
  variant?: Variant;
  fontFamily?:
    | 'Okra-Regular'
    | 'Okra-Light'
    | 'Okra-Medium'
    | 'Okra-Black'
    | 'Okra-Bold';
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
}

const CustomText: FC<CustomTextProps> = ({
  variant,
  fontFamily,
  fontSize,
  color,
  style,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {
  const platform = Platform.OS as PlatformType;
  const defaultSize = variant
    ? fontSizeMap[variant][platform]
    : platform === 'android'
    ? 12
    : 10;
  const computedFontSize = RFValue(fontSize || defaultSize);

  const textStyle: TextStyle = {
    textAlign: 'left',
    color: color || Colors.text,
    fontSize: computedFontSize,
    fontFamily,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  };

  return (
    <Text
      onLayout={onLayout}
      style={textStyle}
      numberOfLines={numberOfLines}
      {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
