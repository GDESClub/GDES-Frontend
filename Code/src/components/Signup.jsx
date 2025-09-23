import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";
import { useUserState } from "./UserState";
import { useState } from "react";

function SignUserUp(username, email, password, recoveryEmail, userState, onSubmit) {
    const {userValue, setUserValue} = userState;
    const jwtToken = userValue['jwtToken'];
    if (jwtToken) {
        console.log("Log Out First");
        console.log("Current Token: ", jwtToken);
        return;
    }

    const userDetails = { "name": username, "email": email, "password": password };

    if (recoveryEmail) {
        userDetails['recoveryEmail'] = recoveryEmail;
    }

    fetch("https://gdesbackend.vercel.app/api/send-otp", { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(userDetails) })
    .then((res) => {
        if (res.status != 200) {
            return;
        }
        res.json().then((body) => {
            if (!body) {
                return;
            }
            console.log(res);
            console.log(body);
            setUserValue({'status': 1, 'email': email, 'name': username, 'jwtToken': null});
            onSubmit()
        })
    })
}

function Signup({ onClose, onSwitch, onSubmit }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [recoveryEmail, setRecoveryEmail] = useState();
    const [name, setName] = useState();

    const userState = useUserState();

    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="signup"
                title="Sign Up!"
                fields={[
                    { label: "Name", type: "name", placeholder: "Your Name", small: true, oninput: setName },
                    { label: "IITG email", type: "email", placeholder: "type....", oninput: setEmail },
                    { label: "Recovery email", type: "email", placeholder: "Recovery Email", small: true, oninput: setRecoveryEmail },
                    { label: "Password", type: "password", placeholder: "Password", oninput: setPassword },
                    { label: "Confirm Password", type: "password", placeholder: "Confirm Password", oninput: setConfirmPassword },
                ]}
                buttonText="Continue"
                switchText={["Already have an account?", "Login here!"]}
                onSwitch={onSwitch}
                onSubmit={(e) => {e.preventDefault(); if (password === confirmPassword) {SignUserUp(name, email, password, recoveryEmail, userState, onSubmit);}}}
            />
        </ModalWrapper>
    );
}

export default Signup;
