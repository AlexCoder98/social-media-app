import { MouseEventHandler } from "react";

export type ButtonProps = {
    className: string;
    content: string;
    title: string;
    method?: () => void
    type?: "button" | "reset" | "submit";
}