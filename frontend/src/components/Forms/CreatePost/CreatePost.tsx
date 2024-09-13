import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { postCreatePost } from '../../../state/post/actions';

import { postFormData } from '../../../helpers/form-data';

const CreatePostForm = () => {
    const [createPostFormValues, setCreatePostFormValues] = useState({
        title: '',
        image: '',
        description: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');

    const accessToken = sessionStorage.getItem('accessToken');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                image: createPostFormValues['image'],
                description: createPostFormValues['description'],
            }
        }

        dispatch(postCreatePost(postReqData)).then(result => {
            const { requestStatus } = result.meta;

            console.log('REQUEST STATUS');
            console.log(requestStatus);

            console.log('PAYLOAD');
            console.log(result.payload);

            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 2000);
            }
            if (requestStatus === 'fulfilled') {
                setCreatePostFormValues({
                    title: '',
                    image: '',
                    description: ''
                });
                setTimeout(() => {
                    navigate(-1);
                }, 1000);
            }
        })
    }

    return (
        <>
            {errorMsg && <p className="app__form-message error">{errorMsg}</p>}
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