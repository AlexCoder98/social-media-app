interface IPostCreatorProps {
    id: string;
    name: string;
    surname: string;
    profileImage: string;
    creationDate: string;
}

const PostCreator = (
    { id, name, surname, profileImage, creationDate }: IPostCreatorProps
) => {
    console.log(name, surname);

    return (
        <div className="post__creator-data-container">
            Creator Data
        </div>
    );
};

export default PostCreator;