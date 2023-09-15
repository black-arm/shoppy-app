import { Product } from "@/models"
import ProductItem from "./ProductItem"

describe('ProductItem', () => {

    const product: Product = {
        "id": 6735725133897,
        "title": "Bedside Table",
        "body_html": "<p>Wooden bedside table</p>",
        "vendor": "Company 123",
        "product_type": "Indoor",
        "created_at": new Date(),
        "handle": "bedside-table",
        "updated_at": new Date(),
        "published_at": new Date(),
        "template_suffix": null,
        "status": "active",
        "published_scope": "web",
        "tags": "Bedroom, Wood",
        "admin_graphql_api_id": "gid://shopify/Product/6735725133897",
        "variants": [
        {
        "id": 39884150374473,
        "product_id": 6735725133897,
        "title": "Default Title",
        "price": "69.99",
        "sku": null,
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": "85.00",
        "fulfillment_service": "manual",
        "inventory_management": null,
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "created_at": new Date(),
        "updated_at": new Date(),
        "taxable": true,
        "barcode": null,
        "grams": 0,
        "image_id": null,
        "weight": 0,
        "weight_unit": "kg",
        "inventory_item_id": 41976663375945,
        "inventory_quantity": 1,
        "old_inventory_quantity": 1,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/39884150374473"
        }
        ],
        "options": [
        {
        "id": 8647353172041,
        "product_id": 6735725133897,
        "name": "Title",
        "position": 1,
        }
        ],
        "images": [
        {
        "id": 29040751411273,
        "product_id": 6735725133897,
        "position": 1,
        "created_at": new Date(),
        "updated_at": new Date(),
        "alt": null,
        "width": 925,
        "height": 617,
        "src": "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29040751411273"
        }
        ],
        "image": {
        "id": 29040751411273,
        "product_id": 6735725133897,
        "position": 1,
        "created_at": new Date(),
        "updated_at": new Date(),
        "alt": null,
        "width": 925,
        "height": 617,
        "src": "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
        "variant_ids": [],
        "admin_graphql_api_id": "gid://shopify/ProductImage/29040751411273"
        }
    }

    it('render', () =>{
        cy.mount(<ProductItem product={product} onClickProduct={() =>{}} itemType="view" />)
    })

    it('should call addProductToCart', () =>{

        function addProductToCart(product: Product){
            expect(product.id).equal(6735725133897)
        }
        cy.mount(<ProductItem product={product} onClickProduct={addProductToCart} itemType="view" />)
        cy.getByData('cart-button').click();
    })
})