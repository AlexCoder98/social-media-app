import SmallPost from '../components/Post/Post-small';
import { postsData } from '../helpers/posts-data';
import { useAppSelector } from '../components/hooks/redux';
import '../styles/MainPage.css';

const MainPage = () => {
    const user = useAppSelector(state => state.users.userObj);
    console.log('User obj on Main page');
    console.log(user);

    return (
        <div className="app__page main">
            <h2>This is the main page</h2>
            <hr />
            {/* <ul className="app__posts-list">
                {postsData.map((post, i) => (
                    <SmallPost
                        id={i + 1}
                        key={i + 1}
                        title={`${post.title} ${i + 1}`}
                        imgSrc={post.imgSrc}
                        imgAlt={post.imgAlt}
                    />
                ))}
            </ul> */}
        </div>
    )
}

export default MainPage;