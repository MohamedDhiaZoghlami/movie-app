import React from 'react';
import { Wrapper } from './ButtonLoadMore.styles';

const ButtonLoadMore=({ text , callback }) => (
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);
export default ButtonLoadMore;