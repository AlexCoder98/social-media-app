import { useParams } from 'react-router-dom';

const EditPostPage = () => {
    const { postId } = useParams();

    return (
        <div>Edit post nr: {postId}</div>
    )
}

export default EditPostPage;