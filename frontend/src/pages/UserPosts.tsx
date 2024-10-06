import { useEffect } from "react";
import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../components/Main/Post/Post";
import NoMoreData from "../components/Message/NoMoreData";
import FetchingData from "../components/Message/FetchingData";

import { getUserPosts } from "../state/post/actions";
import { incrementPage, resetUserPosts } from "../state/post/postSlice";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useFontAwesomeIcon } from "../hooks/useFontAwesomeIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/components_styles/Posts.css';
import '../styles/components_styles/Button.css';

const UserPostsPage = () => {
    const accessToken = sessionStorage.getItem('accessToken') as string;
    const dispatch = useAppDispatch();
    const icon = useFontAwesomeIcon('plus');

    useEffect(() => {
        dispatch(resetUserPosts());
        dispatch(getUserPosts({
            accessToken: accessToken,
            page: 1
        }));
        dispatch(incrementPage())
    }, []);

    const { userPosts, page, hasMore } = useAppSelector(state => state.post);

    const fetchMorePosts = () => {
        setTimeout(() => {
            dispatch(getUserPosts({
                accessToken: accessToken,
                page: page
            }));
            if (hasMore) {
                dispatch(incrementPage());
            }
        }, 2000);
    }

    return (
        <div className="app__page posts">
            <header className="app__posts-page-header">
                <h1 className="app__h1">My Posts</h1>
                <section className="app__posts-buttons-wrapper">
                    <Link
                        to={"create-new"}
                        className="app__button add"
                        title="Create new post"
                    >New
                        {icon && (
                            <span className="icon-container">
                                <FontAwesomeIcon icon={icon} />
                            </span>
                        )}
                    </Link>
                </section>
            </header>
            {userPosts.length ? (
                <InfiniteScroll
                    dataLength={userPosts.length}
                    next={fetchMorePosts}
                    hasMore={hasMore}
                    loader={<FetchingData />}
                    endMessage={<NoMoreData />}
                >
                    <ul className="app__posts-list">
                        {userPosts.map((post, i) => (
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
                <h2 className="app__h2" style={{ margin: '5rem 0' }}>No posts yet</h2>
            )}
        </div>
    )
}

export default UserPostsPage;