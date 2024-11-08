import {useIsFocused} from '@react-navigation/native';
import React, {FC} from 'react';
import {StatusBar, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CustomStatusBarProps {
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
  hidden?: boolean;
  animated?: boolean;
  translucent?: boolean;
  containerStyle?: ViewStyle;
  backgroundColor?: string;
}

const FocusAwareStatusBar: FC<CustomStatusBarProps> = ({
  statusBarStyle,
  hidden = false,
  animated = false,
  translucent = false,
  containerStyle,
  backgroundColor,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  const statusBar = isFocused ? (
    <StatusBar
      barStyle={statusBarStyle}
      animated={animated}
      hidden={hidden}
      translucent={translucent}
      backgroundColor={backgroundColor}
      {...props}
    />
  ) : null;

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor,
        },
        containerStyle,
      ]}>
      {statusBar}
    </View>
  );
};

export default FocusAwareStatusBar;
