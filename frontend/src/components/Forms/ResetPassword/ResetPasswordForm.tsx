import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';
import Message from '../../Message/Message';

import { useAppDispatch } from '../../../hooks/redux';
import { resetPassword } from '../../../state/authentication/actions';

import { resetPasswordFormInputsData } from '../../../helpers/form-data';

import '../../../styles/components_styles/Form.css';

const ResetPasswordForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [resetPasswordFormValues, setResetPasswordFormValues] = useState({
        email: '',
        newPassword: '',
        newPasswordConfirmation: ''
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setResetPasswordFormValues((prevResetPasswordFormValues) => ({
            ...prevResetPasswordFormValues,
            [name]: value,
        }));
    }

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const reqData = {
            email: resetPasswordFormValues.email,
            newPassword: resetPasswordFormValues.newPassword,
            newPasswordConfirmation: resetPasswordFormValues.newPasswordConfirmation,
        }

        await dispatch(resetPassword(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 3000);
            };
            if (requestStatus === 'fulfilled') {
                const message = result.payload as string;
                setSuccessMsg(message);
                setResetPasswordFormValues({
                    email: '',
                    newPassword: '',
                    newPasswordConfirmation: ''
                });
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/sign-in');
                }, 3000);
            };
        })
    };

    return (
        <>
            <Message error={errorMsg} success={successMsg} />
            <form
                method="POST"
                className="app__form reset-password"
                onSubmit={handleFormSubmit}
            >
                <header className="app__form-header">
                    <h2 className="app__form-h2">Reset Password</h2>
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
        </>
    )
}

export default ResetPasswordForm;