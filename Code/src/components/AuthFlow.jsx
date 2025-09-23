import React, { createContext, useContext, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import OTP from "./OTP";
import Confirmation from "./Confirmation";
import { useUserState } from "./UserState";

function AuthFlow({ onClose }) {
  const {userValue} = useUserState();

  const [step, setStep] = useState(userValue['status'] == 0 ? 'login' : userValue['status'] == 1 ? 'otp' : 'confirmation');

  return (
    <>
      {step === "login" && (
        <Login
          onClose={onClose}
          onSwitch={() => setStep("signup")}
          onSubmit={() => {setStep("confirmation")}}
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
