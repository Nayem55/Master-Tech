import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {thumb,name,comment,rating} = review;
    return (
        <div className='review'>
        <p>{name}</p>
        <p>{comment}</p>
        <img src={thumb} alt="" />
        <p className='rating'> {rating} / 5.0</p>
        </div>
    );
};

export default Review;