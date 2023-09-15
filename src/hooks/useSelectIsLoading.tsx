import { useShoppySelector } from "@/store";

export function useSelectIsLoading(){

    let loading = useShoppySelector(state => state.shoppy.loading)
   

    return loading;
}