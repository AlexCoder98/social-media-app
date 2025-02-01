import SignInNavBar from "./SignIn/SignInNavBar";
import SignOutNavBar from "./SignOut/SignOutNavBar";

import '../../styles/header/header.scss';

const Header = () => {
    return (
        <header className="app__header">
            <SignInNavBar />
            <SignOutNavBar />
        </header>
    )
};

export default Header;