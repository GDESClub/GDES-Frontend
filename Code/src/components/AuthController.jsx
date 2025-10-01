import { useState } from 'react';
import ModalWrapper from '/src/components/ModalWrapper.jsx';
import Login from '/src/components/Login.jsx';
import Signup from '/src/components/Signup.jsx';
import OTPVerification from '/src/components/OTPVerification.jsx';

// This component manages the entire authentication flow inside the modal
export default function AuthModal({ onClose }) {
    const [view, setView] = useState('login'); // Can be 'login', 'signup', or 'otp'
    const [signupData, setSignupData] = useState(null); // To hold data between signup and OTP steps

    const handleOtpSent = (data) => {
        setSignupData(data); // Save the user's details
        setView('otp');      // Switch to the OTP view
    };

    const renderView = () => {
        switch (view) {
            case 'signup':
                return <Signup onSwitch={() => setView('login')} onOtpSent={handleOtpSent} />;
            case 'otp':
                return <OTPVerification userData={signupData} onVerified={onClose} />;
            case 'login':
            default:
                return <Login onSwitch={() => setView('signup')} onSubmit={onClose} />;
        }
    };

    return (
        <ModalWrapper onClose={onClose}>
            {renderView()}
        </ModalWrapper>
    );
}

