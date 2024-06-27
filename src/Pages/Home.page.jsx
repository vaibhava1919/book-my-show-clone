import React, { useEffect, useState } from 'react'
import axios from 'axios'
//component
import EntertainmentCard from '../Entertainment/EntertainmentCard'
import HeroCarousal from '../Entertainment/HeroCarousal'
import PosterSlider from '../Components/PosterSlider/PosterSlider'
import DefaultLayoutHoc from '../Layout/Default.layout'


function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([])
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([])


  
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, [])


  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/top_rated");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/upcoming");
      setPremierMovies(getTopRatedMovies.data.results);
    };
    
    requestTopRatedMovies();
  }, []);
 
  


  return (
    <>
      <HeroCarousal/>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml- my-3'>
          The best of Entertainment
        </h1>
        <EntertainmentCard/>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
        title="Recommended movies"
        subtitle="List of recommended Movies"
        posters={recommendedMovies}
        isDark={false}
        />
      </div>
      <div className='bg-darkBackground-700 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="" className='w-full h-full' />
          </div>
          <PosterSlider
        title="Premiers"
        subtitle="Brand new movies every friday"
        posters={premierMovies}
        isDark={true}
        />
        </div>
      </div>
     <div className='container mx-auto px-4 md:px-12 my-8'>
      <PosterSlider
      title="Online Stream Events"
      subtitle=""
      posters={onlineStreamEvents}
      />
     </div>
     
    </>
  )
}

export default DefaultLayoutHoc(HomePage)
