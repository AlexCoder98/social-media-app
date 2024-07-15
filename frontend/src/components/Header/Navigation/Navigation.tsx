import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

import NavigationLink from './NavigationLink';

import { changeBgPosition } from '../../../utils/change-bg-position';

import { navigationLoggedOutLinksData, navigationLoggedInLinksData } from '../../../helpers/navigation-data';

import '../../../styles/Navigation.css';

const Navigation = () => {
    const { state } = useContext(AppContext);

    let navigationType = state.isUserLoggedIn ? navigationLoggedInLinksData : navigationLoggedOutLinksData;


    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <Link
                    to="/"
                    className="app__nav-link"
                    title="Go to home page"
                // onClick={changeBgPosition}
                >
                    mySocialMediaApp
                </Link>
            </div>
            <ul className="app__navigation-variant">
                {navigationType.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        content={navLink.content}
                        title={navLink.title}
                    // clickHandler={changeBgPosition}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;