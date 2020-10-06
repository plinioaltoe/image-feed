import React from 'react'
import { StyleSheet, ViewPropTypes, SafeAreaView } from 'react-native'
import PropTypes from "prop-types"
import NavigationBar from '../components/NavigationBar'
import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'

const Comments = ({ style, comments, onClose, onSubmitComment }) => {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput
        placeholder="leave comment"
        onSubmit={onSubmitComment} />
      <CommentList comments={comments} />
    </SafeAreaView>
  )
}

export default Comments

Comments.proptypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired
}


const styles = StyleSheet.create({})
