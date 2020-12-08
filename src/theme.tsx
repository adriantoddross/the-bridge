import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    h1: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
      fontSize: "1.875em",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontSize: "1.25em",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
      fontSize: "2.5em",
      fontWeight: "bold",
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
    body1: {
      fontSize: "0.875em",
    },
    button: {
      fontSize: "0.875em",
      textTransform: "uppercase",
    },
  },

  palette: {
    primary: {
      light: "#4fb57a",
      main: "#10844e",
      dark: "#005625",
    },
    text: {
      primary: "#004B28",
    },
  },
});

export default theme;
