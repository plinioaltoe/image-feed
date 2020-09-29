import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

import Card from './components/Card'

export default function App() {

  const handleLink = () => { console.log("yes") }
  return (
    <View style={styles.container}>
      <Card
        fullName="Plinio Altoé"
        linkText="www.google.com"
        onPressLinkText={handleLink}
        image={{ uri: "https://unsplash.it/600/600" }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: Constants.statusBarHeight
  },
});
