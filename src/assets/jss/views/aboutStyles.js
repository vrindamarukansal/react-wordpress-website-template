import {
    imagesStyles,
    backgrounds,
} from "../css-kit-react"

const aboutStyles={
    ...imagesStyles,
    ...backgrounds,
    about:
    {
    "& figure":{
        float: "left",
        marginRight: "40px"},
    "& figcaption":{
        paddingTop: "20px",
        textAlign: "center"},
    },
    iconText:{
        "& figure":{justifyContent:"center", display:"flex"},
        "& img":{maxHeight:"5rem",width:"auto"}
    },
    video:{
        maxWidth:"100%"
    },
    "@media (max-width: 736px)":
    {
        about:{
            "&figure":{
                float:"none",
                marginRight:"0"
            }
        }
    }
}

export default aboutStyles