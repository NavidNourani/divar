import React from 'react';
//components
import Picture from './Picture';

// Material Components
import Box from '@material-ui/core/Box';
import { Link as LinkMui } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// React-router-dom
import { Link as LinkRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
    title: {
        fontWeight: 700,
        fontSize: '1.3rem',
        height: '5.6rem',
        overflowWrap: 'break-word',
        overflow: 'hidden',
    },
    description: {
        fontWeight: 500,
        fontSize: '1.2rem',
        color: 'var(--font-clr-secondary)',
    },
});

const Card: React.FunctionComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <>
            <LinkMui component={LinkRouter} to="/">
                <Box className={classes.PostCardBox}>
                    <Box className={classes.postCard}>
                        <Box className={classes.cardBody}>
                            <Typography component="h3" className={classes.title}>
                                ماشین لباسشویی اشین لباسشویی اشین لباسشویی
                            </Typography>
                            <Box>
                                <Typography
                                    component="h5"
                                    className={classes.description}
                                >
                                    قیمت: 250 هزار تومن
                                </Typography>
                                <Typography component="h5">تهرانسر</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.cardThumbnail}>
                            <Picture />
                        </Box>
                    </Box>
                </Box>
            </LinkMui>
        </>
    );
};

export default Card;
