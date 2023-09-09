import { CollectionsResponse, ProductDetailsResponse, ProductsResponse } from "@/models";
import { store } from ".";
import { mockCollectionResponse, mockProductDetails, mockProductList } from "./api/shoppy-api.mock";
import { fetchCollections, fetchProductDetails, fetchProductsByCollectionId } from "./thunks";

describe('store tests', () => {
    
    context('fetch collection', ()=> {

        it('should be able fetch collections', async () => {
            
            mockCollectionResponse()

            const result = await store.dispatch(fetchCollections())
            
            expect(result.type).equal('shoppy/collections/fulfilled')
            const collections = (result.payload as CollectionsResponse).collection_listings;
            expect(collections.length).equal(1)
        })

        it('should be able fetch products', async () => {
            
            const collectionId = 12345
            mockProductList(collectionId)
            
            const result = await store.dispatch(fetchProductsByCollectionId(collectionId))

            expect(result.type).equal('shoppy/products/fulfilled')
            const products = (result.payload as ProductsResponse).products;
            expect(products.length).equal(1)
        })

        it('should be able fetch productDetails', async () => {
            
            const productId = 123;
            mockProductDetails(productId)

            const result = await store.dispatch(fetchProductDetails(productId))

            expect(result.type).equal('shoppy/productDetails/fulfilled')
            const productDetails = result.payload as ProductDetailsResponse;
            const title = productDetails.product.title
            expect(title).equal("Bedside Table")
        })
    })
});