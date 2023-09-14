import ProductForm from "@/components/smart/ProductForm/ProductForm";
import ProductsList from "@/components/smart/ProductsList/ProductsList";
import { useShoppyDispatch } from "@/store";
import { fetchProductsByCollectionId } from "@/store/thunks";
import { useRouter } from "next/router"
import { useEffect } from "react";

export default function ProductsPage(){

    const router = useRouter();
    const collectionId = router.query.collectionId as string;
    const dispatch = useShoppyDispatch();
    
    useEffect(() => {

        if(collectionId){
            dispatch(fetchProductsByCollectionId(parseInt(collectionId)))
        }

    }, [collectionId, dispatch])

    return <>
        <ProductForm />
       <ProductsList />
    </>
}