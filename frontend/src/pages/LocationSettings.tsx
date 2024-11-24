import { useState, useEffect } from "react";

import Message from "../components/Message/Message";
import AsideHeader from "../components/SettingsAside/Header";
import InputElement from "../components/Forms/InputElement/InputElement";
import Button from "../components/Button/Button";

import { getLocationSettings, postLocationSettings } from "../state/user/actions";
import { useAppDispatch } from "../hooks/redux";

const accessToken = sessionStorage.getItem('accessToken')!;

const LocationSettings = () => {
    const [locationSettingsValues, setLocationSettingsValues] = useState({
        country: '',
        city: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('Location settings data fetched');
    }, []);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setLocationSettingsValues(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const reqData = {
            accessToken: accessToken,
            formData: {
                country: locationSettingsValues.country,
                city: locationSettingsValues.city
            },
        }

        dispatch(postLocationSettings(reqData))
            .then(result => {
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
                    content={"Location"}
                />
                <main className="aside__main">
                    <InputElement
                        id={"country"}
                        tagType={"input"}
                        type={"text"}
                        placeholder={"Country"}
                        label={"Country"}
                        method={handleInputChange}
                        value={locationSettingsValues.country}
                    />
                    <InputElement
                        id={"city"}
                        tagType={"input"}
                        type={"text"}
                        placeholder={"City"}
                        label={"City"}
                        method={handleInputChange}
                        value={locationSettingsValues.city}
                    />
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
            </form >
        </>
    )
}

export default LocationSettings;