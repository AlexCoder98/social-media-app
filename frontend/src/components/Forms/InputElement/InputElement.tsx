import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ method, type, id, placeholder }: InputElementProps) => {

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