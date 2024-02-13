import iconCart from "../assets/cart-fill.svg";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn bg-info-subtle position-relative">
                <img src={iconCart} alt="" width={24}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget;