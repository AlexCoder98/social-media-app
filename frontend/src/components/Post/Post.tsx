import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";

import { PostStateType } from "../../state/post/postSlice";
import { deletePost } from '../../state/post/postSlice'

const Post = ({ id, title, image, description }: PostStateType) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const handleOnDeletePost = (postId: string) => {
        dispatch(deletePost(postId));
    }

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
            {location.pathname.includes('posts') && (
                <footer className="app__post-bottom">
                    <Link
                        to={`${id}`}
                        className="app__button post"
                        title={`Go to post ${title}`}
                    >Read more</Link>
                    <button
                        className="app__button delete"
                        title="Delete post"
                        onClick={() => handleOnDeletePost(id)}
                    >
                        Delete
                    </button>
                </footer>
            )}
        </li>
    )
}

export default Post;