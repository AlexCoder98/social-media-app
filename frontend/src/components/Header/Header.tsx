import SignInNavBar from "./SignInNavBar";
import SignOutNavBar from "./SignOutNavBar";

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