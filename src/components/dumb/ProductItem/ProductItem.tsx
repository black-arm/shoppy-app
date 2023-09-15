import { Product } from "@/models";
import DOMPurify from "dompurify";
import Image from "next/image";
import React from "react";

export default function ProductItem({ product, onClickProduct, itemType }: {
    product: Product, 
    // eslint-disable-next-line no-unused-vars
    onClickProduct(productId: Product): void,
    itemType: 'view' | 'cart'
}){

    const src = product.image.src ?? '';
    const tags = product.tags.split(', ');

    function onClickProductButton(event: React.MouseEvent<HTMLButtonElement>){
        event.stopPropagation();
        onClickProduct(product);
    }

    const buttonLabel = itemType === 'view' ? 
        <>Add to Cart <i className="bi bi-cart-plus"></i></>
        : <>Remove to Cart <i className="bi bi-cart-dash"></i></>

    return <>
        <div data-cy="product-item" className="d-flex m-2 border-bottom">
            <div className="me-2">
                <Image src={src} width={200} height={200} alt={product.title} />
            </div>
            <div className="d-flex flex-column">
                <h3 className="p-1 m-0">{product.title}</h3>
                <h4 className="p-1 m-0">View Details</h4>
                <div className="p-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.body_html) }}></div>
                <div className="p-1">
                    {tags.map((tag, index) => <span className="badge text-bg-secondary me-1" key={index}>{tag}</span>)}
                </div>
                <div className="p-1">
                    <button data-cy="cart-button" onClick={onClickProductButton} className="btn btn-primary btn-primary-sm" >
                        { buttonLabel }
                    </button>
                </div>
            </div>
        </div>
    </>
}