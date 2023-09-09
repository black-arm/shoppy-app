import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer } from "./slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"


const rootReducer = combineReducers({
    shoppy: reducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type ShoppyDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useShoppyDispatch: () => ShoppyDispatch = useDispatch
export const useShoppySelector: TypedUseSelectorHook<RootState> = useSelector