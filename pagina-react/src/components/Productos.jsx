import creatina from "../assets/creatina.jpg";
import proteina from "../assets/proteina.jpeg";
import mancuernas from "../assets/mancuernas.png";
import preentreno from "../assets/preentreno.png";
import maquinas from "../assets/maquinas.png";
import rutina from "../assets/rutina.jpg";

const Productos = () => {
    return (
        <div className="container">
            <h3 className="titulo text-center border border-dark">Productos</h3>
            <div className="row d-flex justify-content-around">
                <div className="card" style={{width: 280}}>
                    <img src={creatina} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Creatina</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
                <div className="card" style={{width: 280}}>
                    <img src={proteina} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Proteína</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
                <div className="card" style={{width: 280}}>
                    <img src={mancuernas} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Mancuernas</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-around mt-2">
                <div className="card" style={{width: 280}}>
                    <img src={preentreno} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Preentreno</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
                <div className="card" style={{width: 280}}>
                    <img src={maquinas} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">Maquinas</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
                <div className="card" style={{width: 280}}>
                    <img src={rutina} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">rutina</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="" className="btn btn-primary">Info </a>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Productos;