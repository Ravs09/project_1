import { useParams } from "react-router-dom";
import products from "../data/products"

function ProductDetails(){
    const {id} = useParams();

    const product = products.find(
        (item)=> item.id=== Number(id)
    );

    if(!product){
        return <h1>Product Not Found</h1>;
    }

    return(
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">

                <h1 className="text-3xl font-bold mb-4">
                    Product Details
                </h1>

                <h2 className="text-xl font-semibold">
                    Name: {product.name}
                </h2>

                <p className="text-gray-600 mt-2">
                    Price: ${product.price}
                </p>

                <p className="text-gray-500">
                    Product ID: {product.id}
                </p>

            </div>

        </div>
    )
}

export default ProductDetails;