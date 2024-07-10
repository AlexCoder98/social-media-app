import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="app__404-page-wrapper">
            <h1>Error occurred. Page not found!</h1>
            <Link
                to="/"
            >
                Go to the home page
            </Link>
        </div>
    )
}

export default NotFoundPage;