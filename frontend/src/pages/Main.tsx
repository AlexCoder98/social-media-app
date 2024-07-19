import SmallPost from '../components/Post/Post';
import { useAppSelector } from '../components/hooks/redux';
import '../styles/MainPage.css';

const MainPage = () => {
    const posts = useAppSelector(state => state.posts.posts);
    return (
        <div className="app__page main">
            <header className="app__main-page-header">
                <h1 className="app__h1">Main Page</h1>
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
                <h2>No posts yet</h2>
            )}
        </div>
    )
}

export default MainPage;