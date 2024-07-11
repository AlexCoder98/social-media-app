import { Link } from 'react-router-dom';

import InputElement from '../InputElement/InputElement';
import Button from '../../Button/Button';

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
                <p className="app__paragraph reset-password">
                    Forgot your password? Click <Link to="/reset-password" title="Reset password">
                        here to reset</Link>.</p>
            </main>
            <footer className="app__form-footer">
                <div className="app__form-input-container">
                    <Button
                        className={"app__button submit"}
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