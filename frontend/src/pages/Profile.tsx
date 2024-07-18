import { useNavigate } from "react-router-dom";

import { signOut } from '../state/user/userSlice';
import { useAppDispatch } from "../components/hooks/redux";

import Button from "../components/Button/Button";

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOut());
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