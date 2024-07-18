import { useState, useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { postFormData } from '../../../helpers/form-data';

const CreatePostForm = () => {
    const { dispatchFn } = useContext(AppContext);
    const [createPostFormValues, setCreatePostFormValues] = useState({
        title: '',
        imageUrl: '',
        description: '',
    });

    const handleInputChange = (e: React.FormEvent) => {
        setCreatePostFormValues({
            ...createPostFormValues,
            [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
        });

        console.log(createPostFormValues);
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(createPostFormValues);
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