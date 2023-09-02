import { Outlet } from "react-router-dom";
import NavBar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './layout.css';

export const Layout = () => {
    return (
        <main>
            <div className="container-fluid m-0 p-0">
                    <NavBar />
                    <div className="main-section">
                        <Outlet />
                    </div>
                    <Footer />
            </div>
        </main>
    )
}
