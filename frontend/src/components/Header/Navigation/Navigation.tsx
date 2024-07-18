import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import NavigationLink from './NavigationLink';

import { RootState } from '../../../state/store';

import { navigationLoggedOutLinksData, navigationLoggedInLinksData } from '../../../helpers/navigation-data';

import '../../../styles/Navigation.css';

const Navigation = () => {
    const isUserSignedIn = useSelector((state: RootState) => state.user.isSignedIn);
    const navigationType = isUserSignedIn ? navigationLoggedInLinksData : navigationLoggedOutLinksData;

    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <Link
                    to="/"
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
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;