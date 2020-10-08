import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from "prop-types"

import Card from './Card'
import { getImageFromId } from '../utils/api'

const keyExtractor = ({ id }) => id.toString();

const CardList = ({ items, commentsForItem, onPressComment, onRefresh }) => {

  const renderItem = ({ item: { id, author } }) => {

    const comments = commentsForItem[id]
    return (
      <Card
        fullName={author}
        image={{ uri: getImageFromId(id) }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComment(id)}
      />
    )
  }

  return (
    <FlatList
      refreshing={false}
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
      onRefresh={onRefresh}
    />
  )
}

export default CardList

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired,
  commentsForItem: PropTypes.object.isRequired,
  onPressComment: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired
}

const styles = StyleSheet.create({})
