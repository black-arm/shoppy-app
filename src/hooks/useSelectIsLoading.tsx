import { useShoppySelector } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function useSelectIsLoading(){

    let loading = useShoppySelector(state => state.shoppy.loading)
   

    return loading;
}