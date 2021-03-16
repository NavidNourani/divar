import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Picture from './Picture';
import styled from 'styled-components';

const useStyles = makeStyles({
    PostCardBox: {
        flex: ' 0 0 50%',
        maxWidth: '50%',
    },
    postCard: {
        position: 'relative',
        padding: '1.6rem',
        margin: '1rem',
        display: 'flex',
        height: '16.8rem',
        border: 'var(--border-main)',
        borderRadius: '.4rem',
    },
    cardThumbnail: {
        position: 'relative',
        width: '13.6rem',
        height: '13.6rem',
        flex: '0 0 13.6rem',
        backgroundColor: 'var(--bg-clr-hover)',
        overflow: 'hidden',
        borderRadius: '.4rem',
    },
    cardBody: {
        // flexGrow: 1,
        flex: '1 1 ',
        minWidth: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '1rem',
    },
});

const Title = styled.h1`
    font-weight: 700;
    font-size: 1.3rem;
    height: 5.6rem;
    overflow-wrap: break-word;
    overflow: hidden;
`;
const Description = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--font-clr-secondary);
`;

const Card: React.FunctionComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            {/* <Link> */}
            <Box className={classes.PostCardBox}>
                <Box className={classes.postCard}>
                    <Box className={classes.cardBody}>
                        <Title>ماشین لباسشویی اشین لباسشویی اشین لباسشویی </Title>
                        <Box>
                            <Description>قیمت: 250 هزار تومن</Description>
                            <Description>تهرانسر</Description>
                        </Box>
                    </Box>
                    <Box className={classes.cardThumbnail}>
                        <Picture />
                    </Box>
                </Box>
            </Box>
            {/* </Link> */}
        </>
    );
};

export default Card;
