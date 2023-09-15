
export interface ToastProps { 
    showToast: boolean, 
    message: string, 
    toastType: 'danger' | 'success' | 'warning' ,
    // eslint-disable-next-line no-unused-vars
    close(closeToast: boolean): void
}