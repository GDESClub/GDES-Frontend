import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";

function Signup({ onClose, onSwitch, onSubmit }) {
    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="signup"
                title="Sign Up!"
                fields={[
                    { label: "IITG email", type: "email", placeholder: "type...." },
                    { label: "Password", type: "password", placeholder: "Password" },
                    { label: "Confirm Password", type: "password", placeholder: "Confirm Password" },
                    { label: "Add Recovery email or Phone Number", type: "email", placeholder: "Recovery Email", small: true },
                    { label: "", type: "tel", placeholder: "Phone Number", small: true }
                ]}
                buttonText="Continue"
                switchText={["Already have an account?", "Login here!"]}
                onSwitch={onSwitch}
                onSubmit={onSubmit}
            />
        </ModalWrapper>
    );
}

export default Signup;
