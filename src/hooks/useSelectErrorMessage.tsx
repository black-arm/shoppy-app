import { useShoppySelector } from "@/store";

export function useSelectErrorMessage() {
    return useShoppySelector((state) => state.shoppy.errorMessage)
}