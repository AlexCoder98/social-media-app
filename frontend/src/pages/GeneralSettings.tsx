import { useState, useEffect } from "react";

import { useAppDispatch } from "../hooks/redux";
import { getGeneralSettings, postGeneralSettigns } from "../state/user/actions";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";

import { FetchUserFromDbResType } from '../types/reducers/user';

const GeneralSettingsPage = () => {
    const [generalSetingsValues, setGeneralSettingsValues] = useState({
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
        dispatch(getGeneralSettings(accessToken)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'fulfilled') {
                const { name, surname, profileImage, status, bio } = result.payload as FetchUserFromDbResType;
                setGeneralSettingsValues({
                    name: name,
                    surname: surname,
                    profileImage: profileImage,
                    status: status,
                    bio: bio
                })
            }
        })
    }, [])

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setGeneralSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const reqData = {
            userObj: {
                name: generalSetingsValues.name,
                surname: generalSetingsValues.surname,
                profileImage: generalSetingsValues.profileImage,
                status: generalSetingsValues.status,
                bio: generalSetingsValues.bio,
            },
            accessToken: accessToken,
        };
        dispatch(postGeneralSettigns(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                setErrorMsg(result.payload as string);
                setTimeout(() => {
                    setErrorMsg('');
                }, 2000);
            };
            if (requestStatus === 'fulfilled') {
                setSuccessMsg(result.payload as string);
                setTimeout(() => {
                    setSuccessMsg('');
                }, 2000);
            }
        });
    }

    return (
        <>
            {errorMsg && <p className="app__form-message error">{errorMsg}</p>}
            {successMsg && <p className="app__form-message success">{successMsg}</p>}
            <form
                className="settings__form"
                method="PUT"
                onSubmit={handleOnSubmit}
            >
                <AsideHeader
                    content={'General'}
                />
                <main className="aside__main">
                    <InputElement
                        id="name"
                        tagType="input"
                        placeholder="Name"
                        label="Name"
                        type="text"
                        method={handleInputChange}
                        value={generalSetingsValues.name}
                    />
                    <InputElement
                        id="surname"
                        tagType="input"
                        placeholder="Surname"
                        label="Surname"
                        type="text"
                        method={handleInputChange}
                        value={generalSetingsValues.surname}
                    />
                    <InputElement
                        id="profileImage"
                        tagType="input"
                        placeholder="Profile image"
                        label="Profile image"
                        type="text"
                        method={handleInputChange}
                        value={generalSetingsValues.profileImage}
                    />
                    <InputElement
                        id="status"
                        tagType="input"
                        placeholder="Status"
                        label="Status"
                        type="text"
                        method={handleInputChange}
                        value={generalSetingsValues.status}
                    />
                    <InputElement
                        id="bio"
                        tagType="textarea"
                        placeholder="Bio"
                        label="Bio"
                        type="text"
                        method={handleInputChange}
                        value={generalSetingsValues.bio}
                    />
                </main>
                <footer className="aside__footer">
                    <Button
                        className={"app__button add submit"}
                        type={"submit"}
                        content={"Save"}
                        title={"Save changes"}
                    />
                </footer>
            </form>
        </>
    )
}

export default GeneralSettingsPage;