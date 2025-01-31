import '../../../styles/shared/buttons/submit-button.scss';

interface ISubmitButtonProps {
    content: string;
    title?: string;
}

const SubmitButton = ({ content, title }: ISubmitButtonProps) => {
    return (
        <button
            className="form__button"
            data-type="submit"
            type="submit"
            title={title}
        >
            {content}
        </button>
    );
};

export default SubmitButton;