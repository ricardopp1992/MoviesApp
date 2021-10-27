import React, { FunctionComponent } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import MovieCarouselItem from './MovieCarouselItem'
import { IMovieCarouselProp } from '../../interfaces/IMovieCarousel.interface'

const { width: windowWidth } = Dimensions.get('window')

const MovieCarousel: FunctionComponent<IMovieCarouselProp> = ({ movies }) => {

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={movies}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => <MovieCarouselItem item={item} />}
        sliderWidth={windowWidth}
        itemWidth={250}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
    justifyContent: 'center'
  }
})

export default MovieCarousel