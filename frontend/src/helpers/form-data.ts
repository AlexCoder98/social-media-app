type FormInputsData = {
    tagType: string;
    id: string;
    placeholder: string;
    type?: string;
    value?: string;
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
        id: 'passwordConfirmation',
        placeholder: 'Confirm password'
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
        id: 'newPasswordConfirmation',
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
        type: 'file',
        id: 'postImage',
        placeholder: 'Post image'
    },
    {
        tagType: 'textarea',
        type: 'text',
        id: 'description',
        placeholder: 'Post description'
    }
]