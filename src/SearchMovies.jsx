import { useState } from 'react'

export default function SearchMovies() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async e => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ac930b9f02cffbb2e7bf5714821e0008&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            
        } catch(err) {
            console.log(err)
        }
        
    }
    console.log(movies)

    return(
        <>
            <section>
                <h1>What do you want to watch?</h1>
                <form className='form' onSubmit={searchMovies}>
                    <input 
                        type="text" 
                        className='input'
                        placeholder="Search"
                        aria-label="movie search"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                    />
                    <button className='button' type="submit">Go</button>
                </form> 
            </section>
              <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div> 
        </>
       
    )
}