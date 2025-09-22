import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import Confirmation from "./Confirmation";

function AuthFlow({ initialStep = "login", onClose }) {
  const [step, setStep] = useState(initialStep);

  return (
    <>
      {step === "login" && (
        <Login
          onClose={onClose}
          onSwitch={() => setStep("signup")}
          onSubmit={() => setStep("otp")}
        />
      )}
      {step === "signup" && (
        <Signup
          onClose={onClose}
          onSwitch={() => setStep("login")}
          onSubmit={() => setStep("otp")}
        />
      )}
      {step === "otp" && (
        <OTP onClose={onClose} onSubmit={() => setStep("confirmation")} />
      )}
      {step === "confirmation" && <Confirmation onClose={onClose} />}
    </>
  );
}


export default AuthFlow;