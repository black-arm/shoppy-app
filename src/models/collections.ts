
export interface Collection {
    collection_id: number,
    updated_at: Date,
    body_html: string,
    default_product_image: DefaultProductImage,
    handle: string,
    title: string;
    sort_order: string;
    published_at: Date;
}

export interface DefaultProductImage {
    id: number,
    created_at: Date,
    position: number,
    updated_at: Date,
    product_id: number,
    src?: string,
    variant_ids: number[],
    width: number,
    height: number
}

export interface CollectionsResponse {
    collection_listings: Collection[]
}