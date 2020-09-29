import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types"

import AuthorRow from './AuthorRow'

const Card = ({ fullName, linkText, onPressLinkText, image }) => {

  const [loading, setLoading] = useState(true)

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image} >
        {!!loading &&
          <ActivityIndicator
            style={StyleSheet.absoluteFill} />
        }
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={() => setLoading(false)} />
      </View>
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
