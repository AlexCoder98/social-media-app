import { Link } from "react-router-dom";

import '../styles/pages_styles/Start.css';

const StartPage = () => {
    return (
        <div className="app__page start">
            <div className="start__heading-container" data-number="1">
                <h1>Connect. Share. Inspire.</h1>
            </div>
            <div className="start__heading-container" data-number="2">
                <h1>Be a Part of Something Bigger.</h1>
            </div>
            <Link
                className="start__link"
                to={'sign-up'}
                title="Sign up"
            >
                Sign up now
            </Link>
            <div className="start__heading-container" data-number="3">
                <h1>The Future of Social is Here.</h1>
            </div>
            <div className="start__heading-container" data-number="4">
                <h1>Boost Your Brand, Grow Your Business.</h1>
            </div>
        </div>
    )
}

export default StartPage;