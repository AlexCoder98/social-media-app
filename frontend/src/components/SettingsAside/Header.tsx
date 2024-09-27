import '../../styles/components_styles/profile_settings/AsideHeader.css';

const AsideHeader = ({ content }: { content: string }) => {
    return (
        <header className="aside__header">
            <h3 className="aside__h3">{content}</h3>
        </header>
    )
}

export default AsideHeader;