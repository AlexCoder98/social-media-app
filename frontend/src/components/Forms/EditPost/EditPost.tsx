import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { useAppDispatch } from '../../../hooks/redux';
// import { editPost } from '../../../state/post/postSlice';

import { postFormData } from '../../../helpers/form-data';
import { EditPostLocationType } from '../../../types/post';

const EditPostForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as EditPostLocationType;
    const dispatch = useAppDispatch();

    const postId = location.pathname.split('/').find(el => el.match(/\d/g));

    const [editPostFormValues, setEditPostFormValues] = useState({
        title: state.title,
        imageUrl: state.imageUrl,
        description: state.description,
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setEditPostFormValues((prevEditPostFormValues) => ({
            ...prevEditPostFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const updatedPost = {
            id: postId!,
            title: editPostFormValues['title'],
            image: editPostFormValues['imageUrl'],
            description: editPostFormValues['description'],
        }
        // dispatch(editPost(updatedPost))
        //     .then(() => {
        //         navigate(-1);
        //     });
    }

    return (
        <form
            method="POST"
            className="app__form edit-post"
            onSubmit={handleOnSubmit}
        >
            <header className="app__form-header">
                <h2 className="app__form-h2">Edit Post</h2>
            </header>
            <main className="app__form-main">
                {postFormData.map((input, i) => (
                    <InputElement
                        tagType={input.tagType}
                        key={i + 1}
                        type={input.type!}
                        id={input.id}
                        placeholder={input.placeholder}
                        method={handleInputChange}
                        value={editPostFormValues[input.id as keyof EditPostLocationType]}
                    />
                ))}
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__action-button submit"}
                        type={"submit"}
                        content={"Save"}
                        title={"Save"}
                    />
                </div>
            </footer>
        </form>
    )
}

export default EditPostForm;