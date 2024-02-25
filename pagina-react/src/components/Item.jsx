const Item = ({item}) => {
    return(
        <>
            <div className="container col-md-4 text-center d-flex justify-content-center">
                <div className="card" style={{width: 280}}>
                    <img src={item.image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{item.tittle}</h5>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Item;