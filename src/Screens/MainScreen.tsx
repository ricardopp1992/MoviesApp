import React, { FunctionComponent } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { ActivityIndicator, ScrollView, View } from 'react-native'

import useMovie from '../hooks/useMovie'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
import HorizontalMoviesSlider from '../components/MoviesSlider/HorizontalMoviesSlider'
import { MovieStackNavigator } from '../navigation/Navigation'

import { theme } from '../themes/themes'

export interface MainScreenProps extends StackNavigationProp<MovieStackNavigator, 'HomePage'> { }

const MainScreen: FunctionComponent<MainScreenProps> = () => {
  const { nowPlaying, popular, topRated, upComing, isLoading } = useMovie()

  if (isLoading) {
    return <ActivityIndicator style={{ marginVertical: '50%' }} size={100} />
  }

  return (
    <ScrollView>
      <View style={theme.screenContainer}>
        <MovieCarousel title="Now Playing" movies={nowPlaying}/>
        <HorizontalMoviesSlider title="Popular" movies={popular} />
        <HorizontalMoviesSlider title="Top Rated" movies={topRated} />
        <HorizontalMoviesSlider title="Up Coming" movies={upComing} />
      </View>
    </ScrollView>
  )
}

export default MainScreen