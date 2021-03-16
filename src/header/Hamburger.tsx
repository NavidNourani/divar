import React, { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import Box from '@material-ui/core/Box';
import MenuLink from './MenuLink';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import styled from 'styled-components';

const BoxBars = styled.div`
    cursor: pointer;
`;

const Bars = styled(GoThreeBars)`
    color: var(--font-clr-secondary);
    font-size: 1.6rem;
`;

const Hamburger: React.FunctionComponent = () => {
    const [isShown, setIsShown] = useState(false);
    const showMenu = () => {
        setIsShown(!isShown);
    };
    const handleClickAway = () => {
        setIsShown(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <BoxBars onClick={showMenu}>
                <Bars />
                {isShown && (
                    <Box position="absolute" top="4.5rem" left="1.2rem">
                        <MenuLink MenuHumburger />
                    </Box>
                )}
            </BoxBars>
        </ClickAwayListener>
    );
};

export default Hamburger;
