import NavigationLink from "../Header/Navigation/NavigationLink";
import { editProfileNavigationData } from "../../helpers/navigation-data";

import '../../styles/components_styles/profile_settings/ProfileSettingsNavigation.css';

const ProfileSettingsNavigation = () => {
    return (
        <nav className="app__profile-settings-navigation">
            <ul className="profile-settings-navigation__links-list">
                {editProfileNavigationData.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        title={navLink.title}
                        content={navLink.content}
                    />
                )}
            </ul>
        </nav>
    )
};

export default ProfileSettingsNavigation;