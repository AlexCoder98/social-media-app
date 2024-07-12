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

export const signUpFormInputsData: FormInputsData[] = [
    {
        type: 'text',
        id: 'name',
        placeholder: 'Name'
    },
    {
        type: 'text',
        id: 'surname',
        placeholder: 'Surname'
    },
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
    {
        type: 'password',
        id: 'repeat-password',
        placeholder: 'Repeat your password'
    },
]