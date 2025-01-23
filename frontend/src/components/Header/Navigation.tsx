import { NavLink, Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "../../utils/getFontAweasomeIcon";

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
    const icon = getFontAwesomeIcon('fab', 'hive');
    return (
        <nav className="app__navigation">
            <div className="navigation__logo-section">
                <NavLink
                    to="/home"
                    title="Go to the home page"
                    className="navigation__logo-link"
                >
                    <FontAwesomeIcon icon={icon} />
                </NavLink>
                <SearchUsersInput />
            </div>
            <ul className="navigation__navigation-links-container">
                {navigationData.map((el, i) => (
                    <NavigationLink
                        key={i}
                        path={el.path}
                        prefix={'fas'}
                        content={el.content}
                        title={el.title}
                        className={el.className}
                    />
                ))}
            </ul>
            <div className="navigation__user-section">
                <Link
                    to="/user/1"
                    title="Go to the user page"
                    className="user-section__link"
                >
                    Name Surname
                </Link>
                <Link
                    to="/user/1"
                    title="Go to the user page"
                    className="user-section__link"
                >
                    <div className="link__user-image-wrapper">
                        <img
                            src="#"
                            className="user-image-wrapper__user-image"
                            alt="User Image"
                        />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navigation;