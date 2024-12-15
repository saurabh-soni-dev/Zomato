import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './stacks/RootStack';
import {navigationRef} from '@utility/NavigationUtils';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
