import { EInputTypesType } from "../types/input"

export const signInFormData = [
    {
        id: 'email',
        type: EInputTypesType.Email,
        name: 'email',
        value: 'some email',
        placeholderValue: 'Email',
        labelValue: 'Email'
    },
    {
        id: 'password',
        type: EInputTypesType.Password,
        name: 'password',
        value: 'some password',
        placeholderValue: 'Password',
        labelValue: 'Password'
    },
]