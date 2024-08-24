export type UserNecessaryData = {
    name: string | null;
    surname: string | null;
    email: string | null;
    password: string | null;
};

type Additional<T> = {
    [P in keyof T]?: T[P];
};

type UserAdditionalData = {
    profileImage: string | null;
    status: string | null;
    aboutMe: string | null;
};

export type UserInitialStateType = {
    necessary: UserNecessaryData;
    additional: Additional<UserAdditionalData>;
}
