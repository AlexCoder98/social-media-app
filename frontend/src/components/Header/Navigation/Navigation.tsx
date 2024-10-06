import { Link } from 'react-router-dom';

import NavigationLink from './NavigationLink';

import { useAppSelector } from '../../../hooks/redux';

import {
    navigationLoggedOutLinksData,
    navigationLoggedInLinksData
} from '../../../helpers/navigation-data';

import { IconName } from '@fortawesome/fontawesome-svg-core';

import '../../../styles/components_styles/Navigation.css';

const Navigation = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);
    const navigationType = isAuth === 'true' ? navigationLoggedInLinksData : navigationLoggedOutLinksData;
    const linkPath = isAuth === 'true' ? 'home' : '/';

    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <Link
                    to={linkPath}
                    className="app__nav-link"
                    title="Home page"
                >mySocialMediaApp</Link>
            </div>
            <ul className="app__navigation-variant">
                {navigationType.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        content={navLink.content}
                        title={navLink.title}
                        iconName={navLink.iconName as IconName}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;