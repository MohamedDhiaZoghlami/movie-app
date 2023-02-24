import React from 'react';
import { Wrapper } from './VideoPlayer.styles';

const VideoPlayer = ({playerUrl}) => {
    return (
        <Wrapper>
            <iframe src={playerUrl} loading="lazy"  allowfullscreen="true" allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"></iframe>
        </Wrapper>
    )
}

export default VideoPlayer;
