import { useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";

import { getPost, deletePost } from "../../state/post/actions";

import '../../styles/Post.css';

const SinglePost = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const reqData = {
        accessToken: accessToken!,
        postId: postId!,
    }

    useLayoutEffect(() => {
        dispatch(getPost(reqData)).then(result => {
            console.log(result.meta.requestStatus);
        });
    }, [postId])

    const { post } = useAppSelector(state => state.post);

    const handleOnDeletePost = () => {
        dispatch(deletePost(reqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                navigate('/posts');
            }
        })
    }

    return (
        <>
            {
                post ? (
                    <div className="app__post-single" >
                        <header className="app__post-single-head">
                            <h3 className="app__post-single-h3">{post?.title}</h3>
                        </header>
                        <main className="app__post-single-body">
                            <div
                                className="app__post-single-img-wrapper"
                                style={{ backgroundImage: `url(${post?.image})` }}
                            >
                            </div>
                            <div className="app__post-single-text-container">
                                <p className="app__paragraph">{post?.description}</p>
                            </div>
                        </main>
                        <footer className="app__post-single-bottom">
                            <Link
                                to="edit"
                                className={"app__button"}
                                title={"Edit post"}
                                type={"button"}
                            >Edit</Link>
                            <button
                                className="app__button delete"
                                title="Delete post"
                                onClick={handleOnDeletePost}
                            >Delete</button>
                        </footer>
                    </div >
                ) : <h1>Fetching the post...</h1>}
        </>
    )
}

export default SinglePost;