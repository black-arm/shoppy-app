import Image from "next/image"
import Link from "next/link"

export default function Error404Page(){

    return <div className="d-flex justify-content-center flex-column align-items-center">
            <Image className="mt-5" src={'/icons/alert.svg'} alt="alert image" width={200} height={200} />
            <h3 data-cy="error-title" className="mt-3">Page not Found</h3>
            <Link data-cy="back-to-home-link" className="mt-2" href='/'><span>Back to Home</span></Link>
        </div>
}