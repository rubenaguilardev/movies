import SearchMovies from './SearchMovies'
import moviePoster1 from './assets/movie-1.png'
import moviePoster2 from './assets/movie-2.png'

export default function App() {
  return (
    <main>
      <SearchMovies/>
      <section className='movie-posters'>
        <img src={moviePoster1} alt="jurassic world poster" />
        <img src={moviePoster2} alt="spider-man poster" />
      </section>
    </main>
    
  )
}
