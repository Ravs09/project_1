import { useParams } from "react-router-dom";

function ProductDetails() {

    const {id} = useParams();

    return (

        <div className="p-8">
            <h1 className="text-3xl font-bold">
                Product Details
            </h1>

            <p>Product ID: </p>
        </div>
    );

}
export default ProductDetails;