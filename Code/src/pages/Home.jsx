import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState, useEffect } from "react";
import '../page_styles/Home.css';

function HomePage(){
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    // optional: stop scroll behind modal
    useEffect(() => {
        if (showLogin || showSignup) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [showLogin, showSignup]);

    return(
        <div className="HomePage">
            <Navbar 
                onLoginClick={() => setShowLogin(true)} 
                onSignupClick={() => setShowSignup(true)}
            />
            <main>
                <HomeHero />
            </main>
            <Footer />

            {showLogin && 
                <Login 
                    onClose={() => setShowLogin(false)} 
                    onSwitch={() => {
                        setShowLogin(false);
                        setShowSignup(true);
                    }}
                />
            }

            {showSignup && 
                <Signup 
                    onClose={() => setShowSignup(false)} 
                    onSwitch={() => {
                        setShowSignup(false);
                        setShowLogin(true);
                    }}
                />
            }
        </div>
    );
}

export default HomePage;
