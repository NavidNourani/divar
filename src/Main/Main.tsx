import Box from '@material-ui/core/Box';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import styled from 'styled-components';

const MainStyle = styled.main`
    padding: 0 0 0 1.75rem;
    margin-right: 300px;
    width: calc(auto - 4rem);
    min-height: 10rem;
    background-color: var(--bg-clr-main);
`;

const Main: React.FunctionComponent = () => {
    return (
        <MainStyle>
            <Box>
                {/* <Link to= {}>
               <img src='' alt=""/>
             </Link> */}
            </Box>
            <Box display="flex" flexWrap="wrap">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </MainStyle>
    );
};

export default Main;
