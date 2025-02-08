import Router from "../../routes/router";
import ValidationMessage from "../shared/messages/Validation";

import { useAppSelector } from "../../hooks/redux";

import '../../styles/body/body.scss';

const Body = () => {
    const { successMessage, errorMessage } = useAppSelector(state => state.messageReducer);

    console.log(successMessage);
    console.log(errorMessage);

    return (
        <main className="app__body">
            <Router />
            {successMessage || errorMessage && (
                <ValidationMessage
                    successMsg={successMessage}
                    errorMsg={errorMessage}
                />
            )}
        </main>
    )
}

export default Body;