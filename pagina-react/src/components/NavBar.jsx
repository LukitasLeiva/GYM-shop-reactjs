import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="container d-flex justify-content-end">
            <nav className="navbar navbar-expand-lg bg-info-subtle">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to={"/"} className="nav-link active" aria-current="page">Inicio</Link></li>
                            <li className="nav-item"><Link to={"/category/:id"} className="nav-link active" aria-current="page">Productos</Link></li>
                            <li className="nav-item dropdown">
                                <Link to={"/categorias"} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</Link>
                                <ul className="dropdown-menu">
                                    <li><NavLink to={"/categoria/suplementos"} className="dropdown-item">Suplementos</NavLink></li>
                                    <li><NavLink to={"/categoria/maquinas"} className="dropdown-item">Maquinas y semejantes</NavLink></li>
                                    <li><NavLink to={"/categoria/seguimiento"} className="dropdown-item">Seguimiento</NavLink></li>
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