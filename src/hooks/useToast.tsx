import { useShoppySelector } from "@/store";

export function useToast(){
    return useShoppySelector(state => state.shoppy.toast)
}