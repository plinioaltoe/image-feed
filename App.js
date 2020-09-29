import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

import CardList from './components/CardList'

const items = [
  {
    id: 0,
    author: "Jorge Jesus",
  },
  {
    id: 1,
    author: "Alberto Roberto"
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <CardList items={items} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
});
