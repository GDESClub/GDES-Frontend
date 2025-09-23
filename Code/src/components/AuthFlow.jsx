import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import Confirmation from "./Confirmation";

export function AuthLogin(username, password) {
    console.log(username, password);
    fetch("https://gdesbackend.vercel.app/api/login", { method: 'POST', headers: { "Content-Type": "application/json" }, body: { "name": username, "password": password } }).then((res) => res.json()).then((res) => console.log(res))
}

export function AuthSignUp(username, password) {
    console.log(username, password);
    fetch("https://gdesbackend.vercel.app/api/login", { method: 'POST', body: { "name": username, "password": password } }).then((res) => res.json()).then((res) => console.log(res))
}

function AuthFlow() {
    const [step, setStep] = useState("login"); // "login", "signup", "otp", "confirmation"

    console.log("initialized")

    return (
        <>
            {step === "login" && (
                <Login
                    onClose={() => {console.log("Login Closed")}}
                    onSwitch={() => setStep("signup")}
                    onSubmit={() => setStep("otp")}
                />
            )}
            {step === "signup" && (
                <Signup
                    onClose={() => {}}
                    onSwitch={() => setStep("login")}
                    onSubmit={() => setStep("otp")}
                />
            )}
            {step === "otp" && (
                <OTP
                    onClose={() => {}}
                    onSubmit={() => setStep("confirmation")}
                />
            )}
            {step === "confirmation" && (
                <Confirmation
                    onClose={() => {}}
                />
            )}
        </>
    );
}