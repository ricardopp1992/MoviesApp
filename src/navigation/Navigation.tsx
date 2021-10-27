import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from '../Screens/MainScreen'
import DetailMovieScreen from '../Screens/DetailMovieScreen'
import { Movie } from '../interfaces/MovieAPI.interface'

export type MovieStackNavigator = {
  HomePage: undefined
  DetailScreen: Movie
}

const { Navigator, Screen } = createStackNavigator<MovieStackNavigator>()

const Navigation = () => {
  return (
    <Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff'
      }
    }}>
      <Screen name="HomePage" component={MainScreen} />
      <Screen name="DetailScreen" component={DetailMovieScreen} />
    </Navigator>
  )
}

export default Navigation