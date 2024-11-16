import { useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getUser } from "../state/user/actions";
import { signOut } from "../state/authentication/actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useFontAwesomeIcon } from "../hooks/useFontAwesomeIcon";

import '../styles/pages_styles/ProfilePage.css';

const ProfilePage = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const settingsIcon = useFontAwesomeIcon('gear');

    useLayoutEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        const userId = sessionStorage.getItem('userId');
        const reqData = {
            accessToken: accessToken!,
            userId: userId!
        };
        dispatch(getUser(reqData))
    }, []);

    const { name, surname, profileImage, status, bio } = user;

    const handleSignOut = () => {
        dispatch(signOut('false'))
            .then(result => {
                if (result.meta.requestStatus === 'fulfilled') {
                    navigate('/');
                }
            });
    }

    return (
        <div className="app__page profile">
            <header className="app__profile-page-header">
                <h1 className="app__h1">Profile</h1>
                <section className="app__profile-buttons-wrapper">
                    <Link
                        className="app__button edit-profile"
                        to="/settings/profile"
                        title="Profile settings"
                    >Settings
                        {settingsIcon && (
                            <span className="icon-container">
                                <FontAwesomeIcon icon={settingsIcon} />
                            </span>
                        )}</Link>
                    <Button
                        className={"app__button"}
                        content={"Sign out"}
                        type={"button"}
                        title={"Sign out"}
                        iconName={"right-from-bracket"}
                        method={handleSignOut}
                    />
                </section>
            </header>
            <main className="app__profile-page-main">
                <section className="app__profile">
                    <div className="app__profile-head">
                        <div className="profile__photo-wrapper">
                            <img
                                className="profile__photo"
                                src={profileImage ? profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                                alt={`${name} ${surname} avatar`}
                            />
                        </div>
                        <div className="profile__name-section">
                            <h2 className="profile__name">
                                <span className="profile__first-name">{name}</span> <span className="profile__last-name">{surname}</span>
                            </h2>
                            {status && <p className="profile__status">{status}</p>}
                        </div>
                    </div>
                    <hr className="app__separator" />
                    <article className="profile__body">
                        <p className="profile__text">{bio ? bio : 'No additional info provided :('}</p>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default ProfilePage;