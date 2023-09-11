import Spinner from "@/components/dumb/Spinner/Spinner";
import { useSelectIsLoading } from "@/hooks/useSelectIsLoading";
import { useShoppySelector } from "@/store";
import { ReactNode } from "react";

export default function SpinnerContainer({children}: { children: JSX.Element[] }){

    const loading = useSelectIsLoading()

    return <>
        <Spinner showSpinner={loading === 'pending'} />
        {children}
    </>
}