import {FocusAwareStatusBar} from '@components';
import {useAuthNavigation} from '@hooks';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Login: FC = () => {
  const nav = useAuthNavigation();

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        statusBarStyle="light-content"
        backgroundColor="#ecf0f1"
      />
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => nav.navigate('Splash')}>
          <Text>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
