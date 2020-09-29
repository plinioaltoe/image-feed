import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from "prop-types"

import Avatar from './Avatar'
import getInitials from '../utils/getInitials'
import getAvatarColor from '../utils/getAvatarColor'

const AuthorRow = ({ fullName, linkText, onPressLinkText }) => {
  return (
    <View style={styles.container}>
      <Avatar
        initials={getInitials(fullName)}
        size={35}
        backgroundColor={getAvatarColor(fullName)} />
      <Text style={styles.text}>{fullName}</Text>
      {!!linkText &&
        <TouchableOpacity onPress={onPressLinkText}>
          <Text style={styles.text} numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default AuthorRow

AuthorRow.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  text: {
    flex: 1,
    marginHorizontal: 6,
    color: "white"
  }
})
