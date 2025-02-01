import { useState } from 'react';
import { Link } from 'react-router';

import TextInput from '../../shared/inputs/TextIntput';
import CheckBoxInput from '../../shared/inputs/CheckBox';
import SubmitButton from '../../shared/buttons/Submit';

import { signUpFormData } from '../../../helpers/form-data';

import '../../../styles/body/forms/primary-form.scss';

const SignUpForm = () => {
    const [signUpFormValues, setSignUpFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });
    const [isChecked, setIsChecked] = useState(false);

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setSignUpFormValues(prev => ({
            ...prev,
            [id]: value,
        }));
    }

    const handleOnCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <form
            action="#"
            className="app__form"
            data-form-name="sign-up"
        >
            <h2 className="form__h2">Sign Up</h2>
            <div className="form__input-fields-holder">
                {signUpFormData.map((el) => (
                    <TextInput
                        key={el.id}
                        id={el.id}
                        type={el.type}
                        name={el.name}
                        placeholderValue={el.placeholderValue}
                        value={signUpFormValues[el.id as keyof typeof signUpFormValues]}
                        onChange={handleOnInputChange}
                        labelValue={el.labelValue}
                    />
                ))}
            </div>
            <div className="form__extra-content-holder">
                <CheckBoxInput
                    id={'accept-consent'}
                    name={'accept-consent'}
                    isChecked={isChecked}
                    onChange={handleOnCheckboxChange}
                    labelValue={'I agree to the Terms of Users'}
                />
                <Link
                    to="/sign-in"
                    className="form__link"
                    title="Sign In"
                >
                    Sign In &rarr;
                </Link>
            </div>
            <SubmitButton
                content={'Sign Up'}
                title={'Sign Up Now'}
            />
        </form>
    );
};

export default SignUpForm;