import '../styles/globals.css';
import '@fontsource/poppins/500.css';
import 'animate.css/animate.min.css';

  function MyApp({ Component, pageProps }) {
  const Theme = createTheme({typography:{ fontFamily:"Poppins" }});
  return(  
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;