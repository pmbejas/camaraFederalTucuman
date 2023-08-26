import { Outlet } from "react-router-dom";
import NavBar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './layout.css';

export const Layout = () => {
    return (
        <main>
            <div className="container-fluid m-0 p-0">
                    <div className="container-fluid m-0 p-0 bg-dark navbar-section">
                        <NavBar />
                    </div>
                    <div className="bg-primary main-section">
                        <Outlet />
                    </div>
                    <Footer />
            </div>
        </main>
    )
}
