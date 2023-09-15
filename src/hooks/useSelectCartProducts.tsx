import { useShoppySelector } from "@/store";

export function useSelectCartProducts(){
    return useShoppySelector(state => state.shoppy.cartProducts);
}