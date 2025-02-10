import { Link } from "react-router";

import { useAppSelector } from "../../../hooks/redux";

import { useFetchUserSectionNavDataQuery } from "../../../state/api/appApiSlice";

const UserSection = () => {
    const { accessToken, userId } = useAppSelector(state => state.authReducer);
    const { data: user, isLoading } = useFetchUserSectionNavDataQuery({
        accessToken: accessToken!,
        userId: userId!,
    });

    return (
        <div className="navigation__user-section">
            {isLoading && <p>Loading...</p>}
            <Link
                to={`/user/${userId}`}
                title={`Go to the ${user?.name} ${user?.surname} profile`}
                className="user-section__link"
            >
                <span className="link__text">{user?.name} {user?.surname}</span>
            </Link>
            <Link
                to={`/user/${userId}`}
                title={`Go to the ${user?.name} ${user?.surname} profile`}
                className="user-section__link"
            >
                <div className="link__user-image-wrapper">
                    <img
                        src={`http://localhost:8080/${user?.profileImage}`}
                        className="user-image-wrapper__user-image"
                        alt={`${user?.name} ${user?.surname} profile image`}
                    />
                </div>
            </Link>
        </div>
    );
};

export default UserSection;