import CollectionsList from "@/components/smart/CollectionsList/CollectionsList";
import { useShoppyDispatch } from "@/store";
import { fetchCollections } from "@/store/thunks";
import { useEffect } from "react";

export default function Homepage() {

    const dispatch = useShoppyDispatch();
    
    useEffect(() => {
        dispatch(fetchCollections())
    }, [dispatch])

    

    return <>
        <CollectionsList />
    </>
}