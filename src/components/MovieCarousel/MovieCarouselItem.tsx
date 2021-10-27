import React, { FunctionComponent } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { MovieCarouselItemProp } from '../../interfaces/IMovieCarousel.interface'
import { DetailMovieScreenProps } from '../../Screens/DetailMovieScreen'

const MovieCarouselItem: FunctionComponent<MovieCarouselItemProp> = ({ item, width = 250 }) => {
  const uri = 'https://image.tmdb.org/t/p/w500'
  const navigation = useNavigation<DetailMovieScreenProps>()

  const goToMovieDetailScreen = () => {
    navigation.navigate('DetailScreen', { ...item })
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goToMovieDetailScreen}
      style={{...styles.moviePictureContainer, width}}
    >
      <Image style={styles.image} source={{
        uri: `${uri}${item.poster_path}`,
      }} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  moviePictureContainer: {
    height: '96%',
    marginTop: 10,
    marginHorizontal: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
})

export default MovieCarouselItem