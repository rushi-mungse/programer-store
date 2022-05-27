import "../styles/globals.css";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
