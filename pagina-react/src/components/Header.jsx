import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <div className="container-width-100px bg-info-subtle">
            <div className="row-width-100% d-flex">
                <div className="col-md-4">
                    <h1>GYM Shop</h1>
                </div>
                <div className="col-md-3">
                    <img src="" alt="" />
                </div>
                <div className="col-4">
                    <NavBar/>
                </div>
            </div>
        </div>
    )
}

export default Header;