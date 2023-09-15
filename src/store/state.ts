import { Collection, Product } from "@/models";

export interface State {
    loading: 'idle'| 'pending'| 'succeded'| 'failed';
    errorMessage: string | null;
    collections: Collection[];
    products: Product[] | null;
    productDetails: Product | null;
    productsTitleFilter: string | null;
    cartProducts: Product[] | null;
    toast: {
        showToast: boolean;
        color: 'danger' | 'warning' | 'success' | null
        message: string | null;
    }
}

export const initialState: State = {
    errorMessage: null, 
    loading: 'idle',
    collections: [],
    products: null,
    productDetails: null,
    productsTitleFilter: null,
    cartProducts: [],
    toast: {
        showToast: false,
        message: null,
        color: null
    }
} 