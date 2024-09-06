import { Link, useLocation } from "react-router-dom";

import { PostPropsType } from "../../types/post";

const Post = ({ id, title, image, description }: PostPropsType) => {
    const location = useLocation();

    return (
        <li className="app__post">
            <header className="app__post-head">
                <h3 className="app__post-h3">
                    {title}
                </h3>
            </header>
            <main className="app__post-body">
                <div
                    className="app__post-img-wrapper"
                    style={{ backgroundImage: `url(${image})` }}
                >
                </div>
                <div className="app__post-description-wrapper">
                    <p className="app__post-description">
                        {description}
                    </p>
                </div>
            </main>
            {location.pathname.endsWith('posts') && (
                <footer className="app__post-bottom">
                    <Link
                        to={id}
                        className="app__button post"
                        title={'Read more'}
                    >Read more</Link>
                </footer>
            )}
        </li>
    )
}

export default Post;