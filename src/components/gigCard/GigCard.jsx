import React from 'react'
import { Link } from 'react-router-dom';
import  './GigCard.scss';
import { useQuery } from '@tanstack/react-query';


const GigCard = ({item }) => {
  // ${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}
  const { isLoading, error, data} = useQuery({
    queryKey: ['gigUser'],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res)=>{
        return res.data;
      })
  });


  return (
   <Link to={`/gig/${item._id}`} className='link'>
    <div className='gigCard'>

    <img src={item.cover} alt="" />
        <div className="info">
        { isLoading ? ("loading") :error ?( "User not found") :
       (  <div className="user">
            <img src={data.img || "/img/noavatar.jpg"} alt="" />
            <span>{data.username}</span>
          </div> 
          )}
          <p>{item.title}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard