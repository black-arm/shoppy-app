import style from './Spinner.module.css'

export default function Spinner({ showSpinner }: { showSpinner: boolean }){

    const spinnerClass = `spinner-border text-primary ${style.spinnerSize}`

    return <> { showSpinner ? 
        <div data-cy='spinner' className={style.spinnerContainer}>
            <div className={spinnerClass} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> 
        : null}
    </>
}