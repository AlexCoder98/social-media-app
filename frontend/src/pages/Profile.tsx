import { useNavigate, Link } from "react-router-dom";

import { signOut } from '../state/user/userSlice';
import { useAppDispatch, useAppSelector } from "../hooks/redux";

import Button from "../components/Button/Button";

import '../styles/Profile.css';

const ProfilePage = () => {
    const user = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { name, surname } = user.necessary;
    const { profileImage, status, aboutMe } = user.additional;

    console.log('Signed Up User');
    console.log(user);

    const handleSignOut = () => {
        dispatch(signOut(false));
        navigate('/');
    }

    return (
        <div className="app__page profile">
            <header className="app__profile-page-header">
                <h1 className="app__h1">Profile</h1>
                <section className="app__profile-buttons-wrapper">
                    <Link
                        className="app__button edit-profile"
                        to="edit-profile"
                        title="Edit your profile"
                    >Edit profile</Link>
                    <Button
                        className={"app__button"}
                        content={"Sign out"}
                        type={"button"}
                        title={"Sign out"}
                        method={handleSignOut}
                    />
                </section>
            </header>
            <main className="app__profile-page-main">
                <section className="profile__header">
                    <div className="profile__photo-wrapper">
                        <img
                            className="profile__photo"
                            src={profileImage ? profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                            alt={`${name} ${surname} avatar`}
                        />
                    </div>
                    <div className="profile__about-me">
                        <section className="profile__general-info">
                            <div className="profile__name-container">
                                <h2 className="profile__name">
                                    <span className="profile__first-name">{name}</span> <span className="profile__first-name">{surname}</span>
                                </h2>
                                {status && <p className="profile__status">{status}</p>}
                            </div>
                            <div className="profile__sign-out-wrapper">

                            </div>
                        </section>
                        <article className="profile__about-me-wrapper">
                            <h3 className="profile__about-me-h3">About me</h3>
                            <p className="profile__text">{aboutMe ? aboutMe : 'No additional info provided :('}</p>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ProfilePage;