import { Link } from "react-router-dom";
import SmallPost from "../components/Post/Post-small";

import { postsData } from "../helpers/posts-data";

import '../styles/Posts.css';

const PostsPage = () => {

    return (
        <div className="app__page posts">
            <h1 style={{ textAlign: 'center' }}>This is the Posts Page</h1>
            <section className="app__section create-new">
                <Link
                    to={"create-new"}
                    className="app__button"
                    title="Create new post"
                >Create post</Link>
            </section>
            <ul className="app__posts-list">
                {postsData.map((post, i) => (
                    <SmallPost
                        id={i + 1}
                        key={i + 1}
                        title={`${post.title} ${i + 1}`}
                        imgSrc={post.imgSrc}
                        imgAlt={post.imgAlt}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PostsPage;