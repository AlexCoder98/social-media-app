import { NavLink } from 'react-router-dom';
import NavigationLink from './NavigationLink';

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
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        content={navLink.content}
                        title={navLink.title}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;