import ProductItem from "@/components/dumb/ProductItem/ProductItem";
import { useSelectProducts } from "@/hooks/useSelectProducts";

export default function ProductsList(){

    const productsList = useSelectProducts();

    return <>
        { productsList && productsList.length > 0 ? productsList?.map((product, index) => <ProductItem key={index} product={product} /> ) 
        : <div data-cy="no-item" className="d-flex mx-auto p-3 justify-content-center">
            <h4>No Products Found</h4>
        </div>}
    </>
}