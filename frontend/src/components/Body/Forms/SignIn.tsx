import { Link } from "react-router";

import TextInput from "../../shared/inputs/TextIntput";
import CheckBoxInput from "../../shared/inputs/CheckBox";
import Button from "../../shared/buttons/Button";

import { EButtonTypesType } from "../../../types/button";

import { signInFormData } from "../../../helpers/form-data";

const SignInForm = () => {
    return (
        <form
            action="#"
            className="app__form"
            data-form-name="sign-in"
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
                        value={el.value}
                        labelValue={el.labelValue}
                    />
                ))}
            </div>
            <div className="form__extra-content-holder">
                <CheckBoxInput
                    id={'remember'}
                    name={'remember'}
                    isChecked={false}
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
            <Button
                className={'form__button submit'}
                content={'Sign In'}
                type={EButtonTypesType.Submit}
                title={'Sign in now'}
            />
        </form>
    );
};

export default SignInForm;