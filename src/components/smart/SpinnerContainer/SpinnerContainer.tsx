import Spinner from "@/components/dumb/Spinner/Spinner";
import { useSelectIsLoading } from "@/hooks/useSelectIsLoading";
import React from "react";

export default function SpinnerContainer({children}: { children: React.JSX.Element }){

    const loading = useSelectIsLoading()

    return <>
        <Spinner showSpinner={loading === 'pending'} />
        {children}
    </>
}