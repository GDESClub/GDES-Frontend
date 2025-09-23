import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";
import { useContext, useState } from "react";
import { useUserState } from "./UserState";

function LogUserIn(username, password, userState, onSubmit) {
    const {userValue, setUserValue} = userState;
    const jwtToken = userValue['jwtToken'];
    if (jwtToken) {
        console.log("Log Out First");
        console.log("Current Token: ", jwtToken);
        return;
    }
    fetch("https://gdesbackend.vercel.app/api/login", { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ "name": username, "password": password }) })
    .then((res) => {
            if (res.status != 200) {
                return;
            }
            res.json().then((body) => {
            if (!body) {
                return;
            }
            if (!body['token']) {
                return;
            }
            setUserValue({'status': 2, 'email': email, 'username': username, 'jwtToken': body['token']});
            onSubmit()
        })
    })
}

function Login({ onClose, onSwitch, onSubmit }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const userState = useUserState();
    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="login"
                title="Login"
                fields={[
                    { label: "Username", type: "text", placeholder: "Enter here...", oninput: setUsername, },
                    { label: "Password", type: "password", placeholder: "Password", oninput: setPassword }
                ]}
                buttonText="Continue"
                switchText={["No Account?", "Create one!"]}
                onSwitch={onSwitch}
                onSubmit={(e) => {e.preventDefault(); LogUserIn(username, password, userState, onSubmit)}} // <-- Use the prop from parent
            />
        </ModalWrapper>
    );
}

export default Login;
