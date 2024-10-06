import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavigationLinkProps } from '../../../types/nav-link';

import { useFontAwesomeIcon } from '../../../hooks/useFontAwesomeIcon';

const NavigationLink = ({ to, content, title, iconName }: NavigationLinkProps) => {
    const icon = useFontAwesomeIcon(iconName!);

    console.log(title);
    console.log(icon);

    return (
        <li className="app__navigation-item-container">
            <NavLink
                to={to}
                className={({ isActive }) => {
                    return isActive ? 'app__nav-link active' : 'app__nav-link'
                }}
                title={title}
            >
                {icon && (
                    <span className="icon-container">
                        <FontAwesomeIcon icon={icon} />
                    </span>
                )}
                {content}
            </NavLink>
        </li>
    )
}

export default NavigationLink;