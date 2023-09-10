import CollectionItem from "@/components/dumb/CollectionItem/CollectionItem";
import { useSelectCollections } from "@/hooks/useSelectCollections";

export default function CollectionsList() {

    const collections = useSelectCollections();

    return <>
    <div>{collections ? 
        collections.map((collection, index) => <CollectionItem key={index} collection={collection} />)
        : <div>No Collection fund</div>}</div>   
</>
}