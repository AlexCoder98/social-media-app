import RegularPost from "../components/Body/Posts/RegularPost";

import { useAppSelector } from "../hooks/redux";
import { useGetUserPostsQuery } from "../state/api/appApiSlice";

const PostsPage = () => {
    const { accessToken } = useAppSelector(state => state.authReducer);
    const { data: posts, isLoading } = useGetUserPostsQuery(accessToken!);

    console.log(posts);

    return (
        <div
            className="app__page"
            data-page-name="posts"
        >
            {isLoading && <h1>Loading...</h1>}
            <ul className="app__posts-list">
                {posts ? posts.map(post => (
                    <RegularPost
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        creator={post.creator}
                        creationDate={post.creationDate}
                    />
                )) : (
                    <h2>No posts yet!</h2>
                )}
            </ul>

        </div>
    )
}

export default PostsPage;