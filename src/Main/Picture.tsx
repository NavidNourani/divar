import React from 'react';
import styled from 'styled-components';

const PictureStyle = styled.picture`
    position: relative;
    width: 100%;
    border-radius: 0.4rem;
`;
const Img = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
`;
const Picture: React.FunctionComponent = () => {
    return (
        <PictureStyle>
            <source srcSet="" />
            <Img src="" alt=""></Img>
        </PictureStyle>
    );
};

export default Picture;
