import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ chilren }) => {
    return (
        <div className="content">
            <Navbar />
            {chilren}
            <Footer />
        </div>
    );
}

export default Layout;