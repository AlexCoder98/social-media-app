type FormInputsData = {
    tagType: string;
    id: string;
    placeholder: string;
    type?: string;
}

export const signInFormInputsData: FormInputsData[] = [
    {
        tagType: 'input',
        type: 'text',
        id: 'email',
        placeholder: 'Email',
    },
    {
        tagType: 'input',
        type: 'password',
        id: 'password',
        placeholder: 'Password'
    },
]

export const signUpFormInputsData: FormInputsData[] = [
    {
        tagType: 'input',
        type: 'text',
        id: 'name',
        placeholder: 'Name'
    },
    {
        tagType: 'input',
        type: 'text',
        id: 'surname',
        placeholder: 'Surname'
    },
    {
        tagType: 'input',
        type: 'text',
        id: 'email',
        placeholder: 'Email',
    },
    {
        tagType: 'input',
        type: 'password',
        id: 'password',
        placeholder: 'Password'
    },
    {
        tagType: 'input',
        type: 'password',
        id: 'passwordRepeated',
        placeholder: 'Repeat your password'
    },
]

export const resetPasswordFormInputsData: FormInputsData[] = [
    {
        tagType: 'input',
        type: 'text',
        id: 'email',
        placeholder: 'Email',
    },
    {
        tagType: 'input',
        type: 'password',
        id: 'newPassword',
        placeholder: 'New password'
    },
    {
        tagType: 'input',
        type: 'password',
        id: 'newPasswordRepeated',
        placeholder: 'Repeat your new password'
    }
]

export const postFormData: FormInputsData[] = [
    {
        tagType: 'input',
        type: 'text',
        id: 'title',
        placeholder: 'Post title'
    },
    {
        tagType: 'input',
        type: 'text',
        id: 'imageUrl',
        placeholder: 'Image url'
    },
    {
        tagType: 'textarea',
        type: 'text',
        id: 'description',
        placeholder: 'Type some text...'
    }
]