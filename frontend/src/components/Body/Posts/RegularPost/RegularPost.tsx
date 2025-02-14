import PostCreator from "./PostCreatorBlock";

import { TPostData } from "../../../../types/api-slice/post";

import '../../../../styles/body/posts/regular-post.scss';

const RegularPost = (
    { id, title, description, image, creationDate, creator }: TPostData
) => {
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
                    <button>FN Button</button>
                </div>
            </div>
            <div className="post__body">
                <div className="post__text-content-wrapper">
                    <div className="post__text-content-holder">
                        <p className="post__text-content">{description}</p>
                    </div>
                    <button>Show more...</button>
                </div>
                <div className="post__image-wrapper">
                    <img
                        className="post__image"
                        src={`http://localhost:8080/${image}`}
                        alt={title}
                    />
                </div>
            </div>
            <div className="post__footer">
                <div className="post__buttons-container">
                    <button>Like</button>
                    <button>Leave a comment</button>
                    <button>Share</button>
                </div>
            </div>
        </div>
    );
};

export default RegularPost;