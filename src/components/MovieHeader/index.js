import React from 'react'
import { Wrapper,Content } from './MovieHeader.styles';

const MovieHeader = ({image,title,rating,genres,runtime,plot}) => {
    return (
        <Wrapper image={image} />

    )
}

export default MovieHeader;
