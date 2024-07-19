import SmallPost from '../components/Post/Post';
import { useAppSelector } from '../components/hooks/redux';
import '../styles/MainPage.css';

const MainPage = () => {
    const posts = useAppSelector(state => state.posts.posts);
    return (
        <div className="app__page main">
            <h1>This is the main page</h1>
            <hr />
            {posts.length ? (
                <ul className="app__posts-list">
                    {posts.map((post, i) => (
                        <SmallPost
                            key={i + 1}
                            id={post.id}
                            title={`${post.title} ${i + 1}`}
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

export default MainPage;