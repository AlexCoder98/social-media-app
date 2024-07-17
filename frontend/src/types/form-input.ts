export type InputElementProps = {
    tagType: string;
    type: string;
    id: string;
    placeholder: string;
    method: (e: React.FormEvent) => void;
}