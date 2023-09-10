import { useShoppySelector } from "@/store";

export function useSelectProducts() {
    return useShoppySelector(state => state.shoppy.products)
}