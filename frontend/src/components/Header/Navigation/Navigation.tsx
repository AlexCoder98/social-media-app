import { navigationLinksData } from '../../../helpers/navigation-data';

const Navigation = () => {
    return (
        <nav className="app__main-navigation">
            <ul className="app__navigation-variant">
                {navigationLinksData.map((navItem, i) => (
                    <li key={i} className="app__navigation-item-container">
                        <a className="app__navigation-item" href={navItem.url}>
                            {navItem.content}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;