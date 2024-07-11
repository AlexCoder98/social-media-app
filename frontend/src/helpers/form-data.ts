type FormInputsData = {
    type: string;
    id: string;
    placeholder: string;
}

export const signInFormInputsData: FormInputsData[] = [
    {
        type: 'text',
        id: 'email',
        placeholder: 'Email',
    },
    {
        type: 'password',
        id: 'password',
        placeholder: 'Password'
    },
]