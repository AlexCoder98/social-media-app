import { EButtonTypesType } from "../../../types/button";

interface IButtonProps {
    className: string;
    content: string;
    type: EButtonTypesType;
    title?: string;
}

const Button = ({ className, content, type, title }: IButtonProps) => {
    return (
        <button
            className={className}
            type={type}
            title={title}
        >
            {content}
        </button>
    );
};

export default Button;