import React from 'react';
import {Wrapper,Content} from './Header.styles';
import {Link} from 'react-router-dom';

function Header({text}) {
    return (
        <div>
            <Wrapper>
                <Content>
                    <div className='textBox'>
                        <h1>{text}</h1>
                        <p><Link to='/' className="link">Home</Link> | {text}</p>
                    </div>
                </Content>
            </Wrapper>
        </div>
    )
}

export default Header;
