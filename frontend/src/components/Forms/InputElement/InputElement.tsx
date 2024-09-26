import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ method, type, id, placeholder, tagType, value, label, isDisabled }: InputElementProps) => {
    return (
        <div className="app__form-input-container">
            {label && <label htmlFor={id} className="app__label">{label}</label>}
            {
                tagType === 'input' ? (
                    <input
                        type={type}
                        className="app__input"
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        onChange={method}
                        value={value}
                        disabled={isDisabled}
                    />
                ) : (
                    <textarea
                        id={id}
                        name={id}
                        className="app__input"
                        placeholder={placeholder}
                        onChange={method}
                        value={value}
                    >
                    </textarea>
                )
            }
        </div>
    )
}

export default InputElement;