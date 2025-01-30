import { EInputTypesType } from '../../../types/input';

import '../../../styles/shared/inputs/text-input.scss';

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
        <div className="app__input-container text-input">
            {labelValue && (
                <label
                    htmlFor={id}
                    className="input-container__label"
                >
                    {labelValue}
                </label>
            )}
            <input
                className="input-container__input"
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