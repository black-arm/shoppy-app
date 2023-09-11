import Spinner from "@/components/dumb/Spinner/Spinner";
import { useSelectIsLoading } from "@/hooks/useSelectIsLoading";

export default function SpinnerContainer({children}: { children: JSX.Element[] }){

    const loading = useSelectIsLoading()

    return <>
        <Spinner showSpinner={loading === 'pending'} />
        {children}
    </>
}