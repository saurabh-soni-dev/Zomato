import { FocusAwareStatusBar } from '@components';
import { useAuthNavigation } from '@hooks';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const Splash: FC = () => {
  const nav = useAuthNavigation();

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        statusBarStyle="light-content"
        backgroundColor="#6a51ae"
      />
      <View style={styles.mainContainer}>ß</View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a51ae',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
