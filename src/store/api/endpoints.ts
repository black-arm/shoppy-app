
const baseUrl = process.env.BASE_URL;
export const collectionListUrl = `${baseUrl}/collection_listing.json`;
export const productsListUrlTemplate = `${baseUrl}/collections/{COLL_ID}/products.json`;
export const productDetailsUrlTemplate = `${baseUrl}/products/{PROD_ID}.json`;

