import { useParams, Link } from "react-router-dom";

import Button from "../Button/Button";

import { postsData } from "../../helpers/posts-data";
import { PostPropsType } from "../../types/post";

import '../../styles/Post.css';

const Post = () => {
    const { postId } = useParams();
    const post = (postsData as PostPropsType[]).find(post => post.id.toString() === postId)!;

    return (
        <div className="app__post-single">
            <header className="app__post-single-head">
                <h3 className="app__post-single-h3">{post.title}</h3>
            </header>
            <main className="app__post-single-body">
                <div
                    className="app__post-single-img-wrapper"
                    style={{ backgroundImage: `url(${post.imgSrc})` }}
                >
                </div>
                <div className="app__post-single-text-container">
                    {post.text!.map((p, i) => (
                        <p
                            key={i}
                            className="app__paragraph"
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </main>
            <footer className="app__post-single-bottom">
                <Link
                    to="edit"
                    className={"app__button"}
                    title={"Edit post"}
                    type={"button"}
                    state={{
                        title: post.title,
                        imageUrl: post.imgSrc,
                        description: post.text?.join(" ")
                    }}
                >Edit</Link>
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