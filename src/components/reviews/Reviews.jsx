import React from 'react'
import './Reviews.scss'
import Review from '../review/Review'
import { useQuery } from '@tanstack/react-query'
const Reviews = ({gigId}) => {

    const { isLoading, error, data} = useQuery({
        queryKey: ["reviews"],
        queryFn: () =>
          newRequest.get(`/reviews/${gigId}`).then((res)=>{
            return res.data;
          })
      });
    

  return (
    <div className="reviews">
    <h2>Reviews</h2>
    <Review/>

    { isLoading ? ("loading") :error ?( "Something error") : data.map((review) =>
    <Review key={review._id} review={review} />)}
  </div>
  )
}

export default Reviews