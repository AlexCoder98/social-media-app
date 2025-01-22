import { NavLink } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import { getFontAwesomeIcon } from '../../../utils/getFontAweasomeIcon';

interface INavigationLinkProps {
    path: string;
    content: string;
    title: string;
    className: string;
}

const NavigationLink = ({ path, content, title, className }: INavigationLinkProps) => {
    const icon = getFontAwesomeIcon(content as IconName);

    return (
        <li className="navigation-links-container__link-container">
            <NavLink
                to={path}
                title={title}
                className={`link-container__link ${className}`}
            >
                <FontAwesomeIcon icon={icon} />
            </NavLink>
        </li>
    );
};

export default NavigationLink;