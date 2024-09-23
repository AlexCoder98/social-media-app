import { useState } from "react";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";

const AccessSettings = () => {
    const [accessSettingsValues, setAccessSettingsValues] = useState({
        email: '',
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    })

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setAccessSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    return (
        <>
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
        </>

    )
}

export default AccessSettings;