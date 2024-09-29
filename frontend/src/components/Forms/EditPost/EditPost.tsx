import { useState, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';
import Message from '../../Message/Message';

import { useAppDispatch } from '../../../hooks/redux';
import { getEditPost, postEditPost } from '../../../state/post/actions';

import { postFormData } from '../../../helpers/form-data';
import { EditPostType } from '../../../types/post';

const EditPostForm = () => {
    const [editPostFormValues, setEditPostFormValues] = useState({
        title: '',
        image: '',
        description: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const accessToken = sessionStorage.getItem('accessToken');
    const { postId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const reqData = {
            accessToken: accessToken!,
            postId: postId!
        };
        dispatch(getEditPost(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'fulfilled') {
                const postEditData = result.payload as EditPostType;
                setEditPostFormValues({
                    title: postEditData.title,
                    image: postEditData.image,
                    description: postEditData.description,
                });
            }
        })
    }, [postId])

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setEditPostFormValues((prevEditPostFormValues) => ({
            ...prevEditPostFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const reqData = {
            post: {
                title: editPostFormValues['title'],
                image: editPostFormValues['image'],
                description: editPostFormValues['description'],
            },
            accessData: {
                accessToken: accessToken!,
                postId: postId!,
            }
        }
        dispatch(postEditPost(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 3000);
            }
            if (requestStatus === 'fulfilled') {
                const { updatedPost, message } = result.payload as { updatedPost: EditPostType, message: string };
                setSuccessMsg(message);
                setEditPostFormValues({
                    title: updatedPost.title,
                    image: updatedPost.image,
                    description: updatedPost.description,
                });
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate(-1);
                }, 3000);
            }
        })
    }

    return (
        <>
            <Message error={errorMsg} success={successMsg} />
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
                            value={editPostFormValues[input.id as keyof EditPostType]}
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
        </>
    )
}

export default EditPostForm;