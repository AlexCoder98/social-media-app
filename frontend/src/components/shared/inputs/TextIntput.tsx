
import { EInputTypesType } from '../../../types/input';

interface ITextInputProps {
    id: string;
    type: EInputTypesType;
    name: string;
    value: string;
    placeholderValue: string;
    labelValue?: string;
}

const TextInput = ({ id, type, name, value, placeholderValue, labelValue }: ITextInputProps) => {
    return (
        <div className="app__input-container">
            {labelValue && (
                <label
                    htmlFor="id"
                    className="input-container__label"
                >
                    {labelValue}
                </label>
            )}
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholderValue}
                value={value}
            />
        </div>
    );
};

export default TextInput;