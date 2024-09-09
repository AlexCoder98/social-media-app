import CreatePostForm from '../components/Forms/CreatePost/CreatePost';

import '../styles/CreatePostPage.css';
import '../styles/Form.css';

const CreatePostPage = () => {
    return (
        <div className="app__page create-post">
            <CreatePostForm />
        </div>
    )
}

export default CreatePostPage;