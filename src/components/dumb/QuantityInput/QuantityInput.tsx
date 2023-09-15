import React  from "react"
import {  useState } from "react"
import style from './QuantityInput.module.css';

export function QuantityInput({ name, onClick }: { 
    name: string, 
    // eslint-disable-next-line no-unused-vars
    onClick?(value: number): void 
}) {

    const [value, setValue] = useState(0);

    function clickButtons(event:  React.MouseEvent<HTMLButtonElement>){
        
        const name = event.currentTarget.name;
        let newValue = value;
        name === 'plus' ? 
            setValue(++newValue) 
            : value > 0 ? 
                setValue(--newValue)
                : null;
        
        if(onClick){
            onClick(newValue)
        }
    }


    return <div className="d-flex">
        <button type="button" 
            name="minus" 
            className="btn btn-primary btn-sm" 
            onClick={clickButtons} 
            data-cy="minus-button">
            <i className="bi bi-dash"></i>
        </button>
        <input className={`form-control form-control-sm mx-2 ${style.inputMaxWidth}`} 
            data-cy="quantity-input"
            name={name} 
            type="number" 
            value={value}
            readOnly={true} />
        <button type="button" 
            name="plus"
            onClick={clickButtons}
            data-cy="plus-button"
            className="btn btn-primary btn-sm">
            <i className="bi bi-plus"></i>
        </button>
    </div>
}