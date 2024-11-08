import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {stackScreens} from './rootStack.const';
import {RootStackParams} from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        orientation: 'portrait',
      }}>
      {stackScreens?.map(screen => (
        <Stack.Screen
          key={screen?.name}
          name={screen?.name as keyof RootStackParams}
          component={screen?.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootStack;
