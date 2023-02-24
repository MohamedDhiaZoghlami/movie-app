import React from 'react';
import Header from './Header';
import Creators from './Creators';
import ContactUs from './ContactUs';
import Footer from './Footer';

function About() {
    return (
        <>
            <Header text='About Us'/>
            <Creators />
            <ContactUs />
            <Footer />
        </>
    )
}

export default About;
