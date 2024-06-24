import { useParams } from 'react-router-dom'
import useFetchMovieDetails from '../hooks/useFetchMovieDetails'
import { IMG_CDN_URL, LOGIN_IMG_URL } from './constants'
import { Link } from 'react-router-dom'

const MovieInfo = () => {
  const movieId = useParams()

  // custom hook
  const movieDetails = useFetchMovieDetails(movieId)

  if (!movieDetails) return;

  const { original_title, overview, poster_path,release_date,genres } = movieDetails

  return (
    <div className='fixed'>
      <h2 className='text-4xl text-white absolute mt-20 bg-black bg-opacity-60 p-3 ml-4'>{original_title}</h2>
      <img src={LOGIN_IMG_URL}
        className='h-screen object-cover md:h-full '
        alt='background' />
      <div className='text-lg text-white bg-black bg-opacity-65 flex -mt-[550px] p-3 gap-x-10'>
        <div className='w-[300px]'>
          <img src={IMG_CDN_URL + poster_path}
            alt='movie poster'
            className='w-[100%] object-contain' />
        </div>
        <div className='bg-black bg-opacity-60 p-4 gap-y-2 rounded-md'>
          <h2>Overview: {overview}</h2>
          <h2>Released: {release_date}</h2>
          <h2>Genre: {genres[0].name}, {genres[1].name}, {genres[2].name}</h2>
          <Link to='/browse'>
          <h2 className='bg-gray-500 px-2 py-1 outline-none rounded-md inline'>Homepage</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
