import React from 'react'
import Navbar from '../Components/Navbar/Navbar.component'

const DefaultLayoutHoc = (Component) => ({props}) =>{
  return (
    <div>
        <Navbar/>
      <Component />
      <div><footer></footer></div>
    </div>
  )
}

export default DefaultLayoutHoc