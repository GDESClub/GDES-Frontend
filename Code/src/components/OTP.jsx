import React, { useRef, useState } from "react";
import AuthForm from "./AuthForm";
import ModalWrapper from "./ModalWrapper";


function OTP({ onClose, onSubmit }) {
  const inputs = useRef([]);

  if (inputs.current.length !== 6) {
    inputs.current = Array(6)
      .fill()
      .map((_, i) => inputs.current[i] || React.createRef());
  }
  const [otp, setOtp] = useState(Array(6).fill(""));

  // Handle input change and move focus
  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) return;
    const newOtp = [...otp];
    newOtp[idx] = val[0];
    setOtp(newOtp);
    if (idx < 5) inputs[idx + 1].current.focus();
  };

  // Handle backspace
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        inputs[idx - 1].current.focus();
      }
    }
  };

  // Submit OTP
  const handleSubmit = e => {
    e.preventDefault();
    if (otp.every(digit => digit !== "")) {
      onSubmit(otp.join(""));
    }

  };

  return (
    <ModalWrapper onClose={onClose}>
      <AuthForm
        variant="login"
        title="Enter OTP"
        fields={[
          {
            label: "",
            type: "custom",
            render: () => (
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", margin: "40px 0" }}>
                {inputs.map((ref, idx) => (
                  <div className="custom-input-wrapper small-input" style={{ width: 44 }} key={idx}>
                    <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 35.0001L1 24.5001V1.00007H34.5L43 11.2001V35.0001L10 35.0001Z" stroke="#79FFB6" />
                    </svg>
                    <input
                      type="text"
                      maxLength={1}
                      ref={ref}
                      value={otp[idx]}
                      style={{
                        width: "80%",
                        left: "10%",
                        textAlign: "center",
                        fontSize: 20,
                        letterSpacing: 2,
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "transparent",
                        border: "none",
                        color: "white",
                        outline: "none"
                      }}
                      onChange={e => handleChange(e, idx)}
                      onKeyDown={e => handleKeyDown(e, idx)}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoFocus={idx === 0}
                    />
                  </div>
                ))}
              </div>
            ),
          },
        ]}
        buttonText="Continue"
        switchText={["", ""]}
        onSwitch={() => { }}
        onSubmit={handleSubmit}
      />
    </ModalWrapper>
  );
}

export default OTP;