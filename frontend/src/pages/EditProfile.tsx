import { Link } from 'react-router-dom';

import EditProfileForm from '../components/Forms/EditProfile/EditProfile';

import '../styles/EditProfilePage.css';
import '../styles/Form.css';

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