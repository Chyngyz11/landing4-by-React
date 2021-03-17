import React, {useState} from 'react';
import Index from "../Navbar/Index";
import {HeroContainer,
        HeroContent,
         HeroItems,
         HeroH1,
         HeroP,
         HeroBtn} from './HeroElements'
import Sidebar from "../Sidebar/Sidebar";

const Hero = () => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    return (
        <HeroContainer>
            <Index toggle = {toggle}/>
            <Sidebar isOpen ={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Roll sushi Ever</HeroH1>
                    <HeroP> Ready in 60 seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>

        </HeroContainer>
    );
};

export default Hero;