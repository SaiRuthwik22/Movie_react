import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)
  const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: "Schindler's List", genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 } ];
  const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

  return (
    <div id='main-div'>
      <h1>Top 15 Movies of All Time</h1>
      <div className='top-container'>
        <h3>Filter By Genre</h3>
        <div >
          <GenreFilter genres={genres} />
        </div>
      </div>
      <div className='movies-container'>
        <table>
          <thead>
            <tr>
              <th className='title-container'>Title</th>
              <th className='genre-container'>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((item)=>(
              <MovieList key={item.title} movie={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
