import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import Confirmation from "./Confirmation";

function AuthFlow() {
    const [step, setStep] = useState("login"); // "login", "signup", "otp", "confirmation"

    return (
        <>
            {step === "login" && (
                <Login
                    onClose={() => {}}
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

export default AuthFlow;