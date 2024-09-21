const AsideHeader = ({ content }: { content: string }) => {
    return (
        <header className="aside__header">
            <h3>{content}</h3>
        </header>
    )
}

export default AsideHeader;