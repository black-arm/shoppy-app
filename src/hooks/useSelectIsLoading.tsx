import { useShoppySelector } from "@/store";

export function useSelectIsLoading(){
    return useShoppySelector(state => state.shoppy.loading)
}