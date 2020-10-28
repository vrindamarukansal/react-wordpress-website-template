import { container, imagesStyles} from "../css-kit-react.js";

const footerStyle = {
  textLeft:{
    textAlign:"left", 
    display:"flex",
    paddingLeft:"10px"
  },
  footer: {
    padding: "2rem 0 0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    color:"#fff",
    backgroundColor:"#3B3D3E",
    textTransform:"capitalize",
    fontFamily:"Roboto",
    fontSize:"0.85rem",
    lineHeight:"1.5"
  },
  a: {
    color: "#fff",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover,&:focus": {
        color: "#EFF1F3"
      }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
    color:"#fff"
  },
  listItem:{
    alignItems:"baseline",
    padding: "5px 10px"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "6px",
    marginRight:"5px",
  },
  logoFooter: {
    background:"#fff",
  },
  ...imagesStyles
};
export default footerStyle;
