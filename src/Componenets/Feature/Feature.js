import React from 'react';
import {FeatureContainer,FeatureButton} from'./FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Roll sushi of the Day</h1>
            <p>Today is the day you try a new roll from your go-to Japanese spot.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;