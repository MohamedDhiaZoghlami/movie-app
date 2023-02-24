import React,{useState,useEffect,useRef} from 'react';
// Image
import searchIcon from '../../Images/search-icon.svg';
import {Wrapper , Content} from './SearchBar.styles';


const SearchBar = ({setSearchTerm,placer})=> {
    const [state,setState] = useState('');
    const initial = useRef(true);
    useEffect(()=>{
        if(initial.current) {
            initial.current = false;
            return;
        }
        const timer=setTimeout(()=>{
            setSearchTerm(state.replace(/[^a-zA-Z0-9_ ]/g,""));
        },500)

        return () => clearTimeout(timer);
    },[setSearchTerm,state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type="text" placeholder={placer} 
                onChange={event=>setState(event.currentTarget.value)}
                value={state}
                />
            </Content>
        </Wrapper>
    )
};

export default SearchBar;
