import "../styles/globals.css";
import { KioskProvider } from "../context/KioskProvider";

function MyApp({ Component, pageProps }) {
  return (
    <KioskProvider>
      <Component {...pageProps} />
    </KioskProvider>
  );
}

export default MyApp;
