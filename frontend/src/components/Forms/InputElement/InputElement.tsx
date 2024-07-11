import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ type, id, placeholder }: InputElementProps) => {
    return (
        <div className="app__form-input-container">
            <input type={type} className="app__input" id={id} placeholder={placeholder} />
        </div>
    )
}

export default InputElement;