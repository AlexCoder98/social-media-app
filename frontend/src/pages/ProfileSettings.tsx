import { useState, useEffect } from "react";

import { useAppDispatch } from "../hooks/redux";
import { getProfileSettings, postProfileSettigns } from "../state/user/actions";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";
import Message from "../components/Message/Message";

import { ProfileSettingsType } from '../types/reducers/user';

const ProfileSettingsPage = () => {
    const [profileSettingsValues, setProfileSettingsValues] = useState({
        name: '',
        surname: '',
        profileImage: '',
        status: '',
        bio: ''
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const dispatch = useAppDispatch();
    const accessToken = sessionStorage.getItem('accessToken')!;

    useEffect(() => {
        dispatch(getProfileSettings(accessToken)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'fulfilled') {
                const { name, surname, profileImage, status, bio } = result.payload as ProfileSettingsType;
                setProfileSettingsValues({
                    name: name,
                    surname: surname,
                    profileImage: profileImage,
                    status: status,
                    bio: bio
                });
            }
        })
    }, []);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setProfileSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { name, surname, profileImage, status, bio } = profileSettingsValues;
        const reqData = {
            userObj: {
                name: name,
                surname: surname,
                profileImage: profileImage,
                status: status,
                bio: bio,
            },
            accessToken: accessToken,
        };
        dispatch(postProfileSettigns(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 3000);
            };
            if (requestStatus === 'fulfilled') {
                const message = result.payload as string;
                setSuccessMsg(message);
                setTimeout(() => {
                    setSuccessMsg('');
                }, 3000);
            }
        });
    }

    return (
        <>
            <Message error={errorMsg} success={successMsg} />
            <form
                className="settings__form"
                method="PUT"
                onSubmit={handleOnSubmit}
            >
                <AsideHeader
                    content={'Profile'}
                />
                <main className="aside__main">
                    <InputElement
                        id="name"
                        tagType="input"
                        placeholder="Name"
                        label="Name"
                        type="text"
                        method={handleInputChange}
                        value={profileSettingsValues.name}
                    />
                    <InputElement
                        id="surname"
                        tagType="input"
                        placeholder="Surname"
                        label="Surname"
                        type="text"
                        method={handleInputChange}
                        value={profileSettingsValues.surname}
                    />
                    <InputElement
                        id="profileImage"
                        tagType="input"
                        placeholder="Profile image"
                        label="Profile image"
                        type="text"
                        method={handleInputChange}
                        value={profileSettingsValues.profileImage}
                    />
                    <InputElement
                        id="status"
                        tagType="input"
                        placeholder="Status"
                        label="Status"
                        type="text"
                        method={handleInputChange}
                        value={profileSettingsValues.status}
                    />
                    <InputElement
                        id="bio"
                        tagType="textarea"
                        placeholder="Bio"
                        label="Bio"
                        type="text"
                        method={handleInputChange}
                        value={profileSettingsValues.bio}
                    />
                </main>
                <footer className="aside__footer">
                    <Button
                        className={"app__button add submit"}
                        type={"submit"}
                        content={"Save"}
                        title={"Save changes"}
                        iconName={"floppy-disk"}
                    />
                </footer>
            </form>
        </>
    )
}

export default ProfileSettingsPage;