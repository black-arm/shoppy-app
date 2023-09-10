import ProductItem from "@/components/dumb/ProductItem/ProductItem";
import { useSelectProducts } from "@/hooks/useSelectProducts";

export default function ProductsList(){

    const productsList = useSelectProducts();

    return <>
        {productsList?.map((product, index) => <ProductItem key={index} product={product} /> )}
    </>
}