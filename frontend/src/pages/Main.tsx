import { useLayoutEffect } from 'react';

import { getAllPosts } from '../state/post/actions';

import SmallPost from '../components/Post/Post';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import '../styles/MainPage.css';
import '../styles/Posts.css';

const MainPage = () => {
    const accessToken = sessionStorage.getItem('accessToken') as string;
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(getAllPosts(accessToken))
    }, [accessToken]);

    const { posts } = useAppSelector(state => state.post);

    console.log('POSTS ON MAIN PAGE');
    console.log(posts);

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
                <h2 className="app__h2" style={{ margin: '5rem 0' }}>No posts yet</h2>
            )}
        </div>
    )
}

export default MainPage;