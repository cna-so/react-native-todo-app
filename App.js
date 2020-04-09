import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'
import store from './components/redux/store';
import Form from './components/screens/Form';
import Lists from './components/screens/Lists';
export default function App() {
  return (
<Provider store={store} >
    <Form/>
    <Lists />
</Provider>
  );
}