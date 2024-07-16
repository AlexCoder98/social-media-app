import SmallPost from "../components/Post/Post-small";

import { postsData } from "../helpers/posts-data";

const PostsPage = () => {

    return (
        <div className="app__page posts">
            <h1 style={{ textAlign: 'center' }}>This is the Posts Page</h1>
            <hr />
            <ul className="app__posts-list">
                {postsData.map((post, i) => (
                    <SmallPost
                        key={i + 1}
                        title={post.title}
                        imgSrc={post.imgSrc}
                        imgAlt={post.imgAlt}
                        linkContent={post.linkContent}
                        link={`${i + 1}`}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PostsPage;