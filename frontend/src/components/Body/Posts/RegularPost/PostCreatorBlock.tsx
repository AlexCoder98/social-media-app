import { Link } from "react-router";

interface IPostCreatorProps {
    id: string;
    name: string;
    surname: string;
    profileImage: string;
    creationDate: string;
}

const PostCreator = (
    { id, name, surname, profileImage, creationDate }: IPostCreatorProps
) => {
    return (
        <div className="post__creator-data-container">
            <div className="post__creator-image-container">
                <Link
                    to={`/user/${id}`}
                    className="post__creator-image-link"
                    title={`${name} ${surname} profile`}
                >
                    <div className="post__creator-image-wrapper">
                        <img
                            className="post__creator-image"
                            src={`http://localhost:8080/${profileImage}`}
                            alt={`${name} ${surname} image`}
                        />
                    </div>
                </Link>
            </div>
            <div className="post__creator-name-container">
                <Link
                    to={`/user/${id}`}
                    className="post__creator-name-link"
                    title={`${name} ${surname} profile`}
                >
                    {name} {surname}
                </Link>
                <p className="post__creation-date">{creationDate}</p>
            </div>
        </div>
    );
};

export default PostCreator;