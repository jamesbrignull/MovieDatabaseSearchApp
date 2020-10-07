import React, {useState} from 'react'
import MovieCard from './MovieCard.js'

const SearchMovies = () => {

    const [query, setQuery] = useState('') 
    const [movies, setMovies] = useState([])

    const searchDB = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=da6abdea97d375c2a6f00d22e7df9a7d&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <div>
            <form className='form' onSubmit={searchDB}>
                <label className='label' htmlFor='query'>Movie Name</label>
                <input 
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    className='input' 
                    type='text' 
                    name='query' 
                    placeholder='Search Movies'>
                </input>
                <button className='button' type='submit'>Search!</button>
            </form>
            <div className='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                       <MovieCard movie={movie} key={movie.id} />   
    
                ))}
            </div>
        </div>
    )
}

export default SearchMovies