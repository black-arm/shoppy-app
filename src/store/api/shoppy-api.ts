import { CollectionsResponse, ProductDetailsResponse, ProductsResponse } from "@/models"
import axios from "axios"
import { collectionListUrl, productDetailsUrlTemplate, productsListUrlTemplate } from "./endpoints"

export const httpGetCollections = () => {
    return axios.get<CollectionsResponse>(collectionListUrl);
}

export const httpGetProductsByCollectionId = (collectionId: number) => {

    const productsEndpoint = productsListUrlTemplate.replace('{COLL_ID}', collectionId.toString());
    return axios.get<ProductsResponse>(productsEndpoint)
} 

export const httpGetProductDetails = (productId: number) => {
    
    const productDetailsEndpoint = productDetailsUrlTemplate.replace('{PROD_ID}', productId.toString());
    return axios.get<ProductDetailsResponse>(productDetailsEndpoint)
}