import { useState, useEffect } from "react";

import { useAppDispatch } from "../hooks/redux";
import { getAccessSettings, postAccessSettings } from "../state/user/actions";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";

const AccessSettings = () => {
    const [accessSettingsValues, setAccessSettingsValues] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    })

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const dispatch = useAppDispatch();
    const accessToken = sessionStorage.getItem('accessToken')!;

    useEffect(() => {
        dispatch(getAccessSettings(accessToken)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                setAccessSettingsValues(prev => ({
                    ...prev,
                    email: result.payload as string,
                }));
            }
        });
    }, []);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setAccessSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const reqData = {
            formData: {
                email: accessSettingsValues.email,
                oldPassword: accessSettingsValues.oldPassword,
                newPassword: accessSettingsValues.newPassword,
                newPasswordConfirmation: accessSettingsValues.newPasswordConfirmation,
            },
            accessToken: accessToken,
        }
        dispatch(postAccessSettings(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 2000);
            }
            if (requestStatus === 'fulfilled') {
                const message = result.payload as string;
                setSuccessMsg(message);
                setTimeout(() => {
                    setSuccessMsg('');
                }, 2000);
            }
        })
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
                    content={"Access"}
                />
                <main className="aside__main">
                    <InputElement
                        id={"email"}
                        tagType={"input"}
                        type={"text"}
                        label={"Email"}
                        placeholder={"Email"}
                        method={handleInputChange}
                        value={accessSettingsValues.email}
                    />
                    <InputElement
                        id={"oldPassword"}
                        tagType={"input"}
                        type={"password"}
                        label={"Old password"}
                        placeholder={"Old password"}
                        method={handleInputChange}
                        value={accessSettingsValues.oldPassword}
                    />
                    <InputElement
                        id={"newPassword"}
                        tagType={"input"}
                        type={"password"}
                        label={"New password"}
                        placeholder={"New password"}
                        method={handleInputChange}
                        value={accessSettingsValues.newPassword}
                    />
                    {accessSettingsValues.newPassword && (
                        <InputElement
                            id={"newPasswordConfirmation"}
                            tagType={"input"}
                            type={"password"}
                            label={"Confirm new password"}
                            placeholder={"Confirm new password"}
                            method={handleInputChange}
                            value={accessSettingsValues.newPasswordConfirmation}
                        />
                    )}
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

export default AccessSettings;