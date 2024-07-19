import { Link } from "react-router-dom";
import SmallPost from "../components/Post/Post";

import { useAppSelector } from "../components/hooks/redux";

import '../styles/Posts.css';

const PostsPage = () => {
    const posts = useAppSelector(state => state.posts.posts);

    return (
        <div className="app__page posts">
            <h1>This is the Posts Page</h1>
            <section className="app__section create-new">
                <Link
                    to={"create-new"}
                    className="app__button"
                    title="Create new post"
                >Create post</Link>
            </section>
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
                <h2>No posts yet</h2>
            )}
        </div>
    )
}

export default PostsPage;