import { useState } from "react";

import InputElement from "../InputElement/InputElement"
import Button from "../../Button/Button";

import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { updateUserData } from '../../../state/user/userSlice';

import { EditProfileType } from "../../../types/edit-profile";
import '../../../styles/EditProfile.css';

const EditProfileForm = () => {
    const user = useAppSelector(state => state.users.userObj);
    const dispatch = useAppDispatch();

    const { name, surname, email, password } = user.necessary;
    const { status, profileImage, aboutMe } = user.additional;

    const [editFormValues, setEditFormValues] = useState<EditProfileType>({
        editName: name,
        editSurname: surname,
        editStatus: status!,
        editProfileImage: profileImage!,
        editAboutUser: aboutMe!,
        editEmail: email,
        editPassword: password,
        editPasswordRepeat: ''
    });

    const handleInputChange = (e: React.FormEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setEditFormValues((prevEditFormValues) => ({
            ...prevEditFormValues,
            [name]: value,
        }));
        console.log(editFormValues);
    }

    const handleOnSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const updatedUser = {
            necessary: {
                name: editFormValues.editName,
                surname: editFormValues.editSurname,
                email: editFormValues.editEmail,
                password: editFormValues.editPassword,
            },
            additional: {
                status: editFormValues.editStatus,
                profileImage: editFormValues.editProfileImage,
                aboutMe: editFormValues.editAboutUser
            }
        }
        dispatch(updateUserData(updatedUser))
            .then(() => {
                alert('User data have been updated!');
            });

        console.log('Updated USER');
        console.log(updatedUser);
    }

    const handleOnCancel = () => {
        setEditFormValues({
            editName: name,
            editSurname: surname,
            editStatus: status!,
            editProfileImage: profileImage!,
            editAboutUser: aboutMe!,
            editEmail: email,
            editPassword: password,
            editPasswordRepeat: ''
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
                            placeholder={"New name"}
                            value={editFormValues['editName']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editSurname"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New surname"}
                            value={editFormValues['editSurname']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editStatus"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New status"}
                            value={editFormValues['editStatus']}
                            method={handleInputChange}
                        />
                        <InputElement
                            id={"editProfileImage"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New profile image"}
                            value={editFormValues['editProfileImage']}
                            method={handleInputChange}
                        />
                    </div>
                </div>
                <div className="app__edit-profile-about-me">
                    <h3 className="app__h3">About me</h3>
                    <div className="app__edit-profile-inputs-container">
                        <InputElement
                            id={"editAboutUser"}
                            type={"text"}
                            tagType={"textarea"}
                            placeholder={"New user information"}
                            value={editFormValues['editAboutUser']}
                            method={handleInputChange}
                        />
                    </div>
                </div>
            </section>
            <section className="app__edit-profile-bottom">
                <div className="app__edit-profile-auth">
                    <h3 className="app__h3">Authentication</h3>
                    <div className="app__edit-profile-inputs-container">
                        <InputElement
                            id={"editEmail"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New email"}
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
                            placeholder={"New password"}
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