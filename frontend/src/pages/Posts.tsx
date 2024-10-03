import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../state/post/actions";

import Post from "../components/Main/Post/Post";

import { useAppDispatch, useAppSelector } from "../hooks/redux";

import '../styles/components_styles/Posts.css';
import '../styles/components_styles/Button.css';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const accessToken = sessionStorage.getItem('accessToken') as string;

    useLayoutEffect(() => {
        dispatch(getPosts(accessToken));
    }, [accessToken]);

    const { usersPosts } = useAppSelector(state => state.post);

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
            {usersPosts.length ? (
                <ul className="app__posts-list">
                    {usersPosts.map((post, i) => (
                        <Post
                            key={i + 1}
                            id={post.id}
                            title={post.title}
                            image={post.image}
                            description={post.description}
                            creator={{
                                name: post.creator.name,
                                surname: post.creator.surname,
                                profileImage: post.creator.profileImage
                            }}
                            creationDate={post.creationDate}
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