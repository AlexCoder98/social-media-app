import { NavLink } from 'react-router-dom';

import { navigationLinksData } from '../../../helpers/navigation-data';

import '../../../styles/Navigation.css';

const Navigation = () => {
    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? 'app__nav-link active' : 'app__nav-link'
                    }}
                    title="Go to home page"
                >
                    my<span className="app__logo-span">SocialMediaApp</span>
                </NavLink>
            </div>
            <ul className="app__navigation-variant">
                {navigationLinksData.map((navLink, i) =>
                    <li key={i} className="app__navigation-item-container">
                        <NavLink
                            to={navLink.url}
                            className={({ isActive }) => {
                                return isActive ? 'app__nav-link active' : 'app__nav-link'
                            }}
                            title={navLink.title}
                        >
                            {navLink.content}
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav >
    )
}

export default Navigation;