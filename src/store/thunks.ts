import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpGetCollections, httpGetProductDetails, httpGetProductsByCollectionId } from "./api/shoppy-api";

export const fetchCollections = createAsyncThunk(
    'shoppy/collections', 
    async (arg: void, thunkApi) =>{
        try {
            const response = await httpGetCollections()
            console.log(response)
            return response.data.collection_listings
        }catch(error: any){
            return rejectWithValue(error, thunkApi)
        }
    }
)

export const fetchProductsByCollectionId = createAsyncThunk(
    'shoppy/products',
    async (collectionId: number, thunkApi) => {
        try{
            const response = await httpGetProductsByCollectionId(collectionId)
            return response.data.products;
        } catch(error) {
            return rejectWithValue(error, thunkApi)
        }
    }
)

export const fetchProductDetails = createAsyncThunk(
    'shoppy/productDetails',
    async (productId: number, thunkApi) => {
        try {
            const response = await httpGetProductDetails(productId)
            return response.data.product;
        }catch(error){
            return rejectWithValue(error, thunkApi)
        }
    }
)

export const rejectWithValue = (error: any, thunkApi: any) => {
    
    return thunkApi.rejectWithValue(error.message);
}
