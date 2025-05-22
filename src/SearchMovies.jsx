export default function SearchMovies() {
    return(
        <section>
            <h1>What do you want to watch?</h1>
            <form className='form'>
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