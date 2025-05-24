export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting')

        const query = 'Batman'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=ac930b9f02cffbb2e7bf5714821e0008&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        } catch(err) {
            console.error(err)
        }
        
    }

    return(
        <section>
            <h1>What do you want to watch?</h1>
            <form className='form' onSubmit={searchMovies}>
                <input 
                    type="text" 
                    className='input'
                    placeholder="Search"
                    aria-label="movie search"
                />
                <button className='button' type="submit">Go</button>
            </form> 
        </section>
       
    )
}