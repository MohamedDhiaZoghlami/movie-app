import React from 'react';
import {Image} from './Thumb.styles';
import { Link } from 'react-router-dom';

const Thumb = ({image,movieId,clickable,tvId})=> (
    <div>
        {clickable ? (
            <Link to={`/movie/${movieId}`}>
                <Image src={image} alt="moviethumb" />

            </Link> ) : (<Link to={`/tvshow/${tvId}`}>
                <Image src={image} alt="moviethumb" />

            </Link>)  
      };
    </div>
);

export default Thumb;