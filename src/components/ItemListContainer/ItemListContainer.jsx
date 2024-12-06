import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory} from "../../asyncMock"

export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        getProducts()
            .then((data)=>{
                setProducts(data)
            })
    }, [])

    console.log(products)

    return (
        <div>
            <h2>Va la lógica de los productos filtrados o no</h2>
            <hr />
        </div>
    )
}
