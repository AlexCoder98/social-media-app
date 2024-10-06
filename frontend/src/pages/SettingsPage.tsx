import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import ProfileSettingsNavigation from "../components/SettingsAside/ProfileSettingsNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../hooks/redux";
import { useFontAwesomeIcon } from "../hooks/useFontAwesomeIcon";

import { getSettings } from "../state/user/actions";

import { SettingsHeaderType } from "../types/reducers/user";

import '../styles/pages_styles/Settings.css';
import '../styles/components_styles/Button.css';
import '../styles/components_styles/Form.css';

const SettingsPage = () => {
    const [settingsHeaderData, setSettingsHeaderData] = useState({
        name: '',
        surname: '',
        profileImage: ''
    });

    const goBackIcon = useFontAwesomeIcon('arrow-left');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken')!;
        dispatch(getSettings(accessToken)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const headerData = result.payload as SettingsHeaderType;
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
                            src={settingsHeaderData.profileImage ? settingsHeaderData.profileImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                            alt="Profile" />
                    </div>
                    <Link
                        to="/profile"
                        title="Go to profile page"
                    >
                        <h2 className="settings__h2">
                            <span className="profile__first-name">{settingsHeaderData.name}</span> <span className="profile__last-name">{settingsHeaderData.surname}</span>
                        </h2>
                    </Link>
                </section>
                <section className="settings__buttons">
                    <Link
                        to="/profile"
                        className="app__button back"
                        title="Go to profile page"
                    >
                        {goBackIcon && (
                            <span className="icon-container" style={{ marginRight: '5px', marginLeft: 'none' }}>
                                <FontAwesomeIcon icon={goBackIcon} />
                            </span>
                        )}
                        Go to profile page</Link>
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