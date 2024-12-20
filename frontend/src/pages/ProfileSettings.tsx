import { useState, useEffect } from "react";

import { useAppDispatch } from "../hooks/redux";
import { getProfileSettings, postProfileSettigns, uploadProfileImage } from "../state/user/actions";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";
import Message from "../components/Message/Message";

import { ProfileSettingsType } from '../types/reducers/user';

const accessToken = sessionStorage.getItem('accessToken')!;

const ProfileSettingsPage = () => {
    const [profileSettingsValues, setProfileSettingsValues] = useState({
        name: '',
        surname: '',
        profileImage: '',
        status: '',
        bio: ''
    });

    const [file, setFile] = useState<File | null>(null);

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const dispatch = useAppDispatch();

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
            [name]: value,
        }));
    }

    const fileSelectedHandler = async (e: React.FormEvent) => {
        const selectedFile = (e.target as HTMLInputElement).files![0];
        setFile(selectedFile);
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImage', file!);
        if (profileSettingsValues.profileImage !== '') {
            formData.append('oldImagePath', profileSettingsValues.profileImage);
        }

        const reqData = {
            accessToken: accessToken,
            formData: formData,
        }

        dispatch(uploadProfileImage(reqData))
            .then(result => {
                const { requestStatus } = result.meta;
                if (requestStatus === 'fulfilled') {
                    const { message, path } = result.payload as {
                        message: string; path: string;
                    }
                    setSuccessMsg(message);
                    setTimeout(() => {
                        setErrorMsg('');
                    }, 3000);

                    const { name, surname, profileImage, status, bio } = profileSettingsValues;

                    const reqData = {
                        userObj: {
                            name: name,
                            surname: surname,
                            profileImage: path ? path : profileImage,
                            status: status,
                            bio: bio,
                        },
                        accessToken: accessToken,
                    };

                    return reqData;
                }
            })
            .then((data) => {
                return dispatch(postProfileSettigns(data!))
            })
            .then(result => {
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
                encType="multipart/form-data"
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
                        label="Profile image"
                        type="file"
                        method={fileSelectedHandler}
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