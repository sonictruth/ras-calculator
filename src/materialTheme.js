import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
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

export default theme;
