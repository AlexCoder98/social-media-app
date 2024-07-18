import { useNavigate } from "react-router-dom";

import { signOut } from '../state/user/userSlice';
import { useAppDispatch, useAppSelector } from "../components/hooks/redux";

import Button from "../components/Button/Button";

const ProfilePage = () => {
    const user = useAppSelector(state => state.users.userObj);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    console.log('Signed Up User');
    console.log(user);

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/');
    }

    return (
        <div className="app__page profile">
            <header className="profile__header">
                <div className="profile__img-wrapper">
                    <img
                        className="profile__photo"
                        src=""
                        alt=""
                    />
                </div>
                <section className="profile__general-info">
                    <div className="profile__name-container">
                        <h2 className="profile__name">First name and Last name</h2>
                        <p className="profile__status">Status</p>
                    </div>
                </section>
            </header>
            <main className="profile__main">
                <section className="profile__about-me-wrapper">
                    <h3 className="profile__about-me-h3">About me</h3>
                    <p className="profile__about-me text">About me text</p>
                </section>
            </main>
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