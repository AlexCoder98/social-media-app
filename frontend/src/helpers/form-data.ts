import { EInputTypesType } from "../types/input"

export const signInFormData = [
    {
        id: 'email',
        type: EInputTypesType.Email,
        name: 'email',
        placeholderValue: 'Email',
        labelValue: 'Email'
    },
    {
        id: 'password',
        type: EInputTypesType.Password,
        name: 'password',
        placeholderValue: 'Password',
        labelValue: 'Password'
    },
];

export const signUpFormData = [
    {
        id: 'name',
        type: EInputTypesType.Text,
        name: 'name',
        value: '',
        placeholderValue: 'Your name',
        labelValue: 'Name',
    },
    {
        id: 'surname',
        type: EInputTypesType.Text,
        name: 'surname',
        value: '',
        placeholderValue: 'Your surname',
        labelValue: 'Surname',
    },
    {
        id: 'email',
        type: EInputTypesType.Email,
        name: 'email',
        value: '',
        placeholderValue: 'Your email',
        labelValue: 'Email',
    },
    {
        id: 'password',
        type: EInputTypesType.Password,
        name: 'password',
        value: '',
        placeholderValue: 'Your password',
        labelValue: 'Password',
    },
    {
        id: 'passwordConfirmation',
        type: EInputTypesType.Password,
        name: 'passwordConfirmation',
        value: '',
        placeholderValue: 'Confirm password',
        labelValue: 'Confirm password',
    },
];

export const resetPasswordFormData = [
    {
        id: 'email',
        type: EInputTypesType.Email,
        name: 'email',
        value: 'dasd',
        placeholderValue: 'Email',
        labelValue: 'Email'
    },
    {
        id: 'newPassword',
        type: EInputTypesType.Password,
        name: 'newPassword',
        value: '',
        placeholderValue: 'New password',
        labelValue: 'New password'
    },
    {
        id: 'confirmNewPassword',
        type: EInputTypesType.Password,
        name: 'confirmNewPassword',
        value: '',
        placeholderValue: 'Confirm new password',
        labelValue: 'Confirm new password'
    },
];