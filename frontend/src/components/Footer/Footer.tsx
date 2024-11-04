import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFontAwesomeIcon } from "../../hooks/useFontAwesomeIcon";

import '../../styles/components_styles/Footer.css';

const Footer = () => {
    const icon = useFontAwesomeIcon('copyright');

    return (
        <footer className="app__footer">
            <p className="footer__text">Copyright
                <span className="icon-container">
                    <FontAwesomeIcon icon={icon} />
                </span> -
                <span className="footer__year">{new Date().getFullYear()}</span>-
                mySocialMediaApp. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer;