import { useState } from "react";
import AuthForm from "./AuthForm";
import { useUserState } from "./UserState";

export default function Login({ onSwitch, onSubmit }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setUserValue } = useUserState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch("https://gdesbackend.vercel.app/api/login", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, password })
            });

            const body = await response.json();

            if (!response.ok) {
                throw new Error(body.error.message || "Login failed.");
            }

            // Set user state and call the final onSubmit to close the modal
            setUserValue({ status: 2, username: name, jwtToken: body.token });
            onSubmit();

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthForm
            variant="login"
            title="Login"
            fields={[
                { label: "Username", type: "text", placeholder: "Enter here...", oninput: setName },
                { label: "Password", type: "password", placeholder: "Password", oninput: setPassword }
            ]}
            buttonText={isLoading ? "Logging in..." : "Continue"}
            switchText={["No Account?", "Create one!"]}
            onSwitch={onSwitch}
            onSubmit={handleSubmit}
            error={error}
        />
    );
}

