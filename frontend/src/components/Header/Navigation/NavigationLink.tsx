import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    library,
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'


import { NavigationLinkProps } from '../../../types/nav-link';

library.add(fas);

const NavigationLink = ({ to, content, title, iconName }: NavigationLinkProps) => {

    const iconLookUp: IconLookup = { prefix: 'fas', iconName: iconName! }
    const iconDefinition: IconDefinition = findIconDefinition(iconLookUp)

    return (
        <li className="app__navigation-item-container">
            <NavLink
                to={to}
                className={({ isActive }) => {
                    return isActive ? 'app__nav-link active' : 'app__nav-link'
                }}
                title={title}
            >
                {iconName && (
                    <span className="icon-container">
                        <FontAwesomeIcon icon={iconDefinition} />
                    </span>
                )}
                {content}
            </NavLink>
        </li>
    )
}

export default NavigationLink;