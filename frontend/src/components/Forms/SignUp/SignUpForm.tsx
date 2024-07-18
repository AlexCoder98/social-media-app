import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { AppDispatch } from '../../../state/store';
import { signIn } from '../../../state/user/userSlice';

import { signUpFormInputsData } from '../../../helpers/form-data';

import '../../../styles/Form.css';

const SignUpForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [signUpFormValues, setSignUpFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordRepeated: ''
    });

    const handleInputChange = (e: React.FormEvent) => {
        setSignUpFormValues({
            ...signUpFormValues,
            [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
        })
    }


    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(signIn())
    }

    return (
        <form
            method="POST"
            className="app__form sign-up"
            onSubmit={handleFormSubmit}
        >
            <header className="app__form-header">
                <h2 className="app__form-h2">Sign up now</h2>
            </header>
            <main className="app__form-main">
                {signUpFormInputsData.map((input, i) => (
                    <InputElement
                        tagType={"input"}
                        key={i + 1}
                        type={input.type!}
                        id={input.id}
                        placeholder={input.placeholder}
                        value={signUpFormValues[input.id as keyof typeof signUpFormValues]}
                        method={handleInputChange}
                    />
                ))}
                <p className="app__paragraph sign-in">
                    If you already have an account <Link to="/sign-in" title="Go to sign in page">
                        sign in</Link>.</p>
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__action-button submit"}
                        type={"submit"}
                        content={"Sign up"}
                        title={"Sign up now"}
                    />
                </div>
            </footer>
        </form>
    )
}

export default SignUpForm;