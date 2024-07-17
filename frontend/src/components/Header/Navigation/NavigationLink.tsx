import { NavLink } from 'react-router-dom';

import { NavigationLinkProps } from '../../../types/nav-link';

const NavigationLink = ({ to, content, title }: NavigationLinkProps) => {

    return (
        <li className="app__navigation-item-container">
            <NavLink
                to={to}
                className={({ isActive }) => {
                    return isActive ? 'app__nav-link active' : 'app__nav-link'
                }}
                title={title}
            >
                {content}
            </NavLink>
        </li>
    )
}

export default NavigationLink;