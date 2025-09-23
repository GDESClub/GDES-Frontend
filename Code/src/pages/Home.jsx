import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import '../page_styles/Home.css';

function HomePage() {
  return (
    <div className="HomePage">
      <main>
        <HomeHero />
      </main>
      <Footer />
    </div>
  );
}


export default HomePage;
