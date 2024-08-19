import { useState } from 'react';
import { Link } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { signUp } from '../../../state/authentication/authSlice';

import { signUpFormInputsData } from '../../../helpers/form-data';

import '../../../styles/Form.css';

const SignUpForm = () => {
    const { errors, messages } = useAppSelector((state) => state.authentication);
    const dispatch = useAppDispatch();

    const [signUpFormValues, setSignUpFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setSignUpFormValues((prevSignUpFormValues) => ({
            ...prevSignUpFormValues,
            [name]: value,
        }));
    }

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newUser = {
            name: signUpFormValues.name,
            surname: signUpFormValues.surname,
            email: signUpFormValues.email,
            password: signUpFormValues.password,
            passwordConfirmation: signUpFormValues.passwordConfirmation,
        }

        await dispatch(signUp(newUser))
            .then(result => {
                if (result.meta.requestStatus === 'fulfilled') {
                    setSignUpFormValues({
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
                    });
                }
            });
    }

    return (
        <>
            {errors.signUpError && <p className="app__form-message error">{errors.signUpError}</p>}
            {messages.signUpMessage && <p className="app__form-message success">{messages.signUpMessage}</p>}
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
        </>
    )
}

export default SignUpForm;