import { Collection, Product } from "@/models";

export interface State {
    loading: 'idle'| 'pending'| 'succeded'| 'failed';
    errorMessage: string | null;
    collections: Collection[] | null;
    products: Product[] | null;
    productDetails: Product | null;
}

export const initialState: State = {
    errorMessage: null, 
    loading: 'idle',
    collections: null,
    products: null,
    productDetails: null
} 