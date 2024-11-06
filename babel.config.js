module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
            '.style.ts',
          ],
          alias: {
            '@assets': './src/assets/index.ts',
            '@theme': './src/theme/index.ts',
            '@components': './src/components/index.ts',
            '@hooks': './src/hooks/index.ts',
            '@i18n': './src/i18n',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@utility': './src/utility',
          },
        },
      ],
    ],
  };
};
