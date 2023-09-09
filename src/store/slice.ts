import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './state'
import { fetchCollections, fetchProductDetails, fetchProductsByCollectionId } from "./thunks";
import { ErrorResponse } from "@/models";

export const shoppySlice = createSlice({
    name: 'shoppy',
    initialState,
    reducers: {}, 
    extraReducers: (builder) =>{
        builder.addCase(fetchCollections.pending, 
            (state) => {state.loading = 'pending'}),
        builder.addCase(
            fetchCollections.rejected, 
            (state, action) => {
                state.loading = 'failed',
                state.errorMessage = (action.payload as ErrorResponse).message
            }
        ),
        builder.addCase(
            fetchCollections.fulfilled, 
            (state, action) => {
                state.loading = 'succeded',
                state.collections = action.payload
            }
        ),
        builder.addCase(fetchProductsByCollectionId.pending, 
            (state) => {state.loading = 'pending'}),
        builder.addCase(
            fetchProductsByCollectionId.rejected, 
            (state, action) => {
                state.loading = 'failed',
                state.errorMessage = (action.payload as ErrorResponse).message
            }
        ),
        builder.addCase(
            fetchProductsByCollectionId.fulfilled, 
            (state, action) => {
                state.loading = 'succeded',
                state.products = action.payload
            }
        ),
        builder.addCase(fetchProductDetails.pending, 
            (state) => {state.loading = 'pending'}),
        builder.addCase(
            fetchProductDetails.rejected, 
            (state, action) => {
                state.loading = 'failed',
                state.errorMessage = (action.payload as ErrorResponse).message
            }
        ),
        builder.addCase(
            fetchProductDetails.fulfilled, 
            (state, action) => {
                state.loading = 'succeded',
                state.productDetails = action.payload
            }
        )
    }
})

export const reducer = shoppySlice.reducer;