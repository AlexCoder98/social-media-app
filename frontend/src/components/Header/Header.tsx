import SignInNavBar from "./SignIn/SignInNavBar";
import SignOutNavBar from "./SignOut/SignOutNavBar";

import { useAppSelector } from "../../hooks/redux";

import '../../styles/header/header.scss';

const Header = () => {
    const { isAuth } = useAppSelector(state => state.authReducer);

    return (
        <header className="app__header">
            {isAuth ? <SignInNavBar /> : <SignOutNavBar />}
        </header>
    )
};

export default Header;