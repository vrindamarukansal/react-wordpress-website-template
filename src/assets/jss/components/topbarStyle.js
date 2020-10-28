import {
    container,
  } from "../css-kit-react.js";

const topbarStyle={
appBar: {
    display: "flex",
    border: "0",
    borderRadius: "0px",
    padding: "0.25rem 0",
    marginBottom: "0px",
    color: "#3B3D3E",
    width: "100%",
    backgroundColor: "#EFF1F3",
    boxShadow:
      "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    position: "relative",
    zIndex: "unset",
  },
  appResponsive: {
    margin: "20px 10px"
  },
container: {
    ...container,
    minHeight: "35px",
    flex: "1",
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    flexWrap: "nowrap"
  },
title:{display:"none"},
}

export default topbarStyle;