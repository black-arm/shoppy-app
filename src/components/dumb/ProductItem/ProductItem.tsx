import { Product } from "@/models";
import DOMPurify from "dompurify";
import Image from "next/image";
import { QuantityInput } from "../QuantityInput/QuantityInput";

export default function ProductItem({ product }: {product: Product}){

    const src = product.image.src ?? '';
    const tags = product.tags.split(', ');

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
                    <QuantityInput name={product.id.toString()} />
                </div>
            </div>
        </div>
    </>
}