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
        id: 'passwordRepeated',
        placeholder: 'Repeat your password'
    },
]

export const resetPasswordFormInputsData: FormInputsData[] = [
    {
        type: 'text',
        id: 'email',
        placeholder: 'Email',
    },
    {
        type: 'password',
        id: 'newPassword',
        placeholder: 'New password'
    },
    {
        type: 'password',
        id: 'newPasswordRepeated',
        placeholder: 'Repeat your new password'
    }
]