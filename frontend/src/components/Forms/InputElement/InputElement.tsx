import { useState } from 'react';

import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ method, type, id, placeholder }: InputElementProps) => {
    // const [inputValue, setInputValue] = useState<string>('');

    // const handleInputChange = (e: React.FormEvent) => {
    //     console.log((e.target as HTMLInputElement).value);
    // }

    return (
        <div className="app__form-input-container">
            <input
                type={type}
                className="app__input"
                id={id}
                name={id}
                placeholder={placeholder}
                onChange={method}
            />
        </div>
    )
}

export default InputElement;