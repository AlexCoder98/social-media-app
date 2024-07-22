import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { addPost } from '../../../state/posts/postsSlice';

import { postFormData } from '../../../helpers/form-data';

const CreatePostForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [createPostFormValues, setCreatePostFormValues] = useState({
        title: '',
        imageUrl: '',
        description: '',
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setCreatePostFormValues((prevCreateFormValues) => ({
            ...prevCreateFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newPost = {
            id: Math.random().toString(),
            title: createPostFormValues['title'],
            image: createPostFormValues['imageUrl'],
            description: createPostFormValues['description']
        }
        dispatch(addPost(newPost));
        navigate('/posts');
    }

    return (
        <form
            method="POST"
            className="app__form create-post"
            onSubmit={handleOnSubmit}
        >
            <header className="app__form-header">
                <h2 className="app__form-h2">Create a Post</h2>
            </header>
            <main className="app__form-main">
                {postFormData.map((input, i) => (
                    <InputElement
                        tagType={input.tagType}
                        key={i + 1}
                        type={input.type!}
                        id={input.id}
                        placeholder={input.placeholder}
                        value={createPostFormValues[input.id as keyof typeof createPostFormValues]}
                        method={handleInputChange}
                    />
                ))}
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__action-button submit"}
                        type={"submit"}
                        content={"Create post"}
                        title={"Create post"}
                    />
                </div>
            </footer>
        </form>
    )
}

export default CreatePostForm;