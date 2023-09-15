import ProductItem from "@/components/dumb/ProductItem/ProductItem";
import { useSelectCartProducts } from "@/hooks/useSelectCartProducts"
import { Product } from "@/models";
import { useShoppyDispatch } from "@/store";
import { removeProductToCart } from "@/store/slice";

export function CartProductsList() {

    const products = useSelectCartProducts();
    const dispatch = useShoppyDispatch();

    function removeProduct(product: Product){
        dispatch(removeProductToCart({ product: product }))    
    }

    return <>
        { products?.map((product, index) => <ProductItem key={index} product={product} 
            itemType="cart"
            onClickProduct={removeProduct}/>)}
    </>
}