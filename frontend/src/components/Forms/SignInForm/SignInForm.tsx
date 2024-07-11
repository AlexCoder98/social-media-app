import InputElement from '../InputElement/InputElement';

import { signInFormInputsData } from '../../../helpers/form-data';

import '../../../styles/Form.css';

const SignInForm = () => {
    return (
        <form method="POST" className="app__form log-in">
            <header className="app__form-header">
                <h2 className="app__form-h2">Sign in to Account</h2>
            </header>
            <main className="app__form-main">
                {signInFormInputsData.map((input, i) => (
                    <InputElement
                        key={i + 1}
                        type={input.type}
                        id={input.id}
                        placeholder={input.placeholder}
                    />
                ))}
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <input type="submit" className="app__input submit" id="submit" value="Sign In" />
                </div>
            </footer>
        </form>
    )
}

export default SignInForm;