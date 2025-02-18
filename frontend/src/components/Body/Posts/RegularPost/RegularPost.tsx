import PostCreator from "./PostCreatorBlock";
import ToggleButton from "../../../shared/buttons/ToggleButton";
import RegularButton from "../../../shared/buttons/RegularButton";

import { TPostData } from "../../../../types/api-slice/post";

import '../../../../styles/body/posts/regular-post.scss';

const RegularPost = (
    { id, title, description, image, creationDate, creator }: TPostData
) => {

    const showOptions = () => {
        console.log('Click');
    }

    return (
        <div
            className="app__post"
            data-id={id}
        >
            <div className="post__header">
                <PostCreator
                    id={creator.id}
                    name={creator.name}
                    surname={creator.surname}
                    profileImage={creator.profileImage}
                    creationDate={creationDate}
                />
                <div className="post__functional-buttons-container">
                    <ToggleButton
                        className={'post__toggle-button'}
                        onClick={showOptions}
                        prefix={'fa'}
                        content={'ellipsis'}
                    />
                </div>
            </div>
            <div className="post__body">
                <div className="post__text-content-wrapper">
                    <div className="post__text-content-holder">
                        <p className="post__text-content">{description}</p>
                    </div>
                </div>
                <div className="post__image-wrapper">
                    <img
                        className="post__image"
                        src={`http://localhost:8080/${image}`}
                        alt={title}
                    />
                </div>
                <div className="post__reactions-section">
                    <p className="post__reaction" data-reaction="like">0 likes</p>
                    <p className="post__reaction" data-reaction="comment">0 comments</p>
                    <p className="post__reaction" data-reaction="sharing">0 shares</p>
                </div>
            </div>
            <div className="post__footer">
                <div className="post__buttons-container">
                    <RegularButton
                        className={'post__regular-button like'}
                        title={'Give a like!'}
                        content={'Like it'}
                        prefix={'fa-regular'}
                        iconName={'thumbs-up'}
                    />
                    <RegularButton
                        className={'post__regular-button comment'}
                        title={'Leave a comment'}
                        content={'Comment'}
                        prefix={'fa-regular'}
                        iconName={'comment'}
                    />
                    <RegularButton
                        className={'post__regular-button share'}
                        title={'Share this post'}
                        content={'Share'}
                        prefix={'fa-regular'}
                        iconName={'share-from-square'}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegularPost;