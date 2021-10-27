import { Movie } from "./MovieAPI.interface";

export interface IMovieCarouselProp {
  title?: string
  movies: Movie[]
}

export interface MovieCarouselItemProp {
  item: Movie,
  index?: number,
  width?: number | string,
}