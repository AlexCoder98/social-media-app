export type ButtonProps = {
    className: string;
    content: string;
    title: string;
    type?: "button" | "reset" | "submit";
    method?: () => void
    isDisabled?: boolean;
}