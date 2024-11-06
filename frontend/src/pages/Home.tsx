import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from '../components/Main/Post/Post';
import NoMoreData from '../components/Message/NoMoreData';
import FetchingData from '../components/Message/FetchingData';

import { getAllPosts } from '../state/post/actions';
import { incrementPage, resetAllPosts } from '../state/post/postSlice';

import { useAppSelector, useAppDispatch } from '../hooks/redux';

import '../styles/pages_styles/LoggedInMainPage.css';
import '../styles/components_styles/Posts.css';

const HomePage = () => {
    const accessToken = sessionStorage.getItem('accessToken') as string;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetAllPosts());
        dispatch(getAllPosts({
            accessToken: accessToken,
            page: 1,
        }));
        dispatch(incrementPage());
    }, []);

    const { allPosts, page, hasMore } = useAppSelector(state => state.post);

    const fetchMorePosts = () => {
        setTimeout(() => {
            dispatch(getAllPosts({
                accessToken: accessToken,
                page: page
            }));
            if (hasMore) {
                dispatch(incrementPage());
            }
        }, 2000);
    }

    return (
        <div className="app__page main">
            <header className="app__main-page-header">
                <h1 className="app__h1">Home Page</h1>
            </header>
            {allPosts.length ? (
                <InfiniteScroll
                    dataLength={allPosts.length}
                    next={fetchMorePosts}
                    hasMore={hasMore}
                    loader={<FetchingData />}
                    endMessage={<NoMoreData />}
                >
                    <ul className="app__posts-list">
                        {allPosts.map((post, i) => (
                            <Post
                                key={i + 1}
                                id={post.id}
                                title={post.title}
                                image={post.image}
                                description={post.description}
                                creator={{
                                    name: post.creator.name,
                                    surname: post.creator.surname,
                                    profileImage: post.creator.profileImage
                                }}
                                creationDate={post.creationDate}
                            />
                        ))}
                    </ul>
                </InfiniteScroll>
            ) : (
                <p style={{ textAlign: 'center', margin: '50% 0' }}>No posts yet</p>
            )}
        </div>
    )
}

export default HomePage;