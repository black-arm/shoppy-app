import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import { collectionListUrl, productDetailsUrlTemplate, productsListUrlTemplate } from './endpoints';
import { CollectionsResponse, ErrorResponse, Product, ProductsResponse } from '@/models';

const collectionResponse: CollectionsResponse = {
    collection_listings: [
        {
            collection_id: 266329686089,
            updated_at: new Date("2022-05-13T18:33:52+02:00"),
            body_html: "",
            default_product_image: {
                id: 29040751411273,
                created_at: new Date("2022-04-20T16:04:42+02:00"),
                position: 1,
                updated_at: new Date("2022-04-20T16:04:42+02:00"),
                product_id: 6735725133897,
                src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
                variant_ids: [],
                width: 925,
                height: 617,
            },
            handle: "home-and-garden",
            title: "Home and Garden",
            sort_order: "best-selling",
            published_at: new Date("2022-05-13T18:33:52+02:00"),
        }
    ]
}
const product: Product = {
    id: 6735725133897,
    title: "Bedside Table",
    body_html: "<p>Wooden bedside table</p>",
    vendor: "Company 123",
    product_type: "Indoor",
    created_at: new Date("2022-04-20T16:04:42+02:00"),
    handle: "bedside-table",
    updated_at: new Date("2022-06-27T12:58:06+02:00"),
    published_at: new Date("2022-04-20T16:04:41+02:00"),
    template_suffix: null,
    status: "active",
    published_scope: "web",
    tags: "Bedroom, Wood",
    admin_graphql_api_id: "gid://shopify/Product/6735725133897",
    options: [
        {
            id: 8647353172041,
            product_id: 6735725133897,
            name: "Title",
            position: 1,
        },
    ],
    images: [
        {
            id: 29040751411273,
            product_id: 6735725133897,
            position: 1,
            created_at: new Date("2022-04-20T16:04:42+02:00"),
            updated_at: new Date("2022-04-20T16:04:42+02:00"),
            alt: null,
            width: 925,
            height: 617,
            src:
                "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
            variant_ids: [],
            admin_graphql_api_id:
                "gid://shopify/ProductImage/29040751411273",
        },
    ],
    image: {
        id: 29040751411273,
        product_id: 6735725133897,
        position: 1,
        created_at: new Date("2022-04-20T16:04:42+02:00"),
        updated_at: new Date("2022-04-20T16:04:42+02:00"),
        alt: null,
        width: 925,
        height: 617,
        src:
            "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
        variant_ids: [],
        admin_graphql_api_id:
            "gid://shopify/ProductImage/29040751411273",
    },
}
const productsResponse: ProductsResponse = {
    products: [product]
}

export const mockCollectionResponse = () => {
    const mock = new MockAdapter(axios);
    mock.onGet(collectionListUrl).reply(200, collectionResponse)
}

export const mockProductList = (collectionId: number) => {
    const mock = new MockAdapter(axios);
    mock.onGet(productsListUrlTemplate.replace('{COLL_ID}', collectionId.toString())).reply(200, productsResponse)
}

const productDetails = { product: product }

export const mockProductDetails = (productId: number) => {
    const mock = new MockAdapter(axios);
    mock.onGet(productDetailsUrlTemplate.replace('{PROD_ID}', productId.toString())).reply(200, productDetails);
}

export const errorResponse: ErrorResponse = { message: "Internal server error" }

export const mockError = () => {
    const mock = new MockAdapter(axios);
    mock.onGet(productDetailsUrlTemplate).reply(502, errorResponse)
}