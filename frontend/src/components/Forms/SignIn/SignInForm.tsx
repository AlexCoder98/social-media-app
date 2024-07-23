import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { signIn } from '../../../state/user/userSlice';
import { useAppDispatch } from '../../../hooks/redux';

import { signInFormInputsData } from '../../../helpers/form-data';

import '../../../styles/Form.css';


const SignInForm = () => {
    const dispath = useAppDispatch();
    const navigate = useNavigate();

    const [signInFormValues, setSignInFormValues] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setSignInFormValues((prevSignInFormValues) => ({
            ...prevSignInFormValues,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispath(signIn('signed in'))
            .then(() => {
                navigate('/main-page');
                console.log('Logged in');
            });
    }

    return (
        <form
            method="POST"
            className="app__form sign-in"
            onSubmit={handleFormSubmit}
        >
            <header className="app__form-header">
                <h2 className="app__form-h2">Sign in to Account</h2>
            </header>
            <main className="app__form-main">
                {signInFormInputsData.map((input, i) => (
                    <InputElement
                        tagType={"input"}
                        key={i + 1}
                        type={input.type!}
                        id={input.id}
                        placeholder={input.placeholder}
                        value={signInFormValues[input.id as keyof typeof signInFormValues]}
                        method={handleInputChange}
                    />
                ))}
                <p className="app__paragraph reset-password">
                    Forgot a password? Click <Link to="/reset-password" title="Reset password">
                        here to reset</Link>.</p>
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__action-button submit"}
                        type={"submit"}
                        content={"Sign in"}
                        title={"Sign in now"}
                    />
                </div>
            </footer>
        </form>
    )
}

export default SignInForm;