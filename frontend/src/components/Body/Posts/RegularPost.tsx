const RegularPost = () => {
    return (
        <div
            className="app__post"
        >
            <div className="post__header">
                <div className="post__creator-data-container">
                    Creator Data
                </div>
                <div className="post__functional-buttons-container">
                    <button>FN Button</button>
                </div>
            </div>
            <div className="post__body">
                <div className="post__text-content-wrapper">
                    <div className="post__text-content-holder">
                        <p className="post__text-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure fugiat non? Soluta atque ab facere, impedit iusto pariatur nisi.
                        </p>
                    </div>
                    <button>Show more...</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default RegularPost;