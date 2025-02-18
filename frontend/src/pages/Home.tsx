import RegularPost from "../components/Body/Posts/RegularPost/RegularPost";
import Loader from "../components/shared/messages/Loader";

import { useAppSelector } from "../hooks/redux";
import { useGetAllPostsQuery } from "../state/api/appApiSlice";

import '../styles/body/lists/posts-list.scss';

const HomePage = () => {
    const { accessToken } = useAppSelector(state => state.authReducer);
    const { data: posts, isLoading } = useGetAllPostsQuery(accessToken!);

    console.log(posts);

    return (
        <div
            className="app__page"
            data-page-name="home"
        >
            {isLoading ? <Loader /> : (
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
                        <p className="no-posts">No posts yet!</p>
                    )}
                </ul>
            )}
        </div>
    )
}

export default HomePage;