import {imageIndex} from '@assets';
import {CustomText, FocusAwareStatusBar} from '@components';
import {color} from '@theme';
import {screenHeight, screenWidth} from '@utility/Constant';
import {resetAndNavigate} from '@utility/NavigationUtils';
import React, {FC, useEffect} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';

const Splash: FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      resetAndNavigate('Login');
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        hidden={Platform.OS !== 'android'}
        backgroundColor={color.primary}
      />
      <View style={styles.mainContainer}>
        <Image source={imageIndex.logo} style={styles.logoImage} />
        <CustomText
          variant="h5"
          fontFamily="Okra-Medium"
          color={color.activeLight}
          style={styles.msgText}>
          Carbon and Plastic Neutral{'\n'} Deliveries in India
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.09,
    resizeMode: 'contain',
  },
  msgText: {
    textAlign: 'center',
  },
});

export default Splash;
