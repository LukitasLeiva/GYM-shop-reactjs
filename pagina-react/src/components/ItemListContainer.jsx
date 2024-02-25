import { useEffect } from "react";
import { useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos);
            }, 2000)
        })
        promesa.then(data => {
            setItems(data);
        })
    }, [])
    return (
        <>
            <ItemList items={items}></ItemList>
        </>
    )
}

export default ItemListContainer;