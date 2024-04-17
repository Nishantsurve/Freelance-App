import React from 'react'
import "./featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
            <h1>
            Find the perfect <span>freelance</span> services for your business
            </h1>

            <div className="search">
            <div className="searchInput">
            <img src="./img/search.png" alt="" />
            <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>

            <div className="popular">
               <span>Popular:</span> 
               <button>Web Design</button>
               <button>Wordpresss</button>
               <button>AI service</button>
               <button>Logo Design</button>
            </div>

            </div>
            <div className="right">
                <img src='./img/man.png' alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Featured