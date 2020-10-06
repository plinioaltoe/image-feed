import React, { Component } from 'react'
import { Text, StyleSheet, View, ViewPropTypes, ActivityIndicator } from 'react-native'

import CardList from '../components/CardList'
import { fetchImages } from "../utils/api"

export default class Feed extends Component {

  state = {
    loading: true,
    error: "",
    items: [],
  }

  static propTypes = {
    style: ViewPropTypes.style,
  }


  handleImages = async () => {
    try {
      this.setState({ loading: true })
      const items = await fetchImages()
      this.setState({ items, loading: false, error: "" })
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  componentDidMount = async () => await this.handleImages()


  render() {
    const { style, commentsForItem, onPressComment } = this.props
    const { items, loading, error } = this.state

    if (loading) {
      return <ActivityIndicator size="large" />
    }

    if (!!error) {
      return <Text>Ocorreu um erro: {error}</Text>
    }
    return (
      <View style={style.container}>
        <CardList items={items}
          commentsForItem={commentsForItem}
          onPressComment={onPressComment} />
      </View>
    )
  }
}

