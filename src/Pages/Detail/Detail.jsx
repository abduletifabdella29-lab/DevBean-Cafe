import { useParams } from 'react-router-dom'
import { products } from '../Shop/ShopData.js'

export default function Detail() {

    const { id } = useParams();

    const product = products.find((p) => p.id === Number(id));

    return (
        <main className="px-12 py-6">
            <h1 className="text-white">{product.name}</h1>
            <p className="text-white">{product.description}</p>
            <p className="text-white">₹ {product.price}</p>
        </main>
    )
}