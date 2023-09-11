import { Toast } from "@/components/dumb/Toast/Toast";
import { useSelectErrorMessage } from "@/hooks/useSelectErrorMessage";
import { useSelectIsLoading } from "@/hooks/useSelectIsLoading";
import { useState } from "react";

export function HttpErrorToastContainer({ children }: { children: JSX.Element }){

    const loading = useSelectIsLoading()
    const errorMessage = useSelectErrorMessage()
    const [openToast, setOpenToast] = useState(loading === 'failed')

    function closeToast(){
        setOpenToast(false);
    }

    return <>
        <Toast showToast={openToast} close={closeToast} toastType='danger' message={errorMessage ?? ''}  />
        {children}
    </>
}


