import { Link } from "react-router-dom";

import { useAppSelector } from "../hooks/redux";

import '../styles/404.css';
import '../styles/Button.css';

const NotFoundPage = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);

    console.log('isAuth: ' + isAuth);

    return (
        <div className="app__404-page-wrapper">
            <header className="app__404-page-header">
                <h1 className="app__h1">Error occurred. Page not found.</h1>
                <section className="app__404-page-buttons-wrapper">
                    <Link
                        to={isAuth === 'false' ? '/' : 'main-page'}
                        className="app__button"
                        title="Back to home page"
                    >
                        Back to home page
                    </Link>
                </section>
            </header>
            <main className="app__404-page-main">
                <div className="app__404-page-img-wrapper">
                    <img
                        className="app__404-page-img"
                        src="/files/images/page_404.png"
                        alt="Error 404 - Page not found"
                    />
                </div>
            </main>
        </div>
    )
}

export default NotFoundPage;