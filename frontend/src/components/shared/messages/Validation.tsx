import '../../../styles/shared/messages/validation-message.scss';

interface IValidationMessageProps {
    successMsg: string | null;
    errorMsg: string | null;
}

const ValidationMessage = ({ successMsg, errorMsg }: IValidationMessageProps) => {

    console.log(successMsg, errorMsg);

    return (
        <div className={`app__validation-message ${errorMsg ? 'error' : 'success'}`}>
            <p className="validation-message__text">
                {errorMsg ? errorMsg : successMsg}
            </p>
        </div>
    );
};

export default ValidationMessage;