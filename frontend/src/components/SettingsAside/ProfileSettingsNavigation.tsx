import NavigationLink from "../Header/Navigation/NavigationLink";
import { profileSettingsNavigationData } from "../../helpers/navigation-data";
import { IconName } from "@fortawesome/fontawesome-svg-core";

import '../../styles/components_styles/profile_settings/ProfileSettingsNavigation.css';

const ProfileSettingsNavigation = () => {
    return (
        <nav className="app__profile-settings-navigation">
            <ul className="profile-settings-navigation__links-list">
                {profileSettingsNavigationData.map((navLink, i) =>
                    <NavigationLink
                        key={i + 1}
                        to={navLink.url}
                        title={navLink.title}
                        content={navLink.content}
                        iconName={navLink.iconName as IconName}
                    />
                )}
            </ul>
        </nav>
    )
};

export default ProfileSettingsNavigation;