import { useState, useEffect } from "react";

import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";

const GeneralSettingsPage = () => {
    const [generalSetingsValues, setGeneralSettingsValues] = useState({
        name: '',
        surname: '',
        profileImage: '',
        status: '',
        bio: ''
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setGeneralSettingsValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    return (
        <>
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
                />
                <InputElement
                    id="surname"
                    tagType="input"
                    placeholder="Surname"
                    label="Surname"
                    type="text"
                    method={handleInputChange}
                />
                <InputElement
                    id="profileImage"
                    tagType="input"
                    placeholder="Profile image"
                    label="Profile image"
                    type="text"
                    method={handleInputChange}
                />
                <InputElement
                    id="status"
                    tagType="input"
                    placeholder="Status"
                    label="Status"
                    type="text"
                    method={handleInputChange}
                />
                <InputElement
                    id="bio"
                    tagType="textarea"
                    placeholder="Bio"
                    label="Bio"
                    type="text"
                    method={handleInputChange}
                />
            </main>
            <footer className="aside__footer">
                Footer
            </footer>
        </>
    )
}

export default GeneralSettingsPage;