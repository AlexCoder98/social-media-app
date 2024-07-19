import InputElement from "../InputElement/InputElement"

import '../../../styles/EditProfile.css';

const EditProfileForm = () => {
    return (
        <form
            method="POST"
            className="app__form edit-profile"
        >
            <section className="app__edit-profile-top">
                <div className="app__edit-profile-general">
                    <h3 className="app__h3">General</h3>
                    <div className="app__edit-profile-inputs-container">
                        <InputElement
                            id={"editName"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit name"}
                            method={() => 'sd'}
                        />
                        <InputElement
                            id={"editSurname"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit surname"}
                            method={() => 'sd'}
                        />
                        <InputElement
                            id={"editStatus"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit status"}
                            method={() => 'sd'}
                        />
                        <InputElement
                            id={"editProfileImage"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit profile image"}
                            method={() => 'sd'}
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
                            placeholder={"edit about me"}
                            method={() => 'sd'}
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
                            placeholder={"edit email address"}
                            method={() => 'sd'}
                        />
                        <InputElement
                            id={"editPassword"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit password"}
                            method={() => 'sd'}
                        />
                        <InputElement
                            id={"editPasswordRepeat"}
                            type={"text"}
                            tagType={"input"}
                            placeholder={"edit password repeat"}
                            method={() => 'sd'}
                        />
                    </div>
                </div>
            </section>
        </form>
    )
}

export default EditProfileForm;