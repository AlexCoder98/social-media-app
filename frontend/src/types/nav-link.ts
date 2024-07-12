import { MouseEventHandler } from 'react'

export type NavigationLinkProps = {
    to: string;
    content: string;
    title?: string;
    clickHandler?: MouseEventHandler<HTMLAnchorElement>;
}