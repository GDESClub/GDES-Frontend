import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";

function Login({ onClose, onSwitch }) {
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
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Login submit");
                }}
            />
        </ModalWrapper>
    );
}

export default Login;
