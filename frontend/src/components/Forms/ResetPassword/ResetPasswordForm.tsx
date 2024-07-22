import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

import { resetPasswordFormInputsData } from '../../../helpers/form-data';

import '../../../styles/Form.css';

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const [resetPasswordFormValues, setResetPasswordFormValues] = useState({
        email: '',
        newPassword: '',
        newPasswordRepeated: ''
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setResetPasswordFormValues((prevResetPasswordFormValues) => ({
            ...prevResetPasswordFormValues,
            [name]: value,
        }));
    }

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        navigate('/sign-in');
    }

    return (
        <form
            method="POST"
            className="app__form reset-password"
            onSubmit={handleFormSubmit}
        >
            <header className="app__form-header">
                <h2 className="app__form-h2">Reset your Password</h2>
            </header>
            <main className="app__form-main">
                {resetPasswordFormInputsData.map((input, i) => (
                    <InputElement
                        tagType={"input"}
                        key={i + 1}
                        type={input.type!}
                        id={input.id}
                        placeholder={input.placeholder}
                        value={resetPasswordFormValues[input.id as keyof typeof resetPasswordFormValues]}
                        method={handleInputChange}
                    />
                ))}
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__action-button submit"}
                        type={"submit"}
                        content={"Reset password"}
                        title={"Reset password"}
                    />
                </div>
            </footer>
        </form>
    )
}

export default ResetPasswordForm;