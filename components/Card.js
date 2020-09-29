import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from "prop-types"

const Card = ({fullName, linkText, onPressLinkText}) => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default Card

Card.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({})
