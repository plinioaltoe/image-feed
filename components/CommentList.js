import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import PropTypes from "prop-types"

const renderItem = (comment, index) => (
  <View key={index} style={styles.comments}>
    <Text>{comment}</Text>
  </View>
)

const CommentList = ({ comments }) => {
  return (
    <ScrollView>
      {comments.map(renderItem)}
    </ScrollView>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CommentList

const styles = StyleSheet.create({
  comments: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.2)"
  }
})
