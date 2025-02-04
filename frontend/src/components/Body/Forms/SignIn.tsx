import { useState } from "react";
import { Link } from "react-router";

import TextInput from "../../shared/inputs/TextIntput";
import CheckBoxInput from "../../shared/inputs/CheckBox";
import SubmitButton from "../../shared/buttons/Submit";

// import { useSignInMutation } from "../../../state/api/appApiSlice";

import { signInFormData } from "../../../helpers/form-data";

import '../../../styles/body/forms/primary-form.scss';

const SignInForm = () => {
    // const [signIn, { data, isError, isLoading }] = useSignInMutation({});
    const [signInFormValues, setSignInFormValues] = useState({
        email: '',
        password: ''
    });
    const [isChecked, setIsChecked] = useState(false);

    const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setSignInFormValues(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleOnCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const reqData = {
                email: signInFormValues.email,
                password: signInFormValues.password,
            };

            // const result = await signIn(reqData);

            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            method="POST"
            className="app__form"
            data-form-name="sign-in"
            onSubmit={handleOnSubmit}
        >
            <h2 className="form__h2">Sign In</h2>
            <div className="form__input-fields-holder">
                {signInFormData.map((el) => (
                    <TextInput
                        key={el.id}
                        id={el.id}
                        type={el.type}
                        name={el.name}
                        placeholderValue={el.placeholderValue}
                        value={signInFormValues[el.id as keyof typeof signInFormValues]}
                        onChange={handleOnInputChange}
                        labelValue={el.labelValue}
                    />
                ))}
            </div>
            <div className="form__extra-content-holder">
                <CheckBoxInput
                    id={'remember'}
                    name={'remember'}
                    isChecked={isChecked}
                    onChange={handleOnCheckboxChange}
                    labelValue={'Remember me'}
                />
                <Link
                    to="/reset-password"
                    className="form__link"
                    title="Reset password"
                >
                    Forgot password?
                </Link>
            </div>
            <SubmitButton
                content={'Sign In'}
                title={'Sign in now'}
            />
        </form>
    );
};

export default SignInForm;