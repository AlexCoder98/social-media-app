export type InputElementProps = {
    tagType: string;
    type: string;
    id: string;
    method: (e: React.FormEvent) => void;
    placeholder?: string;
    value?: string;
    label?: string;
    isDisabled?: boolean;
}