import {
    backgrounds,
    imagesStyles
} from '../css-kit-react'
const deviceStyles={
    ...backgrounds,
    ...imagesStyles,
    deviceImage:{
        height: "300px",
        background:"#fff",
        display:"flex",
        marginBottom:"2rem",
        padding:"1rem",
        justifyContent:"center",
        "& img":{width:"auto", height:"100%", maxWidth:"100%"}
    },
    device:{
        "& h4":{
            textAlign:"center",
            marginBottom:"1.5rem"
        },
        "& p":{
            fontSize:"1rem"
        }
    },
    catalouge:{
       // height:"50vh",
        backgroundSize:"cover",
        backgroundPosition:"center",
        color:"#fff",
        "& a":{
            boxShadow:
            "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
          border: "none",
          borderRadius: "3px",
          position: "relative",
          padding: "12px 30px",
          margin: ".3125rem 1px",
          fontWeight: "600",
          fontFamily:"Raleway",
          textTransform: "uppercase",
          letterSpacing: "0",
          willChange: "box-shadow, transform",
          transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          lineHeight: "1.42857143",
          textAlign: "center",
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          touchAction: "manipulation",
          cursor: "pointer",
            "&,&:focus,&:hover,&:visited": {
                backgroundColor: "#FFFFFF",
                color: "#3B3D3E"
              }
        }
    }

}

export default deviceStyles