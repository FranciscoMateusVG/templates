module.exports = {
  important: true,
  mode: 'jit',
  purge: [
    './pages/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './containers/**/**/*.{js,ts,jsx,tsx}',
    './children/**/*.{js,ts,jsx,tsx}',
    './painel/*.{js,ts,jsx,tsx}',
    './node_modules/@material-ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'login-card': '400px',
        'logo-width': '330px',
      },
      colors: {
        loginBtn: '#65d818',
        loginBtnActive: '#51ad13',
      },
      outline: {
        zero: '0 !important',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
