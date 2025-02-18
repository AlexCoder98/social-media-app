import '../../../styles/shared/messages/loading-message.scss';

const Loader = () => {
    return (
        <div className="app__loader">
            <div className="loader__spinner-wrapper">
                <div className="loader__spinner"></div>
            </div>
            <p className="loader__text">Loading...</p>
        </div>
    );
};

export default Loader;