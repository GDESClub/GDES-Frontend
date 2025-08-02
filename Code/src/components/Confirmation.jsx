import ModalWrapper from "./ModalWrapper";
import AuthForm from "./AuthForm";
import "./AuthForm.css";

function Confirmation({ onClose }) {
    return (
        <ModalWrapper onClose={onClose}>
            <AuthForm
                variant="login"
                title="Account Confirmed!"
                fields={[
                    {
                        label: "",
                        type: "custom",
                        render: () => (
                            <div style={{ margin: "40px 0", color: "#79FFB6", fontSize: 22, textAlign: "center" }}>
                                Your account has been successfully verified.
                            </div>
                        ),
                    },
                ]}
                buttonText="Go to Dashboard"
                switchText={["", ""]}
                onSwitch={() => { }}
                onSubmit={e => {
                    e.preventDefault();
                    onClose();
                }}
            />
        </ModalWrapper>
    );
}

export default Confirmation;