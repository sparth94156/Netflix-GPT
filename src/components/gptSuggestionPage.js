import React from 'react'
import { useSelector } from 'react-redux'
import MovieCategory from './MovieCategory'

const GptSuggestionPage = () => {

    const { gptMovies, gptResults } = useSelector(store => store.gpt)

    if (!gptMovies) return null;

    return (
        <div>
            <div className='bg-black text-white p-4 m-4 opacity-90 rounded-md'>
                {
                    gptMovies.map((movieName, index) =>
                        <MovieCategory key={movieName}
                            title={movieName}
                            movies={gptResults[index]} />)
                }
            </div>
        </div>
    )
}

export default GptSuggestionPage

