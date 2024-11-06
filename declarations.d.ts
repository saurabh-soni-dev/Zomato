declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif'; // Add support for GIF files
declare module '*.bmp'; // Add support for BMP files
declare module '*.mp3'; // Add support for BMP files

// To Use svg file in app, you need to add it as a resource.
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
