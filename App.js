import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'

import AuthorRow from './components/AuthorRow'

export default function App() {

  const handleLink = () => { console.log("YAHOO") }
  return (
    <View style={styles.container}>
      <AuthorRow
        fullName="Plinio Altoe"
        linkText="www.google.com"
        onPressLinkText={handleLink}
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
