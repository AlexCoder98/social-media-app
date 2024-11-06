import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppSelector } from "../hooks/redux";
import { useFontAwesomeIcon } from "../hooks/useFontAwesomeIcon";


import '../styles/pages_styles/404.css';
import '../styles/components_styles/Button.css';

const NotFoundPage = () => {
    const { isAuth } = useAppSelector((state) => state.authentication);
    const redirectTo = isAuth === 'false' ? '/' : '/home';

    const goBackIcon = useFontAwesomeIcon('arrow-left');

    return (
        <div className="app__404-page-wrapper">
            <header className="app__404-page-header">
                <h1 className="app__h1">Error. Page not found.</h1>
                <section className="app__404-page-buttons-wrapper">
                    <Link
                        to={redirectTo}
                        className="app__button"
                        title="Back to home page"
                    >
                        {goBackIcon && (
                            <span className="icon-container" style={{ marginRight: '5px', marginLeft: 'none' }}>
                                <FontAwesomeIcon icon={goBackIcon} />
                            </span>
                        )}
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