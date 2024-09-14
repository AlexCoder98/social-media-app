import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { signIn } from '../../../state/authentication/actions';
import { useAppDispatch } from '../../../hooks/redux';

import { signInFormInputsData } from '../../../helpers/form-data';

import '../../../styles/components_styles/Form.css';


const SignInForm = () => {
    const dispath = useAppDispatch();
    const navigate = useNavigate();

    const [signInFormValues, setSignInFormValues] = useState({
        email: '',
        password: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setSignInFormValues((prevSignInFormValues) => ({
            ...prevSignInFormValues,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const signInData = {
            email: signInFormValues.email,
            password: signInFormValues.password,
        }

        dispath(signIn(signInData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 1000);
            }
            if (requestStatus === 'fulfilled') {
                const { accessToken, userId, isAuth } = result.payload as { accessToken: string, userId: string, isAuth: string };
                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('userId', userId);
                sessionStorage.setItem('isAuth', isAuth);
                setSignInFormValues({
                    email: '',
                    password: ''
                });
                navigate('/main-page');
            }
        });
    }

    return (
        <>
            {errorMsg && <p className="app__form-message error">{errorMsg}</p>}
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
        </>
    )
}

export default SignInForm;