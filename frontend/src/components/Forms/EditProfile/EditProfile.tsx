import { useState, useLayoutEffect } from "react";

import InputElement from "../InputElement/InputElement"
import Button from "../../Button/Button";

import { useAppDispatch } from "../../../hooks/redux";
import { getEditProfile, postEditProfile } from "../../../state/user/actions";

import { UserInitialStateType } from '../../../types/reducers/user';
import { EditProfileType } from "../../../types/edit-profile";

import '../../../styles/EditProfile.css';

const EditProfileForm = () => {
    const [editFormValues, setEditFormValues] = useState<EditProfileType>({
        name: '',
        surname: '',
        status: '',
        profileImage: '',
        bio: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

    const [errorMsg, setErrorMsg] = useState<string>('');
    const [successMsg, setSuccessMsg] = useState<string>('');

    const accessToken = sessionStorage.getItem('accessToken');
    const userId = sessionStorage.getItem('userId');
    const dispatch = useAppDispatch();

    const reqData = {
        accessToken: accessToken!,
        userId: userId!,
    };

    useLayoutEffect(() => {
        dispatch(getEditProfile(reqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const userObj = result.payload as UserInitialStateType;
                setEditFormValues({
                    name: userObj.name,
                    surname: userObj.surname,
                    status: userObj.status!,
                    profileImage: userObj.profileImage!,
                    bio: userObj.aboutMe!,
                    email: userObj.email,
                    password: '',
                    passwordConfirmation: '',
                })
            }
        });
    }, [userId]);

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setEditFormValues((prevEditFormValues) => ({
            ...prevEditFormValues,
            [name]: value,
        }));
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const updatedUser = {
            accessToken: accessToken!,
            userId: userId!,
            name: editFormValues.name,
            surname: editFormValues.surname,
            status: editFormValues.status,
            profileImage: editFormValues.profileImage,
            aboutMe: editFormValues.bio,
            email: editFormValues.email,
            password: editFormValues.password,
            confirmPassword: editFormValues.passwordConfirmation,
        }
        dispatch(postEditProfile(updatedUser))
            .then((result) => {
                if (result.meta.requestStatus === 'rejected') {
                    const msg = result.payload as string;
                    setErrorMsg(msg);
                    setTimeout(() => {
                        setErrorMsg('');
                    }, 1000);
                }
                if (result.meta.requestStatus === 'fulfilled') {
                    const msg = 'Profile has been updated!'
                    setSuccessMsg(msg);
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 1000);
                }
            });
    }

    const handleOnCancel = () => {
        dispatch(getEditProfile(reqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const userObj = result.payload as UserInitialStateType;
                setEditFormValues({
                    name: userObj.name,
                    surname: userObj.surname,
                    status: userObj.status!,
                    profileImage: userObj.profileImage!,
                    bio: userObj.aboutMe!,
                    email: userObj.email,
                    password: '',
                    passwordConfirmation: '',
                })
            }
        });
    }

    return (
        <>
            {errorMsg && <p className="app__form-message error">{errorMsg}</p>}
            {successMsg && <p className="app__form-message success">{successMsg}</p>}
            <form
                method="POST"
                className="app__form edit-profile"
                onSubmit={handleOnSubmit}
            >
                <section className="app__edit-profile-top">
                    <div className="app__edit-profile-general">
                        <h3 className="app__h3">General</h3>
                        <div className="app__edit-profile-inputs-container">
                            <InputElement
                                id={"name"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Name"}
                                value={editFormValues['name']}
                                method={handleInputChange}
                            />
                            <InputElement
                                id={"surname"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Surname"}
                                value={editFormValues['surname']}
                                method={handleInputChange}
                            />
                            <InputElement
                                id={"status"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Status"}
                                value={editFormValues['status']}
                                method={handleInputChange}
                            />
                            <InputElement
                                id={"profileImage"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Profile image"}
                                value={editFormValues['profileImage']}
                                method={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="app__edit-profile-bio">
                        <h3 className="app__h3">Biography</h3>
                        <div className="app__edit-profile-inputs-container">
                            <InputElement
                                id={"bio"}
                                type={"text"}
                                tagType={"textarea"}
                                placeholder={"Bio"}
                                value={editFormValues['bio']}
                                method={handleInputChange}
                            />
                        </div>
                    </div>
                </section>
                <section className="app__edit-profile-bottom">
                    <h3 className="app__h3">Authentication</h3>
                    <div className="app__edit-profile-auth">
                        <div className="app__edit-profile-inputs-container">
                            <InputElement
                                id={"email"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Email"}
                                value={editFormValues['email']}
                                method={handleInputChange}
                            />
                            <InputElement
                                id={"password"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"New password"}
                                value={editFormValues['password']}
                                method={handleInputChange}
                            />
                            <InputElement
                                id={"passwordConfirmation"}
                                type={"text"}
                                tagType={"input"}
                                placeholder={"Confirm new password"}
                                value={editFormValues['passwordConfirmation']}
                                method={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="app__edit-profile-buttons-container">
                        <Button
                            className={"app__button delete"}
                            type={"button"}
                            title={"Cancel changes"}
                            content={"Cancel"}
                            method={handleOnCancel}
                        />
                        <Button
                            className={"app__button add"}
                            type={"submit"}
                            title={"Save changes"}
                            content={"Save"}
                        />
                    </div>
                </section>
            </form>
        </>
    )
}

export default EditProfileForm;