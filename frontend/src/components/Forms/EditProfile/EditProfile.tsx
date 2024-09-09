import { useState, useLayoutEffect } from "react";

import InputElement from "../InputElement/InputElement"
import Button from "../../Button/Button";

import { useAppDispatch } from "../../../hooks/redux";
import { getEditProfile, postEditProfile } from "../../../state/user/actions";

import { UserInitialStateType } from '../../../types/reducers/user';
import { EditProfileType } from "../../../types/edit-profile";

import '../../../styles/EditProfile.css';

const EditProfileForm = () => {
    const accessToken = sessionStorage.getItem('accessToken');
    const userId = sessionStorage.getItem('userId');
    const dispatch = useAppDispatch();

    const reqData = {
        accessToken: accessToken!,
        userId: userId!,
    };

    const [editFormValues, setEditFormValues] = useState<EditProfileType>({
        editName: '',
        editSurname: '',
        editStatus: '',
        editProfileImage: '',
        editAboutUser: '',
        editEmail: '',
        editPassword: '',
        editPasswordRepeat: ''
    });

    useLayoutEffect(() => {
        dispatch(getEditProfile(reqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const userObj = result.payload as UserInitialStateType;
                setEditFormValues({
                    editName: userObj.name,
                    editSurname: userObj.surname,
                    editEmail: userObj.email,
                    editPassword: userObj.password,
                    editPasswordRepeat: '',
                    editStatus: userObj.status!,
                    editProfileImage: userObj.profileImage!,
                    editAboutUser: userObj.aboutMe!
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

        console.log(name, value);
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const updatedUser = {
            accessToken: accessToken!,
            userId: userId!,
            name: editFormValues.editName,
            surname: editFormValues.editSurname,
            email: editFormValues.editEmail,
            password: editFormValues.editPassword,
            confirmPassword: editFormValues.editPasswordRepeat,
            status: editFormValues.editStatus,
            profileImage: editFormValues.editProfileImage,
            aboutMe: editFormValues.editAboutUser
        }
        dispatch(postEditProfile(updatedUser))
            .then((result) => {
                if (result.meta.requestStatus === 'fulfilled') {
                    alert('Profile has been updated!');
                }
            });
    }

    const handleOnCancel = () => {
        dispatch(getEditProfile(reqData)).then(result => {
            if (result.meta.requestStatus === 'fulfilled') {
                const userObj = result.payload as UserInitialStateType;
                setEditFormValues({
                    editName: userObj.name,
                    editSurname: userObj.surname,
                    editEmail: userObj.email,
                    editPassword: '',
                    editPasswordRepeat: '',
                    editStatus: userObj.status!,
                    editProfileImage: userObj.profileImage!,
                    editAboutUser: userObj.aboutMe!
                })
            }
        });
    }

    return (
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
                            id={"editName"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Name"}
                            value={editFormValues['editName']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editSurname"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Surname"}
                            value={editFormValues['editSurname']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editStatus"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Status"}
                            value={editFormValues['editStatus']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editProfileImage"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Profile image"}
                            value={editFormValues['editProfileImage']}
                            method={handleInputChange}
                        />
                    </div>
                </div>
                <div className="app__edit-profile-bio">
                    <h3 className="app__h3">Biography</h3>
                    <div className="app__edit-profile-inputs-container">
                        <InputElement
                            id={"editAboutUser"}
                            type={"text"}
                            tagType={"textarea"}
                            placeholder={"Bio"}
                            value={editFormValues['editAboutUser']}
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
                            id={"editEmail"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Email"}
                            value={editFormValues['editEmail']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editPassword"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New password"}
                            value={editFormValues['editPassword']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editPasswordRepeat"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"Confirm new password"}
                            value={editFormValues['editPasswordRepeat']}
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
    )
}

export default EditProfileForm;