import React from 'react'
import styled from 'styled-components'


const Pin = ({ pin }) => {
    
    return (
        <Wrapper>
            <Container>
                <img src={pin.urls.regular} alt='pinterest images'/>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: inline-flex;
    padding: 8px
`;

const Container = styled.div`
display: flex;
align-items: center;
box-sizing: border-box;
cursor: pointer;
width: 236px;

img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
}

@media screen and (max-width: 768px) {
        column-count: 2 !important;
        width: 100%; 
}

    
`;
export default Pin
