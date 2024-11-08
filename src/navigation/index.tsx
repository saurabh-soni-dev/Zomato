import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utility/navigationRef';
import React from 'react';
import RootStack from './stacks/RootStack';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
