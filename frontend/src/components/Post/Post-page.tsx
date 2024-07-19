import { useParams, Link, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { deletePost } from '../../state/posts/postsSlice';

import '../../styles/Post.css';

const Post = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const posts = useAppSelector(state => state.posts.posts);
    const dispatch = useAppDispatch();
    const post = posts.find(post => post.id === postId)!;

    const handleOnDeletePost = (postId: string) => {
        dispatch(deletePost(postId));
        navigate('/posts');

    }

    return (
        <div className="app__post-single">
            <header className="app__post-single-head">
                <h3 className="app__post-single-h3">{post.title}</h3>
            </header>
            <main className="app__post-single-body">
                <div
                    className="app__post-single-img-wrapper"
                    style={{ backgroundImage: `url(${post.image})` }}
                >
                </div>
                <div className="app__post-single-text-container">
                    <p className="app__paragraph">{post.description}</p>
                </div>
            </main>
            <footer className="app__post-single-bottom">
                <Link
                    to="edit"
                    className={"app__button"}
                    title={"Edit post"}
                    type={"button"}
                    state={{
                        title: post.title,
                        imageUrl: post.image,
                        description: post.description
                    }}
                >Edit</Link>
                <button
                    className="app__button delete"
                    title="Delete post"
                    onClick={() => handleOnDeletePost(post.id)}
                >Delete</button>
            </footer>
        </div>
    )
}

export default Post;