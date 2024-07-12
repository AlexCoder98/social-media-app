import { NavLink } from 'react-router-dom';

import { NavigationLinkProps } from '../../../types/nav-link';

const NavigationLink = ({ clickHandler, to, content, title }: NavigationLinkProps) => {

    return (
        <li className="app__navigation-item-container">
            <NavLink
                to={to}
                className={({ isActive }) => {
                    return isActive ? 'app__nav-link active' : 'app__nav-link'
                }}
                title={title}
                onClick={clickHandler}
            >
                {content}
            </NavLink>
        </li>
    )
}

export default NavigationLink;