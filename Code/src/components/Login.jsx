import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";
import { AuthLogin } from "./AuthFlow";
import { useState } from "react";

function Login({ onClose, onSwitch, onSubmit }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="login"
                title="Login"
                fields={[
                    { label: "IITG email / Username / Phone number", type: "text", placeholder: "Enter here...", oninput: setUsername, },
                    { label: "Password", type: "password", placeholder: "Password", oninput: setPassword }
                ]}
                buttonText="Continue"
                switchText={["No Account?", "Create one!"]}
                onSwitch={onSwitch}
                onSubmit={(e) => {e.preventDefault(); AuthLogin(username, password)}} // <-- Use the prop from parent
            />
        </ModalWrapper>
    );
}

export default Login;
