import { MessageType } from "../../types/message";

import '../../styles/components_styles/notifications/Message.css';

const Message = ({ error, success }: MessageType) => {
    return (
        <>
            {(error || success) && (
                <div className={`app__message ${error ? 'error' : 'success'}`}>
                    <p className="app__message-text">{error ? error : success}</p>
                </div>
            )}
        </>
    )
}

export default Message;