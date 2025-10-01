import { useState } from "react";
import AuthForm from "./AuthForm";

export default function Signup({ onSwitch, onOtpSent }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch("https://gdesbackend.vercel.app/api/send-otp", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || "Failed to send OTP.");
            }

            // If OTP is sent successfully, notify the parent
            onOtpSent({ name, email, password });

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthForm
            variant="signup"
            title="Create Account"
            fields={[
                { label: "Username", type: "text", placeholder: "Choose a unique username", oninput: setName },
                { label: "Email", type: "email", placeholder: "Enter your email", oninput: setEmail },
                { label: "Password", type: "password", placeholder: "Create a strong password", oninput: setPassword }
            ]}
            buttonText={isLoading ? "Sending..." : "Send OTP"}
            switchText={["Have an account?", "Login!"]}
            onSwitch={onSwitch}
            onSubmit={handleSubmit}
            error={error}
        />
    );
}

