import logoIcon from "../assets/logo.jpg";

const Logo = () =>{
    return (
        <div className="logo d-flex justify-content-center">
            <img src={logoIcon} alt="" className="logo" style={{width:100,height:100}}/>
        </div>
    )
}

export default Logo;