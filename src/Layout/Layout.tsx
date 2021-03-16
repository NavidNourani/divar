import React from 'react';
//Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

// Material Components
import Box from '@material-ui/core/Box';

//React-router-dom
import { BrowserRouter } from 'react-router-dom';

const Layout: React.FunctionComponent = () => {
    return (
        <Box>
            <BrowserRouter>
                <Header />
                <Box padding="5rem"></Box>
                <Main />
                <Aside />
            </BrowserRouter>
        </Box>
    );
};

export default Layout;
