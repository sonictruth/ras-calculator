import { red } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const customFontForTitleAndBodyText = 'Comfortaa'
const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: customFontForTitleAndBodyText,
    },
    h2: {
      fontFamily: customFontForTitleAndBodyText,
    },
    h3: {
      fontFamily: customFontForTitleAndBodyText,
    },
    h4: {
      fontFamily: customFontForTitleAndBodyText,
    },
    subtitle1: {
      fontFamily: customFontForTitleAndBodyText,
    },
    body1: {
      fontFamily: customFontForTitleAndBodyText,
    },
  },
  palette: {
    text: {
      primary: "#542d4e",
      secondary: "#874a7e"
    },
    primary: {
      text: '#ff00ff',
      main: '#ce5eba',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffe8fb',
    },
  },
});

export default responsiveFontSizes(theme);
