export interface PostPropsType {
    id: string;
    title: string;
    image: string;
    description: string;
}

export type PostType = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    text?: string[];
}

export type EditPostType = {
    title: string;
    image: string;
    description: string;
}