import { Collection } from "@/models";
import CollectionItem from "./CollectionItem"

describe('CollectionItem', () => {

    const collection: Collection = {
        collection_id: 266329686089,
        updated_at: new Date(),
        body_html: "",
        default_product_image: {
            id: 29040751411273,
            created_at: new Date(),
            position: 1,
            updated_at: new Date(),
            product_id: 6735725133897,
            src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
            variant_ids: [],
            width: 925,
            height: 617,
        },
        handle: "home-and-garden",
        title: "Home and Garden",
        sort_order: "best-selling",
        published_at: new Date(),
    };

    it('render', ()=>{
        cy.mount(<CollectionItem collection={collection} />)
    })
})