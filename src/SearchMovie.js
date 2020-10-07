import React from 'react'

const SearchMovies = () => {

    const searchDB = async (e) => {
        e.preventDefault()

        let query = 'Marvel'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=da6abdea97d375c2a6f00d22e7df9a7d&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const response = await fetch(url)
            const data = response.json()
            console.log(data)
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <form className='form' onSubmit={searchDB}>
            <label className='label' htmlFor='query'>Movie Name</label>
            <input className='input' type='text' name='query' placeholder='Search Movies'></input>
            <button className='button' type='submit'>Search!</button>
        </form>
    )
}

export default SearchMovies