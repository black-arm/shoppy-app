import { Collection, Product } from "@/models";

export interface State {
    loading: 'idle'| 'pending'| 'succeded'| 'failed';
    errorMessage: string | null;
    collections: Collection[];
    products: Product[] | null;
    productDetails: Product | null;
    productsTitleFilter: string | null;
}

export const initialState: State = {
    errorMessage: null, 
    loading: 'idle',
    collections: [],
    products: null,
    productDetails: null,
    productsTitleFilter: null
} 