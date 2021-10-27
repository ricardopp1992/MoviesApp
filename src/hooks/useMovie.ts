import { useState, useEffect } from 'react'
import { Movie, MovieResponse } from '../interfaces/MovieAPI.interface'
import movieApi from '../utils/api'

interface IMoviesState {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upComing: Movie[]
}

const useMovie = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [moviesState, setMoviesState] = useState<IMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  })

  const getMovies = async () => {
    setIsLoading(true)

    try {
      const nowPlayingPromise = movieApi.get<MovieResponse>(`/movie/now_playing`)
      const popularPromise = movieApi.get<MovieResponse>(`/movie/popular`)
      const topRatedPromise = movieApi.get<MovieResponse>(`/movie/top_rated`)
      const upComingPromise = movieApi.get<MovieResponse>(`/movie/upcoming`)

      const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise,])

      setMoviesState({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upComing: response[3].data.results,
      })
      setIsLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovies()
  }, []);

  return {
    ...moviesState,
    isLoading
  }
}

export default useMovie