import { Link } from 'react-router-dom';

import NavigationLink from './NavigationLink';

import { useAppSelector } from '../../../hooks/redux';

import { navigationLoggedOutLinksData, navigationLoggedInLinksData } from '../../../helpers/navigation-data';

import '../../../styles/Navigation.css';

const Navigation = () => {
    const { isAuth, userId } = useAppSelector((state) => state.authentication);
    const navigationType = isAuth ? navigationLoggedInLinksData : navigationLoggedOutLinksData;

    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <Link
                    to={isAuth ? "main-page" : "/"}
                    className="app__nav-link"
                    title="Home page"
                >mySocialMediaApp</Link>
            </div>
            <ul className="app__navigation-variant">
                {navigationType.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.content === 'Profile' ? `${navLink.url}/${userId}` : navLink.url}
                        content={navLink.content}
                        title={navLink.title}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;