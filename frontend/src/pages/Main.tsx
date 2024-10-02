import { useState, useEffect, useLayoutEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from '../components/Main/Post/Post';


import { getAllPosts } from '../state/post/actions';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import '../styles/pages_styles/LoggedInMainPage.css';
import '../styles/components_styles/Posts.css';
import { PostResponseType } from '../types/reducers/post';

const MainPage = () => {
    const [page, setPage] = useState<number>(1);
    const accessToken = sessionStorage.getItem('accessToken') as string;
    const dispatch = useAppDispatch();

    const reqData = {
        accessToken: accessToken,
        page: page,
    };

    useEffect(() => {
        dispatch(getAllPosts(reqData));
        setPage(page + 1);
    }, []);

    const { posts } = useAppSelector(state => state.post);
    const fetchPosts = () => {
        // console.log('Function fired...');
        dispatch(getAllPosts(reqData));
        setPage(page + 1);
    }

    return (
        <div className="app__page main">
            <header className="app__main-page-header">
                <h1 className="app__h1">Main Page</h1>
            </header>
            {/* {posts.length ? ( */}
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchPosts}
                hasMore={true}
                loader={<h3>Loading...</h3>}
                endMessage={<p>No more data to load...</p>}
            >
                <ul className="app__posts-list">
                    {posts.map((post, i) => (
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
            {/* // ) : (
            //     <h2 className="app__h2" style={{ margin: '5rem 0' }}>No posts yet</h2>
            // )} */}
        </div>
    )
}

export default MainPage;