import React from 'react';
import useReview from '../../CustomHooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews]=useReview();
    return (
        
        <div>
            <p className='text-center text'>Customer Reviews</p>
        <div className='reviews'>
            {
                reviews.map(review=><Review review={review} ></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;