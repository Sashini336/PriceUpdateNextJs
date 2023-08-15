import "../styles/globals.css";
import "../styles/header.css";
import "../styles/searchbar.css";
import "../styles/buttonSubmit.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "../components/header.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
