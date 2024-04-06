import React from 'react'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/trustedBy'
import Slide from '../../components/Slide/Slide'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide/>
    </div>
  )
}

export default Home