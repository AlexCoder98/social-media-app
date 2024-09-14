import CreatePostForm from '../components/Forms/CreatePost/CreatePost';

import '../styles/pages_styles/CreatePostPage.css';
import '../styles/components_styles/Form.css';

const CreatePostPage = () => {
    return (
        <div className="app__page create-post">
            <CreatePostForm />
        </div>
    )
}

export default CreatePostPage;