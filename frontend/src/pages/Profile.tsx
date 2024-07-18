import { useNavigate } from "react-router-dom";

import { signOut } from '../state/user/userSlice';
import { useAppDispatch, useAppSelector } from "../components/hooks/redux";

import Button from "../components/Button/Button";

import '../styles/Profile.css';

const ProfilePage = () => {
    const user = useAppSelector(state => state.users.userObj);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { name, surname, profileImage } = user;

    console.log('Signed Up User');
    console.log(user);

    const handleSignOut = () => {
        dispatch(signOut());
        navigate('/');
    }

    return (
        <div className="app__page profile">
            <header className="profile__header">
                <div className="profile__photo-wrapper">
                    <img
                        className="profile__photo"
                        // src={profileImage}
                        src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_1280.png"
                        alt={`${name} ${surname} avatar`}
                    />
                </div>
                <section className="profile__about-me">
                    <section className="profile__general-info">
                        <div className="profile__name-container">
                            <h2 className="profile__name">
                                <span className="profile__first-name">Oleksandr</span> <span className="profile__first-name">Yurchuk</span>
                                {/* <span className="profile__first-name">{name}</span> <span className="profile__first-name">{surname}</span> */}
                            </h2>
                            <p className="profile__status">Status</p>
                        </div>
                        <div className="profile__sign-out-wrapper">
                            <Button
                                className={"app__button"}
                                content={"Sign out"}
                                type={"button"}
                                title={"Sign out"}
                                method={handleSignOut}
                            />
                        </div>
                    </section>
                    <section className="profile__about-me-wrapper">
                        <h3 className="profile__about-me-h3">About me</h3>
                        <p className="profile__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae ex urna. Praesent rhoncus, metus at blandit hendrerit, urna ex lacinia nisi, interdum congue nunc turpis at est. Mauris ultricies est sit amet nisl tincidunt, vitae laoreet velit varius. Nunc varius odio eu elit accumsan mattis. Nulla quis fermentum tortor, non ultricies nibh. Donec tempor lacinia tortor non venenatis. Donec hendrerit turpis non felis egestas imperdiet. Mauris placerat tortor nisl, at iaculis justo egestas nec. Vivamus luctus vel felis vitae viverra. Curabitur condimentum sem orci, eu placerat purus consequat a.</p>
                    </section>
                </section>
            </header>
        </div>
    )
}

export default ProfilePage;