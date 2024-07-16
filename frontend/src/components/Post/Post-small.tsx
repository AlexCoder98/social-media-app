import { Link } from "react-router-dom"
import Button from "../Button/Button"

import { PostPropsType } from "../../types/post"

const SmallPost = ({ id, title, imgSrc, imgAlt }: PostPropsType) => {
    return (
        <li className="app__post" data-id={id}>
            <header className="app__post-head">
                <h3 className="app__post-h3">
                    {title}
                </h3>
            </header>
            <main className="app__post-body">
                <div
                    className="app__post-img-wrapper"
                    style={{ backgroundImage: `url(${imgSrc})` }}>
                </div>
            </main>
            <footer className="app__post-bottom">
                <Link
                    to={`${id}`}
                    className="app__button post"
                    title={`Go to post ${title}`}
                >Read more</Link>
                <Button
                    className={"app__button delete"}
                    content={"Delete"}
                    title={"Delete post"}
                    type={"button"}
                />
            </footer>
        </li>
    )
}

export default SmallPost;