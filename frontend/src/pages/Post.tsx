import { Link } from "react-router-dom";

import Post from "../components/Main/Post/PostDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFontAwesomeIcon } from "../hooks/useFontAwesomeIcon";

import '../styles/components_styles/PostDetails.css';
import '../styles/components_styles/Button.css';

const PostDetails = () => {
    const goBackIcon = useFontAwesomeIcon('arrow-left');

    return (
        <div className="app__page post">
            <header className="app__post-page-header">
                <h1 className="app__h1">Post details</h1>
                <section className="app__post-buttons-wrapper">
                    <Link
                        to="/my-posts"
                        className="app__button back"
                        title="Go back"
                    >
                        {goBackIcon && (
                            <span className="icon-container" style={{ marginRight: '5px', marginLeft: 'none' }}>
                                <FontAwesomeIcon icon={goBackIcon} />
                            </span>
                        )}
                        Go back
                    </Link>
                </section>
            </header>
            <Post />
        </div>
    )
}

export default PostDetails;