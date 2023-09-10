import { useShoppySelector } from "@/store";

export function useSelectCollections() {
    return useShoppySelector((selector) => selector.shoppy.collections)
}