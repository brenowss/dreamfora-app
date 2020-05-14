import React, {useState} from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  })

  if(fontsLoaded){
    return (
      <Routes />
      );
  } else {
    return (
      <AppLoading />
    )
  }
}
