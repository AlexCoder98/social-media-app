import { useState, useEffect } from "react";

import { Outlet, Link } from "react-router-dom";

import ProfileSettingsNavigation from "../components/SettingsAside/ProfileSettings";

import { useAppDispatch } from "../hooks/redux";

import { getSettings } from "../state/user/actions";

import { FetchSettingsHeaderType } from "../types/reducers/user";

import '../styles/pages_styles/Settings.css';
import '../styles/components_styles/Button.css';
import '../styles/components_styles/Form.css';

const SettingsPage = () => {
    const [settingsHeaderData, setSettingsHeaderData] = useState({
        name: '',
        surname: '',
        profileImage: ''
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken')!;
        dispatch(getSettings(accessToken)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const headerData = result.payload as FetchSettingsHeaderType;
                setSettingsHeaderData({
                    name: headerData.name,
                    surname: headerData.surname,
                    profileImage: headerData.profileImage,
                });
            }
        });
    }, []);

    return (
        <div className="app__page settings">
            <header className="settings__header">
                <section className="settings__user-data">
                    <div className="settings__img-wrapper">
                        <img
                            className="settings__profile-image"
                            src={settingsHeaderData.profileImage}
                            alt="Profile" />
                    </div>
                    <h2>
                        <span className="profile__first-name">{settingsHeaderData.name}</span> <span className="profile__last-name">{settingsHeaderData.surname}</span>
                    </h2>
                </section>
                <section className="settings__buttons">
                    <Link
                        to="/profile"
                        className="app__button back"
                        title="Go to profile page"
                    >Go back</Link>
                </section>
            </header>
            <main className="settings__main">
                <ProfileSettingsNavigation />
                <aside className="settings__aside">
                    <Outlet />
                </aside>
            </main>
        </div>
    )
};

export default SettingsPage;