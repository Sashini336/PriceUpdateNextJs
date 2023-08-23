import "../styles/globals.css";
import "../styles/header.css";
import "../styles/searchbar.css";
import "../styles/buttonSubmit.css";
import "../styles/singleAd.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../components/footer";
import Header from "../components/header.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
