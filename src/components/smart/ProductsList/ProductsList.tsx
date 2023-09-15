import ProductItem from "@/components/dumb/ProductItem/ProductItem";
import { useSelectProducts } from "@/hooks/useSelectProducts";
import { Product } from "@/models";
import { useShoppyDispatch } from "@/store";
import { addProductToCart } from "@/store/slice";

export default function ProductsList(){

    const productsList = useSelectProducts();
    const dispatch = useShoppyDispatch();

    function onClickAddProductToCart(product: Product){
        dispatch(addProductToCart({ product: product }))
    }

    return <>
        { productsList && productsList.length > 0 ? 
            productsList?.map(
                (product, index) => <ProductItem key={index} 
                    product={product} 
                    onClickProduct={onClickAddProductToCart}
                    itemType="view"/> ) 
        : <div data-cy="no-item" className="d-flex mx-auto p-3 justify-content-center">
            <h4>No Products Found</h4>
        </div>}
    </>
}