import React, { FunctionComponent } from 'react'
import { Image, Text, View } from 'react-native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { MovieStackNavigator } from '../navigation/Navigation'

export interface DetailMovieScreenProps extends
  StackScreenProps<MovieStackNavigator, 'DetailScreen'>,
  StackNavigationProp<MovieStackNavigator, 'DetailScreen'> { }

const DetailMovieScreen: FunctionComponent<DetailMovieScreenProps> = ({ route }) => {
  const uri = 'https://image.tmdb.org/t/p/w500'
  const movie = route.params

  return (
    <View>
      <Image source={{ uri: `${uri}${movie.poster_path}` }} />
      <Text>
        { movie.title }
      </Text>
      <Text>
        {movie.overview}
      </Text>
    </View>
  )
}

export default DetailMovieScreen