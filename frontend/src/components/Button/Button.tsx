import { ButtonProps } from "../../types/button";

import '../../styles/components_styles/Button.css';

const Button = ({ method, className, content, type, title, isDisabled }: ButtonProps) => {
    return (
        <button
            className={className}
            type={type}
            title={title}
            onClick={method && method}
            disabled={isDisabled}
        >
            {content}
        </button>
    )
}

export default Button;