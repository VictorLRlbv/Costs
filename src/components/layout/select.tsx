import { useState } from 'react'
import './select.scss'

interface Props {
    labelText: string,
    name: string,
    handleOnChange: any,
    // value: string,
    options: any[]
}

export default function Select({labelText, name, handleOnChange, /*value,*/ options}: Props) {
    let [selected, setSelected] = useState('Selecione a categoria do projeto')
    
    return (
        <div className="inputContainer">
            <label htmlFor={name}>{labelText}</label>
            <select 
                name={name} 
                id={name}
                onChange={handleOnChange}
            >
                <option disabled id='txtContent'>Selecione a categoria do projeto</option>
                {options.map(i => {
                    return <option value={i.id} key={i.id}>{i.name}</option>
                })}
            </select>
        </div>
    )
}