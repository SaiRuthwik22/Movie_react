import React from 'react'

function MovieList({movie}) {
  return (
    <tr>
        <td className='title-container'>{movie.title}</td>
        <td className='genre-container'>{movie.genre}</td>
        <td>{movie.year}</td>
    </tr>
  )
}

export default MovieList