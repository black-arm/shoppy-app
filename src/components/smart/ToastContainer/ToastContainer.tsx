import { Toast } from "@/components/dumb/Toast/Toast";
import { useShoppyDispatch, useShoppySelector } from "@/store";
import { closeToast } from "@/store/slice";
import React from "react";

export function ToastContainer({ children }: { children: React.JSX.Element }){
    
    const toastInfo = useShoppySelector((state) => state.shoppy.toast);

    const dispatch = useShoppyDispatch();

    function close(){
        dispatch(closeToast())    
    }

    return <>
        <Toast showToast={toastInfo.showToast} 
            close={close} 
            toastType={toastInfo.color ?? ''} 
            message={toastInfo.message ?? ''}  />
        {children}
    </>
}


