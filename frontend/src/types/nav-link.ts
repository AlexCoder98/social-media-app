export type IconType = 'house' | 'photo-film' | 'user';

export type NavigationLinkProps = {
    to: string;
    content: string;
    iconName?: IconType;
    title?: string;
}