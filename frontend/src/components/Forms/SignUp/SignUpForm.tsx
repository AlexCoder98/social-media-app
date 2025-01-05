import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { useAppDispatch } from '../../../hooks/redux';
import { signUp } from '../../../state/authentication/actions';
import { setSuccessMessage, setErrorMessage } from '../../../state/message/messageSlice';

import { signUpFormInputsData } from '../../../helpers/form-data';

import '../../../styles/components_styles/Form.css';

const SignUpForm = () => {
    const [signUpFormValues, setSignUpFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                const { requestStatus } = result.meta;
                if (requestStatus === 'rejected') {
                    const message = result.payload as string;
                    dispatch(setErrorMessage(message));
                    setTimeout(() => {
                        dispatch(setErrorMessage(null));
                    }, 3000);
                }
                if (requestStatus === 'fulfilled') {
                    const message = result.payload as string;
                    dispatch(setSuccessMessage(message));
                    setSignUpFormValues({
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                        passwordConfirmation: ''
                    });
                    setTimeout(() => {
                        dispatch(setSuccessMessage(null));
                        navigate('/sign-in');
                    }, 3000);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
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