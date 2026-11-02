import { useNavigate } from "react-router-dom";
import products from "../data/products";

function ProductPage() {

    
    const navigate = useNavigate();

    return (



        <div className="min-h-screen bg-gray-100 p-8">


            <h1 className="text-3xl font-bold text-center mb-10">
                Our Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                {products.map((product) => (

                    <div key={product.id} className="bg-white p-5 rounded-xl shadow">


                        <h2 className="text-xl font-bold">
                            {product.name}
                        </h2>

                        <p className="text-gray-600">
                            Price: $ {product.price}
                        </p>

                        <button
                        onClick={() => navigate(`/product/${product.id}`)}
                         className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
                            View Details
                        </button>

                    </div>
                ))}

            </div>



        </div>
    )
}
export default ProductPage;