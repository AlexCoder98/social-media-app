export interface IUser {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    status?: string;
    profileImage?: string;
}

export type TUserSectionNavData = Pick<IUser, 'name' | 'surname' | 'profileImage'>