import Logo from "./Logo";


const Footer = () => {
    return (
        <div className="container-width-100% bg-info-subtle position-relative top-100%" style={{height:175}}>
            <hr />
            <Logo />
            <h5 className="derechos text-center">derechos reservados</h5>
        </div>
    )
}

export default Footer;