export type PostType = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    text?: string[];
}

export type PostPropsType = PostType & { id: number };