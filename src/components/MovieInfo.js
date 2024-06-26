import { useParams } from 'react-router-dom'
import useFetchMovieDetails from '../hooks/useFetchMovieDetails'
import { IMG_CDN_URL, LOGIN_IMG_URL } from './constants'
import { Link } from 'react-router-dom'

const MovieInfo = () => {
  const movieId = useParams()

  // custom hook
  const movieDetails = useFetchMovieDetails(movieId)

  if (!movieDetails) return;

  const { original_title, overview, poster_path,release_date,genres,vote_average } = movieDetails

  return (
    <div className='fixed'>
      <div className='absolute w-full flex items-center justify-center md:justify-start'>
      <h2 className='text-xl md:text-4xl text-white  mt-44 md:mt-20 bg-black bg-opacity-60 p-3 md:ml-20'>{original_title}</h2>
      </div>
      <img src={LOGIN_IMG_URL}
        className='h-screen object-cover md:h-full '
        alt='background' />
      <div className='text-lg text-white bg-black bg-opacity-65 flex -mt-[600px] md:-mt-[550px] md:p-3 gap-x-10'>
        <div className='w-4/12 md:w-[200px] ml-4 md:m-0'>
          <img src={IMG_CDN_URL + poster_path}
            alt='movie poster'
            className='w-[100%] object-contain' />
        </div>
        <div className=' w-6/12 bg-black bg-opacity-60 p-3 md:p-4 gap-y-3 rounded-md text-sm md:text-lg md:w-full'>
          <h2><span className='text-red-500'>Overview:</span> {overview}</h2>
          <h2><span className='text-red-500'>Released:</span> {release_date}</h2>
          <h2><span className='text-red-500'>Genre:</span> {genres[0].name}, {genres[1].name}, {genres[2].name}</h2>
          <h2><span className='text-red-500'>Rating:</span> {vote_average}</h2>

          <br/>
          <Link to='/browse'>
          <h2 className='bg-gray-500 px-2 py-1 outline-none rounded-md inline'>Homepage</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
