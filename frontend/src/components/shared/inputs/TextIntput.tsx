import { EInputTypesType } from '../../../types/input';

import '../../../styles/shared/inputs/text-input.scss';

interface ITextInputProps {
    id: string;
    type: EInputTypesType;
    name: string;
    placeholderValue: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelValue?: string;
}

const TextInput = ({ id, type, name, placeholderValue, value, onChange, labelValue }: ITextInputProps) => {
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
                onChange={onChange}
            />
        </div>
    );
};

export default TextInput;