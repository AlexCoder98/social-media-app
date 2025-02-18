import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFontAwesomeIcon } from "../../../utils/getFontAweasomeIcon";

import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

import '../../../styles/shared/buttons/regular-button.scss';


interface IRegularButtonProps {
    content: string;
    title: string;
    className: string;
    prefix?: string;
    iconName?: string;
    onClick?: () => void;
}

const RegularButton = ({ content, title, className, prefix, iconName }: IRegularButtonProps) => {
    const icon = getFontAwesomeIcon(prefix as IconPrefix, iconName as IconName);

    return (
        <button
            className={className}
            title={title}
        >{icon && <span className="icon-container"><FontAwesomeIcon icon={icon} /></span>} {content}</button>
    );
};

export default RegularButton;