import { useState, useLayoutEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Message from "../../Message/Message";

import { useAppSelector, useAppDispatch } from "../../../hooks/redux";

import { getPost, deletePost } from "../../../state/post/actions";
import '../../../styles/components_styles/PostDetails.css';

const SinglePost = () => {
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    console.log(errorMsg, successMsg);

    const accessToken = sessionStorage.getItem('accessToken');
    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const reqData = {
        accessToken: accessToken!,
        postId: postId!,
    }

    useLayoutEffect(() => {
        dispatch(getPost(reqData));
    }, [])

    const { post } = useAppSelector(state => state.post);

    const handleOnDeletePost = () => {
        dispatch(deletePost(reqData))
            .then(result => {
                const { requestStatus } = result.meta;
                if (requestStatus === 'rejected') {
                    const message = 'Error. Cannot delete post';
                    setErrorMsg(message);
                    setTimeout(() => {
                        setErrorMsg('')
                    }, 3000);
                }
                if (result.meta.requestStatus === 'fulfilled') {
                    const message = result.payload as string;
                    setSuccessMsg(message);
                    setTimeout(() => {
                        setSuccessMsg('');
                        // navigate('/my-posts');
                    }, 3000);
                }
            })
    }

    return (
        <>
            <Message error={errorMsg} success={successMsg} />
            {
                post ? (
                    <div className="app__post-single" >
                        <header className="app__post-single-head">
                            <h3 className="app__post-single-h3">{post?.title}</h3>
                        </header>
                        <main className="app__post-single-body">
                            <div
                                className="app__post-single-img-wrapper"
                                style={{ backgroundImage: `url(http://localhost:8080/${post?.image})` }}
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
                ) : <h1>Post with id {postId} no longer exists.</h1>}
        </>
    )
}

export default SinglePost;