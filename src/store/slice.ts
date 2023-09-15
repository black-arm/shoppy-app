import { createSlice } from "@reduxjs/toolkit";
import { initialState } from './state'
import { fetchCollections, fetchProductDetails, fetchProductsByCollectionId } from "./thunks";
import { Product } from "@/models";

export const shoppySlice = createSlice({
    name: 'shoppy',
    initialState,
    reducers: {
        loadingIdle(state) {
            state.loading = 'idle'
        },
        filterProducts(state, action){
            state.productsTitleFilter = action.payload.filter
        },
        deleteProductsAndFilter(state) {
            state.productsTitleFilter = null;
            state.products = null;
            state.productDetails = null;
        },
        addProductToCart(state, action) {
            const productIndex = state.cartProducts?.findIndex(
                (product: Product) => product.id === action.payload.product.id)
            if(productIndex === -1){
                state.cartProducts?.push(action.payload.product);
                state.toast = {
                    showToast: true,
                    message: `Product ${action.payload.product.title} added to Cart`,
                    color: 'success'
                }
            }
        },
        removeProductToCart(state, action) {
            const productIndex = state.cartProducts?.findIndex(
                (product: Product) => product.id === action.payload.product.id)
            
            if(typeof productIndex === "number" && productIndex > -1){
                state.cartProducts?.splice(productIndex, 1);
            }
        },
        closeToast(state) {
            state.toast = {
                showToast: false,
                color: null,
                message: null
            }
        }
    }, 
    extraReducers: (builder) =>{
        builder.addCase(fetchCollections.pending, 
            (state) => {state.loading = 'pending'}),
        builder.addCase(
            fetchCollections.rejected, 
            (state, action) => {
                state.loading = 'failed',
                state.toast = {
                    message: action.payload as string ?? 'Network Error',
                    color: 'danger',
                    showToast: true
                }
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
                state.toast = {
                    message: action.payload as string ?? 'Network Error',
                    color: 'danger',
                    showToast: true
                }
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
                state.toast = {
                    message: action.payload as string ?? 'Network Error',
                    color: 'danger',
                    showToast: true
                }
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

export const { 
    loadingIdle, 
    filterProducts, 
    deleteProductsAndFilter, 
    addProductToCart, 
    removeProductToCart,
    closeToast
} = shoppySlice.actions;