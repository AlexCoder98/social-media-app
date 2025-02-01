import '../../../styles/shared/inputs/checkbox-input.scss';

interface ICheckBoxInputProps {
    id: string;
    name: string;
    isChecked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelValue?: string;
}

const CheckBoxInput = ({ id, name, isChecked, onChange, labelValue }: ICheckBoxInputProps) => {
    return (
        <div className="app__input-container checkbox">
            <input
                id={id}
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={onChange}
            />
            {labelValue && (
                <label
                    htmlFor={id}
                    className="input-container__label"
                >
                    {labelValue}
                </label>
            )}
        </div>
    );
};

export default CheckBoxInput;