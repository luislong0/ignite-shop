import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        marginTop: '5rem',
        display: "block",
        fontSize: "$lg",
        color: "$green500",
        transition: "all 0.2",
        textDecoration: "none",
        fontWeight: "bold",

        '&:hover': {
            color: "$green300", 
        }
    }
})

export const SuccessProductsImagesContainer = styled('div', {
    display: 'flex',
})

export const ImageContainer = styled('div', {

    width: '100%',
    maxWidth: 140,
    height: 130,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 1000,
    padding: '0.25rem',
    marginTop: '4rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    boxShadow: '-5px 5px 50px -5px #000000',

    '&:not(:first-child)': {
        marginLeft: '-3rem',
    },

    img: {
        objectFit: 'cover',
    }
})