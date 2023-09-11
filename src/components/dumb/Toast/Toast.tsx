import { ToastProps } from "@/models";

export function Toast({ showToast, message, toastType, close }: ToastProps){

    return <>
        { showToast ? 
        <div data-cy="toast" className={`toast text-bg-${toastType} align-items-center border-0`}>
            <div className="d-flex">
                <div className="toast-body">
                    { message }
                </div>
                <button type="button" 
                    className="btn-close btn-close-white me-2 m-auto" 
                    data-bs-dismiss="toast" aria-label="Close" onClick={(e) => close(false)}></button>
            </div>
        </div> 
        : null }
    </>
}
