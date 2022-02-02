import React from 'react';
import Rate from './Rate'

const MovieCard = ({ movie: {image, rating, title, description} }) => {
return (
    <div className='Movie-Container'>
    <img src={image} alt='' />
    <Rate rating={rating}/>
    <h1 className='Movie-Title'>{title}</h1>
    <div className='over-view'>
    <h4 className='Movie-Description'>{description}</h4>
    </div>
    </div>
);
};

export default MovieCard;