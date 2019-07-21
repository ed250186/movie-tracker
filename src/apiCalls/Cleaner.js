import { imageUrl } from './paths.js'

export const cleanMovies = (movies) => {
    return movies.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        voteAverage: movie.vote_average,
        posterPath: `${imageUrl}${movie.poster_path}`,
        releaseDate: movie.release_date,
        genreIds: movie.genre_ids,
        backDropPath: `${imageUrl}${movie.backdrop_path}`
    }))
}
