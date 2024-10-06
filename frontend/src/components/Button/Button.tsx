import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFontAwesomeIcon } from "../../hooks/useFontAwesomeIcon";

import { ButtonProps } from "../../types/button";

import '../../styles/components_styles/Button.css';

const Button = ({ method, className, content, type, title, isDisabled, iconName }: ButtonProps) => {
    const icon = useFontAwesomeIcon(iconName!)

    return (
        <button
            className={className}
            type={type}
            title={title}
            onClick={method && method}
            disabled={isDisabled}
        >
            {content}
            {icon && (
                <span className="icon-container">
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
        </button>
    )
}

export default Button;