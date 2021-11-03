import { createMuiTheme } from '@material-ui/core/styles';

const corBasePadrao = 'rgba(245, 124, 1, 1)'; // laranja
const corBasePadraoComOpacidade = 'rgba(245, 124, 1, 0.1)'; // laranja com opacidade

const darkTheme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '3.75rem',
      letterSpacing: '1px',
    },
    body1: {
      fontSize: '1.25rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '1.2rem',
    },
    body2: {
      fontSize: '1rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '0.8rem',
    },
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        fontSize: '0.93rem',
        backgroundColor: corBasePadrao,
        color: '#FFFFFF',
        textTransform: 'inherit',
        '&:hover': {
          backgroundColor: corBasePadrao,
          opacity: '0.8',
          transition: '0.3s',
        },
        '&:focus': {
          outline: '0',
        },
      },
      outlinedPrimary: {
        fontSize: '0.93rem',
        backgroundColor: 'transparent',
        color: corBasePadrao,
        borderColor: corBasePadrao,
        textTransform: 'inherit',
        '&:hover': {
          backgroundColor: 'rgba(245, 124, 0, 0.04)',
          borderColor: corBasePadrao,
          transition: '0.3s',
        },
        '&:focus': {
          outline: '0',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: 'rgb(34, 43, 69)',
    },
    primary: {
      main: 'rgb(238, 238, 239)',
    },
    secondary: {
      main: 'rgb(174, 176, 180)',
    },
    corBase: {
      main: corBasePadrao,
      opacity: corBasePadraoComOpacidade,
    },
    menuBackgroundColor: {
      main: 'rgb(34, 43, 69)',
    },
    menuBoxShadow: {
      main: 'rgb(0 0 0 / 25%) 0px 3px 6px 0px',
    },
    customBackgroundColor: {
      main: 'rgb(26, 33, 56)',
    },
  },
});

export default darkTheme;
