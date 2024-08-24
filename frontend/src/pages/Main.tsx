import SmallPost from '../components/Post/Post';
import { useAppSelector } from '../hooks/redux';
import '../styles/MainPage.css';

const MainPage = () => {
    const user = useAppSelector(state => state.user);

    console.log('USER ON MAIN PAGE');
    console.log(user);

    return (
        <div className="app__page main">
            <header className="app__main-page-header">
                <h1 className="app__h1">Main Page</h1>
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

export default MainPage;