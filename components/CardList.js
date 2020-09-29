import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from "prop-types"

import Card from './Card'
import { getImageFromId } from '../utils/api'

const keyExtractor = ({ id }) => id.toString();

const renderItem = ({ item: { id, author } }) => (
  <Card
    fullName={author}
    image={{ uri: getImageFromId(id) }}
  />
)

const CardList = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}>
    </FlatList>
  )
}

export default CardList

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
}

const styles = StyleSheet.create({})
