import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { createPost } from '../../../state/post/actions';

import { postFormData } from '../../../helpers/form-data';

const CreatePostForm = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [createPostFormValues, setCreatePostFormValues] = useState({
        title: '',
        imageUrl: '',
        description: '',
    });

    const { message, error } = useAppSelector(state => state.post);

    console.log(message, error);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setCreatePostFormValues((prevCreateFormValues) => ({
            ...prevCreateFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const postReqData = {
            accessToken: accessToken!,
            post: {
                title: createPostFormValues['title'],
                image: createPostFormValues['imageUrl'],
                description: createPostFormValues['description'],
            }
        }
        dispatch(createPost(postReqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                setCreatePostFormValues({
                    title: '',
                    imageUrl: '',
                    description: ''
                });
                navigate(-1);
            }
        })
    }

    return (
        <>
            {message && <p className="app__form-message success">{message}</p>}
            <form
                method="POST"
                className="app__form create-post"
                onSubmit={handleOnSubmit}
                style={{ margin: '0 auto' }}
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
        </>
    )
}

export default CreatePostForm;