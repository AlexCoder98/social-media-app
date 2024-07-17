import { InputElementProps } from '../../../types/form-input';

const InputElement = ({ method, type, id, placeholder, tagType }: InputElementProps) => {
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
                    />
                ) : (
                    <textarea
                        id="description"
                        name="description"
                        className="app__input"
                        placeholder="Add some text..."
                        onChange={method}
                    >
                    </textarea>
                )
            }
        </div>
    )
}

export default InputElement;