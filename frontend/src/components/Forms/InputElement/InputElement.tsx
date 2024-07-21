import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ method, type, id, placeholder, tagType, value }: InputElementProps) => {
    return (
        <div className="app__form-input-container">
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