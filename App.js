import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View, Platform, Modal, AsyncStorage } from 'react-native'

import Feed from './screens/Feed'
import Comments from './screens/Comments'

export default function App() {

  const [commentsForItem, setCommentsForItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null)

  useEffect(() => {
    try {

      (async () => {
        const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY)
        setCommentsForItem(commentsForItem ? JSON.parse(commentsForItem) : {})
      })()

    } catch (error) {
      console.log('ocorreu erro ao ler comentários')
    }

  }, [])

  const openCommentsScreen = id => {
    setShowModal(true)
    setSelectedItemId(id)
  }

  const closeCommentsScreen = () => {
    setShowModal(false)
    setSelectedItemId(null)
  }

  const onSubmitComment = async text => {
    const comments = commentsForItem[selectedItemId] || []
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text]
    }

    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated))
    } catch (error) {
      console.log('ocorreu erro ao guardar comentários')
    }

    setCommentsForItem(updated)
  }

  const ASYNC_STORAGE_COMMENTS_KEY = "ASYNC_STORAGE_COMMENTS_KEY"

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComment={openCommentsScreen} />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentsScreen}>
        <Comments
          style={styles.comment}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentsScreen}
          onSubmitComment={onSubmitComment}>

        </Comments>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const plataformVersion = Platform.OS === "ios"
  ? parseInt(Platform.Version, 10)
  : Platform.Version

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === 'android' || plataformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  },
  comment: {
    flex: 1,
    marginTop: Platform.OS === 'android' || plataformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  }
});
