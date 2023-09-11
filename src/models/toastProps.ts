
export interface ToastProps { 
    showToast: boolean, 
    message: string, 
    toastType: 'danger' | 'success' | 'warning' ,
    close(closeToast: boolean): void
}