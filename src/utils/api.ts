import axios from 'axios'

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7dc332c70a4d71bd45d79c07fb1007c6'
  }
})

export default movieApi