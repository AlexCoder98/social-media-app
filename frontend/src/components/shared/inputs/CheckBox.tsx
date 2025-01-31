import '../../../styles/shared/inputs/checkbox-input.scss';

interface ICheckBoxInputProps {
    id: string;
    name: string;
    isChecked: boolean;
    labelValue?: string;
}

const CheckBoxInput = ({ id, name, isChecked, labelValue }: ICheckBoxInputProps) => {
    return (
        <div className="app__input-container checkbox">
            <input
                id={id}
                type="checkbox"
                name={name}
                checked={isChecked}
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