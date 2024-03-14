import { useEffect } from "react";
import { useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 1000)
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [id])
    return (
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;