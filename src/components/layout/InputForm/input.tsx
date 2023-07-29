
import './input.scss'

interface Props  {
    labelText: string,
    type: string,
    name: string,
    placeholder: string,
    handleOnChange: any,
    // value: string
}

export default function Input({labelText, type, name, placeholder, handleOnChange, /*value = ''*/}: Props) {
    return (
        <div className="inputContainer">
            <label htmlFor={name}>{labelText}</label>
            <input 
                type={type}
                name={name} 
                id={name} 
                placeholder={placeholder}
                onChange={handleOnChange}
                // value={value || ''}
                required
            />
        </div>
    )
}