import { useState } from "react";
import AuthForm from "./AuthForm";
import { useUserState } from "./UserState";

export default function OTPVerification({ userData, onVerified }) {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setUserValue } = useUserState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch("https://gdesbackend.vercel.app/api/verify-otp", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: userData.email, otp })
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error(body.error.message || "OTP verification failed.");
            }

            // On success, set user state with the new token and close the modal
            setUserValue({
                status: 2,
                email: userData.email,
                username: userData.name,
                jwtToken: body.token
            });
            onVerified();

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthForm
            variant="otp"
            title="Verify Your Email"
            fields={[
                { label: `An OTP was sent to ${userData.email}`, type: "text", placeholder: "Enter 6-digit OTP", oninput: setOtp }
            ]}
            buttonText={isLoading ? "Verifying..." : "Create Account"}
            onSubmit={handleSubmit}
            error={error}
        />
    );
}

