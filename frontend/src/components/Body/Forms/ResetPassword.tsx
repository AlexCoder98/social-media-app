import { useState } from 'react';

import TextInput from '../../shared/inputs/TextIntput';
import SubmitButton from '../../shared/buttons/Submit';

import { resetPasswordFormData } from '../../../helpers/form-data';

import '../../../styles/body/forms/primary-form.scss';

const ResetPasswordForm = () => {
    const [resetPasswordFormValues, setResetPasswordFormValues] = useState({
        email: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setResetPasswordFormValues(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    return (
        <form
            action="#"
            className="app__form"
            data-form-name="reset-password"
        >
            <h2 className="form__h2">Reset Password</h2>
            <div className="form__input-fields-holder">
                {resetPasswordFormData.map((el) => (
                    <TextInput
                        key={el.id}
                        id={el.id}
                        type={el.type}
                        name={el.name}
                        placeholderValue={el.placeholderValue}
                        value={resetPasswordFormValues[el.id as keyof typeof resetPasswordFormValues]}
                        onChange={handleOnInputChange}
                        labelValue={el.labelValue}
                    />
                ))}
            </div>
            <div className="form__extra-content-holder"></div>
            <SubmitButton
                content={'Reset password'}
                title={'Reset password now'}
            />
        </form>
    );
};

export default ResetPasswordForm;