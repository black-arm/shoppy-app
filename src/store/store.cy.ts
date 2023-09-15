import { Product } from "@/models";
import { store } from ".";
import { mockCollectionResponse, mockProductDetails, mockProductList } from "./api/shoppy-api.mock";
import { fetchCollections, fetchProductDetails, fetchProductsByCollectionId } from "./thunks";
import { deleteProductsAndFilter, filterProducts, loadingIdle } from "./slice";

describe('store tests', () => {
    
    context('fetch collection', ()=> {

        it('should be able fetch collections', async () => {
            
            mockCollectionResponse()

            const result = await store.dispatch(fetchCollections())
            
            expect(result.type).equal('shoppy/collections/fulfilled')
            const collections = result.payload;
            expect(collections.length).equal(1)
        })

        it('should be able fetch products', async () => {
            
            const collectionId = 12345
            mockProductList(collectionId)
            
            const result = await store.dispatch(fetchProductsByCollectionId(collectionId))

            expect(result.type).equal('shoppy/products/fulfilled')
            const products = result.payload as Product[];
            expect(products.length).equal(1)
        })

        it('should be able fetch productDetails', async () => {
            
            const productId = 123;
            mockProductDetails(productId)

            const result = await store.dispatch(fetchProductDetails(productId))

            expect(result.type).equal('shoppy/productDetails/fulfilled')
            const productDetails = result.payload as Product;
            const title = productDetails.title
            expect(title).equal("Bedside Table")
        })

        it('should be loading to idle', async () => {
            
            await store.dispatch(loadingIdle())
            expect(store.getState().shoppy.loading).equal('idle')
        })

        it('should be filter products', async () => {

            const collectionId = 12345
            mockProductList(collectionId)
            
            await store.dispatch(fetchProductsByCollectionId(collectionId))

            await store.dispatch(filterProducts({ filter: 'Table' }))
            expect(store.getState().shoppy.productsTitleFilter).to.equal('Table')
        })

        it('should set filter and products to null', async () =>{
            const collectionId = 12345
            mockProductList(collectionId)
            
            await store.dispatch(fetchProductsByCollectionId(collectionId))

            await store.dispatch(deleteProductsAndFilter())
            expect(store.getState().shoppy.productsTitleFilter).equal(null)
            expect(store.getState().shoppy.products).equal(null)
        })
    })
});