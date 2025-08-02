import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";

function Login({ onClose, onSwitch, onSubmit }) {
    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="login"
                title="Login"
                fields={[
                    { label: "IITG email / Username / Phone number", type: "text", placeholder: "Enter here..." },
                    { label: "Password", type: "password", placeholder: "Password" }
                ]}
                buttonText="Continue"
                switchText={["No Account?", "Create one!"]}
                onSwitch={onSwitch}
                onSubmit={onSubmit} // <-- Use the prop from parent
            />
        </ModalWrapper>
    );
}

export default Login;
