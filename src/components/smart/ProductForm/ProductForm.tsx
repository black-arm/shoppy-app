import { useShoppyDispatch } from "@/store";
import { filterProducts } from "@/store/slice";
import { useState } from "react"
import React from "react";

export default function ProductForm() {

    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ filter: '' });

    const dispatch = useShoppyDispatch();

    const clickSearchButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setShowForm(!showForm)
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const filter = { [event.target.name]: event.target.value }
        setForm({
            ...form, 
            ...filter
        })
        dispatch(filterProducts(filter))
    }

    return <>
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-1 text-center">
                    <button data-cy="searchButton" className="btn btn-secondary btn-sm" 
                        type="button" onClick={clickSearchButton} >
                        <i className="bi bi-filter"></i>
                    </button>
                </div>
                { showForm ? 
                    <div data-cy="productForm" className="col-6">
                        <input className="form-control form-control-sm" 
                            name="filter"
                            onChange={onChange}
                            type="text" 
                            value={form.filter}
                            placeholder="Filter products..." />
                    </div>
                : null }
            </div>
        </div>
    </>
}