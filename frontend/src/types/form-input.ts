export type InputElementProps = {
    type: string;
    id: string;
    placeholder: string;
    method: (e: React.FormEvent) => void;
}