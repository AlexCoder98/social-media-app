import { NavLink } from "react-router";

import SearchUsersInput from "../shared/inputs/SearchUsersInput";
import NavigationLink from "../shared/links/NavigationLink";

const navigationData = [
    {
        path: '/home',
        content: 'house',
        title: 'Home Page',
        className: ''
    },
    {
        path: '/posts',
        content: 'newspaper',
        title: 'My Posts',
        className: ''
    },
    {
        path: '/friends',
        content: 'users',
        title: 'Friends',
        className: ''
    }
]

const Navigation = () => {
    return (
        <nav className="app__navigation">
            <div className="navigation__logo-section">
                <NavLink
                    to="/home"
                    title="Go to the home page"
                    className="navigation__logo-link"
                >
                    mySocialMediaApp
                </NavLink>
                <SearchUsersInput />
            </div>
            <ul className="navigation__navigation-links-container">
                {navigationData.map((el, i) => (
                    <NavigationLink
                        key={i}
                        path={el.path}
                        content={el.content}
                        title={el.title}
                        className={el.className}
                    />
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;