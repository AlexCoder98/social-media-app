import { lazy } from 'react';
import { Route, Link, Outlet, Routes } from 'react-router-dom';

import EditProfileForm from '../components/Forms/EditProfile/EditProfile';
import EditProfileNavigation from '../components/SettingsAside/ProfileSettings';

import '../styles/pages_styles/EditProfilePage.css';
import '../styles/components_styles/Form.css';

const EditPublicInformationPage = lazy(() => import('./GeneralSettings'));
const EditAccessPage = lazy(() => import('./AccessSettings'));

const EditProfilePage = () => {
    return (
        <div className="app__page edit-profile">
            <header className="app__edit-profile-header">
                <h1 className="app__h1">Edit Profile</h1>
                <Link
                    className="app__button"
                    to=".."
                    title="Back to profile"
                >Back</Link>
            </header>
            <main className="app__edit-profile-main">
                <EditProfileForm />
            </main>
        </div>
    )
}

export default EditProfilePage;