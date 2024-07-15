import { useParams } from "react-router-dom";

const PostPage = () => {
    const { postId } = useParams();

    console.log(postId);

    return (
        <div className="app__page post">
            <h1 style={{ textAlign: 'center' }}>This is the Post Page with the post nr: {postId}</h1>
        </div>
    )
}

export default PostPage;