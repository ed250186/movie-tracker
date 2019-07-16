import { imageUrl } from './paths.js'

export const cleanMovies = (movies) => {
    console.log(movies.results)
    return movies.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${imageUrl}${movie.poster_path}`,
        runTime: movie.runtime
    }))
}