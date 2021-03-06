import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from "prop-types"

const NavigationBar = ({ title, leftText, onPressLeftText, onPressRightText }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftText}
        onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.rightText}
        onPress={onPressRightText}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NavigationBar

NavigationBar.propTypes = {
  title: PropTypes.string,
  leftText: PropTypes.string,
  onPressLeftText: PropTypes.func,
  onPressRightText: PropTypes.func
}

NavigationBar.defaultProps = {
  title: '',
  leftText: '',
  onPressLeftText: () => { }
}
const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  leftText: {
    position: "absolute",
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
  rightText: {
    position: "absolute",
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  }
})