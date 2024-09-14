import { ButtonProps } from "../../types/button";

import '../../styles/components_styles/Button.css';

const Button = ({ method, className, content, type, title }: ButtonProps) => {
    return (
        <button
            className={className}
            type={type}
            title={title}
            onClick={method && method}
        >
            {content}
        </button>
    )
}

export default Button;