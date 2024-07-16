import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";

import { postsData } from "../../helpers/posts-data";
import { PostPropsType } from "../../types/post";

import '../../styles/Post.css';

const Post = () => {
    const { postId } = useParams();
    const post = (postsData as PostPropsType[]).find(post => post.id.toString() === postId)!;
    const navigate = useNavigate();

    return (
        <div className="app__post-single">
            <header className="app__post-head">
                <h3 className="app__post-h3">{post.title}</h3>
            </header>
            <main className="app__post-body">
                <div
                    className="app__post-img-wrapper"
                    style={{ backgroundImage: `url(${post.imgSrc})` }}
                >
                </div>
                <div className="app__post-text-container">
                    {post.text!.map(p => (
                        <p className="app__paragraph">{p}</p>
                    ))}
                </div>
            </main>
            <footer className="app__post-bottom">
                <Button
                    className={"app__button"}
                    content={"Edit"}
                    title={"Edit post"}
                    type={"button"}
                />
                <Button
                    className={"app__button delete"}
                    content={"Delete"}
                    title={"Delete post"}
                    type={"button"}
                />
            </footer>
        </div>
    )
}

export default Post;