import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getFontAwesomeIcon } from "../../../utils/getFontAweasomeIcon";

const SearchUsersInput = () => {
    const searchIcon = getFontAwesomeIcon('magnifying-glass');

    return (
        <div className="navigation__input-container">
            <label htmlFor="search-users">
                <FontAwesomeIcon icon={searchIcon} />
            </label>
            <input
                type="text"
                id="search-users"
                name="search-users"
                placeholder="Search users..."
            />
        </div>
    );
};

export default SearchUsersInput;