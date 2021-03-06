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
    secondary: {
      main: "#e2f4ec",
    },
    text: {
      primary: "#004B28",
    },
  },

  overrides: {
    MuiTypography: {
      h1: {
        color: "#004B28",
      },
      h2: {
        color: "#004B28",
      },
      h3: {
        color: "#004B28",
      },
      h4: {
        color: "#004B28",
      },
      h5: {
        color: "#004B28",
      },
      h6: {
        color: "#004B28",
      },
    },
  },
});

export default theme;
