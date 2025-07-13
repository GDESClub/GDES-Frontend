import Navbar from "../components/Navbar";
import AboutSection from '../components/AboutSection';
import MembersSection from '../components/MembersSection';
import CreditsSection from '../components/CreditsSection';
import SocialLinks from '../components/SocialLinks';
import Footer from "../components/Footer";
import '../page_styles/About.css';

function AboutPage(){
    return(
        <div className="AboutPage">
            <Navbar/>
            About Page.
            <AboutSection />
            <MembersSection />
            <CreditsSection />
            <SocialLinks />
            <Footer />
        </div>
    );
}

export default AboutPage;