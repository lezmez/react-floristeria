import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";
import Weather from "../Weather/Weather";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
    <>
        <Navbar />
        <Banner />
        <Catalog />
        <Weather />
        <Footer />
    </>
    );
};

export default Home;