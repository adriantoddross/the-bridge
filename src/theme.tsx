import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    h1: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontWeight: "bold",
      fontSize: "1.25rem",
    },
    h2: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
      fontWeight: "bold",
      fontSize: "1.875rem",
    },
    h3: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
    },
    h4: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
    },
    h5: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
    },
    h6: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
    },
    button: {
      textTransform: "uppercase",
    },
  },

  palette: {
    primary: {
      light: "#E2F4EC",
      main: "#10844E",
      dark: "#004B28",
    },
    text: {
      primary: "#004B28",
    },
  },
});

export default theme;
