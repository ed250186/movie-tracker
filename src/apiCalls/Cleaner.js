import { imageUrl } from './paths.js'

export const cleanMovies = (movies) => {
    let createMovies = [movies]
    return createMovies.map(movie => ({
        id: movie.id,
        originalTitle: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${imageUrl}${movie.poster_path}`,
        runTime: movie.runtime
    }))
}