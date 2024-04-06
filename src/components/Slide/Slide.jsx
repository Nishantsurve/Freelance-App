import React from 'react'
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import {cards} from '../../data';
import './Slide.scss'

const Slide = () => {
  return (
    <div className='slide'>
        <div className="container">
        <Slider dots>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
  </Slider>
        </div>
    </div>
  )
}

export default Slide