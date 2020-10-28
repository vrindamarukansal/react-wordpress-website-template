import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
} from "../css-kit-react.js";

const badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "30px",
    padding: "5px 20px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  gray: {
    backgroundColor: "#6c757d"
  },
  secondary: {
    backgroundColor: secondaryColor
  }
};

export default badgeStyle;
