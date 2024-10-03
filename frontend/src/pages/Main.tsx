import { useState, useEffect, useLayoutEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Post from '../components/Main/Post/Post';


import { getAllPosts } from '../state/post/actions';
import { increment, reset } from '../state/post/postSlice';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import '../styles/pages_styles/LoggedInMainPage.css';
import '../styles/components_styles/Posts.css';
import { PostResponseType } from '../types/reducers/post';

const MainPage = () => {
    // const [page, setPage] = useState<number>(1);
    const accessToken = sessionStorage.getItem('accessToken') as string;
    const dispatch = useAppDispatch();

    const { page } = useAppSelector(state => state.post);

    const reqData = {
        accessToken: accessToken,
        page: page,
    };

    useEffect(() => {
        console.log('Fired');
        dispatch(getAllPosts(reqData));
        // setPage(page + 1);
        dispatch(increment());
    }, []);

    console.log('PAGE NUMBER IS ' + page);

    const { allPosts, hasMore } = useAppSelector(state => state.post);

    console.log(allPosts);

    const fetchPosts = () => {
        console.log('Function fired...');
        dispatch(getAllPosts(reqData));
        if (hasMore) {
            dispatch(increment());
        }
        // setPage(page + 1);
    }

    return (
        <div className="app__page main">
            <header className="app__main-page-header">
                <h1 className="app__h1">Main Page</h1>
            </header>
            {/* {posts.length ? ( */}
            <InfiniteScroll
                dataLength={allPosts.length}
                next={fetchPosts}
                hasMore={hasMore}
                loader={<h3>Loading...</h3>}
                endMessage={<p>No more data to load...</p>}
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
            {/* // ) : (
            //     <h2 className="app__h2" style={{ margin: '5rem 0' }}>No posts yet</h2>
            // )} */}
        </div>
    )
}

export default MainPage;