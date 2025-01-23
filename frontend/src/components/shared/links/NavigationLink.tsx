import { NavLink } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

import { getFontAwesomeIcon } from '../../../utils/getFontAweasomeIcon';

import '../../../styles/shared/links/navigation-links.scss';

interface INavigationLinkProps {
    path: string;
    prefix: string;
    content: string;
    title: string;
    className: string;
}

const NavigationLink = ({ path, prefix, content, title, className }: INavigationLinkProps) => {
    const icon = getFontAwesomeIcon(prefix as IconPrefix, content as IconName);

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