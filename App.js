import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';

import { ModuleRouter } from './router/moduleRouter';
import { ProjectContext } from './context';


export default function App() {
  
  return (
    <ModuleRouter />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    marginBottom: 15,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  checkbox: {
    padding: 10,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
  }
});
