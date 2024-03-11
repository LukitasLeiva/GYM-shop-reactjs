import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="container d-flex justify-content-end">
            <nav className="navbar navbar-expand-lg bg-info-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to={"/inicio"} className="nav-link active" aria-current="page">Inicio</Link></li>
                            <li className="nav-item"><Link to={"/productos"} className="nav-link active" aria-current="page">Productos</Link></li>
                            <li className="nav-item dropdown">
                                <Link to={"/categorias"} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={"/categorías/Suplementos"} className="dropdown-item">Suplementos</Link></li>
                                    <li><Link to={"/categorías/Maquinas-y-semejantes"} className="dropdown-item">Maquinas y semejantes</Link></li>
                                    <li><Link to={"/categorías/Seguimiento"} className="dropdown-item">Seguimiento</Link></li>
                                </ul>
                            </li>
                            <li>
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;