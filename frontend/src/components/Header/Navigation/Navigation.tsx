import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';

import NavigationLink from './NavigationLink';

import { navigationLoggedOutLinksData, navigationLoggedInLinksData } from '../../../helpers/navigation-data';

import '../../../styles/Navigation.css';

const Navigation = () => {
    const { state } = useContext(AppContext);

    let navigationType = state.isUserLoggedIn ? navigationLoggedInLinksData : navigationLoggedOutLinksData;

    const changeBgPosition = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const anchorTitle = (e.target as HTMLAnchorElement | HTMLSpanElement).title;
        const bgElement = document.querySelector('.app__main-background') as HTMLImageElement;
        if (anchorTitle === 'Go to home page') {
            bgElement.classList.remove('aside');
        } else {
            bgElement.classList.add('aside');
        }
    }

    return (
        <nav className="app__main-navigation">
            <div className="app__logo-container">
                <NavLink
                    to="/"
                    className={({ isActive }) => {
                        return isActive ? 'app__nav-link active' : 'app__nav-link'
                    }}
                    title="Go to home page"
                    onClick={changeBgPosition}
                >
                    mySocialMediaApp
                </NavLink>
            </div>
            <ul className="app__navigation-variant">
                {navigationType.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        content={navLink.content}
                        title={navLink.title}
                        clickHandler={changeBgPosition}
                    />
                )}
            </ul>
        </nav >
    )
}

export default Navigation;