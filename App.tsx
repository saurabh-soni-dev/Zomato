import {View, Text, Image} from 'react-native';
import React from 'react';
import {color} from '@theme';
import {iconIndex, imageIndex} from '@assets';

const App = () => {
  return (
    <View>
      <Text style={{fontFamily: 'Okra-Bold', fontSize: 30}}>App</Text>
      <Text style={{fontFamily: '', fontSize: 30}}>App</Text>

      <Image
        source={imageIndex.logo}
        style={{height: 30, width: 40, tintColor: color.white}}
      />
      <Image source={iconIndex.clock} style={{height: 30, width: 40}} />
    </View>
  );
};

export default App;
