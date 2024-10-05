import { Link } from 'react-router-dom';

import NavigationLink from './NavigationLink';

import { useAppSelector } from '../../../hooks/redux';

import {
    navigationLoggedOutLinksData,
    navigationLoggedInLinksData
} from '../../../helpers/navigation-data';

import { IconType } from '../../../types/nav-link';

import '../../../styles/components_styles/Navigation.css';

const Navigation = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);
    const navigationType = isAuth === 'true' ? navigationLoggedInLinksData : navigationLoggedOutLinksData;

    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <Link
                    to={isAuth === 'false' ? '/' : 'main-page'}
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
                        iconName={navLink.iconName as IconType}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;