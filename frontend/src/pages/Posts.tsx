import RegularPost from "../components/Body/Posts/RegularPost";

const PostsPage = () => {
    return (
        <div
            className="app__page"
            data-page-name="posts"
        >
            <ul className="app__posts-list">

            </ul>
            <RegularPost />
        </div>
    )
}

export default PostsPage;