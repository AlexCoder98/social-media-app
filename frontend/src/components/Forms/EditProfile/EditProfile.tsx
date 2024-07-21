import { useState } from "react";

import InputElement from "../InputElement/InputElement"
import Button from "../../Button/Button";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { editProfile } from '../../../state/user/userSlice';

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
        editAboutMe: aboutMe!,
        editEmail: email,
        editPassword: password,
        editPasswordRepeat: ''
    });

    const handleOnInputChange = (e: React.FormEvent) => {
        setEditFormValues({
            ...editFormValues,
            [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
        });
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
                aboutMe: editFormValues.editAboutMe
            }
        }
        dispatch(editProfile(updatedUser));

        console.log('Updated USER');
        console.log(updatedUser);
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
                            method={handleOnInputChange}
                        />
                        <InputElement
                            id={"editSurname"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New surname"}
                            value={editFormValues['editSurname']}
                            method={handleOnInputChange}
                        />
                        <InputElement
                            id={"editStatus"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New status"}
                            value={editFormValues['editStatus']}
                            method={handleOnInputChange}
                        />
                        <InputElement
                            id={"editProfileImage"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New profile image"}
                            value={editFormValues['editProfileImage']}
                            method={handleOnInputChange}
                        />
                    </div>
                </div>
                <div className="app__edit-profile-about-me">
                    <h3 className="app__h3">About me</h3>
                    <div className="app__edit-profile-inputs-container">
                        <InputElement
                            id={"editAboutMe"}
                            type={"text"}
                            tagType={"textarea"}
                            placeholder={"New personal information"}
                            value={editFormValues['editAboutMe']}
                            method={handleOnInputChange}
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
                            method={handleOnInputChange}
                        />
                        <InputElement
                            id={"editPassword"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New password"}
                            value={editFormValues['editPassword']}
                            method={handleOnInputChange}
                        />
                        <InputElement
                            id={"editPasswordRepeat"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"New password"}
                            value={editFormValues['editPasswordRepeat']}
                            method={handleOnInputChange}
                        />
                    </div>
                </div>
                <div className="app__edit-profile-buttons-container">
                    <Button
                        className={"app__button delete"}
                        type={"submit"}
                        title={"Cancel changes"}
                        content={"Cancel"}
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