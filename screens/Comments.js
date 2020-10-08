import React, { useState } from 'react'
import { StyleSheet, ViewPropTypes, SafeAreaView, Image, View, ActivityIndicator } from 'react-native'
import PropTypes from "prop-types"
import NavigationBar from '../components/NavigationBar'
import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'
import { getImageFromId } from '../utils/api'

const Comments = ({ style, comments, onClose, onSubmitComment, id, onClear }) => {

  const [loading, setLoading] = useState(true)

  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
        onPressRightText={onClear}
      />
      <CommentInput
        placeholder="leave comment"
        onSubmit={onSubmitComment} />
      <View style={styles.image} >
        {!!loading &&
          <ActivityIndicator
            style={StyleSheet.absoluteFill} />
        }
        <Image
          style={styles.image}
          source={{ uri: getImageFromId(id) }}
          onLoad={() => setLoading(false)}
        />
      </View>
      <CommentList comments={comments} />
    </SafeAreaView>
  )
}

export default Comments

Comments.proptypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}


const styles = StyleSheet.create({
  image: {
    aspectRatio: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
  }

})

