import { useNavigate } from "react-router-dom";

import Post from "../components/Post/Post-page";

import '../styles/Post.css';

const PostPage = () => {
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

export default PostPage;