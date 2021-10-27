import React, { FunctionComponent } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { IMovieCarouselProp } from '../../interfaces/IMovieCarousel.interface'
import MovieCarouselItem from '../MovieCarousel/MovieCarouselItem'

const HorizontalMoviesSlider: FunctionComponent<IMovieCarouselProp> = ({ movies, title }) => {
  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.sliderText}>{title}</Text>
      <FlatList
        keyExtractor={item => `${item.id}`}
        style={styles.slider}
        data={movies}
        renderItem={({ item }) => <MovieCarouselItem item={item} width={120} />}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: 5,
    width: '100%',
    height: 230,
  },
  slider: {
    width: '100%'
  },
  sliderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  }
})

export default HorizontalMoviesSlider