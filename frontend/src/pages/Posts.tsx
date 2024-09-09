import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../state/post/actions";

import SmallPost from "../components/Post/Post";

import { useAppDispatch, useAppSelector } from "../hooks/redux";

import '../styles/Posts.css';
import '../styles/Button.css';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const accessToken = sessionStorage.getItem('accessToken') as string;

    useLayoutEffect(() => {
        dispatch(getPosts(accessToken));
    }, [accessToken]);

    const { posts } = useAppSelector(state => state.post);

    return (
        <div className="app__page posts">
            <header className="app__posts-page-header">
                <h1 className="app__h1">My Posts</h1>
                <section className="app__posts-buttons-wrapper">
                    <Link
                        to={"create-new"}
                        className="app__button add"
                        title="Create new post"
                    >New</Link>
                </section>
            </header>
            {posts.length ? (
                <ul className="app__posts-list">
                    {posts.map((post, i) => (
                        <SmallPost
                            key={i + 1}
                            id={post.id}
                            title={post.title}
                            image={post.image}
                            description={post.description}
                        />
                    ))}
                </ul>
            ) : (
                <h2 className="app__h2" style={{ margin: '5rem 0' }}>No posts yet</h2>
            )}
        </div>
    )
}

export default PostsPage;