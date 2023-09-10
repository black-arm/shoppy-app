import { Collection } from "@/models";
import Image from "next/image";
import Link from "next/link";

export default function CollectionItem({collection}: {collection: Collection}){

    const src = collection.default_product_image.src ?? '';

    return <div className="w-100 p-3 d-flex justify-content-center position-relative" data-cy="collection-item">
        <Image src={src}
            alt='Collection Image' 
            width={collection.default_product_image.width}
            height={collection.default_product_image.height}>
        </Image>
        <Link href={`/products/${collection.collection_id}`}
            className="text-white text-center position-absolute top-50 left-50">
                <h1 data-cy="title">{collection.title}</h1>
        </Link>
    </div>
}