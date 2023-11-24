import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Catalog from "../Catalog/Catalog";
import Weather from "../Weather/Weather";
import Footer from "../Footer/Footer";
import Registration from "../Registration/Registration";

const Home = () => {
    return (
    <>
        <Navbar />
        <Banner />
        <Catalog />
        <Registration />
        <Weather />
        <Footer />
    </>
    );
};

export default Home;