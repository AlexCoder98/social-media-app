import { lazy } from 'react';
import { Route, Link, Outlet, Routes } from 'react-router-dom';

import EditProfileForm from '../components/Forms/EditProfile/EditProfile';
import EditProfileNavigation from '../components/Navigations/EditProfileNavigation';

import '../styles/pages_styles/EditProfilePage.css';
import '../styles/components_styles/Form.css';

const EditPublicInformationPage = lazy(() => import('../pages/EditPublicInformationPage'));
const EditAccessPage = lazy(() => import('../pages/EditAccessPage'));

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
                <aside className="edit-profile-main__aside">
                    <EditProfileNavigation />
                </aside>
                <Outlet />
                <Routes>
                    <Route path="/settings/public-information" element={<EditPublicInformationPage />} />
                    <Route path="/settings/access" element={<EditAccessPage />} />
                </Routes>
                <EditProfileForm />
            </main>
        </div>
    )
}

export default EditProfilePage;