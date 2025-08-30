import react from "react";
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecard from "../../components/Titlecard/Titlecard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="hero" className="banner-img"/>
                <div className="hero-caption">
                    <img src={hero_title} alt="hero_title" className="caption-img"/>
                    <p>In a desolate, post-apocalyptic West ravaged by famine, drought, and a deadly plague,
                        a convicted woman named Key is offered her freedom—if she can traverse a lethal
                        minefield to reach the region’s only remaining freshwater aquifer buried beneath a
                        Native American reservation. Along the way, she becomes the unlikely protector of a
                        rare child whose survival may hold the key to humanity’s future.</p>
                    <div className="hero-btns">
                        <button className="btn"><img src={play_icon} alt="play"/> play </button>
                        <button className="btn dark-btn"><img src={info_icon} alt="info"/> More info </button>
                    </div>
                    <Titlecard/>
                </div>
            </div>
            <div className="more-cards">
                <Titlecard title="Blockbuster Movies" category={"top_rated"}/>
                <Titlecard title="Only on netflix" category={"now_playing"}/>
                <Titlecard title="Upcoming" category={"upcoming"}/>
                <Titlecard title="Top picks for you" category={"popular"}/>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;