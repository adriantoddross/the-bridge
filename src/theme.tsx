import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // Typography

  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    h1: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
    },
    h2: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontWeight: "bold",
      fontSize: "1.25em",
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: ["EB Garamond", "Garamond", "serif"].join(","),
      fontWeight: "bold",
      fontSize: "2.5em",
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

  // Colors

  palette: {
    primary: {
      light: "#E2F4EC",
      main: "#10844E",
      dark: "#004B28",
    },
    text: {
      primary: "#014c50",
    },
  },

  // Style overrides

  overrides: {
    MuiTypography: {
      root: {
        "& h1": {
          color: "#004B28",
        },
      },
    },
  },
});

export default theme;
