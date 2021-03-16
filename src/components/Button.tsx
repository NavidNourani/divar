import { Button as MuiButton, ButtonProps, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';

export interface IButtonProps {
    customVariant: 'main' | 'secondary' | 'suggestion';
}

// padding: '.2rem 1.6rem',
//         marginRight: '2rem',
//         fontSize: '1.4rem',
//         backgroundColor: '#a62626',
//         color: '#fff',
//         boxShadow: 'none',
//         fontFamily: 'Vazir',
//         order: -1,

//         '&:hover': {
//             backgroundColor: '#be3737',
//             boxShadow: 'none',
//         },

const color = {
    main: '#a62626',
    white: '#fff',
};

const foreGroundColor = {
    main: color.white,
    secondary: color.main,
    suggestion: color.main,
};

const border = {
    main: `none`,
    suggestion: `1px solid ${color.main}`,
    secondary: `1px solid ${color.main}`,
};

const minWidth = {
    secondary: '6rem',
    main: '6rem',
    suggestion: 'unset',
};

const backgroundColor = {
    suggestion: color.white,
    secondary: color.white,
    main: color.main,
};

const borderRadius = {
    suggestion: '2rem',
    secondary: '4px',
    main: '4px',
};

const height = {
    suggestion: '1.75rem',
    main: '2.5rem',
    secondary: '2.5rem',
};

const fontSize = {
    main: '1.4rem',
    secondary: '1.4rem',
    suggestion: '1.2rem',
};

const padding = {
    main: '2rem 2rem ',
    secondary: '2rem 4rem',
    suggestion: '1.4rem',
};

const fontWeight = {
    main: 'bold',
    secondary: 'bold',
    suggestion: 'normal',
};

const hoverBackgroundColor = {
    main: '#be2929',
    secondary: color.main,
    suggestion: color.main,
};

const hoverForegroundColor = {
    main: color.white,
    secondary: color.white,
    suggestion: color.white,
};

// const flexDirection = {
//     main: 'row',
//     secondary: 'column',
//     suggestion: 'row',
// };

export const Button: FC<IButtonProps & ButtonProps> = (props) => {
    const useStyleProps: IButtonProps = {
        customVariant: props.customVariant,
    };
    const classes = useStyles(useStyleProps);
    const NewButton = (props: ButtonProps) => (
        <MuiButton className={classes.button} {...props} />
    );
    const { variant, ...muiProps } = props;

    return <NewButton {...muiProps}></NewButton>;
};

const useStyles = makeStyles<Theme, IButtonProps>((theme: Theme) => ({
    button: {
        // flexDirection: (props) => flexDirection[props.customVariant] as 'row' | 'column',
        padding: (props) => padding[props.customVariant],
        height: (props) => height[props.customVariant],
        minWidth: (props) => minWidth[props.customVariant],
        backgroundColor: (props) => backgroundColor[props.customVariant],
        border: (props) => border[props.customVariant],
        color: (props) => foreGroundColor[props.customVariant],
        borderRadius: (props) => borderRadius[props.customVariant],
        fontSize: (props) => fontSize[props.customVariant],
        fontWeight: (props) =>
            fontWeight[props.customVariant] as 'bold' | 'normal' | 'bolder',
        fontFamily: 'Vazir',
        'box-shadow': 'none',
        '&:hover': {
            backgroundColor: (props) => hoverBackgroundColor[props.customVariant],
            color: (props) => hoverForegroundColor[props.customVariant],
            'box-shadow': 'none',
        },
        margin: 0,
    },
}));

export default Button;
