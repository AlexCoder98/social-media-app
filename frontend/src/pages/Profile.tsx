import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button/Button";

import { AppContext } from "../context/AppContext";


const ProfilePage = () => {
    const { dispatchFn } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatchFn({ type: 'changed_login_status', isLogged: false });
        navigate('/');
    }

    return (
        <div className="app__page profile">
            <h1 style={{ textAlign: 'center' }}>This is the Profile Page</h1>
            <p>Click here to sign out</p>
            <Button
                className={"app__button"}
                content={"Sign out"}
                type={"button"}
                title={"Sign out"}
                method={handleSignOut}
            />
        </div>
    )
}

export default ProfilePage;