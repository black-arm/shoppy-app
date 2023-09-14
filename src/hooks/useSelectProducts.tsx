import { useShoppySelector } from "@/store";

export function useSelectProducts() {
    return useShoppySelector(state => {
        
        const productsTitleFilter = state.shoppy.productsTitleFilter;
        const products = state.shoppy.products;

        if(!productsTitleFilter || !products){
            return products;
        }

        return products.filter(product => product.title.includes(productsTitleFilter))
    })
}