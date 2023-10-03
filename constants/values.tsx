export const Colors = {
    primary: '#2A64A9',
    secondary: '#33C1A7',
    background: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onBackground: '#000000',
    lightGray: '#D7D7D7',
    gray: 'B8B8B8',
    darkGray: '676767'
};

import { Platform } from 'react-native';
export const Shadow = Platform.select({
    ios: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 20,
      shadowColor: 'rgba(0, 0, 0, 0.25)',
    },
    android: {
      elevation: 5,
    },
});