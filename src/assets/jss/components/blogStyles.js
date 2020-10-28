import {
    imagesStyles,
    backgrounds,
    roseColor
} from '../css-kit-react'

const blogStyles={
    ...imagesStyles,
    ...backgrounds,
    cardImage:{
        height:"auto"
    },
    postMeta:{
        color:roseColor,
        fontSize:"0.85rem",
        fontWeight:"900"
    },
    avatar:{
        width:"auto",
        height:"60px",
        marginRight:"1rem"
    },
    content:{
        "& figure":{
            display:"flex",
            justifyContent:"center"
        },
        "& img":{
            maxWidth:"60%",
            height:"auto"
        }
    }
}

export default blogStyles