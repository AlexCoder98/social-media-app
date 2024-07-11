import { ButtonProps } from "../../types/button";

import '../../styles/Button.css';

const Button = ({ className, content, type, title }: ButtonProps) => {
    return (
        <button
            className={className}
            type={type}
            title={title}
        >
            {content}
        </button>
    )
}

export default Button;