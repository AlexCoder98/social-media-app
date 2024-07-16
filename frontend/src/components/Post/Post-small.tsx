import { Link } from "react-router-dom"

import { PostType } from "../../types/post"

const SmallPost = ({ title, imgSrc, imgAlt, link, linkContent }: PostType) => {
    return (
        <li className="app__post">
            <header className="app__post-head">
                <h3 className="app__post-h3">
                    {title}
                </h3>
            </header>
            <main className="app__post-body">
                <div className="app__post-img-wrapper">
                    <img
                        className="app__post-img"
                        src={imgSrc}
                        alt={imgAlt} />
                </div>
            </main>
            <footer className="app__post-bottom">
                <Link
                    to={link as string}
                    className="app__post-link"
                >
                    {linkContent}
                </Link>
            </footer>
        </li>
    )
}

export default SmallPost;