import { Link } from "react-router-dom";
import SmallPost from "../components/Post/Post";

import { useAppSelector } from "../hooks/redux";

import '../styles/Posts.css';

const PostsPage = () => {
    // const posts = useAppSelector(state => state.posts.posts);

    const { userId } = useAppSelector(state => state.authentication)
    console.log('USER ID ' + userId);

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
            {/* {posts.length ? (
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
            )} */}
        </div>
    )
}

export default PostsPage;