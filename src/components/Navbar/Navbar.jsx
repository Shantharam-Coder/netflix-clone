import react, {useEffect, useRef} from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';
import profile from '../../assets/profile_img.png';
import {logout} from '../../firebase';
function Navbar() {
    const navref = useRef();
    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY >= 80){
                navref.current.classList.add('scrolled');
            }else{
                navref.current.classList.remove('scrolled');
            }
        })
    }, []);
    return (
        <div ref={navref} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Tv shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search} alt="search_icon" className="icons"/>
                <p>Children</p>
                <img src={bell_icon} alt="bell_icon" className="icons"/>
                <div className="navbar-profile">
                    <img src={profile} alt="profile_icon" className="profile"/>
                    <img src={caret_icon} alt="caret_icon" onClick={() => {logout()}}/>
                    <div className="dropdown">
                        <p onClick={() => {logout()}}>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;