import Box from '@material-ui/core/Box';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';

const Layout: React.FunctionComponent = () => {
    return (
        <div>
            <Header />
            <Box padding="5rem"></Box>
            <Main />
            <Aside />
        </div>
    );
};

export default Layout;
