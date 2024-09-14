import { useNavigate } from "react-router-dom";

import Post from "../components/Main/Post/PostDetails";

import '../styles/components_styles/PostDetails.css';
import '../styles/components_styles/Button.css';

const PostDetails = () => {
    const navigate = useNavigate();
    return (
        <div className="app__page post">
            <aside className="app__aside-section">
                <button
                    className="app__button back"
                    onClick={() => navigate('/posts')}
                >Go back</button>
            </aside>
            <Post />
        </div>
    )
}

export default PostDetails;