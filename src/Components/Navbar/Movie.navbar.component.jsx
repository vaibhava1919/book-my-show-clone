import React, { useContext } from 'react'
import { BsSearch ,BsShareFill,BsChevronDown} from "react-icons/bs";
import { MovieContext } from '../../Context/Movie.Context'

const NavSm = () => {
  const { movie } = useContext(MovieContext)
  return (
    <>
      <div className='text-gray-700 flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-bold'>
            {movie.original_title}
          </h3>
        </div>
        <div className='w-8 h-8'>
        <BsShareFill className='w-full h-full' />
      </div>
      </div>
      
    </>
  )
}
const NavLg = () => {
  return (
    <>
         <div className='container flex m-auto px-4 items-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
          <div className='w-10 h-10'>
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className='w-full h-full' />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BsSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>Jaipur <BsChevronDown/></span>
          <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign in</button>
          <div className='w-8 h-8 text-white'></div>
        </div>
      </div>
        
    </>
  )
}

const MovieNavbar = () => {




  return (
    <>
<nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
  <div className='lg:hidden'>
    {/* mobile and medeum screens */}
    <NavSm/>
  </div>
  <div className='hidden md:hidden lg:flex'>
    {/* large screens */}
    <NavLg/>
  </div>
</nav>
    </>
  )
}

export default MovieNavbar
