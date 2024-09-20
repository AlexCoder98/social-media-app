import NavigationLink from "../Header/Navigation/NavigationLink";
import { editProfileNavigationData } from "../../helpers/navigation-data";

const EditProfileNavigation = () => {
    const userId = sessionStorage.getItem('userId');

    console.log('USER ID');
    console.log(userId);


    return (
        <nav className="app__edit-profile-navigation">
            <ul className="edit-profile-navigation__links-list">
                <NavigationLink
                    to={`/profile/${userId}/edit?=public`}
                    title="Public information"
                    content="Public information"
                />
                <NavigationLink
                    to={`/profile/${userId}/edit?=access`}
                    title="Access"
                    content="Access"
                />
                {/* {editProfileNavigationData.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={
                            navLink.content === 'Public information' ? `/profile/${userId}/${navLink.url}` : 
                        }
                        title={navLink.title}
                        content={navLink.content}
                    />
                )} */}
            </ul>
        </nav>
    )
};

export default EditProfileNavigation;