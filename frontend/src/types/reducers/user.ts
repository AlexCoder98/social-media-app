export type UserNecessaryData = {
    name: string;
    surname: string;
    email: string;
    password: string;
    passwordConfirmation?: string;
};

type Additional<T> = {
    [P in keyof T]?: T[P];
};

type UserAdditionalData = {
    profileImage: string;
    status: string;
    aboutMe: string;
};

type UserInitialType = {
    necessary: UserNecessaryData;
    additional: Additional<UserAdditionalData>;
}
