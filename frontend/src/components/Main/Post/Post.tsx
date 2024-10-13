import { Link, useLocation } from "react-router-dom";

import { PostPropsType } from "../../../types/post";

import '../../../styles/components_styles/Post.css';

const Post = ({ id, title, image, description, creator, creationDate }: PostPropsType) => {
    const location = useLocation();

    return (
        <li className="app__post">
            <header className="post__head">
                <section className="post__creation-details-wrapper">
                    <img
                        className="post__creator-photo"
                        src={`http://localhost:8080/${creator.profileImage}`}
                        alt={`${creator.name} ${creator.surname} avatar`}
                    />
                    <div className="post__creation-details">
                        <p className="post__creator-name">{creator.name} {creator.surname}</p>
                        <p className="post__creation-date">{creationDate}</p>
                    </div>
                </section>
                <h3 className="post__h3">
                    {title}
                </h3>
            </header>
            <main className="post__body">
                <div className="post__img-wrapper">
                    <img
                        className="post__image"
                        src={image}
                        alt={`Post - ${title}`} />
                </div>
                <div className="post__description-wrapper">
                    <p className="post__description">
                        {description}
                    </p>
                </div>
            </main>
            {
                location.pathname.endsWith('posts') && (
                    <footer className="post__bottom">
                        <Link
                            to={id}
                            className="app__button post"
                            title={'Read more'}
                        >Read more</Link>
                    </footer>
                )
            }
        </li >
    )
}

export default Post;