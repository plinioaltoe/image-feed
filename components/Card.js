import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types"

import AuthorRow from './AuthorRow'

const Card = ({ fullName, linkText, onPressLinkText, image }) => {
  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <Image style={styles.image} source={image} />
    </View>
  )
}

export default Card

Card.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
  image: Image.propTypes.source.isRequired
}

Card.defaultProps = {
  linkText: "",
  onPressLinkText: () => { }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  }
})
