import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';
import Message from '../../Message/Message';

import { postCreatePost, uploadPostImage } from '../../../state/post/actions';

import { postFormData } from '../../../helpers/form-data';

const CreatePostForm = () => {
    const [createPostFormValues, setCreatePostFormValues] = useState({
        title: '',
        description: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const [file, setFile] = useState<File | null>(null);

    const accessToken = sessionStorage.getItem('accessToken');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const fileSelectedHandler = async (e: React.FormEvent) => {
        const selectedFile = (e.target as HTMLInputElement).files![0];
        setFile(selectedFile);
    }

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setCreatePostFormValues((prevCreateFormValues) => ({
            ...prevCreateFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('postImage', file!);
        const reqData = {
            formData: formData,
            accessToken: accessToken!,
        };

        dispatch(uploadPostImage(reqData))
            .then(result => {
                const { requestStatus } = result.meta;
                if (requestStatus === 'fulfilled') {
                    const { path } = result.payload as {
                        message: string; path: string
                    };

                    const reqData = {
                        accessToken: accessToken!,
                        post: {
                            title: createPostFormValues['title'],
                            image: path,
                            description: createPostFormValues['description'],
                        }
                    }
                    return reqData;
                }
                if (requestStatus === 'rejected') {
                    const { message } = result.payload as { message: string };
                    setErrorMsg(message);
                    setTimeout(() => {
                        setErrorMsg('');
                    }, 3000);
                }
            })
            .then(data => {
                return dispatch(postCreatePost(data!))
            })
            .then(result => {
                const { requestStatus } = result.meta;
                if (requestStatus === 'rejected') {
                    const message = result.payload as string;
                    setErrorMsg(message);
                    setTimeout(() => {
                        setErrorMsg('');
                    }, 3000);
                }
                if (requestStatus === 'fulfilled') {
                    const message = result.payload as string;
                    setSuccessMsg(message);
                    setCreatePostFormValues({
                        title: '',
                        description: ''
                    });
                    setFile(null);
                    setTimeout(() => {
                        setSuccessMsg('');
                        navigate(-1);
                    }, 3000);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <Message error={errorMsg} success={successMsg} />
            <form
                method="POST"
                className="app__form create-post"
                encType="multipart/form-data"
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
                            method={input.type === 'text' ? handleInputChange : fileSelectedHandler}
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