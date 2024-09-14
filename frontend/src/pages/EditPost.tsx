import EditPostForm from '../components/Forms/EditPost/EditPost';

import '../styles/pages_styles/EditPostPage.css';
import '../styles/components_styles/Form.css';

const EditPostPage = () => {
    return (
        <div className="app__page edit-post">
            <EditPostForm />
        </div>
    )
}

export default EditPostPage;