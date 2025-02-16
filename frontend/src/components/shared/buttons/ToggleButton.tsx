import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "../../../utils/getFontAweasomeIcon";

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";



interface IToggleButtonProps {
    className: string;
    onClick: () => void;
    prefix?: string;
    content?: string;
}

const ToggleButton = (
    { className, onClick, prefix, content }: IToggleButtonProps
) => {
    const icon = getFontAwesomeIcon(prefix as IconPrefix, content as IconName);

    return (
        <button
            className={className}
            onClick={onClick}
        >{icon ? <FontAwesomeIcon icon={icon} /> : content}</button>
    );
};

export default ToggleButton;