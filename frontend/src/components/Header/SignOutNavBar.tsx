import { NavLink } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationLink from "../shared/links/NavigationLink";

import { getFontAwesomeIcon } from "../../utils/getFontAweasomeIcon";

import { signOutNavigationData } from "../../helpers/nav-data";

const SignOutNavBar = () => {
    const icon = getFontAwesomeIcon('fab', 'hive');

    return (
        <nav className="app__navigation align-right">
            <div className="navigation__logo-section">
                <NavLink
                    to="/"
                    title="Go to the home page"
                    className="navigation__logo-link"
                >
                    <FontAwesomeIcon icon={icon} />
                </NavLink>
            </div>
            <ul className="navigation__navigation-links-container">
                {signOutNavigationData.map((link, i) => (
                    <NavigationLink
                        key={i}
                        path={link.path}
                        prefix={'fas'}
                        content={link.content}
                        title={link.title}
                        className={link.className}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default SignOutNavBar;