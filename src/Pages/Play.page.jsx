import React from 'react';
import DefaultLayoutHoc from '../Layout/Default.layout';

//components
import Poster from '../Components/Poster/Poster.Component';
import PlayFilters from '../Components/PlayFilter/PlayFilters.component';

function PlayPage() {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded' >
            <h2 className='text-2xl font-bold mb-4'>Plays in Jaipur</h2>
            <div className='flex flex-wrap'>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMyBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361919-ytuemfztbd-portrait.jpg"
                  title="Good Boy Better Show ft. Aashish Solanki"
                  subtitle="Comedy | Hindi, English | 16yrs + | 1hr 15mins"
                  className=" object-cover object-center"
                />

              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMCBKdWwgb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376688-wzjkpvzuyr-portrait.jpg"
                  title="Good Boy Better Show ft. Aashish Solanki"
                  subtitle="Comedy | Hindi, English | 16yrs + | 1hr 15mins"
                  className=" object-cover object-center"
                />

              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxNSBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00333391-jbtvpjcmqr-portrait.jpg"
                  title="Good Boy Better Show ft. Aashish Solanki"
                  subtitle="Comedy | Hindi, English | 16yrs + | 1hr 15mins"
                  className=" object-cover object-center"
                />

              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNyBKdWw%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00363551-vgrqpqydeg-portrait.jpg"
                  title="Good Boy Better Show ft. Aashish Solanki"
                  subtitle="Comedy | Hindi, English | 16yrs + | 1hr 15mins"
                  className=" object-cover object-center"
                />

              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402067-efkkctnumz-portrait.jpg"
                  title="Good Boy Better Show ft. Aashish Solanki"
                  subtitle="Comedy | Hindi, English | 16yrs + | 1hr 15mins"
                  className=" object-cover object-center"
                />

              </div>
            </div>
          </div>
          <div className='lg:w-1/4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]} />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]} />
            </div>
          </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28463.354435687354!2d75.805733!3d26.906056!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzIxLjgiTiA3NcKwNDgnMjAuNiJF!5e0!3m2!1sen!2sus!4v1719112232216!5m2!1sen!2sus" 
        width="600"
         height="450" 
         style={{ border: "0" }}
          allowfullscreen="" 
          loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">

           </iframe> */}
      </div>
    </>
  )
}

export default DefaultLayoutHoc(PlayPage);
