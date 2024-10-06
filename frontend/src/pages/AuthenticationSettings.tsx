import { useState, useEffect, useRef } from "react";

import { useAppDispatch } from "../hooks/redux";
import { getAuthenticationSettings, postAuthenticationSettings } from "../state/user/actions";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";
import Message from "../components/Message/Message";

import '../styles/components_styles/profile_settings/AsideMain.css';

const AccessSettings = () => {
    const [authenticationSettingsValues, setAuthenticationSettingsValues] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    })

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const dispatch = useAppDispatch();
    const accessToken = sessionStorage.getItem('accessToken')!;

    const prevAccessSettingsValues = useRef(authenticationSettingsValues);

    useEffect(() => {
        dispatch(getAuthenticationSettings(accessToken)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                setAuthenticationSettingsValues(prev => ({
                    ...prev,
                    email: result.payload as string,
                }));
                prevAccessSettingsValues.current.email = result.payload as string;
            }
        });
    }, []);

    useEffect(() => {
        if (
            authenticationSettingsValues.email !== prevAccessSettingsValues.current.email ||
            authenticationSettingsValues.oldPassword !== prevAccessSettingsValues.current.oldPassword
        ) {
            setIsDisabled(false)
        } else {
            setIsDisabled(true);
        }
    }, [authenticationSettingsValues]);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setAuthenticationSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { email, oldPassword, newPassword, newPasswordConfirmation } = authenticationSettingsValues;
        const reqData = {
            formData: {
                email: email,
                oldPassword: oldPassword,
                newPassword: newPassword,
                newPasswordConfirmation: newPasswordConfirmation,
            },
            accessToken: accessToken,
        }
        dispatch(postAuthenticationSettings(reqData)).then(result => {
            const { requestStatus } = result.meta;
            if (requestStatus === 'rejected') {
                const message = result.payload as string;
                setErrorMsg(message);
                setTimeout(() => {
                    setErrorMsg('');
                }, 3000);
            }
            if (requestStatus === 'fulfilled') {
                const message = result.payload as string;
                setAuthenticationSettingsValues(prev => ({
                    ...prev,
                    oldPassword: '',
                    newPassword: '',
                    newPasswordConfirmation: ''
                }));
                setSuccessMsg(message);
                setTimeout(() => {
                    setSuccessMsg('');
                }, 3000);
            }
        })
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
                    content={"Authentication"}
                />
                <main className="aside__main">
                    <section className="aside__h4-input-container">
                        <h4 className="aside__h4">Email</h4>
                        <InputElement
                            id={"email"}
                            tagType={"input"}
                            type={"text"}
                            placeholder={"Email"}
                            method={handleInputChange}
                            value={authenticationSettingsValues.email}
                        />
                    </section>
                    <section className="aside__h4-input-container">
                        <h4 className="aside__h4">Password</h4>
                        <InputElement
                            id={"oldPassword"}
                            tagType={"input"}
                            type={"password"}
                            placeholder={"Old password"}
                            method={handleInputChange}
                            value={authenticationSettingsValues.oldPassword}
                        />
                        <InputElement
                            id={"newPassword"}
                            tagType={"input"}
                            type={"password"}
                            placeholder={"New password"}
                            method={handleInputChange}
                            value={authenticationSettingsValues.newPassword}
                            isDisabled={isDisabled}
                        />
                        <InputElement
                            id={"newPasswordConfirmation"}
                            tagType={"input"}
                            type={"password"}
                            placeholder={"Confirm new password"}
                            method={handleInputChange}
                            value={authenticationSettingsValues.newPasswordConfirmation}
                            isDisabled={isDisabled}
                        />
                    </section>
                </main>
                <footer className="aside__footer">
                    <Button
                        className={`app__button  submit ${isDisabled ? 'disabled' : 'add'}`}
                        type={"submit"}
                        content={"Save"}
                        title={!isDisabled ? "Save changes" : ""}
                        iconName={"floppy-disk"}
                        isDisabled={isDisabled}
                    />
                </footer>
            </form>
        </>
    )
}

export default AccessSettings;