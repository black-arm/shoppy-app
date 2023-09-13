import { Toast } from "@/components/dumb/Toast/Toast";
import { useSelectErrorMessage } from "@/hooks/useSelectErrorMessage";
import { useSelectIsLoading } from "@/hooks/useSelectIsLoading";
import { useShoppyDispatch } from "@/store";
import { loadingIdle } from "@/store/slice";
import React from "react";

export function HttpErrorToastContainer({ children }: { children: React.JSX.Element }){
    
    const loading = useSelectIsLoading()
    const errorMessage = useSelectErrorMessage()
    const isFailed = loading === 'failed';
    const dispatch = useShoppyDispatch();

    function closeToast(){
        dispatch(loadingIdle())    
    }

    return <>
        <Toast showToast={isFailed} close={closeToast} toastType='danger' message={errorMessage ?? ''}  />
        {children}
    </>
}


