import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Login from "../components/Login";
import Signup from "../components/Signup";
import OTP from "../components/OTP";
import { useState, useEffect } from "react";
import '../page_styles/Home.css';

function HomePage() {
  const [modal, setModal] = useState(null); // 'login' | 'signup' | 'otp' | null

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <div className="HomePage">
      <Navbar 
        onLoginClick={() => setModal("login")} 
        onSignupClick={() => setModal("signup")}
      />
      <main>
        <HomeHero />
      </main>
      <Footer />

      {modal === "login" && (
        <Login 
          onClose={() => setModal(null)} 
          onSwitch={() => setModal("signup")}
        />
      )}

      {modal === "signup" && (
        <Signup 
          onClose={() => setModal(null)} 
          onSwitch={() => setModal("login")}
          onSubmit={() => setModal("otp")}
        />
      )}

      {modal === "otp" && (
        <OTP 
          onClose={() => setModal(null)} 
          onSubmit={() => setModal("login")}
        />
      )}
    </div>
  );
}

export default HomePage;
