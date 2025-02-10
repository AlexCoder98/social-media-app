import { NavLink, useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "../../../utils/getFontAweasomeIcon";

import SearchUsersInput from "../../shared/inputs/SearchUsersInput";
import NavigationLink from "../../shared/links/NavigationLink";
import UserSection from "./UserSection";

import { useAppDispatch } from "../../../hooks/redux";
import { signOut } from "../../../state/auth/authSlice";
import { setSuccessMessage, setErrorMessage } from "../../../state/message/messageSlice";

import { signInNavigationData } from "../../../helpers/nav-data";

const SignInNavBar = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const icon = getFontAwesomeIcon('fab', 'hive');

    const handleOnClick = async () => {
        try {
            const result = await dispatch(signOut());
            const { meta: { requestStatus }, payload } = result;

            if (requestStatus === 'rejected') {
                const message = 'Something went wrong. Cannot sign out!';
                throw new Error(message);
            }

            dispatch(setSuccessMessage(payload));
            setTimeout(() => {
                dispatch(setSuccessMessage(null));
            }, 3000);
            navigate('/');
        } catch (error) {
            dispatch(setErrorMessage((error as Error).message));
            setTimeout(() => {
                dispatch(setErrorMessage(null));
            }, 3000);
        }
    }

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
                {signInNavigationData.map((link, i) => (
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
            <UserSection />
            <button
                onClick={handleOnClick}
            >Sign out</button>
        </nav>
    )
}

export default SignInNavBar;