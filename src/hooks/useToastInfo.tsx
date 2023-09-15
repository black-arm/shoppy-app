import { useShoppySelector } from "@/store";

export function useToastInfo(){
    return useShoppySelector((state) => state.shoppy.toast);
}