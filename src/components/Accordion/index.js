import React , {useState} from 'react';
import {Data} from './Data';
import {IconContext} from 'react-icons';
import {FiPlus,FiMinus} from 'react-icons/fi';
import {AccordionSection , Container, Wrap,Dropdown} from './Accordion.styles';

function Accordion() {
    const [clicked,setClicked] = useState(false);
    const toggle = index => {
        if(clicked===index) {
            return setClicked(null)
        }
        setClicked(index);
    }




    return (
        <IconContext.Provider value={{color:'white', size:'25px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item,index)=>{
                        return (
                            <>
                                <Wrap onClick={()=>toggle(index)} key={item.id}>
                                    <h1>{item.question}</h1>
                                    <span>{ clicked===index ? <FiMinus /> : <FiPlus/> }</span>
                                </Wrap>
                                {clicked===index ? (
                                     <Dropdown>
                                     <p>{item.answer}</p>
                                 </Dropdown>

                                ) : null}
                               
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>

    )
}

export default Accordion;
