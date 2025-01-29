import TextInput from "../../shared/inputs/TextIntput";

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
                Some text goes here
            </div>
            <button>Submit</button>
        </form>
    );
};

export default SignInForm;